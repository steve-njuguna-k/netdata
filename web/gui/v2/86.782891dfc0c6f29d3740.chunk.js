!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="31ddf25e-d030-4aaa-acaf-a7520349662e",e._sentryDebugIdIdentifier="sentry-dbid-31ddf25e-d030-4aaa-acaf-a7520349662e")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"bc401569f0a5aac35c96315fba57182a8ad450f2"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[86],{80606:function(e,t,n){"use strict";n.d(t,{F:function(){return c},I:function(){return i}});var r=n(4480),o=n(78401),a=(0,r.cn)({key:"cookiePreferences",default:(0,o.O)()}),i=function(){return(0,r.sJ)(a)},c=function(){return(0,r.FV)(a)}},38086:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(45987),o=n(29439),a=(n(92222),n(9170),n(66992),n(41539),n(88674),n(34668),n(78783),n(33948),n(21249),n(57640),n(9924),n(69826),n(31672),n(2490),n(59461),n(26699),n(32023),n(74916),n(64765),n(15306),n(67294)),i=n(89250),c=n(17563),s=n(26398),u=n(62200),d=n(13477),f=n(25819),l=n(93017),g=n(76201),p=n(74059),w=n(78401),v=n(80606),h=function(){var e;if(null!==(e=window.posthog)&&void 0!==e&&e.__loaded){var t=(new Date).toISOString();window.posthog.register_once({event_source:"cloud",posthog_first_seen_at:t,posthog_first_distinct_id:"get_distinct_id"in window.posthog&&window.posthog.get_distinct_id()})}},_=function(){return(0,a.useEffect)(h,[])},y=n(7335),m=n(18761),b=n(64358),E=n(32950),k=n(78710),I=["cloudRoute","redirect_uri"],O=function(e){var t=e.errorRetry,n=e.token,r=e.redirectUri,o=c.parseUrl(decodeURIComponent(t)),i=o.url,s=o.query.redirect_uri,u=(0,a.useRef)(!1);return u.current||(u.current=!0,window.location="".concat(i,"?token=").concat(n,"&redirect_uri=").concat(s||r)),null},S=function(){var e=(0,d.Iy)("isLoaded"),t=(0,d.Iy)("isAnonymous");(0,g.Z)(),_(),function(){var e=(0,d.Iy)("id"),t=(0,d.Iy)("name"),n=(0,d.Iy)("email"),r=(0,d.Iy)("createdAt"),o=(0,d.Iy)("verifiedEmail"),i=(0,d.Iy)("avatarUrl"),c=(0,p.GM)("loaded"),s=(0,p.GM)("ids"),u=(0,v.I)();(0,a.useEffect)((function(){e&&c&&(0,w.Z)({avatar:i,createdAt:r,email:n,id:e,name:t,spacesCount:s.length,verifiedEmail:o})}),[e,c,u]),(0,a.useEffect)((function(){var e;if(null!==(e=window.posthog)&&void 0!==e&&e.__loaded)try{window.posthog.onFeatureFlags((function(){window.posthog.isFeatureEnabled&&window.posthog.isFeatureEnabled("user-age-less-than-7d")&&window.posthog.startSessionRecording()}))}catch(t){}}),[])}();var n=(0,i.bS)("/sign-in/*"),h=(0,i.bS)("/sign-up/*"),S=!!n||!!h,A=function(){var e=(0,l.Z)(),t=(0,o.Z)(e,2)[1],n=(0,y.DH)();return(0,a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.origin,o=e.id,a=e.name;if(r){var i=decodeURIComponent(o),c=decodeURIComponent(r);(0,m.kq)(o).then((function(e){var r=e.data,o=void 0===r?[]:r;return n(i,c,a),o.length?s.Z.get(u.MC).then((function(e){var t=e.data;return Promise.any(t.map((function(e){return s.Z.get((0,b.W)({spaceId:e.id})).then((function(t){var n=t.data;return Promise.any(n.map((function(t){return(0,f.Fz)({roomId:t.id,spaceId:e.id}).then((function(n){var r=n.nodes.find((function(e){var t=e.id;return o.includes(t)}));if(!r)throw new Error("can't find matching node");var a=window.location,i=a.protocol,c=a.host;return"".concat(i,"//").concat(c,"/spaces/").concat(e.slug,"/rooms/").concat(t.slug,"/nodes/").concat(r.id)}))})))}))})))})).catch((function(){})):(0,m.YZ)(i).then((function(e){var n=e.data.claimed;throw t(n?{errorMsgKey:"ErrForbidden",errorMessage:"You tried to access this Node on Netdata and you don't have access to it. Please contact your Space admin to give you access to it."}:{errorMsgKey:"ErrForbidden",errorMessage:"This Node isn't connected to Netdata. Please connect it, if you have permission for it, or contact your Space admin."}),"no access"}))})).then((function(e){e&&setTimeout(location.assign(e))})).catch((function(){}))}}),[])}(),j=(0,E.Z)();if(!e||j.isFetching||j.hasAccess&&!S)return null;var C=window.location,P=C.pathname,R=C.search,Z=C.hash,F=c.parse(Z),D=F.error_retry,U=F.token,M=c.parse(R),N=M.cloudRoute,T=M.redirect_uri,x=(0,r.Z)(M,I);if(!t&&D)return a.createElement(O,{errorRetry:D,token:U,redirectUri:T});if(!t&&S){if(N){var L=N.includes("join-callback")?decodeURI(N):N,G=Array.isArray(L)?L[0]:L;return a.createElement(i.Fg,{replace:!0,to:G})}return T?(A(x),window.location.replace(decodeURIComponent(T)),null):a.createElement(i.Fg,{replace:!0,to:"/spaces"})}if(k.ZP)return null;if(t&&!S){var J=Z.includes("join-callback")?Z:encodeURIComponent(Z),Y="".concat(R).concat(R?"&":"?","cloudRoute=").concat(P);return a.createElement(i.Fg,{replace:!0,to:{pathname:"/sign-in",search:Y,hash:J}})}return null}},78401:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});n(47941),n(82526),n(57327),n(88449),n(59849),n(38880),n(15581),n(34514),n(54747),n(49337),n(33321),n(69070);var r=n(4942),o=n(29439),a=(n(85827),n(41539),n(25387),n(2490),n(72608),n(69720),n(26699),n(32023),n(52971)),i=n(85456);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(){return Object.entries(a.Ew).reduce((function(e,t){var n=(0,o.Z)(t,2),a=n[0],c=n[1];return s(s({},e),{},(0,r.Z)({},a,(0,i.gs)(c.id)))}),{})};t.Z=function(e){var t=e.avatar,n=e.createdAt,r=e.email,o=e.id,c=e.name,s=e.spacesCount,u=e.verifiedEmail;if(window.envSettings.tracking&&(!r||!r.includes("@netdata.msdc.co"))&&(!o||"00000000-0000-0000-0000-000000000000"!==o)&&(!r||!r.includes("anonymous@netdata.cloud"))){var d,f=new Date,l=f.toISOString(),g=new Date(n),p=Math.floor((f-g)/864e5);if((0,i.gs)(a.Ew.analyticsCookies.id))window.dataLayer&&window.dataLayer.push({event:"UserInfoAvailable",user_id:o,userIdentifier:o,userName:c,userEmail:r,userAccountCreatedAt:n,userAccountCreatedDaysAgo:p,userAvatarURL:t,userEmailVerified:u,spacesCount:s}),window.gtag&&window.gtag("config","G-J69Z2JCTFB",{user_id:o}),null!==(d=window.posthog)&&void 0!==d&&d.__loaded&&(window.posthog.identify(o),window.posthog.people.set({email:r||"unknown email",name:c,netdata_cloud_account_created_at:n,netdata_cloud_account_created_days_ago:p}),window.posthog.register({netdata_cloud_account_created_days_ago:p}),window.posthog.register_once({event_source:"cloud",netdata_cloud_account_created_at:n,netdata_cloud_account_email:r||"unknown email",netdata_cloud_account_id:o,netdata_cloud_signed_in_at:l}))}}},11060:function(e,t,n){var r=n(1702),o=Error,a=r("".replace),i=String(o("zxcasd").stack),c=/\n\s*at [^:]*:[^\n]*/,s=c.test(i);e.exports=function(e,t){if(s&&"string"==typeof e&&!o.prepareStackTrace)for(;t--;)e=a(e,c,"");return e}},5392:function(e,t,n){var r=n(68880),o=n(11060),a=n(22914),i=Error.captureStackTrace;e.exports=function(e,t,n,c){a&&(i?i(e,t):r(e,"stack",o(n,c)))}},22914:function(e,t,n){var r=n(47293),o=n(79114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},58340:function(e,t,n){var r=n(70111),o=n(68880);e.exports=function(e,t){r(t)&&"cause"in t&&o(e,"cause",t.cause)}},56277:function(e,t,n){var r=n(41340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},56967:function(e,t,n){"use strict";var r=n(82109),o=n(47976),a=n(79518),i=n(27674),c=n(99920),s=n(70030),u=n(68880),d=n(79114),f=n(58340),l=n(5392),g=n(20408),p=n(56277),w=n(5112)("toStringTag"),v=Error,h=[].push,_=function(e,t){var n,r=o(y,this);i?n=i(v(),r?a(this):y):(n=r?this:s(y),u(n,w,"Error")),void 0!==t&&u(n,"message",p(t)),l(n,_,n.stack,1),arguments.length>2&&f(n,arguments[2]);var c=[];return g(e,h,{that:c}),u(n,"errors",c),n};i?i(_,v):c(_,v,{name:!0});var y=_.prototype=s(v.prototype,{constructor:d(1,_),message:d(1,""),name:d(1,"AggregateError")});r({global:!0,constructor:!0,arity:2},{AggregateError:_})},9170:function(e,t,n){n(56967)},34668:function(e,t,n){"use strict";var r=n(82109),o=n(46916),a=n(19662),i=n(35005),c=n(78523),s=n(12534),u=n(20408),d=n(80612),f="No one promise resolved";r({target:"Promise",stat:!0,forced:d},{any:function(e){var t=this,n=i("AggregateError"),r=c.f(t),d=r.resolve,l=r.reject,g=s((function(){var r=a(t.resolve),i=[],c=0,s=1,g=!1;u(e,(function(e){var a=c++,u=!1;s++,o(r,t,e).then((function(e){u||g||(g=!0,d(e))}),(function(e){u||g||(u=!0,i[a]=e,--s||l(new n(i,f)))}))})),--s||l(new n(i,f))}));return g.error&&l(g.value),r.promise}})}}]);