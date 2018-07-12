"use strict";var precacheConfig=[["/index.html","9c501c7fdd59885795b1d292fc12149a"],["/static/js/main.3e37d86a.js","529e580cbeff8cb95184edd2e1d45db2"],["/static/media/angular.48ae79d9.svg","48ae79d99d69739a8022593da1ece32f"],["/static/media/appartoo.b006f22d.png","b006f22db9fee7703fcbbeb7f4d1d440"],["/static/media/chai.16809aa7.svg","16809aa7430829676bea374431cd5308"],["/static/media/circleci.40237d6c.svg","40237d6c98ca8ef16081bd3d49d9c8fe"],["/static/media/cli.fd880ec4.png","fd880ec4e1aaae15ff16364fd3a9d9c1"],["/static/media/css.dab2dd4f.svg","dab2dd4fe01f8aadddc796009590583d"],["/static/media/doctrine.4ea9f70c.svg","4ea9f70c364807d8ea077421c907b470"],["/static/media/express.c6bab64b.svg","c6bab64b183f96aa47077fd3db37afd0"],["/static/media/git.1190a19c.svg","1190a19ce3cc940741a60137a1e074cb"],["/static/media/github.ce89173e.svg","ce89173e3842fb91835a9cc8605a5ecc"],["/static/media/hibernate.3b702732.svg","3b702732144121a568187011d65c0b29"],["/static/media/html.454a400c.png","454a400ca987d4271e54045982ea3876"],["/static/media/java.bcfad0f2.svg","bcfad0f2c3e9c170d9e85e09a061d650"],["/static/media/javascript.891a71b9.svg","891a71b9a98f1d58491e1b06c4d356a2"],["/static/media/junit.b7667e98.png","b7667e98074f01030333716b521dcb7d"],["/static/media/mocha.ae200940.svg","ae200940324d4cadc039f6687e94f68e"],["/static/media/mysql.f80a91ba.svg","f80a91ba03fbf0e99ea6949aa3a6399e"],["/static/media/nginx.ec56c8e9.svg","ec56c8e9b19a00590fc8379efae8c34a"],["/static/media/nodejs.a1231528.svg","a123152868245dee71c441124a98ac3e"],["/static/media/php.7634d1a3.svg","7634d1a3c06643e9394adc4ba35d7d2e"],["/static/media/postgres.d7c985e7.svg","d7c985e7cca077dc2d77f89a66573e35"],["/static/media/python.146716bd.svg","146716bdf1a351db5705ec1e6a25ed08"],["/static/media/react.4009eef3.svg","4009eef3b3e291f296e71962c70895c5"],["/static/media/redux.aa0a3376.svg","aa0a337603611296524a666b62a9ff23"],["/static/media/sass.b446ca5a.svg","b446ca5a397c1ef6fb94cd02c4e94335"],["/static/media/sequelize.43c9d125.svg","43c9d125de48e59cb29a88dd1b20bc46"],["/static/media/spring.449e8efb.svg","449e8efbf3e642eecc4d8e0b1fe7cb1d"],["/static/media/symfony.ed9c8446.svg","ed9c8446eae6ca2ce3e757d4466eeec6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});