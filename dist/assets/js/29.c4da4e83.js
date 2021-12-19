(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{568:function(t,e,a){t.exports=a.p+"assets/img/git.76668714.png"},730:function(t,e,a){"use strict";a.r(e);var v=a(4),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"文档修订记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文档修订记录"}},[t._v("#")]),t._v(" 文档修订记录")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("序号")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("修改时间")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("修改人")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("版本")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2020.09.30")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("刘刚")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("V1.0.0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("初稿")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2020.10.12")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("刘刚")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("V2.0.0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("迭代分支管理")])])])]),t._v(" "),v("h2",{attrs:{id:"一、概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),v("ul",[v("li",[t._v('Git 作为一个源码管理系统，不可避免涉及到多人协作。协作必须有一个规范的工作流程，让大家有效地合作，使得项目井井有条地发展下去。“工作流程”在英语里叫做"workflow"或者"flow"。')]),t._v(" "),v("li",[t._v("常见的三种工作流程：Git flow、GitHub flow、GitLab flow。三者各有优缺点，以及应用的场景。因为我们研发项目的一些特殊情况，基于三种工作流程做了一些调整，下面结合我们的研发项目情况具体说明。")])]),t._v(" "),v("h2",{attrs:{id:"二、标准版迭代分支规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、标准版迭代分支规范"}},[t._v("#")]),t._v(" 二、标准版迭代分支规范")]),t._v(" "),v("ul",[v("li",[t._v("每个迭代都有属于自己的主分支，分支名称与迭代名称对应，加上前缀“v”。")]),t._v(" "),v("li",[t._v("如果迭代完成进行封版，则在该迭代分支上打上Tag，Tag名称与迭代名称一致。")]),t._v(" "),v("li",[t._v("若释放某迭代源码，则释放该迭代对应的分支。")]),t._v(" "),v("li",[t._v("临时分支（如功能分支、修复分支、本地分支等），仍然按照之前的方式使用。修改在临时分支进行，测试无误后，再合并到主分支。要确保迭代主分支是完好无损的。")]),t._v(" "),v("li",[t._v("提交记录要清晰，合并代码需谨慎。（提交规则见“代码提交规则”小节）")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("迭代名称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("分支名称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Tag名称")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3.3.02.1000")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("v3.3.02.1000")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3.3.02.1000")])])])]),t._v(" "),v("h3",{attrs:{id:"下面根据标准版的三个迭代进行示例说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#下面根据标准版的三个迭代进行示例说明"}},[t._v("#")]),t._v(" 下面根据标准版的三个迭代进行示例说明")]),t._v(" "),v("ul",[v("li",[t._v("3.3.02.1000迭代（v3.3.02.1000分支），已封版，有bug在修改。")]),t._v(" "),v("li",[t._v("3.3.03.1000迭代（v3.3.03.1000分支），测试中，有bug在修改。")]),t._v(" "),v("li",[t._v("3.3.04.1000迭代，即将进入开发，需要创建迭代主分支（v3.3.04.1000）。")])]),t._v(" "),v("p",[t._v("1）示例一：3.3.04.1000迭代创建主分支\n操作：基于v3.3.03.1000分支创建v3.3.04.1000分支。（即基于当前最新版本创建下一个迭代主分支）")]),t._v(" "),v("p",[t._v("2）示例二：3.3.03.1000迭代封版\n操作：v3.3.03.1000分支当前最后一条提交记录，打上Tag 3.3.03.1000。（Tag打了不许擅自修改）")]),t._v(" "),v("p",[t._v("3）示例三：3.3.03.1000迭代封版后，bug仍然在修改\n操作：bug修改后代码提交到v3.3.03.1000分支。（通过Tag可以判断哪些问题是封版后发现处理）")]),t._v(" "),v("p",[t._v("4）示例四：释放3.3.03.1000源码\n操作：把v3.3.03.1000代码释放即可，不需要考虑Tag。（即释放某迭代主分支最新代码）")]),t._v(" "),v("p",[t._v("5）示例五：3.3.03.1000中修复了一个bug，该bug同样存在于3.3.02.1000和3.3.04.1000中，需要回归\n操作：需要把v3.3.03.1000的某些代码回归到v3.3.02.1000和v3.3.04.1000中，可以使用merge、cherry-pick，或者code的形式进行回归，具体情况具体分析。")]),t._v(" "),v("p",[t._v("注：我们通过一个demo进行了演练，大家可以看看xx-mhealth3.2/04-09-开发规范/git规范.mp4。在实际过程中如果遇到问题，随时可以发出来大家一起讨论。")]),t._v(" "),v("h2",{attrs:{id:"三、常用git命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、常用git命令"}},[t._v("#")]),t._v(" 三、常用Git命令")]),t._v(" "),v("ul",[v("li",[t._v("pull：拉取")]),t._v(" "),v("li",[t._v("push：推送")]),t._v(" "),v("li",[t._v("add：添加")]),t._v(" "),v("li",[t._v("commit：提交")]),t._v(" "),v("li",[t._v("stash：暂存")]),t._v(" "),v("li",[t._v("merge：合并")]),t._v(" "),v("li",[t._v("rebase：衍合")]),t._v(" "),v("li",[t._v("cherry-pick：遴选")])]),t._v(" "),v("h2",{attrs:{id:"四、代码提交规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、代码提交规则"}},[t._v("#")]),t._v(" 四、代码提交规则")]),t._v(" "),v("h3",{attrs:{id:"提交的说明包括两部分-动作类型-简要说明-以中文的-进行区分。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#提交的说明包括两部分-动作类型-简要说明-以中文的-进行区分。"}},[t._v("#")]),t._v(" 提交的说明包括两部分，动作类型：简要说明，以中文的“：”进行区分。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("动作")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("示例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("ADD")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("新增功能、文件等")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("ADD：满意度调查，统计功能")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("DEL")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("删除功能、文件等")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("DEL：xxx监测LollypopSDK.framework及相关引用")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("MOD")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("修改功能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("MOD：满意度调查，统计详情")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("FIX")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("修复问题。如果是禅道bug，需注明bug编号")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("FIX：#60027，专科随访患者管理布局错乱")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("MERGE")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("合并代码，自动合并时一般不需要修改说明文字")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("ADD：满意度调查，统计功能")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("REFACTOR")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("代码重构，需注明重构模块，及说明。一般重构需要使用新的独立分支处理。")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("REFACTOR：预约挂号，mintUI改vantUI")])])])]),t._v(" "),v("h2",{attrs:{id:"五、代码提交流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、代码提交流程"}},[t._v("#")]),t._v(" 五、代码提交流程")]),t._v(" "),v("p",[v("img",{attrs:{src:a(568),alt:"Image text"}})]),t._v(" "),v("p",[t._v("注意点：\n1、先pull，再push\n2、冲突在本地解决")]),t._v(" "),v("h2",{attrs:{id:"六、工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#六、工作流程"}},[t._v("#")]),t._v(" 六、工作流程")]),t._v(" "),v("ul",[v("li",[t._v("1、每天早上开始工作前，请先拉取服务器代码，并编译，检查服务器代码是否有错误。检查无误后即可开始自己的工作。如果有误，请通知最后的代码提交者及项目负责人。")]),t._v(" "),v("li",[t._v("2、理论上每修改一个完整的功能点都可以提交代码并推送至服务器。")]),t._v(" "),v("li",[t._v("3、每天工作结束后或者下班前，请提交本地代码，并推送至服务器。")])]),t._v(" "),v("h2",{attrs:{id:"七、-参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#七、-参考资料"}},[t._v("#")]),t._v(" 七、 参考资料")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/12/git-workflow.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 工作流程"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://blog.csdn.net/weixin_42092278/article/details/90448721",target:"_blank",rel:"noopener noreferrer"}},[t._v("一篇文章搞定Git——Git代码管理及使用规范"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("[git规范](SVN | xx-mhealth3.2/04-09-开发规范/git规范.mp4)")])])}),[],!1,null,null,null);e.default=_.exports}}]);