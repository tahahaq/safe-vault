(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{5:function(e,t){},6:function(e,t){},7:function(e,t){},8:function(e,t){},JAxp:function(e,t,a){e.exports={login:"antd-pro-components-login-index-login",getCaptcha:"antd-pro-components-login-index-getCaptcha",icon:"antd-pro-components-login-index-icon",other:"antd-pro-components-login-index-other",register:"antd-pro-components-login-index-register",prefixIcon:"antd-pro-components-login-index-prefixIcon",submit:"antd-pro-components-login-index-submit"}},QBZU:function(e,t,a){"use strict";a("y8nQ");var n=a("Vl3Y"),r=(a("Znn+"),a("ZTPi")),o=a("gWZ8"),i=a.n(o),c=a("2Taf"),s=a.n(c),l=a("vZ4D"),u=a.n(l),p=a("l4Ni"),m=a.n(p),g=a("ujKo"),d=a.n(g),h=a("MhPg"),v=a.n(h),f=a("q1tI"),y=a.n(f),b=(a("17x9"),a("TSYQ")),C=a.n(b),E=(a("14J3"),a("BMrR")),x=(a("+L6B"),a("2/Rp")),w=(a("jCWc"),a("kPKH")),P=(a("5NDa"),a("5rEg")),k=a("jehZ"),S=a.n(k),N=a("Y/ft"),K=a.n(N),I=a("BGR+"),T=a("JAxp"),A=a.n(T),D=(a("Pwec"),a("CtXQ")),B={UserName:{props:{size:"large",id:"userName",prefix:y.a.createElement(D["a"],{type:"user",className:A.a.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:y.a.createElement(D["a"],{type:"lock",className:A.a.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:y.a.createElement(D["a"],{type:"mobile",className:A.a.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:y.a.createElement(D["a"],{type:"mail",className:A.a.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}},G=Object(f["createContext"])(),j=G,q=n["a"].Item,L=function(e){function t(e){var a;return s()(this,t),a=m()(this,d()(t).call(this,e)),a.onGetCaptcha=function(){var e=a.props.onGetCaptcha,t=e?e():null;!1!==t&&(t instanceof Promise?t.then(a.runGetCaptchaCountDown):a.runGetCaptchaCountDown())},a.getFormItemOptions=function(e){var t=e.onChange,a=e.defaultValue,n=e.customprops,r=e.rules,o={rules:r||n.rules};return t&&(o.onChange=t),a&&(o.initialValue=a),o},a.runGetCaptchaCountDown=function(){var e=a.props.countDown,t=e||59;a.setState({count:t}),a.interval=setInterval(function(){t-=1,a.setState({count:t}),0===t&&clearInterval(a.interval)},1e3)},a.state={count:0},a}return v()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateActive,a=e.name;t&&t(a)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.count,t=this.props.form.getFieldDecorator,a=this.props,n=(a.onChange,a.customprops),r=(a.defaultValue,a.rules,a.name),o=a.getCaptchaButtonText,i=a.getCaptchaSecondText,c=(a.updateActive,a.type),s=K()(a,["onChange","customprops","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type"]),l=this.getFormItemOptions(this.props),u=s||{};if("Captcha"===c){var p=Object(I["a"])(u,["onGetCaptcha","countDown"]);return y.a.createElement(q,null,y.a.createElement(E["a"],{gutter:8},y.a.createElement(w["a"],{span:16},t(r,l)(y.a.createElement(P["a"],S()({},n,p)))),y.a.createElement(w["a"],{span:8},y.a.createElement(x["a"],{disabled:e,className:A.a.getCaptcha,size:"large",onClick:this.onGetCaptcha},e?"".concat(e," ").concat(i):o))))}return y.a.createElement(q,null,t(r,l)(y.a.createElement(P["a"],S()({},n,u))))}}]),t}(f["Component"]);L.defaultProps={getCaptchaButtonText:"captcha",getCaptchaSecondText:"second"};var O={};Object.keys(B).forEach(function(e){var t=B[e];O[e]=function(a){return y.a.createElement(j.Consumer,null,function(n){return y.a.createElement(L,S()({customprops:t.props,rules:t.rules},a,{type:e,updateActive:n.updateActive,form:n.form}))})}});var z=O,U=r["a"].TabPane,Z=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),M=function(e){function t(e){var a;return s()(this,t),a=m()(this,d()(t).call(this,e)),a.uniqueId=Z("login-tab-"),a}return v()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props.tabUtil;e.addTab(this.uniqueId)}},{key:"render",value:function(){var e=this.props.children;return y.a.createElement(U,this.props,e)}}]),t}(f["Component"]),V=function(e){return y.a.createElement(j.Consumer,null,function(t){return y.a.createElement(M,S()({tabUtil:t.tabUtil},e))})};V.typeName="LoginTab";var H=V,F=n["a"].Item,J=function(e){var t=e.className,a=K()(e,["className"]),n=C()(A.a.submit,t);return y.a.createElement(F,null,y.a.createElement(x["a"],S()({size:"large",className:n,type:"primary",htmlType:"submit"},a)))},Q=J,R=function(e){function t(e){var a;return s()(this,t),a=m()(this,d()(t).call(this,e)),a.onSwitch=function(e){a.setState({type:e});var t=a.props.onTabChange;t(e)},a.getContext=function(){var e=a.state.tabs,t=a.props.form;return{tabUtil:{addTab:function(t){a.setState({tabs:[].concat(i()(e),[t])})},removeTab:function(t){a.setState({tabs:e.filter(function(e){return e!==t})})}},form:t,updateActive:function(e){var t=a.state,n=t.type,r=t.active;r[n]?r[n].push(e):r[n]=[e],a.setState({active:r})}}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.active,r=t.type,o=a.props,i=o.form,c=o.onSubmit,s=n[r];i.validateFields(s,{force:!0},function(e,t){c(e,t)})},a.state={type:e.defaultActiveKey,tabs:[],active:{}},a}return v()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,o=this.state,i=o.type,c=o.tabs,s=[],l=[];return y.a.Children.forEach(a,function(e){e&&("LoginTab"===e.type.typeName?s.push(e):l.push(e))}),y.a.createElement(j.Provider,{value:this.getContext()},y.a.createElement("div",{className:C()(t,A.a.login)},y.a.createElement(n["a"],{onSubmit:this.handleSubmit},c.length?y.a.createElement(y.a.Fragment,null,y.a.createElement(r["a"],{animated:!1,className:A.a.tabs,activeKey:i,onChange:this.onSwitch},s),l):a)))}}]),t}(f["Component"]);R.defaultProps={className:"",defaultActiveKey:"",onTabChange:function(){},onSubmit:function(){}},R.Tab=H,R.Submit=Q,Object.keys(z).forEach(function(e){R[e]=z[e]});t["a"]=n["a"].create()(R)},Y5yc:function(e,t,a){"use strict";a.r(t),function(e){a("+L6B");var n,r,o,i=a("2/Rp"),c=(a("5NDa"),a("5rEg")),s=a("p0pE"),l=a.n(s),u=a("2Taf"),p=a.n(u),m=a("vZ4D"),g=a.n(m),d=a("l4Ni"),h=a.n(d),v=a("ujKo"),f=a.n(v),y=a("MhPg"),b=a.n(y),C=a("q1tI"),E=a.n(C),x=a("MuoO"),w=a("34ay"),P=a("QBZU"),k=(a("LLXN"),a("w2qy"),a("3s30")),S=a("tnHP"),N=P["a"].Submit,K=(n=Object(x["connect"])(function(e){var t=e.login,a=e.loading;return{login:t,submitting:a.effects["login/login"],submitBlockStackLogin:a.effects["login/login"]}}),n((o=function(t){function a(t){var n;return p()(this,a),n=h()(this,f()(a).call(this,t)),n.state={keyPlaceHolder:"enter your existing private key here.",generateNewPrivateKey:!1,privateKey:"",loading:!1,type:"account"},n.onInputPrivateKey=function(e){event.target.value.length>0&&(console.log("PK :",event.target.value),n.setState({privateKey:event.target.value})),Object(w["b"])("admin")},n.onClickGeneratePrivateKey=function(){var e=k.generate();console.log("privateKey: "+e.getPrivateKeyString()),console.log("address: "+e.getAddressString()),n.setState({generateNewPrivateKey:!0})},n.handleSubmit=function(e){n.state.type;var t={userName:"abc@gmail.com",password:"password"};if(e){var a=n.props.dispatch;n.setState({loading:!0}),console.log("Handling dispatch."),a({type:"login/login",payload:l()({},t,{type:"account"})})}else console.log("Error occured.",e)},n.onClickLogin=function(){var t=S.isValidPrivate(e.from(n.state.privateKey,"utf8")),a={userName:"abc@gmail.com",password:"password"},r=n.props.dispatch,o=n.state.type;console.log("Check key: ",n.state.privateKey),console.log("Valid PK? ",t),n.setState({loading:!0}),r({type:"login/login",payload:l()({},a,{type:o})})},n}return b()(a,t),g()(a,[{key:"render",value:function(){var e=this.props,t=(e.login,e.submitting,this.state);t.type,t.autoLogin;return E.a.createElement("div",{className:"example-input",style:{width:"100%",margin:"20px auto"}},this.state.generateNewPrivateKey?E.a.createElement("div",null,E.a.createElement("h3",{style:{textAlign:"center"}},"Enter your new private key here."),E.a.createElement("div",{style:{width:"40%",margin:"auto"}},E.a.createElement(c["a"],{size:"large",onChange:this.onInputPrivateKey}))):E.a.createElement("div",null,E.a.createElement("h3",{style:{textAlign:"center"}},"Already have a private key?"),E.a.createElement("div",{style:{width:"40%",margin:"auto"}},E.a.createElement(c["a"],{size:"large",placeholder:this.state.keyPlaceHolder,onChange:this.onInputPrivateKey}),E.a.createElement("br",null),E.a.createElement("br",null),E.a.createElement(i["a"],{type:"primary",icon:"download",onClick:this.onClickGeneratePrivateKey},"Generate a private key."))),E.a.createElement("div",{style:{width:"40%",margin:"auto"}},E.a.createElement("br",null),E.a.createElement(N,{type:"primary",loading:this.state.loading,onClick:this.handleSubmit},"Login")))}}]),a}(C["Component"]),r=o))||r);t["default"]=K}.call(this,a("HDXh").Buffer)},w2qy:function(e,t,a){e.exports={main:"antd-pro-pages-user-login-main",icon:"antd-pro-pages-user-login-icon",other:"antd-pro-pages-user-login-other",register:"antd-pro-pages-user-login-register"}}}]);