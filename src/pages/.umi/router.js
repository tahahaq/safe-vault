import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
  LoadingComponent: require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "name": "login",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Login" */'../User/Login'),
  LoadingComponent: require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/components/PageLoading/index').default,
}),
    "authority": [
      "admin",
      "user"
    ],
    "Routes": [require('../Authorized').default],
    "routes": [
      {
        "path": "/",
        "redirect": "/certificates/allcertificateslist",
        "exact": true
      },
      {
        "path": "/dashboard",
        "redirect": "/certificates/allcertificateslist",
        "exact": true
      },
      {
        "path": "/certificates",
        "name": "Certificates",
        "icon": "table",
        "routes": [
          {
            "path": "/certificates",
            "redirect": "/certificates/certificateslist",
            "exact": true
          },
          {
            "path": "/certificates/allcertificateslist",
            "name": "My Certificates",
            "icon": "ordered-list",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../List/AllCertificates'),
  LoadingComponent: require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/media/taha/70E48D47E48D1090/Paid Projects/Blockchain/upwork/File storage using azure and ethereum/safe-vault/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
