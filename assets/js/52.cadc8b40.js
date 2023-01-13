(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{378:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"npm常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm常用命令"}},[a._v("#")]),a._v(" npm常用命令")]),a._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("p",[a._v("npm是跟随node一起安装的包（模块）管理器。常见的使用场景有以下几种：")]),a._v(" "),s("ul",[s("li",[a._v("允许用户从npm服务器下载别人编写的第三方包到本地使用。")]),a._v(" "),s("li",[a._v("允许用户从npm服务器下载并安装别人编写的命令行程序到本地使用。")]),a._v(" "),s("li",[a._v("允许用户将自己编写的包或命令行程序上传到npm服务器供别人使用。")])]),a._v(" "),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("h4",{attrs:{id:"检测是否安装及版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测是否安装及版本"}},[a._v("#")]),a._v(" 检测是否安装及版本")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示版本号说明已经安装相应的版本")]),a._v("\n")])])]),s("h4",{attrs:{id:"生成package-json文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成package-json文件"}},[a._v("#")]),a._v(" 生成package.json文件")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" init\n")])])]),s("blockquote",[s("p",[a._v("package.json用来描述项目中用到的模块和其他信息")])]),a._v(" "),s("h4",{attrs:{id:"安装模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装模块"}},[a._v("#")]),a._v(" 安装模块")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装package.json定义好的模块，简写 npm i")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装包指定模块")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装包的同时，将信息写入到package.json中的 dependencies 配置中")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--save")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装包的同时，将信息写入到package.json中的 devDependencies 配置中")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --save-dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装多模块")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("1")]),a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装方式参数：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-save")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 简写-S，加入到生产依赖中")]),a._v("\n-save-dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 简写-D，加入到开发依赖中")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局安装 将安装包放在 /usr/local 下或者你 node 的安装目录")]),a._v("\n")])])]),s("h4",{attrs:{id:"查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[a._v("#")]),a._v(" 查看")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有全局安装的包")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看本地项目中安装的包")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看包的 package.json文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看包的依赖关系")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" dependencies\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看包的源文件地址")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" repository.url\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看包所依赖的node版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" engines\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看帮助")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n")])])]),s("h4",{attrs:{id:"更新模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新模块"}},[a._v("#")]),a._v(" 更新模块")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新本地模块")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新全局模块")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新全局软件包。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新所有的全局软件包。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" outdated "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--depth")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 找出需要更新的包。")]),a._v("\n")])])]),s("h4",{attrs:{id:"卸载模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载模块"}},[a._v("#")]),a._v(" 卸载模块")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载本地模块")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" uninstall "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载全局模块")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" uninstall "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 卸载全局软件包。")]),a._v("\n")])])]),s("h4",{attrs:{id:"清空缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清空缓存"}},[a._v("#")]),a._v(" 清空缓存")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 清空npm缓存")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" cache "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),a._v("\n")])])]),s("h4",{attrs:{id:"使用淘宝镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用淘宝镜像"}},[a._v("#")]),a._v(" 使用淘宝镜像")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用淘宝镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" cnpm "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--registry")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://registry.npm.taobao.org\n")])])]),s("h4",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更改包内容后进行重建")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" rebuild "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" outdated\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 访问npm的json文件，此命令将会打开一个网页")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 发布一个包的时候，需要检验某个包名是否存在")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" search "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 撤销自己发布过的某个版本代码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" unpublish "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"使用技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用技巧"}},[a._v("#")]),a._v(" 使用技巧")]),a._v(" "),s("h4",{attrs:{id:"多次安装不成功尝试先清除缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多次安装不成功尝试先清除缓存"}},[a._v("#")]),a._v(" 多次安装不成功尝试先清除缓存")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" cache clean "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("\n")])])]),s("h4",{attrs:{id:"查看已安装的依赖包版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看已安装的依赖包版本号"}},[a._v("#")]),a._v(" 查看已安装的依赖包版本号")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ModuleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v('注意：用此方法才能准确的知道项目使用的版本号，查看package.json时，有“^" 符号表示大于此版本')])]),a._v(" "),s("h2",{attrs:{id:"npm发布包教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm发布包教程"}},[a._v("#")]),a._v(" npm发布包教程")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000017461666",target:"_blank",rel:"noopener noreferrer"}},[a._v("npm发布包教程"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"nrm的作用与使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nrm的作用与使用"}},[a._v("#")]),a._v(" nrm的作用与使用")]),a._v(" "),s("h4",{attrs:{id:"nrm是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nrm是什么"}},[a._v("#")]),a._v(" nrm是什么？")]),a._v(" "),s("p",[a._v("nrm(npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换")]),a._v(" "),s("h4",{attrs:{id:"nrm的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nrm的安装"}},[a._v("#")]),a._v(" nrm的安装")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" nrm\n")])])]),s("h4",{attrs:{id:"nrm命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nrm命令"}},[a._v("#")]),a._v(" nrm命令")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("nrm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("　"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看可用的源（有*号的表示当前所使用的源,以下<registry>表示源的名称）")]),a._v("\nnrm use "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将npm下载源切换成指定的源")]),a._v("\nnrm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加源，url为源的路径")]),a._v("\nnrm del "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除源")]),a._v("\nnrm "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 测试源的响应时间，可以作为使用哪个源的参考")]),a._v("\n\nnrm "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("　"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看nrm帮助")]),a._v("\nnrm home "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("　"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 跳转到指定源的官网")]),a._v("\n")])])]),s("h4",{attrs:{id:"nrm使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nrm使用"}},[a._v("#")]),a._v(" nrm使用")]),a._v(" "),s("p",[a._v("如果在你的网络不太理想或者受到其他网络限制导致不能使用npm原本的源进行下载时，nrm就非常有用了，你只需要：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("nrm "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看可用的源")]),a._v("\nnrm use "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("　"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换到指定源")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);