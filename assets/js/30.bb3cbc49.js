(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{487:function(t,s,a){t.exports=a.p+"assets/img/bugly1.73f90ebb.png"},749:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"bugly账号注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bugly账号注册"}},[t._v("#")]),t._v(" Bugly账号注册")]),t._v(" "),n("p",[t._v("1、按照官方文档注册登录\n2、新建产品，注册基本信息\n"),n("img",{attrs:{src:a(487),alt:"Image text"}})]),t._v(" "),n("h2",{attrs:{id:"buglyhotfix接入-文档https-bugly-qq-com-docs-user-guide-instruction-manual-ios-hotfix"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#buglyhotfix接入-文档https-bugly-qq-com-docs-user-guide-instruction-manual-ios-hotfix"}},[t._v("#")]),t._v(" BuglyHotfix接入 （文档https://bugly.qq.com/docs/user-guide/instruction-manual-ios-hotfix/）")]),t._v(" "),n("p",[t._v("1、BuglyHotfix提供两种集成方式供iOS开发者选择：\n1.1通过CocoaPods集成\n在工程的Podfile里面添加以下代码：")]),t._v(" "),n("div",{staticClass:"language-ruby line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[t._v("pod "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BuglyHotfix'")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v('BuglyHotfix 已经包含了 Bugly 的所有能力，所以只需去掉 Bugly.framework 即可；\n保存并执行pod install,然后用后缀为.xcworkspace的文件打开工程.\n1.2、JSPatch 集成\n下载 JSPatch 或 直接使用 BuglyHotfix SDK 压缩包内的 JSPatch 版本\n把下列文件拖入 Xcode 工程内(请勾选Copy items if needed选项)\nJPEngine.h\nJPEngine.m\nJSPatch.js\n1.3、导入头文件\n在工程的AppDelegate.m文件导入头文件\n#import <BuglyHotfix/Bugly.h>\n#import <BuglyHotfix/BuglyMender.h>\n#import "JPEngine.h"\n2、然后在AppDelegate中初始化\n在工程的AppDelegate.m文件导入头文件')]),t._v(" "),n("div",{staticClass:"language-ruby line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#import <Bugly/Bugly.h>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOOL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UIApplication")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application didFinishLaunchingWithOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSDictionary")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("launchOptions "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("初始化 "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Bugly")]),t._v(" 异常上报\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyConfig")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("config "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyConfig")]),t._v(" alloc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blockMonitorTimeout "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("consolelogEnable "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("blockMonitorEnable "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reportLogLevel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyLogLevelWarn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Bugly")]),t._v(" startWithAppId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c8a723f40a"')]),t._v("\n        developmentDevice"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":YES")]),t._v("\n                   config"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("捕获 "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSPatch")]),t._v(" 异常并上报\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JPEngine")]),t._v(" handleException"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSException")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("jspatchException "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSException")]),t._v(" exceptionWithName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hotfix Exception"')]),t._v(" reason"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":msg")]),t._v(" userInfo"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Bugly")]),t._v(" reportException"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":jspatchException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("检测补丁策略\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyMender")]),t._v(" sharedMender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" checkRemoteConfigWithEventHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyHotfixEvent")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSDictionary")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("patchInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("有新补丁或本地补丁状态正常\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyHotfixEventPatchValid")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyHotfixEventNewPatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("获取本地补丁路径\n            "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("patchDirectory "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyMender")]),t._v(" sharedMender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" patchDirectory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("patchDirectory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("指定执行的 js 脚本文件名\n                "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("patchFileName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" @"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSString")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("patchFile "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("patchDirectory stringByAppendingPathComponent"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":patchFileName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("执行补丁加载并上报激活状态\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NSFileManager")]),t._v(" defaultManager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fileExistsAtPath"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":patchFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JPEngine")]),t._v(" evaluateScriptWithPath"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":patchFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLYLogInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"evaluateScript success"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyMender")]),t._v(" sharedMender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" reportPatchStatus"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":BuglyHotfixPatchStatusActiveSucess")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLYLogInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"evaluateScript failed"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BuglyMender")]),t._v(" sharedMender"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" reportPatchStatus"),n("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":BuglyHotfixPatchStatusActiveFail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br")])]),n("p",[t._v("3.1写补丁，需要一点JS基础，但会声明变量、调用方法，就可以使用大部分功能了，好在JSPatch作者为我们开发了一款插件，可以使用XCode补全JS代码。\nhttps://github.com/bang590/JSPatchX\n3.2、在我们刚才的demo中新建一个empty文件，叫main.js，这是JSPatch规定的js文件命名\n3.3 发布补丁")]),t._v(" "),n("p",[t._v("补充\n一、可能很多人都不会写js补丁，好在JSPatch作者还为我们准备了另一个工具。\nhttp://bang590.github.io/JSPatchConvertor/")])])}),[],!1,null,null,null);s.default=e.exports}}]);