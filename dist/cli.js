#!/usr/bin/env node
module.exports=function(e){function r(s){if(t[s])return t[s].exports;var a=t[s]={exports:{},id:s,loaded:!1};return e[s].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function s(e){var r=l(e);a(r.statistics),r.valid&&(process.stdout.write("\nNo errors found.\n\n"),process.exit(0)),process.stdout.write("\nErrors found.\n\n"),process.stderr.write(JSON.stringify(r.errors,null,"    ")),process.exit(1)}function a(e){var r=["Response schemas with examples found: "+e.responseSchemasWithExamples,"Response examples without schema found: "+e.responseExamplesWithoutSchema,"Total examples found: "+e.responseExamplesTotal].join("\n");process.stdout.write(r+"\n")}var n=t(1).version,o=t(2),i=t(3),l=i.validateFile;o.version(n).arguments("<filePath>").description("Validate embedded examples in Swagger-JSONs").action(function(e){return s(e)}),o.parse(process.argv)},function(e,r){e.exports={name:"swagger-examples-validator",version:"0.5.0",description:"Validates embedded examples in Swagger-JSONs",main:"dist/index.js",bin:{"swagger-examples-validator":"dist/cli.js"},scripts:{build:"npm run build:clean && npm run build:webpack","build:clean":"rimraf dist","build:webpack":"webpack --bail --progress --profile --config ./webpack/config.babel.js",coverage:'rimraf ./coverage && nyc --reporter=lcov --reporter=text -x "dist/**/*" -x "test/**/*.js" npm test',coveralls:"cat ./coverage/lcov.info | coveralls",test:"npm run build && npm run test:mocha","test:mocha":'BABEL_DISABLE_CACHE=1 mocha --require "babel-register" --require "./test/util/setup-tests" --recursive "./test/specs/**/*.js"',release:"npm run build && npm run release:stage-artifacts && standard-version -a","release:stage-artifacts":"git add dist/*"},repository:{type:"git",url:"git+https://github.com/codekie/swagger-examples-validator.git"},keywords:["swagger","json","validate","examples"],author:"Josua Amann",license:"MIT",bugs:{url:"https://github.com/codekie/swagger-examples-validator/issues"},homepage:"https://github.com/codekie/swagger-examples-validator#readme",devDependencies:{"babel-cli":"6.23.0","babel-core":"6.23.1","babel-eslint":"7.1.1","babel-loader":"6.3.2","babel-plugin-transform-es2015-classes":"6.23.0","babel-plugin-transform-es2015-parameters":"6.23.0","babel-plugin-transform-object-rest-spread":"6.23.0","babel-polyfill":"6.23.0","babel-preset-es2015":"6.22.0","babel-preset-es2015-webpack":"6.4.3","babel-register":"6.23.0",chai:"3.5.0",coveralls:"2.11.16",eslint:"3.15.0","eslint-loader":"1.6.1","json-loader":"0.5.4",mocha:"3.2.0","mocha-lcov-reporter":"1.2.0",nyc:"10.1.2",rimraf:"2.6.0","standard-version":"4.0.0",webpack:"1.14.0"},dependencies:{ajv:"4.11.3",commander:"2.9.0","jsonpath-plus":"0.16.0"}}},function(e,r){e.exports=require("commander")},function(e,r,t){"use strict";function s(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function a(e){var r=o(e);return i(r,e)}function n(e){var r=JSON.parse(f.readFileSync(e,"utf-8"));return a(r)}function o(e){return v({json:e,path:w,resultType:"path"})}function i(e,r){var t=h(),a=u(e),n=Object.keys(a),o=l({schemaPaths:n}),i={valid:!0,statistics:o};return n.forEach(function(e){var n,l=a[e],c=d({validator:t,jsonSchema:r,pathResponseSchema:e,pathsExamples:l,statistics:o});if(c.length){i.valid=!1;var p=i.errors;p||(p=[],i.errors=p),(n=i.errors).splice.apply(n,[p.length-1,0].concat(s(c)))}}),i}function l(e){var r=e.schemaPaths;return{responseSchemasWithExamples:r.length,responseExamplesTotal:0,responseExamplesWithoutSchema:0}}function c(e,r){return v({json:r,path:e,wrap:!1,resultType:"value"})}function p(e,r){var t=v({json:r,path:e,flatten:!0,wrap:!1,resultType:"value"});return Array.isArray(t)?t:[t]}function u(e){return e.reduce(function(e,r){var t=m(r);return e[t]=r,e},{})}function d(e){var r=e.validator,t=e.jsonSchema,a=e.pathResponseSchema,n=e.pathsExamples,o=e.statistics,i=[],l=c(a,t),u=p(n,t);return o.responseExamplesTotal+=u.length,l?u.reduce(function(e,t,a){var o=r.validate(l,t);return o?e:e.concat.apply(e,s(r.errors.map(function(e){var r=n+(u.length>1?"["+a+"]":"");return e.examplePath=v.toPointer(v.toPathArray(r)),e})))},i):(o.responseSchemasWithExamples--,o.responseExamplesWithoutSchema++,i)}function m(e){var r=v.toPathArray(e).slice(),t=r.lastIndexOf(x);return r.splice(t,r.length-t,g),v.toPathString(r)}function h(){return new b({allErrors:!0})}Object.defineProperty(r,"__esModule",{value:!0});var f=t(4),v=t(5),b=t(6);r.default=a,r.validateFile=n;var g="schema",x="examples",w="$.."+x+".application/json"},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("jsonpath-plus")},function(e,r){e.exports=require("ajv")}]);
//# sourceMappingURL=cli.js.map