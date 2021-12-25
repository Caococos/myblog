(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{627:function(t,e,r){"use strict";r.r(e);var a=r(21),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"初始化项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[t._v("#")]),t._v(" 初始化项目")]),t._v(" "),r("h2",{attrs:{id:"创建代码仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建代码仓库"}},[t._v("#")]),t._v(" 创建代码仓库")]),t._v(" "),r("p",[t._v("接下来，我们开始初始化项目，首先我们先去 GitHub 上创建一个 repo，填好 repo 名称，以及写一下 README，对项目先做个简单的描述。")]),t._v(" "),r("p",[t._v("通常我们初始化一个项目，需要配置一大堆东西，比如 "),r("code",[t._v("package.json")]),t._v("、"),r("code",[t._v(".editorconfig")]),t._v("、"),r("code",[t._v(".gitignore")]),t._v(" 等；还包括一些构建工具如 "),r("code",[t._v("rollup")]),t._v("、"),r("code",[t._v("webpack")]),t._v(" 以及它们的配置。")]),t._v(" "),r("p",[t._v("当我们使用 TypeScript 去写一个项目的时候，还需要配置 TypeScript 的编译配置文件 "),r("code",[t._v("tsconfig.json")]),t._v(" 以及\n"),r("code",[t._v("tslint.json")]),t._v(" 文件。")]),t._v(" "),r("p",[t._v("这些茫茫多的配置往往会让一个想从零开始写项目的同学望而却步，如果有一个脚手架工具帮我们生成好这些初始化文件该多好。好在确实有这样的工具，接下来我们的主角 "),r("code",[t._v("TypeScript library starter")]),t._v(" 隆重登场。")]),t._v(" "),r("h2",{attrs:{id:"typescript-library-starter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#typescript-library-starter"}},[t._v("#")]),t._v(" TypeScript library starter")]),t._v(" "),r("p",[t._v("它是一个开源的 TypeScript 开发基础库的脚手架工具，可以帮助我们快速初始化一个 TypeScript 项目，我们可以去它的"),r("a",{attrs:{href:"https://github.com/alexjoverm/typescript-library-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网地址"),r("OutboundLink")],1),t._v("学习和使用它。")]),t._v(" "),r("h3",{attrs:{id:"使用方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/alexjoverm/typescript-library-starter.git ts-axios\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ts-axios\n\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),r("p",[t._v("先通过 "),r("code",[t._v("git clone")]),t._v(" 把项目代码拉下来到我们的 "),r("code",[t._v("ts-axios")]),t._v(" 目录，然后运行 "),r("code",[t._v("npm install")]),t._v(" 安装依赖，并且给项目命名，我们仍然使用 "),r("code",[t._v("ts-axios")]),t._v("。")]),t._v(" "),r("p",[t._v("安装好依赖后，我们先来预览一下这个项目的目录结构。")]),t._v(" "),r("h3",{attrs:{id:"目录文件介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录文件介绍"}},[t._v("#")]),t._v(" 目录文件介绍")]),t._v(" "),r("p",[r("code",[t._v("TypeScript library starter")]),t._v(" 生成的目录结构如下：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("├── CONTRIBUTING.md\n├── LICENSE\n├── README.md\n├── code-of-conduct.md\n├── node_modules\n├── package-lock.json\n├── package.json\n├── rollup.config.ts // rollup 配置文件\n├── src // 源码目录\n├── test // 测试目录\n├── tools // 发布到 GitHup pages 以及 发布到 npm 的一些配置脚本工具\n├── tsconfig.json // TypeScript 编译配置文件\n└── tslint.json // TypeScript lint 文件\n")])])]),r("h3",{attrs:{id:"优秀工具集成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优秀工具集成"}},[t._v("#")]),t._v(" 优秀工具集成")]),t._v(" "),r("p",[t._v("使用 "),r("code",[t._v("TypeScript library starter")]),t._v(" 创建的项目集成了很多优秀的开源工具：")]),t._v(" "),r("ul",[r("li",[t._v("使用 "),r("a",{attrs:{href:"https://rollupjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RollupJS"),r("OutboundLink")],1),t._v(" 帮助我们打包。")]),t._v(" "),r("li",[t._v("使用 "),r("a",{attrs:{href:"https://github.com/prettier/prettier",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://palantir.github.io/tslint/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TSLint"),r("OutboundLink")],1),t._v(" 帮助我们格式化代码以及保证代码风格一致性。")]),t._v(" "),r("li",[t._v("使用 "),r("a",{attrs:{href:"https://typedoc.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeDoc"),r("OutboundLink")],1),t._v(" 帮助我们自动生成文档并部署到 GitHub pages。")]),t._v(" "),r("li",[t._v("使用 "),r("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest"),r("OutboundLink")],1),t._v("帮助我们做单元测试。")]),t._v(" "),r("li",[t._v("使用 "),r("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commitizen"),r("OutboundLink")],1),t._v("帮助我们生成规范化的提交注释。")]),t._v(" "),r("li",[t._v("使用 "),r("a",{attrs:{href:"https://github.com/semantic-release/semantic-release",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semantic release"),r("OutboundLink")],1),t._v("帮助我们管理版本和发布。")]),t._v(" "),r("li",[t._v("使用 "),r("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),r("OutboundLink")],1),t._v("帮助我们更简单地使用 git hooks。")]),t._v(" "),r("li",[t._v("使用 "),r("a",{attrs:{href:"https://github.com/conventional-changelog/conventional-changelog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Conventional changelog"),r("OutboundLink")],1),t._v("帮助我们通过代码提交信息自动生成 change log。")])]),t._v(" "),r("p",[t._v("这里我们列举了很多工具，感兴趣的同学们可以点开他们的链接对这些工具做进一步学习。")]),t._v(" "),r("h3",{attrs:{id:"npm-scripts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#npm-scripts"}},[t._v("#")]),t._v(" Npm Scripts")]),t._v(" "),r("p",[r("code",[t._v("TypeScript library starter")]),t._v(" 同样在 "),r("code",[t._v("package.json")]),t._v(" 中帮我们配置了一些 "),r("code",[t._v("npm scripts")]),t._v("，接下来我们先列举一下我们开发中常用的 "),r("code",[t._v("npm scripts")]),t._v("，剩余的我们在之后学习中遇到的时候再来介绍。")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("npm run lint")]),t._v(": 使用 TSLint 工具检查 "),r("code",[t._v("src")]),t._v(" 和 "),r("code",[t._v("test")]),t._v(" 目录下 TypeScript 代码的可读性、可维护性和功能性错误。")]),t._v(" "),r("li",[r("code",[t._v("npm start")]),t._v(": 观察者模式运行 "),r("code",[t._v("rollup")]),t._v(" 工具打包代码。")]),t._v(" "),r("li",[r("code",[t._v("npm test")]),t._v(": 运行 "),r("code",[t._v("jest")]),t._v(" 工具跑单元测试。")]),t._v(" "),r("li",[r("code",[t._v("npm run commit")]),t._v(": 运行 "),r("code",[t._v("commitizen")]),t._v(" 工具提交格式化的 "),r("code",[t._v("git commit")]),t._v(" 注释。")]),t._v(" "),r("li",[r("code",[t._v("npm run build")]),t._v(": 运行 "),r("code",[t._v("rollup")]),t._v(" 编译打包 TypeScript 代码，并运行 "),r("code",[t._v("typedoc")]),t._v(" 工具生成文档。")])]),t._v(" "),r("h2",{attrs:{id:"关联远程分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关联远程分支"}},[t._v("#")]),t._v(" 关联远程分支")]),t._v(" "),r("p",[t._v("代码已经初始化好，接下来我们要把当前代码仓库关联我们的远程仓库，首先在命令行中运行命令查看远程分支：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n")])])]),r("p",[t._v("这里我们不会得到任何输出，因为我们还没有关联远程分支，我们先去 GitHub 上找到我们仓库的地址，在命令行运行：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin 仓库地址\n")])])]),r("p",[t._v("关联后，远程库的名字就是 "),r("code",[t._v("origin")]),t._v("，这是 "),r("code",[t._v("Git")]),t._v(" 默认的叫法，也可以改成别的，但是 "),r("code",[t._v("origin")]),t._v(" 这个名字一看就知道是远程库。")]),t._v(" "),r("p",[t._v("接着你就可以继续运行 "),r("code",[t._v("git remote -v")]),t._v(" 查看关联结果了。")]),t._v(" "),r("h3",{attrs:{id:"拉取代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拉取代码"}},[t._v("#")]),t._v(" 拉取代码")]),t._v(" "),r("p",[t._v("运行如下命令从远程仓库拉取 master 分支代码并合并：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n")])])]),r("p",[t._v("这个时候会报错：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("error: The following untracked working tree files would be overwritten by merge:\n\tREADME.md\nPlease move or remove them before you merge.\nAborting\n")])])]),r("p",[t._v("因为我们在使用 "),r("code",[t._v("typescript library starter")]),t._v(" 初始化代码的时候也创建了 "),r("code",[t._v("README.md")]),t._v("，和远程仓库的 "),r("code",[t._v("README.md")]),t._v(" 冲突了。我们把 "),r("code",[t._v("README.md")]),t._v(" 文件删除，再次运行：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master\n")])])]),r("p",[t._v("这次代码就拉取成功了，并且在本地也创建了一个 "),r("code",[t._v("master")]),t._v(" 分支。")]),t._v(" "),r("h3",{attrs:{id:"提交代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提交代码"}},[t._v("#")]),t._v(" 提交代码")]),t._v(" "),r("p",[t._v("最后我们来提交代码，首先运行：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),r("p",[t._v("把提交的代码从工作区添加到暂存区，然后运行 "),r("code",[t._v("npm run commit")]),t._v(" 这个 "),r("code",[t._v("npm")]),t._v(" 脚本来提交代码，运行后它会依次询问你几个问题，比如你这次修改的范围包括哪些、提交的描述、是否有 break change、影响了哪些 issue 等等。")]),t._v(" "),r("p",[t._v("填写完毕，工具会帮我们运行 "),r("code",[t._v("git commit")]),t._v(" 并且自动把我们提交的信息合成一条提交注释。接着运行命令把代码推送到远程 git 仓库中：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),r("p",[t._v("接着我们去 GitHub 仓库中就可以看到刚才这条提交记录了。")]),t._v(" "),r("p",[t._v("至此，我们项目已经初始化完毕，接下来我们就开始编写源码实现 axios 了。")])])}),[],!1,null,null,null);e.default=s.exports}}]);