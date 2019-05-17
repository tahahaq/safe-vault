import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { firebaseSignIn, getFakeCaptcha } from '@/services/api';
import { getAuthority, setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import {message} from 'antd';
import UserInfo from '../pages/User/UserInfo';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(firebaseSignIn, payload);
      console.log('login resp ', response);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully.
      if (response.user) {
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let redirect = params;
        if (UserInfo.getUserData().email.length < 1) {
        UserInfo.setUserData("", response.user.email, "", "");
        UserInfo.setUID(response.user.uid);
        }
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            // alert(redirect);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      } else {
        message.error(response.message, 3);
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      // setAuthority(payload.currentAuthority);
      if (payload.user) {
        setAuthority('admin');
        return {
          ...payload,
          isSignedIn: true,
          user: payload.user,
        };
      } else {
        return {
          ...payload,
          isSignedIn: false,
          code: payload.code,
          message: payload.message,
        };
      }
    },
  },
};
