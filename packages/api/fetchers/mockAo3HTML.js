module.exports = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
<script>window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","errorBeacon":"bam-cell.nr-data.net","licenseKey":"f2edcff25e","applicationID":"190034","transactionName":"dgwMEkpfWVsHERpFWUcIEUlRXlFSGg==","queueTime":0,"applicationTime":183,"agent":""}</script>
<script>(window.NREUM||(NREUM={})).loader_config={xpid:"VQcCWV9RGwIJVFFRAw==",licenseKey:"f2edcff25e",applicationID:"190034"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(t){try{c.console&&console.log(t)}catch(e){}}var i,o=t("ee"),a=t(24),c={};try{i=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(c.console=!0,i.indexOf("dev")!==-1&&(c.dev=!0),i.indexOf("nr_dev")!==-1&&(c.nrDev=!0))}catch(s){}c.nrDev&&o.on("internal-error",function(t){r(t.stack)}),c.dev&&o.on("fn-err",function(t,e,n){r(n.stack)}),c.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(c,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,c){try{p?p-=1:i(c||new UncaughtException(t,e,n),!0)}catch(f){try{o("ierr",[f,s.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function i(t,e){var n=e?null:s.now();o("err",[t,n])}var o=t("handle"),a=t(25),c=t("ee"),s=t("loader"),f=t("gos"),u=window.onerror,d=!1,l="nr@seenError",p=0;s.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(9),t(8),"addEventListener"in window&&t(5),s.xhrWrappable&&t(10),d=!0)}c.on("fn-start",function(t,e,n){d&&(p+=1)}),c.on("fn-err",function(t,e,n){d&&!n[l]&&(f(n,l,function(){return!0}),this.thrown=!0,i(n))}),c.on("fn-end",function(){d&&!this.thrown&&p>0&&(p-=1)}),c.on("internal-error",function(t){o("ierr",[t,s.now(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var i=t("ee"),o=t("handle"),a=t(9),c=t(8),s="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",g="pushState",y=t("loader");y.features.stn=!0,t(7),"addEventListener"in window&&t(5);var x=NREUM.o.EV;i.on(m,function(t,e){var n=t[0];n instanceof x&&(this.bstStart=y.now())}),i.on(w,function(t,e){var n=t[0];n instanceof x&&o("bst",[n,e,this.bstStart,y.now()])}),a.on(m,function(t,e,n){this.bstStart=y.now(),this.bstType=n}),a.on(w,function(t,e){o(v,[e,this.bstStart,y.now(),this.bstType])}),c.on(m,function(){this.bstStart=y.now()}),c.on(w,function(t,e){o(v,[e,this.bstStart,y.now(),"requestAnimationFrame"])}),i.on(g+p,function(t){this.time=y.now(),this.startPath=location.pathname+location.hash}),i.on(g+h,function(t){o("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+s]?window.performance[f](u,function(t){o(d,[window.performance.getEntriesByType(l)]),window.performance["c"+s]()},!1):window.performance[f]("webkit"+u,function(t){o(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+s]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&i(e)}function i(t){c.inPlace(t,[u,d],"-",o)}function o(t,e){return t[1]}var a=t("ee").get("events"),c=t("wrap-function")(a,!0),s=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(i(window),i(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1],r=s(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?c(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],6:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=o(arguments),e={};i.emit(n+"before-start",[t],e);var a;e[m]&&e[m].dt&&(a=e[m].dt);var c=r.apply(this,t);return i.emit(n+"start",[t,a],c),c.then(function(t){return i.emit(n+"end",[null,t],c),t},function(t){throw i.emit(n+"end",[t],c),t})})}var i=t("ee").get("fetch"),o=t(25),a=t(24);e.exports=i;var c=window,s="fetch-",f=s+"body-",u=["arrayBuffer","blob","json","text","formData"],d=c.Request,l=c.Response,p=c.fetch,h="prototype",m="nr@context";d&&l&&p&&(a(u,function(t,e){r(d[h],e,f),r(l[h],e,f)}),r(c,"fetch",s),i.on(s+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),i.emit(s+"done",[null,e],n)}else i.emit(s+"done",[t],n)}))},{}],7:[function(t,e,n){var r=t("ee").get("history"),i=t("wrap-function")(r);e.exports=r;var o=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;o&&o.pushState&&o.replaceState&&(a=o),i.inPlace(a,["pushState","replaceState"],"-")},{}],8:[function(t,e,n){var r=t("ee").get("raf"),i=t("wrap-function")(r),o="equestAnimationFrame";e.exports=r,i.inPlace(window,["r"+o,"mozR"+o,"webkitR"+o,"msR"+o],"raf-"),r.on("raf-start",function(t){t[0]=i(t[0],"fn-")})},{}],9:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function i(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var o=t("ee").get("timer"),a=t("wrap-function")(o),c="setTimeout",s="setInterval",f="clearTimeout",u="-start",d="-";e.exports=o,a.inPlace(window,[c,"setImmediate"],c+d),a.inPlace(window,[s],s+d),a.inPlace(window,[f,"clearImmediate"],f+d),o.on(s+u,r),o.on(c+u,i)},{}],10:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",c)}function i(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,g,"fn-",c)}function o(t){y.push(t),h&&(b?b.then(a):w?w(a):(E=-E,R.data=E))}function a(){for(var t=0;t<y.length;t++)r([],y[t]);y.length&&(y=[])}function c(t,e){return e}function s(t,e){for(var n in t)e[n]=t[n];return e}t(5);var f=t("ee"),u=f.get("xhr"),d=t("wrap-function")(u),l=NREUM.o,p=l.XHR,h=l.MO,m=l.PR,w=l.SI,v="readystatechange",g=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],y=[];e.exports=u;var x=window.XMLHttpRequest=function(t){var e=new p(t);try{u.emit("new-xhr",[e],e),e.addEventListener(v,i,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(s(p,x),x.prototype=p.prototype,d.inPlace(x.prototype,["open","send"],"-xhr-",c),u.on("send-xhr-start",function(t,e){r(t,e),o(e)}),u.on("open-xhr-start",r),h){var b=m&&m.resolve();if(!w&&!m){var E=1,R=document.createTextNode(E);new h(a).observe(R,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===v||a()})},{}],11:[function(t,e,n){function r(t){if(!c(t))return null;var e=window.NREUM;if(!e.loader_config)return null;var n=(e.loader_config.accountID||"").toString()||null,r=(e.loader_config.agentID||"").toString()||null,f=(e.loader_config.trustKey||"").toString()||null;if(!n||!r)return null;var h=p.generateSpanId(),m=p.generateTraceId(),w=Date.now(),v={spanId:h,traceId:m,timestamp:w};return(t.sameOrigin||s(t)&&l())&&(v.traceContextParentHeader=i(h,m),v.traceContextStateHeader=o(h,w,n,r,f)),(t.sameOrigin&&!u()||!t.sameOrigin&&s(t)&&d())&&(v.newrelicHeader=a(h,m,w,n,r,f)),v}function i(t,e){return"00-"+e+"-"+t+"-01"}function o(t,e,n,r,i){var o=0,a="",c=1,s="",f="";return i+"@nr="+o+"-"+c+"-"+n+"-"+r+"-"+t+"-"+a+"-"+s+"-"+f+"-"+e}function a(t,e,n,r,i,o){var a="btoa"in window&&"function"==typeof window.btoa;if(!a)return null;var c={v:[0,1],d:{ty:"Browser",ac:r,ap:i,id:t,tr:e,ti:n}};return o&&r!==o&&(c.d.tk=o),btoa(JSON.stringify(c))}function c(t){return f()&&s(t)}function s(t){var e=!1,n={};if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(n=NREUM.init.distributed_tracing),t.sameOrigin)e=!0;else if(n.allowed_origins instanceof Array)for(var r=0;r<n.allowed_origins.length;r++){var i=h(n.allowed_origins[r]);if(t.hostname===i.hostname&&t.protocol===i.protocol&&t.port===i.port){e=!0;break}}return e}function f(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.enabled}function u(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.exclude_newrelic_header}function d(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&NREUM.init.distributed_tracing.cors_use_newrelic_header!==!1}function l(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.cors_use_tracecontext_headers}var p=t(21),h=t(13);e.exports={generateTracePayload:r,shouldGenerateTrace:c}},{}],12:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<l;r++)t.removeEventListener(d[r],this.listener,!1);e.aborted||(n.duration=a.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==e.status&&(e.status=0):o(this,t),n.cbTime=this.cbTime,u.emit("xhr-done",[t],t),c("xhr",[e,n,this.startTime]))}}function i(t,e){var n=s(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.parsedOrigin=s(e),t.sameOrigin=t.parsedOrigin.sameOrigin}function o(t,e){t.params.status=e.status;var n=w(e,t.lastSize);if(n&&(t.metrics.rxSize=n),t.sameOrigin){var r=e.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var a=t("loader");if(a.xhrWrappable){var c=t("handle"),s=t(13),f=t(11).generateTracePayload,u=t("ee"),d=["load","error","abort","timeout"],l=d.length,p=t("id"),h=t(17),m=t(16),w=t(14),v=window.XMLHttpRequest;a.features.xhr=!0,t(10),t(6),u.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,e.loadCaptureCalled=!1,t.addEventListener("load",function(n){o(e,t)},!1),h&&(h>34||h<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),u.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),u.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var n=f(this.parsedOrigin);if(n){var r=!1;n.newrelicHeader&&(e.setRequestHeader("newrelic",n.newrelicHeader),r=!0),n.traceContextParentHeader&&(e.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&e.setRequestHeader("tracestate",n.traceContextStateHeader),r=!0),r&&(this.dt=n)}}),u.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],i=this;if(n&&r){var o=m(r);o&&(n.txSize=o)}this.startTime=a.now(),this.listener=function(t){try{"abort"!==t.type||i.loadCaptureCalled||(i.params.aborted=!0),("load"!==t.type||i.called===i.totalCbs&&(i.onloadCalled||"function"!=typeof e.onload))&&i.end(e)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}};for(var c=0;c<l;c++)e.addEventListener(d[c],this.listener,!1)}),u.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),u.on("xhr-load-added",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),u.on("xhr-load-removed",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),u.on("addEventListener-end",function(t,e){e instanceof v&&"load"===t[0]&&u.emit("xhr-load-added",[t[1],t[2]],e)}),u.on("removeEventListener-end",function(t,e){e instanceof v&&"load"===t[0]&&u.emit("xhr-load-removed",[t[1],t[2]],e)}),u.on("fn-start",function(t,e,n){e instanceof v&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),u.on("fn-end",function(t,e){this.xhrCbStart&&u.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)}),u.on("fetch-before-start",function(t){function e(t,e){var n=!1;return e.newrelicHeader&&(t.set("newrelic",e.newrelicHeader),n=!0),e.traceContextParentHeader&&(t.set("traceparent",e.traceContextParentHeader),e.traceContextStateHeader&&t.set("tracestate",e.traceContextStateHeader),n=!0),n}var n,r=t[1]||{};"string"==typeof t[0]?n=t[0]:t[0]&&t[0].url?n=t[0].url:window.URL&&t[0]&&t[0]instanceof URL&&(n=t[0].href),n&&(this.parsedOrigin=s(n),this.sameOrigin=this.parsedOrigin.sameOrigin);var i=f(this.parsedOrigin);if(i&&(i.newrelicHeader||i.traceContextParentHeader))if("string"==typeof t[0]||window.URL&&t[0]&&t[0]instanceof URL){var o={};for(var a in r)o[a]=r[a];o.headers=new Headers(r.headers||{}),e(o.headers,i)&&(this.dt=i),t.length>1?t[1]=o:t.push(o)}else t[0]&&t[0].headers&&e(t[0].headers,i)&&(this.dt=i)})}},{}],13:[function(t,e,n){var r={};e.exports=function(t){if(t in r)return r[t];var e=document.createElement("a"),n=window.location,i={};e.href=t,i.port=e.port;var o=e.href.split("://");!i.port&&o[1]&&(i.port=o[1].split("/")[0].split("@").pop().split(":")[1]),i.port&&"0"!==i.port||(i.port="https"===o[0]?"443":"80"),i.hostname=e.hostname||n.hostname,i.pathname=e.pathname,i.protocol=o[0],"/"!==i.pathname.charAt(0)&&(i.pathname="/"+i.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===n.protocol,c=e.hostname===document.domain&&e.port===n.port;return i.sameOrigin=a&&(!e.hostname||c),"/"===i.pathname&&(r[t]=i),i}},{}],14:[function(t,e,n){function r(t,e){var n=t.responseType;return"json"===n&&null!==e?e:"arraybuffer"===n||"blob"===n||"json"===n?i(t.response):"text"===n||""===n||void 0===n?i(t.responseText):void 0}var i=t(16);e.exports=r},{}],15:[function(t,e,n){function r(){}function i(t,e,n){return function(){return o(t,[f.now()].concat(c(arguments)),e?null:this,n),e?void 0:this}}var o=t("handle"),a=t(24),c=t(25),s=t("ee").get("tracer"),f=t("loader"),u=NREUM;"undefined"==typeof window.newrelic&&(newrelic=u);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",p=l+"ixn-";a(d,function(t,e){u[e]=i(l+e,!0,"api")}),u.addPageAction=i(l+"addPageAction",!0),u.setCurrentRouteName=i(l+"routeName",!0),e.exports=newrelic,u.interaction=function(){return(new r).get()};var h=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(p+"tracer",[f.now(),t,n],r),function(){if(s.emit((i?"":"no-")+"fn-start",[f.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw s.emit("fn-err",[arguments,this,t],n),t}finally{s.emit("fn-end",[f.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){h[e]=i(p+e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),o("err",[t,f.now(),!1,e])}},{}],16:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],17:[function(t,e,n){var r=0,i=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);i&&(r=+i[1]),e.exports=r},{}],18:[function(t,e,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,c=t(26);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],19:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],20:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?d("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&d("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||d("cls",[t])})}function a(t){if(t instanceof h&&!w){var e=Math.round(t.timeStamp),n={type:t.type};e<=l.now()?n.fid=l.now()-e:e>l.offset&&e<=Date.now()?(e-=l.offset,n.fid=l.now()-e):e=l.now(),w=!0,d("timing",["fi",e,n])}}function c(t){d("pageHide",[l.now(),t])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var s,f,u,d=t("handle"),l=t("loader"),p=t(23),h=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){s=new PerformanceObserver(r);try{s.observe({entryTypes:["paint"]})}catch(m){}f=new PerformanceObserver(i);try{f.observe({entryTypes:["largest-contentful-paint"]})}catch(m){}u=new PerformanceObserver(o);try{u.observe({type:"layout-shift",buffered:!0})}catch(m){}}if("addEventListener"in document){var w=!1,v=["click","keydown","mousedown","pointerdown","touchstart"];v.forEach(function(t){document.addEventListener(t,a,!1)})}p(c)}},{}],21:[function(t,e,n){function r(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var i,o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",c=0;c<o.length;c++)i=o[c],"x"===i?a+=t().toString(16):"y"===i?(i=3&t()|8,a+=i.toString(16)):a+=i;return a}function i(){return a(16)}function o(){return a(32)}function a(t){function e(){return n?15&n[r++]:16*Math.random()|0}var n=null,r=0,i=window.crypto||window.msCrypto;i&&i.getRandomValues&&Uint8Array&&(n=i.getRandomValues(new Uint8Array(31)));for(var o=[],a=0;a<t;a++)o.push(e().toString(16));return o.join("")}e.exports={generateUuid:r,generateSpanId:i,generateTraceId:o}},{}],22:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,s=c.match(a);s&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=s[1])}e.exports={agent:i,version:o,match:r}},{}],23:[function(t,e,n){function r(t){function e(){t(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,e,!1)}e.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],24:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],25:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],26:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?f(t,s,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!p.aborted||o){t&&a&&t(n,r,i);for(var c=e(i),s=m(n),f=s.length,u=0;u<f;u++)s[u].apply(c,r);var l=d[y[n]];return l&&l.push([x,n,r,c]),c}}function o(t,e){g[t]=m(t).concat(e)}function h(t,e){var n=g[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return g[t]||[]}function w(t){return l[t]=l[t]||i(n)}function v(t,e){u(t,function(t,n){e=e||"feature",y[n]=e,e in d||(d[e]=[])})}var g={},y={},x={on:o,addEventListener:o,removeEventListener:h,emit:n,get:w,listeners:m,context:e,buffer:v,abort:c,aborted:!1};return x}function o(t){return f(t,s,a)}function a(){return new r}function c(){(d.api||d.feature)&&(p.aborted=!0,d=p.backlog={})}var s="nr@context",f=t("gos"),u=t(24),d={},l={},p=e.exports=i();e.exports.getOrSetContext=o,p.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!E++){var t=b.info=NREUM.info,e=p.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();s(y,function(e,n){t[e]||(t[e]=n)});var n=a();c("mark",["onload",n+b.offset],null,"api"),c("timing",["load",n]);var r=p.createElement("script");r.src="https://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===p.readyState&&o()}function o(){c("mark",["domContent",a()+b.offset],null,"api")}var a=t(18),c=t("handle"),s=t(24),f=t("ee"),u=t(22),d=t(19),l=window,p=l.document,h="addEventListener",m="attachEvent",w=l.XMLHttpRequest,v=w&&w.prototype;if(d(l.location)){NREUM.o={ST:setTimeout,SI:l.setImmediate,CT:clearTimeout,XHR:w,REQ:l.Request,EV:l.Event,PR:l.Promise,MO:l.MutationObserver};var g=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1208.min.js"},x=w&&v&&v[h]&&!/CriOS/.test(navigator.userAgent),b=e.exports={offset:a.getLastTimestamp(),now:a,origin:g,features:{},xhrWrappable:x,userAgent:u};t(15),t(20),p[h]?(p[h]("DOMContentLoaded",o,!1),l[h]("load",r,!1)):(p[m]("onreadystatechange",i),l[m]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var E=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,s,f){function nrWrapper(){var o,a,u,l;try{a=this,o=d(arguments),u="function"==typeof r?r(o,a):r||{}}catch(p){i([p,"",[o,a,s],u],t)}c(n+"start",[o,a,s],u,f);try{return l=e.apply(a,o)}catch(h){throw c(n+"err",[o,a,h],u,f),h}finally{c(n+"end",[o,a,l],u,f)}}return a(e)?e:(n||(n=""),nrWrapper[l]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var c,s,f,u="-"===r.charAt(0);for(f=0;f<e.length;f++)s=e[f],c=t[s],a(c)||(t[s]=n(c,u?s+r:r,i,s,o))}function c(n,r,o,a){if(!h||e){var c=h;h=!0;try{t.emit(n,r,o,e,a)}catch(s){i([s,n,r,o],t)}h=c}}return t||(t=u),n.inPlace=r,n.flag=l,n}function i(t,e){e||(e=u);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)p.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[l])}function c(t,e){var n=e(t);return n[l]=t,o(t,n,u),n}function s(t,e,n){var r=t[e];t[e]=c(r,n)}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var u=t("ee"),d=t(25),l="nr@original",p=Object.prototype.hasOwnProperty,h=!1;e.exports=r,e.exports.wrapFunction=c,e.exports.wrapInPlace=s,e.exports.argsToArray=f},{}]},{},["loader",2,12,4,3]);</script>
    <meta name="keywords" content="fanfiction, transformative works, otw, fair use, archive"/>
    <meta name="language" content="en-US"/>
    <meta name="subject" content="fandom"/>
    <meta name="description" content="An Archive of Our Own, a project of the
    Organization for Transformative Works"/>
    <meta name="distribution" content="GLOBAL"/>
    <meta name="classification" content="transformative works"/>
    <meta name="author" content="Organization for Transformative Works"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>
          Kataang Week 2020 - Works
        |
        Archive of Our Own
    </title>

    <link rel="stylesheet" type="text/css" media="screen" href="/stylesheets/site/2.0/A.01-core.css+02-elements.css+03-region-header.css+04-region-dashboard.css+05-region-main.css+06-region-footer.css+07-interactions.css+08-actions.css+09-roles-states.css+10-types-groups.css+11-group-listbox.css+12-group-meta.css+13-group-blurb.css+14-group-preface.css+15-group-comments.css+16-zone-system.css+17-zone-home.css+18-zone-searchbrowse.css+19-zone-tags.css+20-zone-translation.css+21-userstuff.css+22-system-messages.css,Mcc.YIzy2FHSCx.css.pagespeed.cf.JiR2hT5NxR.css"/>























<style media="only screen and (max-width: 62em), handheld">#dashboard{clear:both;float:none;margin:1% 3.5%;max-width:100%;padding:0;width:auto}#dashboard,#dashboard.own{border-bottom:10px solid #900;border-top:10px solid #900;padding:.5em 0;border-radius:.25em}#dashboard ul{border:none;display:inline;padding:0;text-align:left}#dashboard li{display:inline}#dashboard a,#dashboard span{display:inline-block;margin:.25em 0}#dashboard .secondary{background:#eee;padding:.375em 0 .625em;box-shadow:inset 2px 2px 5px #bbb}#dashboard .secondary a{margin:.125em 0}#dashboard .landmark{clear:none;float:left}#main,#main.dashboard{float:none;margin:auto;padding-left:3.5%;padding-right:3.5%;width:auto}.logged-in .splash>.module{width:48.5%}.logged-in .splash > div:nth-of-type(odd) {margin-left:0;margin-right:1.5%}.logged-in .splash > div:nth-of-type(even) {margin-left:1.5%;margin-right:0}form.filters{width:auto;min-width:23%;max-width:24%}.filters fieldset{margin-right:0}form.filters dl{margin-left:.25em;margin-right:.25em}#workskin{margin:auto 1.5%}</style>
<link rel="stylesheet" type="text/css" media="only screen and (max-width: 42em), handheld" href="/stylesheets/site/2.0/A.26-media-narrow.css.pagespeed.cf.8L0d7x-op8.css"/>
<link rel="stylesheet" type="text/css" media="speech" href="/stylesheets/site/2.0/A.27-media-aural.css.pagespeed.cf.Ybb8bLK5Um.css"/>
<link rel="stylesheet" type="text/css" media="print" href="/stylesheets/site/2.0/A.28-media-print.css.pagespeed.cf.ry3YZtf8Cz.css"/>
<!--[if lte IE 8]><link rel="stylesheet" type="text/css" media="screen" href="/stylesheets/site/2.0/29-role-ie8_or_lower.css" /><![endif]-->
<!--[if IE 5]><link rel="stylesheet" type="text/css" media="screen" href="/stylesheets/site/2.0/30-role-ie5.css" /><![endif]-->
<!--[if IE 6]><link rel="stylesheet" type="text/css" media="screen" href="/stylesheets/site/2.0/31-role-ie6.css" /><![endif]-->
<!--[if IE 7]><link rel="stylesheet" type="text/css" media="screen" href="/stylesheets/site/2.0/32-role-ie7.css" /><![endif]-->



<!--sandbox for developers    -->
<style media="screen">#new_work_search fieldset:first-of-type .submit{padding-top:0}.edit_external_author ul ul{margin-left:2.75em}a.resp-sharing-button__link,.resp-sharing-button__icon{display:inline-block}a.resp-sharing-button__link,a.resp-sharing-button__link:hover{text-decoration:none;color:#fff;border:none}.resp-sharing-button{border-radius:5px;transition:25ms ease-out;padding:.5em .75em}.resp-sharing-button__icon svg{width:1em;height:1em;margin-right:.4em;vertical-align:top}.resp-sharing-button__icon{stroke:#fff;fill:none}.resp-sharing-button__icon--solid{fill:#fff;stroke:none}.resp-sharing-button--twitter{background-color:#55acee}.resp-sharing-button--twitter:hover,a:focus .resp-sharing-button--twitter{background-color:#2795e9}.resp-sharing-button--tumblr{background-color:#35465c}.resp-sharing-button--tumblr:hover,a:focus .resp-sharing-button--tumblr{background-color:#222d3c}.resp-sharing-button--twitter{background-color:#55acee;border-color:#55acee}.resp-sharing-button--twitter:hover,.resp-sharing-button--twitter:active{background-color:#2795e9;border-color:#2795e9}.resp-sharing-button--tumblr{background-color:#35465c;border-color:#35465c}.resp-sharing-button--tumblr:hover,.resp-sharing-button--tumblr:active{background-color:#222d3c;border-color:#222d3c}</style>
<script src="/javascripts/livevalidation_standalone.js.pagespeed.jm.oB__Z5piTe.js"></script>

<meta name="csrf-param" content="authenticity_token"/>
<meta name="csrf-token" content="egiRoy7ve0YmvVWxBgGMrrJrTYmzvs_huWRJbks08RxONbo1BvxA8ekwkVLc9Hu6CMtjiqtO8PmAzzN00u-8pg"/>


  </head>

  <body class="logged-out">
    <div id="outer" class="wrapper">
      <ul id="skiplinks"><li><a href="#main">Main Content</a></li></ul>
      <!-- BEGIN BETA CAVEATS! -->
<noscript>
  <p id="javascript-warning">
    While we&#39;ve done our best to make the core functionality of this site accessible without javascript, it will work better with it enabled. Please consider turning it on!
  </p>
</noscript>
<!-- END BETA CAVEATS! -->

<!-- BEGIN header -->

<div id="header" class="region">

  <h1 class="heading">
    <a href="/"><span>Archive of Our Own</span><sup> beta</sup><img alt="Archive of Our Own" class="logo" src="/images/ao3_logos/xlogo_42.png.pagespeed.ic.ax-awMa4j4.png"/></a>
  </h1>

    <div id="login" class="dropdown">
      <p class="user actions" role="menu">
        <a id="login-dropdown" href="/users/login">Log In</a>
      </p>
      <div id="small_login" class="simple login">
    <form class="new_user" id="new_user_session_small" action="/users/login" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;"/><input type="hidden" name="authenticity_token" value="uLFhOLWKYiKjsCXcXaQzwHnNWgawgjIRIvLRzcz550OMjEqunZlZlWw94T-HUcTUw210BahyDQkbWavXVSKq-Q"/>
    <dl>
    <dt>
      <label for="user_session_login_small">User name or email:</label></dt>
    <dd><input id="user_session_login_small" type="text" name="user[login]"/></dd>
    <dt><label for="user_session_password_small">Password:</label></dt>
    <dd><input id="user_session_password_small" type="password" name="user[password]"/></dd>
  </dl>
  <p class="submit actions">
    <label for="user_remember_me_small" class="action"><input type="checkbox" name="user[remember_me]" id="user_remember_me_small" value="1"/>Remember Me</label>
    <input type="submit" name="commit" value="Log In"/>
  </p>
</form>
<ul class="footnote actions">
  <li><a href="/users/password/new">Forgot password?</a></li>
    <li>
      <a href="/invite_requests">Get an Invitation</a>
    </li>
</ul>

</div>

    </div>

  <h3 class="landmark heading">Site Navigation</h3>
  <ul class="primary navigation actions" role="navigation">
    <li class="dropdown">
      <a href="/menu/fandoms">Fandoms</a>
      <ul class="menu" role="menu">
  <li><a href="/media">All Fandoms</a></li>
        <li id="medium_5"><a href="/media/Anime%20*a*%20Manga/fandoms">Anime &amp; Manga</a></li>
        <li id="medium_3"><a href="/media/Books%20*a*%20Literature/fandoms">Books &amp; Literature</a></li>
        <li id="medium_4"><a href="/media/Cartoons%20*a*%20Comics%20*a*%20Graphic%20Novels/fandoms">Cartoons &amp; Comics &amp; Graphic Novels</a></li>
        <li id="medium_7"><a href="/media/Celebrities%20*a*%20Real%20People/fandoms">Celebrities &amp; Real People</a></li>
        <li id="medium_2"><a href="/media/Movies/fandoms">Movies</a></li>
        <li id="medium_6"><a href="/media/Music%20*a*%20Bands/fandoms">Music &amp; Bands</a></li>
        <li id="medium_8"><a href="/media/Other%20Media/fandoms">Other Media</a></li>
        <li id="medium_30198"><a href="/media/Theater/fandoms">Theater</a></li>
        <li id="medium_1"><a href="/media/TV%20Shows/fandoms">TV Shows</a></li>
        <li id="medium_476"><a href="/media/Video%20Games/fandoms">Video Games</a></li>
        <li id="medium_9971"><a href="/media/Uncategorized%20Fandoms/fandoms">Uncategorized Fandoms</a></li>
</ul>

    </li>
    <li class="dropdown">
      <a href="/menu/browse">Browse</a>
      <ul class="menu" role="menu">
  <li><a href="/works">Works</a></li>
  <li><a href="/bookmarks">Bookmarks</a></li>
  <li><a href="/tags">Tags</a></li>
  <li><a href="/collections">Collections</a></li>
</ul>

    </li>
    <li class="dropdown">
      <a href="/menu/search">Search</a>
      <ul class="menu" role="menu">
  <li><a href="/works/search">Works</a></li>
  <li><a href="/bookmarks/search">Bookmarks</a></li>
  <li><a href="/tags/search">Tags</a></li>
  <li><a href="/people/search">People</a></li>
</ul>

    </li>
    <li class="dropdown">
      <a href="/menu/about">About</a>
      <ul class="menu" role="menu">
  <li><a href="/about">About Us</a></li>
  <li><a href="/admin_posts">News</a></li>
  <li><a href="/faq">FAQ</a></li>
  <li><a href="/wrangling_guidelines">Wrangling Guidelines</a></li>
  <li><a href="/donate">Donate or Volunteer</a></li>
</ul>

    </li>
      <li class="search"><form class="search" id="search" action="/works/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;"/>
  <fieldset>
    <legend>Search Works</legend>
    <p>
      <label class="landmark" for="site_search">Work Search:</label>
      <input class="text" id="site_search" aria-describedby="site_search_tooltip" type="text" name="work_search[query]"/>
      <span class="tip" role="tooltip" id="site_search_tooltip">tip: hetalia f/f sort:kudos</span>
      <span class="submit actions"><input type="submit" value="Search" class="button"/></span>
    </p>
  </fieldset>
</form></li>
  </ul>



  <div class="clear"></div>

</div>



<!-- END header -->

      <div id="inner" class="wrapper">
        <!-- BEGIN sidebar -->
        <!-- END sidebar -->

        <!-- BEGIN main -->
        <div id="main" class="works-index filtered region" role="main">

          <div class="flash"></div>
          <!--Descriptive page name and system messages, descriptions, and instructions.-->
<h2 class="heading">
   1 - 20 of 27 Works in <a class="tag" href="/tags/Kataang%20Week%202020">Kataang Week 2020</a>
</h2>
<!-- /end descriptions-->

<!--Subnavigation, sorting and actions.-->
  <div class="navigation actions module">
    <h3 class="landmark heading">Navigation and Actions</h3>
    <!--gift search subnav-->
    <!--user role subnav-->
      <ul class="user navigation actions" role="navigation">
          <li><span class="current">Works</span></li>
          <li><a href="/tags/Kataang%20Week%202020/bookmarks">Bookmarks</a></li>
          <li class="narrow-shown hidden"><a href="#work-filters" id="go_to_filters">Filters</a></li>
      </ul>
  </div>
<!---/subnav-->


  <h4 class="landmark heading">Pages Navigation</h4><ol role="navigation" aria-label="Pagination" class="pagination actions" title="pagination"><li class="previous" title="previous"><span class="disabled">&#8592; Previous</span></li> <li><span class="current">1</span></li> <li><a rel="next" href="/tags/Kataang%20Week%202020/works?page=2">2</a></li> <li class="next" title="next"><a rel="next" href="/tags/Kataang%20Week%202020/works?page=2">Next &#8594;</a></li></ol>

<!--main content-->
<h3 class="landmark heading">Listing Works</h3>
<ol class="work index group">
  <li id="work_29034420" class="work blurb group work-29034420 user-9159381" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/29034420">Kataang Week 2020: The Red Thread of Fate</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/TheBakingQueen/pseuds/TheBakingQueen">TheBakingQueen</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>, <a class="tag" href="/tags/Avatar:%20Legend%20of%20Korra/works">Avatar: Legend of Korra</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-teen rating" title="Teen And Up Audiences"><span class="text">Teen And Up Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-choosenotto warnings" title="Choose Not To Use Archive Warnings"><span class="text">Choose Not To Use Archive Warnings</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">27 Jan 2021</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/Choose%20Not%20To%20Use%20Archive%20Warnings/works">Creator Chose Not To Use Archive Warnings</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Jinora*s*Kai%20(Avatar)/works">Jinora/Kai (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Jinora%20*a*%20Kai%20(Avatar)/works">Jinora &amp; Kai (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Jinora%20(Avatar)/works">Jinora (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Kai%20(Avatar)/works">Kai (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Background%20Kainora/works">Background Kainora</a></li> <li class='freeforms'><a class="tag" href="/tags/Angst/works">Angst</a></li> <li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Fate/works">Fate</a></li> <li class='freeforms'><a class="tag" href="/tags/Red%20String%20of%20Fate/works">Red String of Fate</a></li> <li class='freeforms'><a class="tag" href="/tags/Destiny/works">Destiny</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff%20and%20Angst/works">Fluff and Angst</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>12 years of being endgame, 12 years of being possibly the most adorable couple in TV history, and 7 days with 7 prompts for 7 oneshots for our favorite couple. Kataang Week 2020 Day 7: The Red Thread of Fate. How the Red Thread of Fate has connected Katara and Aang through their whole lives and beyond.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>7</strong> of <a href="/series/2129925">Kataang Week 2020</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">3,223</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/29034420?show_comments=true#comments">2</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/29034420#comments">17</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/29034420/bookmarks">4</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">239</dd>

  </dl>


</li>
<li id="work_29034339" class="work blurb group work-29034339 user-9159381" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/29034339">Kataang Week 2020: Napping</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/TheBakingQueen/pseuds/TheBakingQueen">TheBakingQueen</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">27 Jan 2021</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/covid%20au/works">covid au</a></li> <li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>12 years of being endgame, 12 years of being possibly the most adorable couple in TV history, and 7 days with 7 prompts for 7 oneshots for our favorite couple. Kataang Week 2020 Day 6: Napping. In a COVID-stricken modern universe, Katara and Aang are understandably quite tired.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>6</strong> of <a href="/series/2129925">Kataang Week 2020</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">834</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/29034339#comments">9</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/29034339/bookmarks">1</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">177</dd>

  </dl>


</li>
<li id="work_29033190" class="work blurb group work-29033190 user-9159381" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/29033190">Kataang Week 2020: Heritage/Responsibilities</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/TheBakingQueen/pseuds/TheBakingQueen">TheBakingQueen</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">27 Jan 2021</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Night%20Before%20The%20Wedding/works">Night Before The Wedding</a></li> <li class='freeforms'><a class="tag" href="/tags/Traditions/works">Traditions</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>12 years of being endgame, 12 years of being possibly the most adorable couple in TV history, and 7 days with 7 prompts for 7 oneshots for our favorite couple. Kataang Week 2020 Day 5: Heritage/Responsibilities. The night before their wedding, Katara and Aang reflect over their heritage.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>5</strong> of <a href="/series/2129925">Kataang Week 2020</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">1,208</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/29033190#comments">9</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">171</dd>

  </dl>


</li>
<li id="work_29033079" class="work blurb group work-29033079 user-9159381" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/29033079">Kataang Week 2020: PDA (Public Displays of Affection)</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/TheBakingQueen/pseuds/TheBakingQueen">TheBakingQueen</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-teen rating" title="Teen And Up Audiences"><span class="text">Teen And Up Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">27 Jan 2021</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Public%20Display%20of%20Affection/works">Public Display of Affection</a></li> <li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Devious!Katara/works">Devious!Katara</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>12 years of being endgame, 12 years of being possibly the most adorable couple in TV history, and 7 days with 7 prompts for 7 oneshots for our favorite couple. Kataang Week 2020 Day 4: PDA. Aang and Katara reflect on each other's PDA.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>4</strong> of <a href="/series/2129925">Kataang Week 2020</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">1,009</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/29033079#comments">14</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">194</dd>

  </dl>


</li>
<li id="work_29033019" class="work blurb group work-29033019 user-9159381" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/29033019">Kataang Week 2020: Blood/Wounds</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/TheBakingQueen/pseuds/TheBakingQueen">TheBakingQueen</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-teen rating" title="Teen And Up Audiences"><span class="text">Teen And Up Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">28 Jan 2021</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Light%20Angst/works">Light Angst</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>12 years of being endgame, 12 years of being possibly the most adorable couple in TV history, and 7 days with 7 prompts for 7 oneshots for our favorite couple. Kataang Week 2020 Day 3: Blood/Wounds. On the field of battle, Aang gets hurt. Katara, naturally, freaks out.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>3</strong> of <a href="/series/2129925">Kataang Week 2020</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">1,010</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/29033019#comments">7</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/29033019/bookmarks">2</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">203</dd>

  </dl>


</li>
<li id="work_29032944" class="work blurb group work-29032944 user-9159381" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/29032944">Kataang Week 2020: Soft</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/TheBakingQueen/pseuds/TheBakingQueen">TheBakingQueen</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-teen rating" title="Teen And Up Audiences"><span class="text">Teen And Up Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">27 Jan 2021</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Lazy%20Mornings/works">Lazy Mornings</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>12 years of being endgame, 12 years of being possibly the most adorable couple in TV history, and 7 days with 7 prompts for 7 oneshots for our favorite couple. Kataang Week 2020 Day 2: Soft. Katara talks about the softness of Aang's heart. Aang's mind goes... elsewhere.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>2</strong> of <a href="/series/2129925">Kataang Week 2020</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">1,166</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/29032944#comments">9</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/29032944/bookmarks">3</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">232</dd>

  </dl>


</li>
<li id="work_29032887" class="work blurb group work-29032887 user-9159381" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/29032887">Kataang Week 2020: Keeping Warm</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/TheBakingQueen/pseuds/TheBakingQueen">TheBakingQueen</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">27 Jan 2021</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Sokka%20(Avatar)/works">Sokka (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Literal%20Sleeping%20Together/works">Literal Sleeping Together</a></li> <li class='freeforms'><a class="tag" href="/tags/Huddling%20For%20Warmth/works">Huddling For Warmth</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/overprotective%20sokka%20ofc/works">overprotective sokka ofc</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>12 years of being endgame, 12 years of being possibly the most adorable couple in TV history, and 7 days with 7 prompts for 7 oneshots for our favorite couple. Kataang Week 2020 Day 1: Keeping Warm. Katara and Aang sleep next to each other... for survival purposes obviously.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>1</strong> of <a href="/series/2129925">Kataang Week 2020</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">1,035</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/29032887#comments">13</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/29032887/bookmarks">3</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">212</dd>

  </dl>


</li>
<li id="work_28473330" class="work blurb group work-28473330 user-9342144" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/28473330">Passion Put to Use</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/Dilettantism/pseuds/Dilettantism">Dilettantism</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-teen rating" title="Teen And Up Audiences"><span class="text">Teen And Up Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">01 Jan 2021</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Katara surprises Aang. Post-series, only partly comic-compliant. Ignores LOK.</p>
    </blockquote>


  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">2,611</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/28473330?show_comments=true#comments">3</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/28473330#comments">32</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/28473330/bookmarks">9</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">345</dd>

  </dl>


</li>
<li id="work_25793935" class="work blurb group work-25793935 user-5953469" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25793935">Snapshots</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/RMarie124/pseuds/RMarie124">RMarie124</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-teen rating" title="Teen And Up Audiences"><span class="text">Teen And Up Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">15 Aug 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Angst/works">Angst</a></li> <li class='freeforms'><a class="tag" href="/tags/Pre-Canon/works">Pre-Canon</a></li> <li class='freeforms'><a class="tag" href="/tags/During%20Canon/works">During Canon</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-Canon/works">Post-Canon</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/but%20late%20lol/works">but late lol</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>This is all for Kataang week 2020, but finished a week late. A small collection of short drabbles that take place pre-, during-, and post-canon. </p>
<p>Prompts:<br/>1. Keeping warm<br/>2. Soft<br/>3. Blood/wounds<br/>4. PDA<br/>5. Heritage/responsibilities<br/>6. Napping<br/>7. The Red Thread of Fate<br/>8. Free Day</p>
    </blockquote>


  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">4,467</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters"><a href="/works/25793935/chapters/62992483">8</a>/8</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25793935?show_comments=true&amp;view_full_work=true#comments">32</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25793935?view_full_work=true#comments">134</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25793935/bookmarks">12</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">1780</dd>

  </dl>


</li>
<li id="work_25704064" class="work blurb group work-25704064 user-2238823" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25704064">[AMV] Perfect || Kataang</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/Oceantail/pseuds/Oceantail">Oceantail</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">04 Aug 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/Day%207%20-%20Free%20Day/works">Day 7 - Free Day</a></li> <li class='freeforms'><a class="tag" href="/tags/Not%20a%20fic/works">Not a fic</a></li> <li class='freeforms'><a class="tag" href="/tags/AMV/works">AMV</a></li> <li class='freeforms'><a class="tag" href="/tags/Embedded%20Video/works">Embedded Video</a></li> <li class='freeforms'><a class="tag" href="/tags/YouTube/works">YouTube</a></li> <li class='freeforms'><a class="tag" href="/tags/Love/works">Love</a></li> <li class='freeforms'><a class="tag" href="/tags/Falling%20In%20Love/works">Falling In Love</a></li> <li class='freeforms'><a class="tag" href="/tags/I%20love%20kataang%20so%20much/works">I love kataang so much</a></li> <li class='freeforms'><a class="tag" href="/tags/atla%20POPPED%20OFF%20with%20the%20canon%20ships/works">atla POPPED OFF with the canon ships</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>
  <i>"I see my future in your eyes..."</i>
</p>
<p> </p>
<p>Kataang Week 2020<br/>Day 7 - Free Day</p>
    </blockquote>


  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">15</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25704064?show_comments=true#comments">4</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25704064#comments">2</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">336</dd>

  </dl>


</li>
<li id="work_25693108" class="work blurb group work-25693108 user-7784155" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25693108">Break in the Line</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/itsmoonpeaches/pseuds/itsmoonpeaches">itsmoonpeaches</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>, <a class="tag" href="/tags/Avatar:%20Legend%20of%20Korra/works">Avatar: Legend of Korra</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-teen rating" title="Teen And Up Audiences"><span class="text">Teen And Up Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-choosenotto warnings" title="Choose Not To Use Archive Warnings"><span class="text">Choose Not To Use Archive Warnings</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">03 Aug 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/Choose%20Not%20To%20Use%20Archive%20Warnings/works">Creator Chose Not To Use Archive Warnings</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Toph%20Beifong/works">Aang &amp; Toph Beifong</a></li> <li class='relationships'><a class="tag" href="/tags/Toph%20Beifong%20*a*%20Katara/works">Toph Beifong &amp; Katara</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Toph%20Beifong/works">Toph Beifong</a></li><li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/Minor%20Violence/works">Minor Violence</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-Traumatic%20Stress%20Disorder%20-%20PTSD/works">Post-Traumatic Stress Disorder - PTSD</a></li> <li class='freeforms'><a class="tag" href="/tags/Minor%20Character%20Death/works">Minor Character Death</a></li> <li class='freeforms'><a class="tag" href="/tags/Blood%20and%20Violence/works">Blood and Violence</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-100%20Year%20War%20(Avatar%20TV)/works">Post-100 Year War (Avatar TV)</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-Avatar:%20The%20Last%20Airbender/works">Post-Avatar: The Last Airbender</a></li> <li class='freeforms'><a class="tag" href="/tags/Pre-Avatar:%20Legend%20of%20Korra/works">Pre-Avatar: Legend of Korra</a></li> <li class='freeforms'><a class="tag" href="/tags/Love/works">Love</a></li> <li class='freeforms'><a class="tag" href="/tags/Implied%20Sexual%20Content/works">Implied Sexual Content</a></li> <li class='freeforms'><a class="tag" href="/tags/implied%20PTSD/works">implied PTSD</a></li> <li class='freeforms'><a class="tag" href="/tags/POV%20Aang%20(Avatar)/works">POV Aang (Avatar)</a></li> <li class='freeforms'><a class="tag" href="/tags/Aang%20(Avatar)-centric/works">Aang (Avatar)-centric</a></li> <li class='freeforms'><a class="tag" href="/tags/Established%20Relationship/works">Established Relationship</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Prompt: Free Day</p><p>-</p><p>“What’s going on?” asked Katara from behind him. When he closed the door, he saw her standing next to the counter in the kitchen. Her nightgown was rumpled, her chestnut locks free from the usual half-up style.</p><p>“We have to go to the station,” he said, making his way back to their room to find his robes. “Toph wants our help with a case.” </p><p>He heard her following him, bare feet slapping on the wooden floorboards. “That doesn’t sound good,” she said. “If it’s that serious, they might need a healer.” </p><p>Aang agreed without preamble, then said, “I hope they don’t, for their sakes.” </p><p>-</p><p>Or, after the events of a tragic case, Aang's nightmares about Azula's lightning reemerge. Katara is there to keep him steady.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>8</strong> of <a href="/series/1851508">Lost My Heart in Republic City</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">2,990</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25693108?show_comments=true#comments">22</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25693108#comments">97</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25693108/bookmarks">8</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">988</dd>

  </dl>


</li>
<li id="work_20326240" class="work blurb group work-20326240 user-2585317" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/20326240">By Falling We Learn to Go Safely</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/Freedom_Shamrock/pseuds/Freedom_Shamrock">Freedom_Shamrock</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-teen rating" title="Teen And Up Audiences"><span class="text">Teen And Up Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-no iswip" title="Work in Progress"><span class="text">Work in Progress</span></span></a></li>
</ul>
    <p class="datetime">03 Aug 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Appa%20(Avatar)/works">Appa (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202019/works">Kataang Week 2019</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20-%20Freeform/works">Kataang - Freeform</a></li> <li class='freeforms'><a class="tag" href="/tags/Aged%20Up/works">Aged Up</a></li> <li class='freeforms'><a class="tag" href="/tags/Slice%20of%20Life/works">Slice of Life</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Slice of life moments as Aang (17) and Katara (19) travel across the world helping others.</p>
    </blockquote>


  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">7,472</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters"><a href="/works/20326240/chapters/62368687">10</a>/15</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/20326240?show_comments=true&amp;view_full_work=true#comments">84</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/20326240?view_full_work=true#comments">148</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/20326240/bookmarks">16</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">2583</dd>

  </dl>


</li>
<li id="work_25680757" class="work blurb group work-25680757 user-19409" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25680757">Red Thread</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/Caelum_Blue/pseuds/Caelum_Blue">Caelum_Blue</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-multi category" title="F/M, Gen"><span class="text">F/M, Gen</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">02 Aug 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Katara%20*a*%20Ty%20Lee%20(Avatar)/works">Katara &amp; Ty Lee (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Ty%20Lee%20(Avatar)/works">Aang &amp; Ty Lee (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Ty%20Lee%20(Avatar)/works">Ty Lee (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-Series/works">Post-Series</a></li> <li class='freeforms'><a class="tag" href="/tags/Waterbending%20*a*%20Waterbenders/works">Waterbending &amp; Waterbenders</a></li> <li class='freeforms'><a class="tag" href="/tags/Healing/works">Healing</a></li> <li class='freeforms'><a class="tag" href="/tags/Chi%20-%20Freeform/works">Chi - Freeform</a></li> <li class='freeforms'><a class="tag" href="/tags/Conversations/works">Conversations</a></li> <li class='freeforms'><a class="tag" href="/tags/Red%20String%20of%20Fate/works">Red String of Fate</a></li> <li class='freeforms'><a class="tag" href="/tags/Chinese%20Mythology%20*a*%20Folklore/works">Chinese Mythology &amp; Folklore</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Written for Kataang Week 2020. Prompt - The Red Thread of Fate.</p><p>“Oh, <i>wow.</i> That’s different!”<br/>“Not every day you see water glow,” Katara agreed smugly.<br/>“Oh, that’s cool too. But I’m talking about what you’re doing to the chi in my ligaments!”</p><p>Ty Lee can see things.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>7</strong> of <a href="/series/1851361">Kataang Week 2020</a>
        </li>
        <li>
          Part <strong>30</strong> of <a href="/series/817911">Caelum's Canonverse</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">1,984</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25680757?show_comments=true#comments">20</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25680757#comments">119</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25680757/bookmarks">16</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">872</dd>

  </dl>


</li>
<li id="work_25669486" class="work blurb group work-25669486 user-7784155" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25669486">Threads of Fate</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/itsmoonpeaches/pseuds/itsmoonpeaches">itsmoonpeaches</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>, <a class="tag" href="/tags/Avatar:%20Legend%20of%20Korra/works">Avatar: Legend of Korra</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">02 Aug 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Sokka%20(Avatar)/works">Aang &amp; Sokka (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Katara%20*a*%20Sokka%20(Avatar)/works">Katara &amp; Sokka (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Kanna%20*a*%20Katara%20(Avatar)/works">Kanna &amp; Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Hakoda%20*a*%20Katara%20(Avatar)/works">Hakoda &amp; Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Hakoda%20(Avatar)/works">Aang &amp; Hakoda (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Hakoda%20*a*%20Sokka%20(Avatar)/works">Hakoda &amp; Sokka (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Katara%20*a*%20Kya%20(Avatar)/works">Katara &amp; Kya (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Sokka%20(Avatar)/works">Sokka (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Hakoda%20(Avatar)/works">Hakoda (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Kanna%20(Avatar)/works">Kanna (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-100%20Year%20War%20(Avatar%20TV)/works">Post-100 Year War (Avatar TV)</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-Avatar:%20The%20Last%20Airbender/works">Post-Avatar: The Last Airbender</a></li> <li class='freeforms'><a class="tag" href="/tags/Pre-Avatar:%20Legend%20of%20Korra/works">Pre-Avatar: Legend of Korra</a></li> <li class='freeforms'><a class="tag" href="/tags/Established%20Relationship/works">Established Relationship</a></li> <li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Love/works">Love</a></li> <li class='freeforms'><a class="tag" href="/tags/Minor%20Sokka*s*Suki/works">Minor Sokka/Suki</a></li> <li class='freeforms'><a class="tag" href="/tags/Southern%20Water%20Tribe/works">Southern Water Tribe</a></li> <li class='freeforms'><a class="tag" href="/tags/Republic%20City/works">Republic City</a></li> <li class='freeforms'><a class="tag" href="/tags/POV%20Katara%20(Avatar)/works">POV Katara (Avatar)</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Prompt: Red Thread of Fate</p>
<p>-</p>
<p>It was tradition that each immediate family member be represented in a Water Tribe wedding. They were supposed to be present on either side of the marriage in some capacity. They were to offer tributes, say a speech, anything of the sort, as long as they were there. The only problem was, Katara did not have a mother anymore. </p>
<p>-</p>
<p>Or, with only a few months left until their wedding, Katara and Aang decide to make a trip to the Southern Water Tribe to find the last piece they need for the ceremony.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>7</strong> of <a href="/series/1851508">Lost My Heart in Republic City</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">3,090</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25669486?show_comments=true#comments">16</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25669486#comments">82</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25669486/bookmarks">9</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">840</dd>

  </dl>


</li>
<li id="work_25649776" class="work blurb group work-25649776 user-7784155" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25649776">Summer Naps</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/itsmoonpeaches/pseuds/itsmoonpeaches">itsmoonpeaches</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>, <a class="tag" href="/tags/Avatar:%20Legend%20of%20Korra/works">Avatar: Legend of Korra</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">01 Aug 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Romance/works">Romance</a></li> <li class='freeforms'><a class="tag" href="/tags/Republic%20City/works">Republic City</a></li> <li class='freeforms'><a class="tag" href="/tags/Established%20Relationship/works">Established Relationship</a></li> <li class='freeforms'><a class="tag" href="/tags/POV%20Aang%20(Avatar)/works">POV Aang (Avatar)</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-100%20Year%20War%20(Avatar%20TV)/works">Post-100 Year War (Avatar TV)</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-Avatar:%20The%20Last%20Airbender/works">Post-Avatar: The Last Airbender</a></li> <li class='freeforms'><a class="tag" href="/tags/Domestic%20Fluff/works">Domestic Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Being%20Domestic/works">Kataang Being Domestic</a></li> <li class='freeforms'><a class="tag" href="/tags/Pre-Avatar:%20Legend%20of%20Korra/works">Pre-Avatar: Legend of Korra</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Prompt: Napping</p><p>- </p><p>“Katara,” he spoke her name gently, “you need a nap.” He was in a slight turn toward the door, one hand grasping onto a wooden spoon over the stove. There was a steady flame that he was feeding with his firebending underneath the metal pot. </p><p>Katara ignored his suggestion, instead sniffing the air. “Oh, that smells good,” she said. “What are you cooking for dinner?”</p><p>-</p><p>Or, Katara is exhausted and Aang coaxes her to nap.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>6</strong> of <a href="/series/1851508">Lost My Heart in Republic City</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">1,723</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25649776?show_comments=true#comments">20</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25649776#comments">115</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25649776/bookmarks">10</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">1137</dd>

  </dl>


</li>
<li id="work_25639372" class="work blurb group work-25639372 user-6719023" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25639372">Intrinsically Yours</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/Leone_Brion/pseuds/Leone_Brion">Leone_Brion</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-teen rating" title="Teen And Up Audiences"><span class="text">Teen And Up Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-no iswip" title="Work in Progress"><span class="text">Work in Progress</span></span></a></li>
</ul>
    <p class="datetime">01 Aug 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Their relationship had come to a point where nothing ever was a surprise between them anymore. Just second nature. smol!kataang vignettes.</p>
    </blockquote>


  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">1,406</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/8</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25639372?show_comments=true#comments">2</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25639372#comments">20</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25639372/bookmarks">3</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">553</dd>

  </dl>


</li>
<li id="work_25647571" class="work blurb group work-25647571 user-19409" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25647571">happy lemur, sleepy lemur, purr purr purr</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/Caelum_Blue/pseuds/Caelum_Blue">Caelum_Blue</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-multi category" title="F/M, Gen"><span class="text">F/M, Gen</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">01 Aug 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Momo%20(Avatar)/works">Aang &amp; Momo (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Katara%20*a*%20Momo%20(Avatar)/works">Katara &amp; Momo (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20*a*%20Momo%20(Avatar)/works">Aang &amp; Katara &amp; Momo (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Momo%20(Avatar)/works">Momo (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/Post-Series/works">Post-Series</a></li> <li class='freeforms'><a class="tag" href="/tags/Air%20Temple%20Island/works">Air Temple Island</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Domestic/works">Domestic</a></li> <li class='freeforms'><a class="tag" href="/tags/Animals/works">Animals</a></li> <li class='freeforms'><a class="tag" href="/tags/Laws/works">Laws</a></li> <li class='freeforms'><a class="tag" href="/tags/Endangered%20Species/works">Endangered Species</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Written for Kataang Week 2020. Prompt - Napping.</p><p>“You want me to get you a green bean cake because you don’t want to wake up Momo?”<br/>“It’s <i>illegal</i> to move Momo when he’s made himself comfortable on your lap."</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>6</strong> of <a href="/series/1851361">Kataang Week 2020</a>
        </li>
        <li>
          Part <strong>36</strong> of <a href="/series/817911">Caelum's Canonverse</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">720</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25647571?show_comments=true#comments">16</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25647571#comments">121</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25647571/bookmarks">18</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">685</dd>

  </dl>


</li>
<li id="work_25630618" class="work blurb group work-25630618 user-7784155" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25630618">Oral Traditions</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/itsmoonpeaches/pseuds/itsmoonpeaches">itsmoonpeaches</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>, <a class="tag" href="/tags/Avatar:%20Legend%20of%20Korra/works">Avatar: Legend of Korra</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">31 Jul 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Bumi%20II/works">Aang &amp; Bumi II</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Kya%20II%20(Avatar)/works">Aang &amp; Kya II (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Bumi%20II%20*a*%20Katara/works">Bumi II &amp; Katara</a></li> <li class='relationships'><a class="tag" href="/tags/Katara%20*a*%20Kya%20II%20(Avatar)/works">Katara &amp; Kya II (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Sokka%20(Avatar)/works">Aang &amp; Sokka (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Katara%20*a*%20Sokka%20(Avatar)/works">Katara &amp; Sokka (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Hakoda%20*a*%20Katara%20(Avatar)/works">Hakoda &amp; Katara (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Hakoda%20*a*%20Sokka%20(Avatar)/works">Hakoda &amp; Sokka (Avatar)</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Gyatso/works">Aang &amp; Gyatso</a></li> <li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Hakoda%20(Avatar)/works">Aang &amp; Hakoda (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Sokka%20(Avatar)/works">Sokka (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Bumi%20II%20(Avatar)/works">Bumi II (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Kya%20II%20(Avatar)/works">Kya II (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Hakoda%20(Avatar)/works">Hakoda (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Air%20Acolytes%20(Avatar)/works">Air Acolytes (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Kataang%20Week/works">Kataang Week</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li> <li class='freeforms'><a class="tag" href="/tags/Air%20Nomads%20(Avatar)/works">Air Nomads (Avatar)</a></li> <li class='freeforms'><a class="tag" href="/tags/Air%20Nomad%20Genocide%20(Avatar)/works">Air Nomad Genocide (Avatar)</a></li> <li class='freeforms'><a class="tag" href="/tags/Family/works">Family</a></li> <li class='freeforms'><a class="tag" href="/tags/POV%20Katara%20(Avatar)/works">POV Katara (Avatar)</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Prompt: Heritage/Responsibilities</p><p>-</p><p>“Are we gonna meet your family too, dad?” queried Bumi innocently. His pale blue eyes were wide. </p><p>“Yeah, daddy!” echoed Kya with a great yawn. </p><p>“You did meet my family,” Aang stated carefully. His back remained toward them as he gripped the reins atop Appa’s head. “You and your mother are my family. Your Gramp Gramp, Sokka, Toph, Zuko, Suki, Mai…they’re my family.” </p><p>Bumi tilted his head. “No, they’re not,” he maintained. </p><p>-</p><p>Or, Aang and Katara bring their children to the second annual Glacier Spirits Festival in over one-hundred years.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>5</strong> of <a href="/series/1851508">Lost My Heart in Republic City</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">3,648</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25630618?show_comments=true#comments">32</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25630618#comments">232</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25630618/bookmarks">33</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">1910</dd>

  </dl>


</li>
<li id="work_25639408" class="work blurb group work-25639408 user-19409" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25639408">the future's in our hands (and we will never be the same again)</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/Caelum_Blue/pseuds/Caelum_Blue">Caelum_Blue</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-choosenotto warnings" title="Choose Not To Use Archive Warnings"><span class="text">Choose Not To Use Archive Warnings</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-gen category" title="Gen"><span class="text">Gen</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">31 Jul 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/Choose%20Not%20To%20Use%20Archive%20Warnings/works">Creator Chose Not To Use Archive Warnings</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang%20*a*%20Katara%20(Avatar)/works">Aang &amp; Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Episode:%20s01e09%20The%20Waterbending%20Scroll/works">Episode: s01e09 The Waterbending Scroll</a></li> <li class='freeforms'><a class="tag" href="/tags/Waterbending%20*a*%20Waterbenders/works">Waterbending &amp; Waterbenders</a></li> <li class='freeforms'><a class="tag" href="/tags/Airbending%20*a*%20Airbenders/works">Airbending &amp; Airbenders</a></li> <li class='freeforms'><a class="tag" href="/tags/Angst/works">Angst</a></li> <li class='freeforms'><a class="tag" href="/tags/Conversations/works">Conversations</a></li> <li class='freeforms'><a class="tag" href="/tags/Genocide%20(Mentioned)/works">Genocide (Mentioned)</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Written for Kataang Week 2020. Prompt - Heritage/Responsibilities.</p><p>The morning after escaping the pirates, Katara studies the waterbending scroll, and Aang considers loss.</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>5</strong> of <a href="/series/1851361">Kataang Week 2020</a>
        </li>
        <li>
          Part <strong>25</strong> of <a href="/series/817911">Caelum's Canonverse</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">1,196</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25639408?show_comments=true#comments">15</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25639408#comments">76</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25639408/bookmarks">13</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">570</dd>

  </dl>


</li>
<li id="work_25616218" class="work blurb group work-25616218 user-19409" role="article">


  <!--title, author, fandom-->
  <div class="header module">

    <h4 class="heading">
      <a href="/works/25616218">cloudy with a chance of love letters</a>
      by

      <!-- do not cache -->
      <a rel="author" href="/users/Caelum_Blue/pseuds/Caelum_Blue">Caelum_Blue</a>





    </h4>

    <h5 class="fandoms heading">
      <span class="landmark">Fandoms:</span>
      <a class="tag" href="/tags/Avatar:%20The%20Last%20Airbender/works">Avatar: The Last Airbender</a>
      &nbsp;
    </h5>

    <!--required tags-->
    <ul class="required-tags">
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="rating-general-audience rating" title="General Audiences"><span class="text">General Audiences</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="warning-no warnings" title="No Archive Warnings Apply"><span class="text">No Archive Warnings Apply</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="category-het category" title="F/M"><span class="text">F/M</span></span></a></li>
<li> <a class="help symbol question modal" title="Symbols key" aria-controls="#modal" href="/help/symbols-key.html"><span class="complete-yes iswip" title="Complete Work"><span class="text">Complete Work</span></span></a></li>
</ul>
    <p class="datetime">30 Jul 2020</p>
  </div>

  <!--warnings again, cast, freeform tags-->
  <h6 class="landmark heading">Tags</h6>
  <ul class="tags commas">
    <li class='warnings'><strong><a class="tag" href="/tags/No%20Archive%20Warnings%20Apply/works">No Archive Warnings Apply</a></strong></li><li class='relationships'><a class="tag" href="/tags/Aang*s*Katara%20(Avatar)/works">Aang/Katara (Avatar)</a></li><li class='characters'><a class="tag" href="/tags/The%20Gaang%20(Avatar)/works">The Gaang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Aang%20(Avatar)/works">Aang (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Katara%20(Avatar)/works">Katara (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Sokka%20(Avatar)/works">Sokka (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Suki%20(Avatar)/works">Suki (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Toph%20Beifong/works">Toph Beifong</a></li> <li class='characters'><a class="tag" href="/tags/Zuko%20(Avatar)/works">Zuko (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Mai%20(Avatar)/works">Mai (Avatar)</a></li> <li class='characters'><a class="tag" href="/tags/Ty%20Lee%20(Avatar)/works">Ty Lee (Avatar)</a></li><li class='freeforms'><a class="tag" href="/tags/Minor%20Mai*s*Zuko/works">Minor Mai/Zuko</a></li> <li class='freeforms'><a class="tag" href="/tags/Minor%20Sokka*s*Suki/works">Minor Sokka/Suki</a></li> <li class='freeforms'><a class="tag" href="/tags/Air%20Temple%20Island/works">Air Temple Island</a></li> <li class='freeforms'><a class="tag" href="/tags/Anniversary/works">Anniversary</a></li> <li class='freeforms'><a class="tag" href="/tags/Sky%20Writing/works">Sky Writing</a></li> <li class='freeforms'><a class="tag" href="/tags/Fluff/works">Fluff</a></li> <li class='freeforms'><a class="tag" href="/tags/Gaang%20(Avatar)/works">Gaang (Avatar)</a></li> <li class='freeforms'><a class="tag" href="/tags/Gaang%20(Avatar)%20as%20Family/works">Gaang (Avatar) as Family</a></li> <li class='freeforms'><a class="tag" href="/tags/Kataang%20Week%202020/works">Kataang Week 2020</a></li>
  </ul>

  <!--summary-->
    <h6 class="landmark heading">Summary</h6>
    <blockquote class="userstuff summary">
      <p>Written for Kataang Week. Prompt - PDA (Public Displays of Affection).</p><p>“He’s only three words into it and it’s already the sappiest thing I’ve ever seen.”<br/>“Those three words are Happy First Anniversary."</p>
    </blockquote>

    <h6 class="landmark heading">Series</h6>
    <ul class="series">
        <li>
          Part <strong>4</strong> of <a href="/series/1851361">Kataang Week 2020</a>
        </li>
        <li>
          Part <strong>35</strong> of <a href="/series/817911">Caelum's Canonverse</a>
        </li>
    </ul>

  <!--stats-->

  <dl class="stats">
      <dt class="language">Language:</dt>
      <dd class="language">English</dd>
    <dt class="words">Words:</dt>
    <dd class="words">875</dd>
    <dt class="chapters">Chapters:</dt>
    <dd class="chapters">1/1</dd>



    <dt class="comments">Comments:</dt>
    <dd class="comments"><a href="/works/25616218?show_comments=true#comments">24</a></dd>
    <dt class="kudos">Kudos:</dt>
    <dd class="kudos"><a href="/works/25616218#comments">94</a></dd>
    <dt class="bookmarks">Bookmarks:</dt>
    <dd class="bookmarks"><a href="/works/25616218/bookmarks">13</a></dd>

  <dt class="hits">Hits:</dt>
  <dd class="hits">813</dd>

  </dl>


</li>

</ol>

<!--/content-->

<!--filters subnav-->
  <form class="narrow-hidden filters" id="work-filters" action="/works" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;"/>
  <h3 class="landmark heading">Filters</h3>
  <fieldset><legend>Filter results:</legend>
    <dl>
      <dt class="landmark">Submit</dt>
      <dd class="submit actions"><input type="submit" name="commit" value="Sort and Filter"/></dd>
      <dt class="sort">
        <label for="work_search_sort_column">Sort by</label>
      </dt>
      <dd class="sort">
        <select name="work_search[sort_column]" id="work_search_sort_column"><option value="authors_to_sort_on">Author</option>
<option value="title_to_sort_on">Title</option>
<option value="created_at">Date Posted</option>
<option selected="selected" value="revised_at">Date Updated</option>
<option value="word_count">Word Count</option>
<option value="hits">Hits</option>
<option value="kudos_count">Kudos</option>
<option value="comments_count">Comments</option>
<option value="bookmarks_count">Bookmarks</option></select>
      </dd>

        <dt class="include heading">
          <h4 class="heading">
            Include
          </h4>
           <a class="help symbol question modal" title="Work filters include tags" aria-controls="#modal" href="/help/work-filters-include-tags.html"><span class="symbol question"><span>?</span></span></a>
        </dt>
        <dd class="include tags group">
          <dl>
              <dt id="toggle_include_rating_tags" class="filter-toggle rating tags">
                <span class="landmark">Include </span>Ratings
              </dt>
              <dd id="include_rating_tags" class="expandable rating tags">
                <ul>
                    <li>
                      <label for="include_work_search_rating_ids_10">
                          <input type="radio" name="include_work_search[rating_ids][]" id="include_work_search_rating_ids_10" value="10"/>
                        <span class="indicator" aria-hidden="true"></span><span>General Audiences (17)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_rating_ids_11">
                          <input type="radio" name="include_work_search[rating_ids][]" id="include_work_search_rating_ids_11" value="11"/>
                        <span class="indicator" aria-hidden="true"></span><span>Teen And Up Audiences (10)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_include_archive_warning_tags" class="filter-toggle warning tags">
                <span class="landmark">Include </span>Warnings
              </dt>
              <dd id="include_archive_warning_tags" class="expandable warning tags">
                <ul>
                    <li>
                      <label for="include_work_search_archive_warning_ids_16">
                          <input type="checkbox" name="include_work_search[archive_warning_ids][]" id="include_work_search_archive_warning_ids_16" value="16"/>
                        <span class="indicator" aria-hidden="true"></span><span>No Archive Warnings Apply (22)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_archive_warning_ids_14">
                          <input type="checkbox" name="include_work_search[archive_warning_ids][]" id="include_work_search_archive_warning_ids_14" value="14"/>
                        <span class="indicator" aria-hidden="true"></span><span>Creator Chose Not To Use Archive Warnings (5)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_include_category_tags" class="filter-toggle category tags">
                <span class="landmark">Include </span>Categories
              </dt>
              <dd id="include_category_tags" class="expandable category tags">
                <ul>
                    <li>
                      <label for="include_work_search_category_ids_22">
                          <input type="checkbox" name="include_work_search[category_ids][]" id="include_work_search_category_ids_22" value="22"/>
                        <span class="indicator" aria-hidden="true"></span><span>F/M (24)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_category_ids_21">
                          <input type="checkbox" name="include_work_search[category_ids][]" id="include_work_search_category_ids_21" value="21"/>
                        <span class="indicator" aria-hidden="true"></span><span>Gen (6)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_include_fandom_tags" class="filter-toggle fandom tags">
                <span class="landmark">Include </span>Fandoms
              </dt>
              <dd id="include_fandom_tags" class="expandable fandom tags">
                <ul>
                    <li>
                      <label for="include_work_search_fandom_ids_65">
                          <input type="checkbox" name="include_work_search[fandom_ids][]" id="include_work_search_fandom_ids_65" value="65"/>
                        <span class="indicator" aria-hidden="true"></span><span>Avatar: The Last Airbender (27)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_fandom_ids_166591">
                          <input type="checkbox" name="include_work_search[fandom_ids][]" id="include_work_search_fandom_ids_166591" value="166591"/>
                        <span class="indicator" aria-hidden="true"></span><span>Avatar: Legend of Korra (8)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_include_character_tags" class="filter-toggle character tags">
                <span class="landmark">Include </span>Characters
              </dt>
              <dd id="include_character_tags" class="expandable character tags">
                <ul>
                    <li>
                      <label for="include_work_search_character_ids_6854">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_6854" value="6854"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang (Avatar) (25)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_character_ids_38490">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_38490" value="38490"/>
                        <span class="indicator" aria-hidden="true"></span><span>Katara (Avatar) (25)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_character_ids_38489">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_38489" value="38489"/>
                        <span class="indicator" aria-hidden="true"></span><span>Sokka (Avatar) (6)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_character_ids_511038">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_511038" value="511038"/>
                        <span class="indicator" aria-hidden="true"></span><span>Toph Beifong (5)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_character_ids_46350">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_46350" value="46350"/>
                        <span class="indicator" aria-hidden="true"></span><span>Hakoda (Avatar) (4)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_character_ids_6855">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_6855" value="6855"/>
                        <span class="indicator" aria-hidden="true"></span><span>Zuko (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_character_ids_35855">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_35855" value="35855"/>
                        <span class="indicator" aria-hidden="true"></span><span>Mai (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_character_ids_35862">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_35862" value="35862"/>
                        <span class="indicator" aria-hidden="true"></span><span>Suki (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_character_ids_46363">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_46363" value="46363"/>
                        <span class="indicator" aria-hidden="true"></span><span>Momo (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_character_ids_23210310">
                          <input type="checkbox" name="include_work_search[character_ids][]" id="include_work_search_character_ids_23210310" value="23210310"/>
                        <span class="indicator" aria-hidden="true"></span><span>The Gaang (Avatar) (3)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_include_relationship_tags" class="filter-toggle relationship tags">
                <span class="landmark">Include </span>Relationships
              </dt>
              <dd id="include_relationship_tags" class="expandable relationship tags">
                <ul>
                    <li>
                      <label for="include_work_search_relationship_ids_289747">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_289747" value="289747"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang/Katara (Avatar) (24)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_relationship_ids_10491052">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_10491052" value="10491052"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Katara (Avatar) (18)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_relationship_ids_847972">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_847972" value="847972"/>
                        <span class="indicator" aria-hidden="true"></span><span>Katara &amp; Sokka (Avatar) (4)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_relationship_ids_7879435">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_7879435" value="7879435"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Toph Beifong (3)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_relationship_ids_7881982">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_7881982" value="7881982"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Sokka (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_relationship_ids_19683678">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_19683678" value="19683678"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Hakoda (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_relationship_ids_23210403">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_23210403" value="23210403"/>
                        <span class="indicator" aria-hidden="true"></span><span>Hakoda &amp; Katara (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_relationship_ids_51124">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_51124" value="51124"/>
                        <span class="indicator" aria-hidden="true"></span><span>Sokka/Suki (Avatar) (2)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_relationship_ids_4232930">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_4232930" value="4232930"/>
                        <span class="indicator" aria-hidden="true"></span><span>Toph Beifong &amp; Katara (2)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_relationship_ids_6782131">
                          <input type="checkbox" name="include_work_search[relationship_ids][]" id="include_work_search_relationship_ids_6782131" value="6782131"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Bumi II (2)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_include_freeform_tags" class="filter-toggle freeform tags">
                <span class="landmark">Include </span>Additional Tags
              </dt>
              <dd id="include_freeform_tags" class="expandable freeform tags">
                <ul>
                    <li>
                      <label for="include_work_search_freeform_ids_43942642">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_43942642" value="43942642"/>
                        <span class="indicator" aria-hidden="true"></span><span>Kataang Week 2020 (27)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_freeform_ids_999888">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_999888" value="999888"/>
                        <span class="indicator" aria-hidden="true"></span><span>Kataang Week (17)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_freeform_ids_60">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_60" value="60"/>
                        <span class="indicator" aria-hidden="true"></span><span>Romance (12)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_freeform_ids_110">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_110" value="110"/>
                        <span class="indicator" aria-hidden="true"></span><span>Fluff (12)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_freeform_ids_4010423">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_4010423" value="4010423"/>
                        <span class="indicator" aria-hidden="true"></span><span>Post-Avatar: The Last Airbender (7)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_freeform_ids_22593651">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_22593651" value="22593651"/>
                        <span class="indicator" aria-hidden="true"></span><span>Post-100 Year War (Avatar TV) (7)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_freeform_ids_6292448">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_6292448" value="6292448"/>
                        <span class="indicator" aria-hidden="true"></span><span>Pre-Avatar: Legend of Korra (6)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_freeform_ids_1160">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_1160" value="1160"/>
                        <span class="indicator" aria-hidden="true"></span><span>Established Relationship (5)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_freeform_ids_1022">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_1022" value="1022"/>
                        <span class="indicator" aria-hidden="true"></span><span>Post-Canon (4)</span>
</label>                    </li>
                    <li>
                      <label for="include_work_search_freeform_ids_176">
                          <input type="checkbox" name="include_work_search[freeform_ids][]" id="include_work_search_freeform_ids_176" value="176"/>
                        <span class="indicator" aria-hidden="true"></span><span>Angst (3)</span>
</label>                    </li>
                </ul>
              </dd>
            <dt class="autocomplete search">
              <label for="work_search_other_tag_names">Other tags to include</label>
            </dt>
            <dd class="autocomplete search">
              <input class="autocomplete" data-autocomplete-method="/autocomplete/tag" data-autocomplete-hint-text="Start typing for suggestions!" data-autocomplete-no-results-text="(No suggestions found)" data-autocomplete-min-chars="1" data-autocomplete-searching-text="Searching..." type="text" name="work_search[other_tag_names]" id="work_search_other_tag_names"/>
            </dd>
          </dl>
        </dd>
        <dt class="exclude heading">
          <h4 class="heading">
            Exclude
          </h4>
           <a class="help symbol question modal" title="Work filters exclude tags" aria-controls="#modal" href="/help/work-filters-exclude-tags.html"><span class="symbol question"><span>?</span></span></a>
        </dt>
        <dd class="exclude tags group">
          <dl>
              <dt id="toggle_exclude_rating_tags" class="filter-toggle rating tags">
                <span class="landmark">Exclude </span>Ratings
              </dt>
              <dd id="exclude_rating_tags" class="expandable rating tags">
                <ul>
                    <li>
                      <label for="exclude_work_search_rating_ids_10">
                          <input type="checkbox" name="exclude_work_search[rating_ids][]" id="exclude_work_search_rating_ids_10" value="10"/>
                        <span class="indicator" aria-hidden="true"></span><span>General Audiences (17)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_rating_ids_11">
                          <input type="checkbox" name="exclude_work_search[rating_ids][]" id="exclude_work_search_rating_ids_11" value="11"/>
                        <span class="indicator" aria-hidden="true"></span><span>Teen And Up Audiences (10)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_exclude_archive_warning_tags" class="filter-toggle warning tags">
                <span class="landmark">Exclude </span>Warnings
              </dt>
              <dd id="exclude_archive_warning_tags" class="expandable warning tags">
                <ul>
                    <li>
                      <label for="exclude_work_search_archive_warning_ids_16">
                          <input type="checkbox" name="exclude_work_search[archive_warning_ids][]" id="exclude_work_search_archive_warning_ids_16" value="16"/>
                        <span class="indicator" aria-hidden="true"></span><span>No Archive Warnings Apply (22)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_archive_warning_ids_14">
                          <input type="checkbox" name="exclude_work_search[archive_warning_ids][]" id="exclude_work_search_archive_warning_ids_14" value="14"/>
                        <span class="indicator" aria-hidden="true"></span><span>Creator Chose Not To Use Archive Warnings (5)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_exclude_category_tags" class="filter-toggle category tags">
                <span class="landmark">Exclude </span>Categories
              </dt>
              <dd id="exclude_category_tags" class="expandable category tags">
                <ul>
                    <li>
                      <label for="exclude_work_search_category_ids_22">
                          <input type="checkbox" name="exclude_work_search[category_ids][]" id="exclude_work_search_category_ids_22" value="22"/>
                        <span class="indicator" aria-hidden="true"></span><span>F/M (24)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_category_ids_21">
                          <input type="checkbox" name="exclude_work_search[category_ids][]" id="exclude_work_search_category_ids_21" value="21"/>
                        <span class="indicator" aria-hidden="true"></span><span>Gen (6)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_exclude_fandom_tags" class="filter-toggle fandom tags">
                <span class="landmark">Exclude </span>Fandoms
              </dt>
              <dd id="exclude_fandom_tags" class="expandable fandom tags">
                <ul>
                    <li>
                      <label for="exclude_work_search_fandom_ids_65">
                          <input type="checkbox" name="exclude_work_search[fandom_ids][]" id="exclude_work_search_fandom_ids_65" value="65"/>
                        <span class="indicator" aria-hidden="true"></span><span>Avatar: The Last Airbender (27)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_fandom_ids_166591">
                          <input type="checkbox" name="exclude_work_search[fandom_ids][]" id="exclude_work_search_fandom_ids_166591" value="166591"/>
                        <span class="indicator" aria-hidden="true"></span><span>Avatar: Legend of Korra (8)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_exclude_character_tags" class="filter-toggle character tags">
                <span class="landmark">Exclude </span>Characters
              </dt>
              <dd id="exclude_character_tags" class="expandable character tags">
                <ul>
                    <li>
                      <label for="exclude_work_search_character_ids_6854">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_6854" value="6854"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang (Avatar) (25)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_character_ids_38490">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_38490" value="38490"/>
                        <span class="indicator" aria-hidden="true"></span><span>Katara (Avatar) (25)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_character_ids_38489">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_38489" value="38489"/>
                        <span class="indicator" aria-hidden="true"></span><span>Sokka (Avatar) (6)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_character_ids_511038">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_511038" value="511038"/>
                        <span class="indicator" aria-hidden="true"></span><span>Toph Beifong (5)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_character_ids_46350">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_46350" value="46350"/>
                        <span class="indicator" aria-hidden="true"></span><span>Hakoda (Avatar) (4)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_character_ids_6855">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_6855" value="6855"/>
                        <span class="indicator" aria-hidden="true"></span><span>Zuko (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_character_ids_35855">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_35855" value="35855"/>
                        <span class="indicator" aria-hidden="true"></span><span>Mai (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_character_ids_35862">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_35862" value="35862"/>
                        <span class="indicator" aria-hidden="true"></span><span>Suki (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_character_ids_46363">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_46363" value="46363"/>
                        <span class="indicator" aria-hidden="true"></span><span>Momo (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_character_ids_23210310">
                          <input type="checkbox" name="exclude_work_search[character_ids][]" id="exclude_work_search_character_ids_23210310" value="23210310"/>
                        <span class="indicator" aria-hidden="true"></span><span>The Gaang (Avatar) (3)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_exclude_relationship_tags" class="filter-toggle relationship tags">
                <span class="landmark">Exclude </span>Relationships
              </dt>
              <dd id="exclude_relationship_tags" class="expandable relationship tags">
                <ul>
                    <li>
                      <label for="exclude_work_search_relationship_ids_289747">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_289747" value="289747"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang/Katara (Avatar) (24)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_relationship_ids_10491052">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_10491052" value="10491052"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Katara (Avatar) (18)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_relationship_ids_847972">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_847972" value="847972"/>
                        <span class="indicator" aria-hidden="true"></span><span>Katara &amp; Sokka (Avatar) (4)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_relationship_ids_7879435">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_7879435" value="7879435"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Toph Beifong (3)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_relationship_ids_7881982">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_7881982" value="7881982"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Sokka (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_relationship_ids_19683678">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_19683678" value="19683678"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Hakoda (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_relationship_ids_23210403">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_23210403" value="23210403"/>
                        <span class="indicator" aria-hidden="true"></span><span>Hakoda &amp; Katara (Avatar) (3)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_relationship_ids_51124">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_51124" value="51124"/>
                        <span class="indicator" aria-hidden="true"></span><span>Sokka/Suki (Avatar) (2)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_relationship_ids_4232930">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_4232930" value="4232930"/>
                        <span class="indicator" aria-hidden="true"></span><span>Toph Beifong &amp; Katara (2)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_relationship_ids_6782131">
                          <input type="checkbox" name="exclude_work_search[relationship_ids][]" id="exclude_work_search_relationship_ids_6782131" value="6782131"/>
                        <span class="indicator" aria-hidden="true"></span><span>Aang &amp; Bumi II (2)</span>
</label>                    </li>
                </ul>
              </dd>
              <dt id="toggle_exclude_freeform_tags" class="filter-toggle freeform tags">
                <span class="landmark">Exclude </span>Additional Tags
              </dt>
              <dd id="exclude_freeform_tags" class="expandable freeform tags">
                <ul>
                    <li>
                      <label for="exclude_work_search_freeform_ids_43942642">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_43942642" value="43942642"/>
                        <span class="indicator" aria-hidden="true"></span><span>Kataang Week 2020 (27)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_freeform_ids_999888">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_999888" value="999888"/>
                        <span class="indicator" aria-hidden="true"></span><span>Kataang Week (17)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_freeform_ids_60">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_60" value="60"/>
                        <span class="indicator" aria-hidden="true"></span><span>Romance (12)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_freeform_ids_110">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_110" value="110"/>
                        <span class="indicator" aria-hidden="true"></span><span>Fluff (12)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_freeform_ids_4010423">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_4010423" value="4010423"/>
                        <span class="indicator" aria-hidden="true"></span><span>Post-Avatar: The Last Airbender (7)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_freeform_ids_22593651">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_22593651" value="22593651"/>
                        <span class="indicator" aria-hidden="true"></span><span>Post-100 Year War (Avatar TV) (7)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_freeform_ids_6292448">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_6292448" value="6292448"/>
                        <span class="indicator" aria-hidden="true"></span><span>Pre-Avatar: Legend of Korra (6)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_freeform_ids_1160">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_1160" value="1160"/>
                        <span class="indicator" aria-hidden="true"></span><span>Established Relationship (5)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_freeform_ids_1022">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_1022" value="1022"/>
                        <span class="indicator" aria-hidden="true"></span><span>Post-Canon (4)</span>
</label>                    </li>
                    <li>
                      <label for="exclude_work_search_freeform_ids_176">
                          <input type="checkbox" name="exclude_work_search[freeform_ids][]" id="exclude_work_search_freeform_ids_176" value="176"/>
                        <span class="indicator" aria-hidden="true"></span><span>Angst (3)</span>
</label>                    </li>
                </ul>
              </dd>
            <dt class="autocomplete search">
              <label for="work_search_excluded_tag_names">Other tags to exclude</label>
            </dt>
            <dd class="autocomplete search">
              <input class="autocomplete" data-autocomplete-method="/autocomplete/tag" data-autocomplete-hint-text="Start typing for suggestions!" data-autocomplete-no-results-text="(No suggestions found)" data-autocomplete-min-chars="1" data-autocomplete-searching-text="Searching..." type="text" name="work_search[excluded_tag_names]" id="work_search_excluded_tag_names"/>
            </dd>
          </dl>
        </dd>

      <dt class="more heading">
        <h4 class="heading">More Options</h4>
      </dt>

      <dd class="more group">
        <dl>
          <dt id="toggle_work_crossover" class="filter-toggle crossover">Crossovers</dt>
          <dd id="work_crossover" class="expandable">
            <ul>
              <li>
                <label for="work_search_crossover_">
                  <input type="radio" value="" checked="checked" name="work_search[crossover]" id="work_search_crossover_"/>
                  <span class="indicator" aria-hidden="true"></span><span>Include crossovers</span>
</label>              </li>
              <li>
                <label for="work_search_crossover_f">
                  <input type="radio" value="F" name="work_search[crossover]" id="work_search_crossover_f"/>
                  <span class="indicator" aria-hidden="true"></span><span>Exclude crossovers</span>
</label>              </li>
              <li>
                <label for="work_search_crossover_t">
                  <input type="radio" value="T" name="work_search[crossover]" id="work_search_crossover_t"/>
                  <span class="indicator" aria-hidden="true"></span><span>Show only crossovers</span>
</label>              </li>
            </ul>
          </dd>
          <dt id="toggle_work_complete" class="filter-toggle status">Completion Status</dt>
          <dd id="work_complete" class="expandable">
            <ul>
              <li>
                <label for="work_search_complete_">
                  <input type="radio" value="" checked="checked" name="work_search[complete]" id="work_search_complete_"/>
                  <span class="indicator" aria-hidden="true"></span><span>All works</span>
</label>              </li>
              <li>
                <label for="work_search_complete_t">
                  <input type="radio" value="T" name="work_search[complete]" id="work_search_complete_t"/>
                  <span class="indicator" aria-hidden="true"></span><span>Complete works only</span>
</label>              </li>
              <li>
                <label for="work_search_complete_f">
                  <input type="radio" value="F" name="work_search[complete]" id="work_search_complete_f"/>
                  <span class="indicator" aria-hidden="true"></span><span>Works in progress only</span>
</label>              </li>
            </ul>
          </dd>
          <dt id="toggle_work_words" class="filter-toggle words">Word Count</dt>
          <dd id="work_words" class="expandable">
            <dl class="range">
              <dt><label for="work_search_words_from">From</label></dt>
              <dd><input type="text" name="work_search[words_from]" id="work_search_words_from"/></dd>
              <dt><label for="work_search_words_to">To</label></dt>
              <dd><input type="text" name="work_search[words_to]" id="work_search_words_to"/></dd>
            </dl>
          </dd>
          <dt id="toggle_work_dates" class="filter-toggle dates">Date Updated</dt>
          <dd id="work_dates" class="expandable">
            <dl class="range">
              <dt><label for="work_search_date_from">From</label></dt>
              <dd><input class="datepicker" type="text" name="work_search[date_from]" id="work_search_date_from"/></dd>
              <dt><label for="work_search_date_to">To</label></dt>
              <dd><input class="datepicker" type="text" name="work_search[date_to]" id="work_search_date_to"/></dd>
            </dl>
          </dd>

          <dt class="search">
            <label for="work_search_query">Search within results</label>
             <a class="help symbol question modal" title="Work search text help" aria-controls="#modal" href="/help/work-search-text-help.html"><span class="symbol question"><span>?</span></span></a>
          </dt>
          <dd class="search">
            <input type="text" name="work_search[query]" id="work_search_query"/>
          </dd>

          <dt class="language">
            <label for="work_search_language_id">Language</label>
          </dt>
          <dd class="language">
            <select name="work_search[language_id]" id="work_search_language_id"><option value=""></option>
<option value="so">af Soomaali</option>
<option value="afr">Afrikaans</option>
<option value="ar">العربية</option>
<option value="arc">ܐܪܡܝܐ | ארמיא</option>
<option value="hy">հայերեն</option>
<option value="id">Bahasa Indonesia</option>
<option value="ms">Bahasa Malaysia</option>
<option value="bg">Български</option>
<option value="bn">বাংলা</option>
<option value="jv">Basa Jawa</option>
<option value="be">беларуская</option>
<option value="bos">Bosanski</option>
<option value="br">brezhoneg</option>
<option value="ca">Català</option>
<option value="cs">Čeština</option>
<option value="chn">Chinuk Wawa</option>
<option value="cy">Cymraeg</option>
<option value="da">Dansk</option>
<option value="de">Deutsch</option>
<option value="et">eesti keel</option>
<option value="el">Ελληνικά</option>
<option value="en">English</option>
<option value="es">Español</option>
<option value="eo">Esperanto</option>
<option value="eu">Euskara</option>
<option value="fa">فارسی</option>
<option value="fil">Filipino</option>
<option value="fr">Français</option>
<option value="fur">Furlan</option>
<option value="ga">Gaeilge</option>
<option value="gd">Gàidhlig</option>
<option value="gl">Galego</option>
<option value="got">𐌲𐌿𐍄𐌹𐍃𐌺𐌰</option>
<option value="hak">中文-客家话</option>
<option value="ko">한국어</option>
<option value="hau">Hausa | هَرْشَن هَوْسَ</option>
<option value="hi">हिन्दी</option>
<option value="hr">Hrvatski</option>
<option value="ia">Interlingua</option>
<option value="zu">isiZulu</option>
<option value="is">Íslenska</option>
<option value="it">Italiano</option>
<option value="he">עברית</option>
<option value="kat">ქართული</option>
<option value="qkz">Khuzdul</option>
<option value="kir">Кыргызча</option>
<option value="sw">Kiswahili</option>
<option value="ht">kreyòl ayisyen</option>
<option value="fcs">Langue des signes québécoise</option>
<option value="lv">Latviešu valoda</option>
<option value="lb">Lëtzebuergesch</option>
<option value="lt">Lietuvių kalba</option>
<option value="la">Lingua latina</option>
<option value="hu">Magyar</option>
<option value="mk">македонски</option>
<option value="ml">മലയാളം</option>
<option value="mnc">ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ</option>
<option value="mr">मराठी</option>
<option value="mon">ᠮᠣᠩᠭᠣᠯ ᠪᠢᠴᠢᠭ᠌ | Монгол Кирилл үсэг</option>
<option value="my">မြန်မာဘာသာ</option>
<option value="nan">中文-闽南话 臺語</option>
<option value="nl">Nederlands</option>
<option value="ja">日本語</option>
<option value="no">Norsk</option>
<option value="ps">پښتو</option>
<option value="nds">Plattdüütsch</option>
<option value="pl">Polski</option>
<option value="ptBR">Português brasileiro</option>
<option value="ptPT">Português europeu</option>
<option value="pa">ਪੰਜਾਬੀ</option>
<option value="qya">Quenya</option>
<option value="ro">Română</option>
<option value="ru">Русский</option>
<option value="sco">Scots</option>
<option value="sq">Shqip</option>
<option value="sjn">Sindarin</option>
<option value="si">සිංහල</option>
<option value="sk">Slovenčina</option>
<option value="slv">Slovenščina</option>
<option value="gem">Sprēkō Þiudiskō</option>
<option value="sr">српски</option>
<option value="fi">Suomi</option>
<option value="sv">Svenska</option>
<option value="ta">தமிழ்</option>
<option value="th">ไทย</option>
<option value="tqx">Thermian</option>
<option value="bod">བོད་སྐད་</option>
<option value="vi">Tiếng Việt</option>
<option value="tlh">tlhIngan-Hol</option>
<option value="qtp">Toki Pona</option>
<option value="tr">Türkçe</option>
<option value="uk">Українська</option>
<option value="uig">ئۇيغۇر تىلى</option>
<option value="wuu">中文-吴语</option>
<option value="yi">יידיש</option>
<option value="yue">中文-广东话 粵語</option>
<option value="zh">中文-普通话 國語</option></select>
          </dd>
        </dl>
      </dd>
      <dt class="landmark">Submit</dt>
      <dd class="submit actions"><input type="submit" name="commit" value="Sort and Filter"/></dd>
    </dl>

    <div>

      <input type="hidden" name="tag_id" id="tag_id" value="Kataang Week 2020" class="text"/>



    </div>

</fieldset>
  <p class="narrow-shown hidden">
    <a href="#main" id="leave_filters" class="close">
      Top of Work Index
    </a>
  </p>

</form>

<!---/subnav-->

  <h4 class="landmark heading">Pages Navigation</h4><ol role="navigation" aria-label="Pagination" class="pagination actions" title="pagination"><li class="previous" title="previous"><span class="disabled">&#8592; Previous</span></li> <li><span class="current">1</span></li> <li><a rel="next" href="/tags/Kataang%20Week%202020/works?page=2">2</a></li> <li class="next" title="next"><a rel="next" href="/tags/Kataang%20Week%202020/works?page=2">Next &#8594;</a></li></ol>


          <div class="clear"><!--presentational--></div>
        </div>
        <!-- END main -->
      </div>
      <!-- BEGIN footer -->
<div id="footer" role="contentinfo" class="region">
    <h3 class="landmark heading">Footer</h3>
  <ul class="navigation actions" role="navigation">
    <li class="module group">
      <h4 class="heading">About the Archive</h4>
      <ul class="menu">
        <li><a href="/site_map">Site Map</a></li>
        <li><a href="/diversity">Diversity Statement</a></li>
        <li><a href="/tos">Terms of Service</a></li>
        <li><a href="/dmca">DMCA Policy</a> </li>
      </ul>
    </li>
    <li class="module group">
      <h4 class="heading">Contact Us</h4>
      <ul class="menu">
        <li><a href="/abuse_reports/new">Report Abuse</a></li>
        <li><a href="/support">Technical Support and Feedback</a></li>
      </ul>
    </li>
    <li class="module group">
      <h4 class="heading">Development</h4>
      <ul class="menu">
          <li><a href="https://github.com/otwcode/otwarchive/commits/v0.9.301.1">otwarchive v0.9.301.1</a></li>
        <li><a href="/known_issues">Known Issues</a></li>
        <li><a href="http://www.gnu.org/licenses/gpl-2.0.html" title="View License">GPL</a> by the <a href="http://transformativeworks.org/" title="The Organization for Transformative Works">OTW</a></li>
      </ul>
    </li>
  </ul>
</div>
<!-- END footer -->

    </div>
    <!-- check to see if this controller/action allow tinymce before we load the gigantor js; see application_helper -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js" type="text/javascript"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js" type="text/javascript"></script>
<!-- if user has googleapis blocked for some reason we need a fallback -->
<script type="text/javascript">if(typeof jQuery=='undefined'){document.write(unescape("%3Cscript src='/javascripts/jquery.min.js' type='text/javascript'%3E%3C/script%3E"));document.write(unescape("%3Cscript src='/javascripts/jquery-ui.min.js' type='text/javascript'%3E%3C/script%3E"));}</script>


<script type="text/javascript">$j=jQuery.noConflict();</script>
<script src="/javascripts/jquery.scrollTo.min.js+jquery.livequery.min.js+rails.js+application.js+bootstrap,_bootstrap-dropdown.min.js+jquery-shuffle.js+jquery.tokeninput.min.js+jquery.trap.min.js+ao3modal.min.js+js.cookie.min.js+filters.min.js.pagespeed.jc.oz6LPTe6O7.js"></script><script>eval(mod_pagespeed_a8hDjzT3l_);</script>
<script>eval(mod_pagespeed_1nA1vKz9z4);</script>
<script>eval(mod_pagespeed_AKC4FLip6q);</script>
<script>eval(mod_pagespeed_gX7XC77lvT);</script>
<script>eval(mod_pagespeed_5zo0ZWMy4O);</script>
<script>eval(mod_pagespeed_eCCgOhjhYQ);</script>
<script>eval(mod_pagespeed_TU1Ln7LKSh);</script>
<script>eval(mod_pagespeed_qTpbjsXQwh);</script>
<script>eval(mod_pagespeed_R5FGw2ySDb);</script>
<script>eval(mod_pagespeed_rqqFCT3xcT);</script>

<script>eval(mod_pagespeed_Gf_4KFhTvB);</script>


  <script>function isSupported(){var item="localStoragePolyfill";try{localStorage.setItem(item,item);localStorage.removeItem(item);return true;}catch(e){return false;}}function acceptTOS(){if(isSupported()){localStorage.setItem("accepted_tos","20180523");}else{Cookies.set("accepted_tos","20180523",{expires:365});}}$j(document).ready(function(){if(localStorage.getItem("accepted_tos")!=="20180523"&&Cookies.get("accepted_tos")!=="20180523"){$j("body").prepend("<div id=\"tos_prompt\" class=\"hidden\">\n  <h2 class=\"heading\">\n    <span>Archive of Our Own<\/span>\n  <\/h2>\n  <div class=\"agreement\">\n    <p class=\"summary\">\n      On Archive of Our Own (AO3), users can make profiles, create works and\n            other Content, post comments, give Kudos, create Collections and \n            Bookmarks, participate in Challenges, import works, and more. Any \n            information you publish in a comment, profile, work, or Content that you \n            post or import onto AO3 including in summaries, notes and tags, \n            will be accessible by the public (unless you limit access to a work only \n            to those with AO3 Accounts), and it will be available to \n            AO3 personnel. Be mindful when sharing personal information, \n            including  your religious or political views, health, racial background, \n            country of origin, sexual identity and/or personal relationships. To \n            learn more, check out our <a href=\"/tos\">Terms of Service<\/a> and <a href=\"/tos#privacy\">Privacy Policy<\/a>.\n    <\/p>\n\n    <p class=\"confirmation\">\n      <input type=\"checkbox\" id=\"tos_agree\" />\n      <label for=\"tos_agree\">I have read &amp; understood the new Terms of Service and Privacy Policy<\/label>\n    <\/p>\n\n      <p class=\"submit\">\n        <button name=\"button\" type=\"button\" disabled=\"disabled\" id=\"accept_tos\">I agree/consent to its terms<\/button>\n      <\/p>\n\n  <\/div>\n<\/div>\n\n<script>\n//<![CDATA[\n\n  \$j(document).ready(function() {\n    var container = \$j(\"#tos_prompt\");\n    var outer = \$j(\"#outer\");\n    var button = \$j(\"#accept_tos\");\n\n    setTimeout(showTOSPrompt, 1500);\n\n    function showTOSPrompt() {\n      \$j.when(container.fadeIn(500)).done(function() {\n        outer.addClass(\"hidden\").attr(\"aria-hidden\", \"true\");\n      });\n\n      \$j(\"#tos_agree\").on(\"click\", function() {\n        button.attr(\"disabled\", !this.checked);\n        if (this.checked) {\n          button.on(\"click\", function() {\n            acceptTOS();\n            outer.removeClass(\"hidden\").removeAttr(\"aria-hidden\");\n            \$j.when(container.fadeOut(500)).done(function() {\n              container.remove();\n            });\n          });\n        };\n      }).change();\n    };\n  });\n\n//]]]]><![CDATA[>\n<\/script>");}});</script>
  <script>$j(document).ready(function(){var permitted_hosts=["archiveofourown.org","download.archiveofourown.org","insecure.archiveofourown.org","www.archiveofourown.org","insecure-test.archiveofourown.org","test.archiveofourown.org","testdownload.archiveofourown.org"];var current_host=window.location.hostname;if(!permitted_hosts.includes(current_host)&&Cookies.get("proxy_notice")!=="0"&&window.location.protocol!=="file:"){$j("#skiplinks").after("<div id=\"proxy-notice\">\n  <div class=\"userstuff\">\n    <p class=\"important\">Important message:<\/p>\n    <ol>\n      <li>You are using a proxy site that is not part of the Archive of Our Own.<\/li>\n      <li>The entity that set up the proxy site can see what you submit, including your IP address. If you log in through the proxy site, it can see your password.<\/li>\n    <\/ol>\n    <p class=\"important\">重要提示：<\/p>\n    <ol>\n      <li>您使用的是第三方开发的反向代理网站，此网站并非Archive of Our Own - AO3（AO3作品库）原站。<\/li>\n      <li>代理网站的开发者能够获取您上传至该站点的全部内容，包括您的ip地址。如您通过代理登录AO3，对方将获得您的密码。<\/li>\n    <\/ol>\n    <p class=\"submit\"><button class=\"action\" type=\"button\" id=\"proxy-notice-dismiss\">Dismiss Notice<\/button><\/p>\n  <\/div>\n<\/div>\n\n<script>\n//<![CDATA[\n\n  \$j(document).ready(function() {\n    \$j(\"#proxy-notice-dismiss\").on(\"click\", function() {\n      Cookies.set(\"proxy_notice\", \"0\");\n      \$j(\"#proxy-notice\").slideUp();\n    });\n  });\n\n//]]]]><![CDATA[>\n<\/script>");}});</script>

  <script>$j(".datepicker").datepicker({dateFormat:"yy-mm-dd"});</script>

  </body>
</html>
`;
