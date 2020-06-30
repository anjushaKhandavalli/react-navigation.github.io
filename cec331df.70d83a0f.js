(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{420:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(9),a=(n(0),n(488)),o={id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},c={id:"version-5.x/testing",title:"Testing with Jest",description:"Testing code using React Navigation takes some setup since we need to mock some native dependencies used in the navigators. We recommend using [Jest](https://jestjs.io) to write unit tests.",source:"@site/versioned_docs/version-5.x/testing.md",permalink:"/docs/testing",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/testing.md",version:"5.x",sidebar_label:"Testing with Jest",sidebar:"version-5.x/docs",previous:{title:"State persistence",permalink:"/docs/state-persistence"},next:{title:"Type checking with TypeScript",permalink:"/docs/typescript"}},s=[{value:"Mocking native modules",id:"mocking-native-modules",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Testing code using React Navigation takes some setup since we need to mock some native dependencies used in the navigators. We recommend using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io"}),"Jest")," to write unit tests."),Object(a.b)("h2",{id:"mocking-native-modules"},"Mocking native modules"),Object(a.b)("p",null,"To be able to test React Navigation components, we need to mock the following dependencies including native code:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-native-reanimated")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"react-native-gesture-handler"))),Object(a.b)("p",null,"To add the mocks, create a file ",Object(a.b)("inlineCode",{parentName:"p"},"jest/setup.js")," (or any other file name of your choice) and paste the following code in it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import 'react-native-gesture-handler/jestSetup';\n\njest.mock('react-native-reanimated', () => {\n  const Reanimated = require('react-native-reanimated/mock');\n\n  // The mock for `call` immediately calls the callback which is incorrect\n  // So we override it with a no-op\n  Reanimated.default.call = () => {};\n\n  return Reanimated;\n});\n\n// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing\njest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');\n")),Object(a.b)("p",null,"Then we need to use this setup file in our jest config. You can add it under ",Object(a.b)("inlineCode",{parentName:"p"},"setupFiles")," option in a ",Object(a.b)("inlineCode",{parentName:"p"},"jest.config.js")," file or the ",Object(a.b)("inlineCode",{parentName:"p"},"jest")," key in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "preset": "react-native",\n  "setupFiles": [\n    "<rootDir>/jest/setup.js"\n  ],\n}\n')),Object(a.b)("p",null,"Make sure that the path to the file in ",Object(a.b)("inlineCode",{parentName:"p"},"setupFiles")," is correct. Jest will run these files before running your tests, so it's the best place to put your global mocks."),Object(a.b)("p",null,"If you're not using Jest, then you'll need to mock these modules according to the test framework you are using."))}u.isMDXComponent=!0},488:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);