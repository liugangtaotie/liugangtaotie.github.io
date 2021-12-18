(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{729:function(s,t,a){"use strict";a.r(t);var r=a(2),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"自动化测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化测试"}},[s._v("#")]),s._v(" 自动化测试")]),s._v(" "),a("h3",{attrs:{id:"_1-自动化测试介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-自动化测试介绍"}},[s._v("#")]),s._v(" 1.自动化测试介绍")]),s._v(" "),a("p",[a("strong",[s._v("1.1什么是自动化测试")])]),s._v(" "),a("p",[s._v("自动化测试就是把以人为驱动的测试行为转化为机器执行的一种过程。让软件代替人工测试，可以快速、反复进行。")]),s._v(" "),a("p",[a("strong",[s._v("1.2为什么要进行自动化测试？")])]),s._v(" "),a("p",[s._v("从开发的角度上看，目前出现以下的一个现象：")]),s._v(" "),a("ul",[a("li",[s._v("提测质量不高,bug多\n提测后的1-3天, BUG井喷式出现;\n测试同学抱怨, 改完bug A,以前修复的bug B又复现了; 或者说出现了新的bug C")])]),s._v(" "),a("p",[s._v("增加自动化测试后：")]),s._v(" "),a("ul",[a("li",[s._v("我们为核心功能编写测试后可以保障项目的可靠性")]),s._v(" "),a("li",[s._v("强迫开发者编写更容易被测试的代码，提高代码质量")]),s._v(" "),a("li",[s._v("编写的测试有文档的作用，方便维护")]),s._v(" "),a("li",[s._v("从测试用例能了解需求，方便改造。")])]),s._v(" "),a("p",[a("strong",[s._v("1.3 什么样的项目适合自动化测试")])]),s._v(" "),a("p",[s._v("自动化测试如此优秀，那是不是所有项目都适合进行自动化测试？答案是否定的，因为有成本。在实施自动化测试之前需要对软件开发过程进行分析，基于投入产出来判断是否适合实施自动化测试。实施自动化测试的项目通常需要同时满足以下条件：")]),s._v(" "),a("ul",[a("li",[s._v("需求变动不频繁，")]),s._v(" "),a("li",[s._v("项目周期足够长")]),s._v(" "),a("li",[s._v("自动化测试脚本可重复使用")]),s._v(" "),a("li",[s._v("代码规范可测试")])]),s._v(" "),a("p",[s._v("如果需求变动过于频繁，维护测试脚本的成本太高；")]),s._v(" "),a("p",[s._v("如果项目周期比较短，没有足够的时间去支持自动化测试的过程；")]),s._v(" "),a("p",[s._v("如果测试脚本重复使用率低，耗费的精力大于创造的价值，不值得；")]),s._v(" "),a("p",[s._v("如果代码不规范，可测试性差，那自动化测试实施起来会比较困难。")]),s._v(" "),a("h3",{attrs:{id:"_2-简单介绍测试分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-简单介绍测试分类"}},[s._v("#")]),s._v(" 2.简单介绍测试分类")]),s._v(" "),a("p",[a("strong",[s._v("2.1白盒测试和黑盒测试")])]),s._v(" "),a("p",[s._v("黑盒测试：一般也被称为功能测试，黑盒测试要测试人员将程序看做一个整体，不考虑其内部机构和特性，只是按照期望验证程序是否正常工作（测试人员）")]),s._v(" "),a("p",[s._v("白盒测试：是基于代码本身的测试，一般是指代码逻辑结构测试.")]),s._v(" "),a("p",[a("strong",[s._v("2.2测试分类")])]),s._v(" "),a("p",[s._v("单元测试（unit Test）：针对程序中最小可测试单元（一个函数、一个模块、一个类等）进行正确性检验的测试工作。")]),s._v(" "),a("p",[s._v("集成测试：在单元测试的基础上，对单元模块进行组装测试。它是为了检测在模块交互中导致模块交互错误的情况。")]),s._v(" "),a("p",[s._v("端到端测试（E2E）：属于黑盒测试，用来测试一个应用从头到尾的流程是否和设计的一样，从一个用户的角度出发，认为整个系统都是一个黑盒，只有ui会暴露给用户。")]),s._v(" "),a("h3",{attrs:{id:"_3-技术选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-技术选型"}},[s._v("#")]),s._v(" 3.技术选型")]),s._v(" "),a("p",[s._v("目前前端整体的测试框架较为常用的有：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Karma")])]),s._v(" "),a("li",[a("p",[s._v("Mocha")])]),s._v(" "),a("li",[a("p",[s._v("Jest")])])]),s._v(" "),a("p",[a("strong",[s._v("Karma")]),s._v("：\nKarma是一个简单的javascript测试工具，为前端自动化测试提供了跨浏览器测试的能力，可以在浏览器中执行测试用例")]),s._v(" "),a("p",[a("strong",[s._v("Mocha")]),s._v("：\n仅仅是运行器，需要配合其他库一起使用，像chai、sinon…，需要配置很多东西。")]),s._v(" "),a("p",[a("strong",[s._v("Jest")]),s._v("：\nJest 是Facebook推出的一款测试框架，Jest的一个理念是提供一套完整集成的“零配置”测试体验。")]),s._v(" "),a("ul",[a("li",[s._v("包含单元测试运行器、断言库、Mock库、jsdom等")]),s._v(" "),a("li",[s._v("内置代码覆盖率报告")]),s._v(" "),a("li",[s._v("可以和typescript一同使用")]),s._v(" "),a("li",[s._v("零配置，开箱即用")])]),s._v(" "),a("p",[s._v("​    "),a("strong",[s._v("vue项目测试选型")])]),s._v(" "),a("p",[s._v("vue 提供单元测试实用工具库Vue Test Utils、集成了Jjest.")]),s._v(" "),a("p",[s._v("综合目前市面上的轮子和公司的架构，我们技术选型为Jest.")]),s._v(" "),a("h3",{attrs:{id:"_4-jest使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-jest使用"}},[s._v("#")]),s._v(" 4.Jest使用")]),s._v(" "),a("p",[a("strong",[s._v("4.1 vue中集成Jest")])]),s._v(" "),a("p",[s._v("通过vue官方提供的脚手架@vue-cli 创建一个项目，选择jest单元测试")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("vue init webpack\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("4.2 Jest配置")])]),s._v(" "),a("p",[s._v("jest.config.js 进行相关配置(以下是脚手架生成的)")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  rootDir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  moduleFileExtensions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  moduleNameMapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^@/(.*)$'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<rootDir>/src/$1'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  transform"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^.+\\\\.js$'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<rootDir>/node_modules/babel-jest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// babel-jest 处理js文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.*\\\\.(vue)$'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<rootDir>/node_modules/vue-jest'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue-jest 处理vue文件")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  snapshotSerializers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<rootDir>/node_modules/jest-serializer-vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  setupFiles"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<rootDir>/test/unit/setup'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// mapCoverage: true, 这项需要删掉，不然会报错")]),s._v("\n  collectCoverage"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否生成覆盖率")]),s._v("\n  coverageDirectory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<rootDir>/test/unit/coverage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Jest输出覆盖信息文件的目录。")]),s._v("\n  collectCoverageFrom"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 统计覆盖率信息来源文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/**/*.{js,vue}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!src/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!src/router/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!**/node_modules/**'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"verbose"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//脚手架生成的配置文件还需要加上该配置")]),s._v("\n    testURL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[a("strong",[s._v("4.3 Vue Test Utils")])]),s._v(" "),a("p",[s._v("​      在单元测试中我们无法避免的需要对DOM进行抓取，或者对组件进行挂载，触发DOM的事件等。原生的"),a("code",[s._v("querySelector")]),s._v("以及"),a("code",[s._v("event")]),s._v("会显得非常的麻烦。")]),s._v(" "),a("p",[s._v("​      Vue Test Utils是 Vue.js 官方的单元测试实用工具库，为jest和vue提供了一个桥梁，暴露出一些接口，让我们更加方便的通过Jest为Vue应用编写单元测试")]),s._v(" "),a("p",[s._v("渲染组件方法：shallow、mount、render")]),s._v(" "),a("p",[s._v("使用：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev @vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("测试：HelloWorld.spec.js")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" HelloWorld "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/components/HelloWorld'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" mount "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vue/test-utils'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//通过 mount 方法来创建包裹器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloWorld.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//于检查已存在的元素")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'has a button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//校验data数据")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'has a button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("strong",[s._v("4.4 Jest 覆盖率")])]),s._v(" "),a("p",[s._v("​     这里我们可以看到每个"),a("code",[s._v("spec")]),s._v("都被执行过一次了，如果遇到哪个用例中的断言不通过则会显示相应的"),a("code",[s._v("it")]),s._v("中的名字，并且把断言所期望和收到的值都打印出来。\n​     在所有用例都跑过之后，会在我们项目下生成一个"),a("code",[s._v("coverage")]),s._v("目录，里面会对应我们每一个项目中的组件生成一个"),a("code",[s._v("html")]),s._v("文件来标记我们的代码执行情况")]),s._v(" "),a("p",[s._v("执行npm run unit 命令运行单元测试后，控制台会打印一个测试覆盖率报告")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PASS")]),s._v("  test\\unit\\specs\\HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("spec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue\n    √ should render correct "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("contents")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Stmts    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Branch   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Funcs    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" Lines    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Uncovered Line #s   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" All files        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vue   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("%stmts是语句覆盖率（statement coverage）：每个语句执行率")]),s._v(" "),a("p",[s._v("%Branch分支覆盖率（branch coverage）：每个if代码块执行率")]),s._v(" "),a("p",[s._v("%Funcs函数覆盖率（function coverage）：每个函数执行率")]),s._v(" "),a("p",[s._v("%Lines行覆盖率（line coverage）：每一行执行率")]),s._v(" "),a("p",[a("strong",[s._v("4.5 定义测试")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("describe:定义一个测试套件(test suite)")])]),s._v(" "),a("li",[a("p",[s._v("it：定义一个测试（test）")])]),s._v(" "),a("li",[a("p",[s._v("expect：执行一个断言")])]),s._v(" "),a("li",[a("p",[s._v("jest.fn()：创造mock函数")]),s._v(" "),a("p",[s._v("钩子函数")])]),s._v(" "),a("li",[a("p",[s._v("beforeAll 在所有测试用例执行前执行")])]),s._v(" "),a("li",[a("p",[s._v("afteraAll 在所有测试用例执行后")])]),s._v(" "),a("li",[a("p",[s._v("beforeEach 在每个用例执行前")])]),s._v(" "),a("li",[a("p",[s._v("afterEach 在每个用例执行后")])])]),s._v(" "),a("p",[a("strong",[s._v("4.6 Jest 常用匹配器")])]),s._v(" "),a("p",[s._v("普通匹配器")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("toEqual 验证两个值是否相等")])]),s._v(" "),a("li",[a("p",[s._v("toBe 验证两个值是否严格相等")])]),s._v(" "),a("li",[a("p",[s._v("not.toBe 测试相反的匹配")])]),s._v(" "),a("li",[a("p",[s._v("toHavingLength 验证长度")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("toBeDefined")]),s._v(" 验证一个值是否被定义")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("toBeTruthy")]),s._v(" 匹配任何 "),a("code",[s._v("if")]),s._v(" 语句为真")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("toBeFalsy")]),s._v(" 匹配任何 "),a("code",[s._v("if")]),s._v(" 语句为假")])]),s._v(" "),a("li",[a("p",[s._v("toBeCloseTo 验证浮点数相等")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("toMatch")]),s._v(" 匹配 正则表达式的字符串")])]),s._v(" "),a("li",[a("p",[s._v("toContain 验证一个list中是否包含某一项")])])]),s._v(" "),a("p",[a("strong",[s._v("4.7 mock 数据引入")])]),s._v(" "),a("p",[s._v("参考")]),s._v(" "),a("p",[s._v("Jest 官网：https://jestjs.io/docs/zh-Hans/using-matchers")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vue-test-utils.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue Test Utils"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("https://zhuanlan.zhihu.com/p/84405914")]),s._v(" "),a("p",[s._v("https://segmentfault.com/a/1190000016267231")])])}),[],!1,null,null,null);t.default=e.exports}}]);