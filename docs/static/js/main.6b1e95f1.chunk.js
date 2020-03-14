(this["webpackJsonpdependency-differ"]=this["webpackJsonpdependency-differ"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),s=t.n(o),c=(t(9),t(1)),l=(t(10),function(e){return e.split("    ")[1]}),i=function(e){return e.match(/^\+\s/)},p=function(e){var n=e.results;return r.a.createElement("table",{className:"table is-bordered is-fullwidth"},r.a.createElement("tbody",null,n.map((function(e,n){var t=e.split(":"),a=Object(c.a)(t,2),o=a[0],s=a[1];return o=o.replace(/"/g,"").trim(),(s=s.replace(/"/g,"").trim()).endsWith(",")&&(s=s.slice(0,-1)),function(e){return e.match(/^(\^|~)?\d/)}(s)?r.a.createElement("tr",{key:n},r.a.createElement("td",null,o),r.a.createElement("td",null,s)):null}))))},d=function(){var e=r.a.useState(sessionStorage.getItem("diff")||""),n=Object(c.a)(e,2),t=n[0],a=n[1],o=r.a.useState(null),s=Object(c.a)(o,2),d=s[0],u=s[1],b=r.a.useCallback((function(){var e=t.split("\n"),n=function(e){return e.filter((function(n){if(!i(n))return!1;var t=n.split(":")[0].slice(1);return 1===e.filter((function(e){return e.includes(t)})).length})).map(l).sort()}(e),a=function(e){return e.filter((function(n){if(!n.match(/^-\s/))return!1;var t=n.split(":")[0].slice(1);return 1===e.filter((function(e){return e.includes(t)})).length})).map(l).sort()}(e),r=function(e){return e.filter((function(n){if(!n.match(/^(\+|-)\s/))return!1;var t=n.split(":")[0].slice(1);return e.filter((function(e){return e.includes(t)})).length>1})).filter((function(e){return i(e)})).map((function(e){return l(e)})).sort()}(e);u({added:n,removed:a,changed:r})}),[t]);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Dependency differ"),r.a.createElement("p",{className:"content"},"Paste a unified diff of your ",r.a.createElement("code",null,"package.json")," in the textarea or ",r.a.createElement("a",{onClick:function(){a('vwos-frontend-react-app/package.json | 114 ++++++++++++++++++++---------------\n 1 file changed, 65 insertions(+), 49 deletions(-)\n\ndiff --git a/vwos-frontend-react-app/package.json b/vwos-frontend-react-app/package.json\nindex c13fec3ef..5201256fb 100644\n--- a/vwos-frontend-react-app/package.json\n+++ b/vwos-frontend-react-app/package.json\n@@ -21,104 +21,120 @@\n     "build-pkw": "webpack --config ./config/pkw/webpack.config.production.js --optimize-minimize",\n     "build-nfz": "webpack --config ./config/nfz/webpack.config.production.js --optimize-minimize",\n     "start-pkw": "webpack-dev-server --config=config/pkw/webpack.config.development.js --port 3000 --host 0.0.0.0",\n-    "start-nfz": "webpack-dev-server --config=config/nfz/webpack.config.development.js --port 3000 --host 0.0.0.0",\n+    "start-nfz": "webpack-dev-server --config=config/nfz/webpack.config.development.js --port 3001 --host 0.0.0.0",\n+    "pull-template": "node ./server-scripts/write-template.babel --dev",\n     "lint": "eslint src/app --fix",\n     "test": "jest",\n     "prettier": "prettier --write src/app/**/*.*",\n     "csscomb": "csscomb src/app",\n-    "storybook": "start-storybook -p 9091"\n+    "storybook-pkw": "cross-env STORYBOOK_APP_ENV=pkw start-storybook -p 9091",\n+    "storybook-nfz": "cross-env STORYBOOK_APP_ENV=nfz start-storybook -p 9091"\n   },\n   "devDependencies": {\n-    "@storybook/addon-actions": "^4.1.4",\n-    "@storybook/addon-info": "^4.1.4",\n-    "@storybook/addons": "^4.1.4",\n-    "@storybook/react": "^4.1.4",\n+    "@babel/cli": "^7.2.3",\n+    "@babel/core": "^7.2.2",\n+    "@babel/plugin-proposal-class-properties": "^7.2.3",\n+    "@babel/plugin-proposal-decorators": "^7.2.3",\n+    "@babel/plugin-proposal-export-namespace-from": "^7.2.0",\n+    "@babel/plugin-proposal-function-sent": "^7.2.0",\n+    "@babel/plugin-proposal-numeric-separator": "^7.2.0",\n+    "@babel/plugin-proposal-throw-expressions": "^7.2.0",\n+    "@babel/plugin-syntax-decorators": "^7.2.0",\n+    "@babel/plugin-syntax-dynamic-import": "^7.2.0",\n+    "@babel/plugin-transform-destructuring": "^7.2.0",\n+    "@babel/plugin-transform-runtime": "^7.2.0",\n+    "@babel/preset-env": "^7.2.3",\n+    "@babel/preset-react": "^7.0.0",\n+    "@hot-loader/react-dom": "^16.9.0-4.12.11",\n+    "@storybook/addon-actions": "^5.0.9",\n+    "@storybook/addon-knobs": "^5.0.9",\n+    "@storybook/addon-links": "^5.0.9",\n+    "@storybook/addons": "^5.0.9",\n+    "@storybook/react": "^5.0.9",\n     "autoprefixer": "8.6.5",\n-    "babel-cli": "6.26.0",\n-    "babel-eslint": "8.2.6",\n-    "babel-jest": "22.4.4",\n-    "babel-loader": "7.1.5",\n-    "babel-plugin-syntax-decorators": "6.13.0",\n-    "babel-plugin-transform-decorators": "6.24.1",\n-    "babel-plugin-transform-decorators-legacy": "1.3.5",\n-    "babel-plugin-transform-runtime": "6.23.0",\n-    "babel-polyfill": "6.26.0",\n-    "babel-preset-env": "1.7.0",\n-    "babel-preset-react": "6.24.1",\n-    "babel-preset-react-native": "4.0.1",\n-    "babel-preset-stage-2": "6.24.1",\n-    "clean-css-brunch": "2.0.0",\n+    "babel-core": "^7.0.0-bridge.0",\n+    "babel-eslint": "^10.0.1",\n+    "babel-jest": "^24.8.0",\n+    "babel-loader": "^8.0.5",\n+    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",\n+    "babel-polyfill": "^6.26.0",\n+    "change-case": "^3.1.0",\n     "clean-webpack-plugin": "0.1.19",\n     "copy-webpack-plugin": "4.5.1",\n-    "copyfilemon-brunch": "3.3.0",\n-    "css-brunch": "2.6.1",\n-    "css-loader": "0.28.11",\n+    "core-js": "^3.1.3",\n+    "cross-env": "^5.2.0",\n+    "css-loader": "^2.1.0",\n     "csscomb": "4.2.0",\n+    "dotenv": "^7.0.0",\n     "dotenv-webpack": "1.5.7",\n-    "enzyme": "3.6.0",\n-    "enzyme-adapter-react-16": "1.5.0",\n+    "enzyme": "^3.8.0",\n+    "enzyme-adapter-react-16": "^1.7.1",\n     "eslint": "5.6.0",\n-    "eslint-config-airbnb": "17.0.0",\n     "eslint-loader": "2.1.1",\n-    "eslint-plugin-import": "2.14.0",\n+    "eslint-plugin-import": "^2.14.0",\n     "eslint-plugin-jsx-a11y": "6.1.1",\n     "eslint-plugin-prettier": "2.6.2",\n     "eslint-plugin-react": "7.11.1",\n-    "extract-text-webpack-plugin": "4.0.0-beta.0",\n     "file-loader": "1.1.11",\n     "html-webpack-plugin": "^3.2.0",\n     "husky": "0.14.3",\n     "ignore-loader": "0.1.2",\n-    "javascript-brunch": "2.0.0",\n-    "jest": "22.4.3",\n-    "jest-fetch-mock": "^1.6.6",\n+    "jest": "^24.8.0",\n+    "jest-fetch-mock": "^2.1.0",\n     "json-schema-faker": "0.5.0-rc15",\n     "json-server": "0.14.0",\n-    "lint-staged": "^8.0.4",\n+    "lint-staged": "^8.1.6",\n+    "mini-css-extract-plugin": "0.8.0",\n     "node-fetch": "2.2.0",\n-    "node-sass": "4.9.3",\n+    "node-sass": "^4.12.0",\n     "npm-run-all": "4.1.2",\n     "optimist": "0.6.1",\n     "postcss-loader": "2.1.6",\n     "prettier": "1.14.3",\n     "prop-types": "15.6.2",\n     "raw-loader": "0.5.1",\n-    "react-hot-loader": "4.3.11",\n+    "react-hot-loader": "4.11.0",\n     "redux-devtools-extension": "2.13.5",\n     "redux-logger": "3.0.6",\n+    "regenerator-runtime": "^0.13.1",\n     "sass-loader": "7.1.0",\n     "storybook-addon-specifications": "2.1.2",\n-    "storybook-readme": "3.3.0",\n+    "storybook-readme": "^5.0.8",\n     "style-loader": "0.21.0",\n-    "stylelint": "9.5.0",\n+    "stylelint": "^10.1.0",\n     "stylelint-config-recommended-scss": "3.2.0",\n     "stylelint-config-standard": "18.2.0",\n     "stylelint-scss": "3.3.1",\n     "uglifyjs-webpack-plugin": "1.3.0",\n-    "webpack": "4.20.0",\n+    "url-loader": "1.1.2",\n+    "webpack": "^4.35.2",\n+    "webpack-bundle-analyzer": "^3.5.0",\n     "webpack-cli": "3.1.1",\n     "webpack-dev-middleware": "3.4.0",\n-    "webpack-dev-server": "3.1.9",\n-    "webpack-manifest-plugin": "2.0.4",\n+    "webpack-dev-server": "^3.1.14",\n+    "webpack-manifest-plugin": "^2.0.4",\n     "webpack-merge": "^4.1.4",\n     "webpack-notifier": "1.6.0"\n   },\n   "dependencies": {\n+    "@babel/register": "7.4.4",\n+    "atob": "^2.1.2",\n     "bodymovin": "4.13.0",\n+    "btoa": "^1.2.1",\n     "classnames": "2.2.6",\n     "history": "4.7.2",\n     "isomorphic-fetch": "2.2.1",\n-    "jwt-decode": "^2.2.0",\n-    "lodash": "4.17.11",\n+    "jwt-decode": "2.2.0",\n+    "lodash": "^4.17.14",\n     "moment": "2.22.1",\n     "numeral": "2.0.6",\n-    "query-string": "^6.2.0",\n-    "react": "^16.6.3",\n-    "react-click-outside": "^3.0.1",\n-    "react-custom-scroll": "^4.0.0",\n-    "react-datepicker": "1.6.0",\n-    "react-dom": "^16.6.3",\n-    "react-redux": "5.0.7",\n+    "react": "16.8.6",\n+    "react-click-outside": "3.0.1",\n+    "react-custom-scroll": "4.0.1",\n+    "react-datepicker": "1.8.0",\n+    "react-dom": "16.8.6",\n+    "react-lottie": "^1.2.3",\n+    "react-redux": "6.0.1",\n     "react-responsive-carousel": "3.1.42",\n     "react-router": "4.3.1",\n     "react-router-dom": "4.3.1",\n@@ -126,7 +142,7 @@\n     "react-scroll": "1.7.10",\n     "react-transition-group": "2.4.0",\n     "redux": "4.0.0",\n-    "redux-form": "7.4.2",\n+    "redux-form": "8.2.3",\n     "redux-thunk": "2.3.0",\n     "uuid": "3.3.2"\n   }\n')}},"use an example file"),"."),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{rows:15,className:"textarea",placeholder:"Unified diff",value:t,onChange:function(e){var n=e.target.value;sessionStorage.setItem("diff",n),a(n)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{disabled:!t,className:"button is-primary",onClick:b},"Go!"))),d&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,d.removed.length," dependencies removed"),r.a.createElement(p,{results:d.removed}),r.a.createElement("h3",null,d.added.length," dependencies added"),r.a.createElement(p,{results:d.added}),r.a.createElement("h3",null,d.changed.length," dependencies changed"),r.a.createElement(p,{results:d.changed}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.6b1e95f1.chunk.js.map