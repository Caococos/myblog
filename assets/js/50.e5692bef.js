(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{379:function(t,a,r){"use strict";r.r(a);var s=r(4),i=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"safari-浏览器兼容问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safari-浏览器兼容问题"}},[t._v("#")]),t._v(" Safari 浏览器兼容问题")]),t._v(" "),a("p",[t._v("记录关于最近在项目中遇到的 ios 兼容问题。")]),t._v(" "),a("p",{attrs:{align:"center"}},[a("img",{staticStyle:{cursor:"zoom-in"},attrs:{src:"https://cdn.jsdelivr.net/gh/caococos/resource-set@master/img/EYE1.png",width:"280"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1.给一个元素使用了 transform 属性做动画的话，Border-radius 属性会失效。")]),t._v(" "),a("p",[t._v("解决方法：给做动画的父元素加上 transform: rotate(0deg)")])]),t._v(" "),a("li",[a("p",[t._v("2.input 标签在 ios 系统中得加上"),a("code",[t._v("display: inline-block;")]),t._v("改变元素的属性，否则 padding、margin、font-size 都不起作用。原因未知。")])]),t._v(" "),a("li",[a("p",[t._v("3.关于audio标签的preload(预加载)属性在IOS Safari浏览器下是被禁止的问题。")]),t._v(" "),a("ul",[a("li",[t._v("解决方法：在第一次触摸的时候，音频静音(muted)，同时触发音频play()然后很快再pause()，可以做到类似预加载行为。")])])]),t._v(" "),a("li",[a("p",[t._v("4.Safari浏览器实机展示效果中，会有180左右的高度会被浏览器导航栏占用，从而引发展示效果不全等问题。")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);