(this.webpackJsonphms=this.webpackJsonphms||[]).push([[0],{12:function(e,o,t){},13:function(e,o,t){"use strict";t.r(o);var n=t(0),a=t.n(n),l=t(2),i=t.n(l),c=(t(12),t(3)),r=t(4),s=t(6),g=t(5),m=function(e){Object(s.a)(t,e);var o=Object(g.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=o.call.apply(o,[this].concat(a))).prepareLoginButton=function(){console.log(e.refs.googleLoginBtn),e.auth2.attachClickHandler(e.refs.googleLoginBtn,{},(function(e){var o=e.getBasicProfile();console.log("Token || "+e.getAuthResponse().id_token),console.log("ID: "+o.getId()),console.log("Name: "+o.getName()),console.log("Image URL: "+o.getImageUrl()),console.log("Email: "+o.getEmail())}),(function(e){alert(JSON.stringify(e,void 0,2))}))},e.googleSDK=function(){window.googleSDKLoaded=function(){window.gapi.load("auth2",(function(){e.auth2=window.gapi.auth2.init({client_id:"424203466352-lpl1v0israd7s1ili9p6ss8aitp2time.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"profile email"}),e.prepareLoginButton()}))},function(e,o,t){var n,a=e.getElementsByTagName(o)[0];e.getElementById(t)||((n=e.createElement(o)).id=t,n.src="https://apis.google.com/js/platform.js?onload=googleSDKLoaded",a.parentNode.insertBefore(n,a))}(document,"script","google-jssdk")},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.googleSDK(),console.log("sfsfd")}},{key:"render",value:function(){return a.a.createElement("div",{className:"row mt-5"},a.a.createElement("div",{className:"col-md-12"},a.a.createElement("h2",{className:"text-left"},"Google Login Demo"),a.a.createElement("div",{className:"card mt-3"},a.a.createElement("div",{className:"card-body"},a.a.createElement("div",{className:"row mt-5 mb-5"},a.a.createElement("div",{className:"col-md-4 mt-2 m-auto "},a.a.createElement("button",{className:"loginBtn loginBtn--google",ref:"googleLoginBtn"},"Login with Google")))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,o,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.b6e30b3a.chunk.js.map