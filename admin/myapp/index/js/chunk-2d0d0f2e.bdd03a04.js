(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0f2e"],{"69c8":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"adminInfo"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2,border:""}},[a("el-table-column",{attrs:{prop:"article_uname",label:"发布用户",width:"180"}}),a("el-table-column",{attrs:{prop:"article_time",label:"发布时间",width:"180"}}),a("el-table-column",{attrs:{prop:"article_name",label:"发布标题"}}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",[t._v("查看详情")])]}}])})],1)],1)},n=[],r=a("827b"),i={data:function(){return{tableData2:[]}},mounted:function(){this.getarticle()},methods:{getarticle:function(){var t=this;r["a"].selarticle().then(function(e){t.tableData2=e.data})}}},o=i,c=a("25c1"),u=Object(c["a"])(o,l,n,!1,null,null,null);u.options.__file="adminInfo.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d0f2e.bdd03a04.js.map