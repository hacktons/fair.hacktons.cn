(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{419:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flutter-fair接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter-fair接入"}},[t._v("#")]),t._v(" Flutter Fair接入")]),t._v(" "),a("h2",{attrs:{id:"添加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖"}},[t._v("#")]),t._v(" 添加依赖")]),t._v(" "),a("p",[t._v("通过yaml添加依赖配置")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加 Fair 依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.2.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加编译器依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dev_dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build_runner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^1.4.0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fair_compiler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ^0.2.0\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("ul",[a("li",[t._v("fair "),a("img",{attrs:{src:"https://img.shields.io/pub/v/fair.svg",alt:"https://pub.dev/packages/fair"}})]),t._v(" "),a("li",[t._v("fair_compiler "),a("img",{attrs:{src:"https://img.shields.io/pub/v/fair_compiler.svg",alt:"https://pub.dev/packages/fair_compiler"}})]),t._v(" "),a("li",[t._v("fair_annotation "),a("img",{attrs:{src:"https://img.shields.io/pub/v/fair_annotation.svg",alt:"https://pub.dev/packages/fair_annotation"}})]),t._v(" "),a("li",[t._v("fair_version "),a("img",{attrs:{src:"https://img.shields.io/pub/v/fair_version.svg",alt:"https://pub.dev/packages/fair_version"}})])]),t._v(" "),a("p",[t._v("为了方便接入&体验Fair框架，请确认你的Flutter运行环境，Fair基于Flutter 1.20.4开发,目前已适配至1.22.x, "),a("strong",[t._v("推荐使用v1.22.5体验")]),t._v("。")]),t._v(" "),a("p",[t._v("后续将继续支持最新稳定版本。目前支持版本（如遇问题，Issue反馈）：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Flutter版本")]),t._v(" "),a("th",[t._v("Dart版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Flutter 1.22.4/1.22.5")]),t._v(" "),a("td",[t._v("Dart 2.10.4")])]),t._v(" "),a("tr",[a("td",[t._v("Flutter 1.20.4")]),t._v(" "),a("td",[t._v("Dart 2.9.2")])]),t._v(" "),a("tr",[a("td",[t._v("Flutter 1.17.3")]),t._v(" "),a("td",[t._v("Dart 2.8.4")])]),t._v(" "),a("tr",[a("td",[t._v("Flutter 1.12.13+hotfix.9")]),t._v(" "),a("td",[t._v("Dart 2.7.2")])])])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://flutter.dev/docs/development/tools/sdk/releases?tab=macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://flutter.dev/docs/development/tools/sdk/releases?tab=macos"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("通过切换fair_version版本进行版本兼容。例如，将本机切换为flutter 1.12.13后，Fair需要同步切换")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Switch to another stable flutter version")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dependency_overrides")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fair_version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/wuba/fair.git\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fair_version/flutter_1_12_13\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"fair接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fair接入"}},[t._v("#")]),t._v(" Fair接入")]),t._v(" "),a("p",[t._v("在App中接入Fair步骤如下：")]),t._v(" "),a("blockquote",[a("p",[t._v("1.将FairApp添加为需要动态化部分的顶级节点")])]),t._v(" "),a("p",[t._v("常见做法是作为App的根节点，如果不是全局采用也可以作为子页面的根节点")]),t._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FairApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MaterialApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("2.添加动态组件")])]),t._v(" "),a("p",[t._v("每一个动态组件由一个"),a("code",[t._v("FairWidget")]),t._v("表示。")]),t._v(" "),a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FairWidget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"video_card"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/bundle/video_card.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("根据不同场景诉求，FairWidget可以混合和使用")]),t._v(" "),a("ol",[a("li",[t._v("可以作为不同组件混合使用")]),t._v(" "),a("li",[t._v("一般作为一个全屏页面")]),t._v(" "),a("li",[t._v("支持嵌套使用，即可以局部嵌套在普通Widget下，也可以嵌套在另一个FairWidget下")])]),t._v(" "),a("p",[t._v("相关示例详情，请查看example代码")])])}),[],!1,null,null,null);s.default=e.exports}}]);