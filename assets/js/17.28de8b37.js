(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{543:function(s,a,t){s.exports=t.p+"assets/img/staticTwo.a444ed5d.jpeg"},544:function(s,a,t){s.exports=t.p+"assets/img/staticThree.b5217d34.jpeg"},545:function(s,a,t){s.exports=t.p+"assets/img/staticOne.93b34eab.jpeg"},546:function(s,a,t){s.exports=t.p+"assets/img/jenkinsSlave.57113b05.png"},547:function(s,a,t){s.exports=t.p+"assets/img/staticFour.46c4ca16.jpeg"},639:function(s,a,t){"use strict";t.r(a);var r=t(2),n=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx",{attrs:{changeTime:"5000"}}),s._v(" "),a("h2",{attrs:{id:"_1-如何配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何配置"}},[s._v("#")]),s._v(" 1. 如何配置")]),s._v(" "),a("ul",[a("li",[s._v("在src/api/appConfig.ts里面配置")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// xxx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BASE_SERVICE_PATH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxx/hcn-web/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("并在src/api/api.ts里面加入：")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 图片请求（所有静态图片）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("miniImageUrl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BASE_SERVICE_PATH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mini_images/images/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("如下图：\n"),a("img",{attrs:{src:t(543),alt:"Image text"}})])]),s._v(" "),a("li",[a("p",[s._v("在main.ts里面配置全局$miniImageUrl")])])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("miniImageUrl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/api/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$miniImageUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" miniImageUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\ndeclare module "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vue/types/vue"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// eslint-disable-next-line prettier/prettier")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("$miniImageUrl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("如下图：\n"),a("img",{attrs:{src:t(544),alt:"Image text"}})])]),s._v(" "),a("h2",{attrs:{id:"_2-发布图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-发布图片"}},[s._v("#")]),s._v(" 2. 发布图片")]),s._v(" "),a("p",[a("img",{attrs:{src:t(545),alt:"Image text"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("2.1 项目结构里面的miniImage文件是与放入后台的文件一样层级;")])]),s._v(" "),a("li",[a("p",[s._v("2.2 如果有新图片，都放入miniImages文件下的images里面;")])]),s._v(" "),a("li",[a("p",[s._v("2.3 上传图片")])]),s._v(" "),a("li",[a("p",[s._v("2.3.1 将文件miniImages压缩发给相对应的后台;")])]),s._v(" "),a("li",[a("p",[s._v("2.3.2 同时也可以自己上传：")])])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" a、git clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("b develop http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jkcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hcn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" b、cd hcn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web\\web\\mini_images，放入相应的图片\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("c、jenkins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hcn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 构建选择slave "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rancher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hcn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("slave"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("jenkins选择如下图：")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(546),alt:"Image text"}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("2.4 发布好，就可以使用站点地址;")])]),s._v(" "),a("li",[a("p",[s._v("2.5 本地不会打包miniImages资源，这里图片只是方便开发人员更新和查看用的;")])]),s._v(" "),a("li",[a("p",[s._v("2.6 特别注意，src/static/images里面仅能存放项目必须要静态的资源，其他非必须的资源都放入站点，然后再引入。")])])]),s._v(" "),a("h2",{attrs:{id:"_3-引入图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-引入图片"}},[s._v("#")]),s._v(" 3. 引入图片")]),s._v(" "),a("p",[s._v("配置好后，任意模块，引入图片，非常方便。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("image\n  style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width: 100vw; height: 254rpx"')]),s._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scaleToFill"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$miniImageUrl('icon_hospital.png')\"")]),s._v("\n  lazy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("load\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"具体操作-如下图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体操作-如下图"}},[s._v("#")]),s._v(" 具体操作，如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(547),alt:"Image text"}})]),s._v(" "),a("h2",{attrs:{id:"_4-图片优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-图片优化"}},[s._v("#")]),s._v(" 4. 图片优化")]),s._v(" "),a("ul",[a("li",[s._v("加入loading和error错误展示图片，")]),s._v(" "),a("li",[s._v("建议都用u-image组件，不直接用image组件，这样提升用户体验")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("image\n  width"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"160"')]),s._v("\n  height"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"120"')]),s._v("\n  border"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("radius"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"12"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("lazy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("load"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loading slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"loading"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loading"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("image\n      style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"background-color: #fff"')]),s._v("\n      slot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),s._v("\n      mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scaleToFill"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$miniImageUrl('icon_hospital.png')\"")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("image"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);