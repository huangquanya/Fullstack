(this["webpackJsonpdeconstruct-sanymusic"]=this["webpackJsonpdeconstruct-sanymusic"]||[]).push([[8],{137:function(e,n,t){e.exports=t.p+"static/media/music.64444b39.png"},142:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(9),o=t(2),c=t(3),l=t(1);function s(){var e=Object(o.a)(["\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  background: white;\n  .before {\n    position: absolute;\n    top: -300px;\n    height: 400px;\n    width: 100%;\n    background: ",";\n  }\n  .slider-container {\n    position: relative;\n    width: 98%;\n    height: 160px;\n    overflow: hidden;\n    margin: auto;\n    border-radius: 6px;\n    .slider-nav {\n      position: absolute;\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    .swiper-pagination-bullet-active {\n      background: ",";\n    }\n  }\n"]);return s=function(){return e},e}var m=c.b.div(s(),l.a["theme-color"],l.a["theme-color"]),d=(t(136),t(141));var u=i.a.memo((function(e){var n=Object(a.useState)(null),t=Object(r.a)(n,2),o=t[0],c=t[1],l=e.bannerList;return Object(a.useEffect)((function(){if(l.length&&!o){var e=new d.a(".slider-container",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination"}});c(e)}}),[l.length,o]),i.a.createElement(m,null,i.a.createElement("div",{className:"before"}),i.a.createElement("div",{className:"slider-container"},i.a.createElement("div",{className:"swiper-wrapper"},l.map((function(e){return i.a.createElement("div",{className:"swiper-slide",key:e.imageUrl},i.a.createElement("div",{className:"slider-nav"},i.a.createElement("img",{src:e.imageUrl,width:"100%",height:"100%",alt:"\u63a8\u8350"})))}))),i.a.createElement("div",{className:"swiper-pagination"})))})),p=t(27),h=t(47);function g(){var e=Object(o.a)(["\n  position: relative;\n  width: 32%;\n\n  .img_wrapper {\n    .decorate {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 35px;\n      border-radius: 3px;\n      background: linear-gradient (hsla (0,0%,43%,.4),hsla (0,0%,100%,0));\n    }\n    position: relative;\n    height: 0;\n    padding-bottom: 100%;\n    .play_count {\n      position: absolute;\n      right: 2px;\n      top: 2px;\n      font-size: ",";\n      line-height: 15px;\n      color: ",";\n      .play {\n        vertical-align: top;\n      }\n    }\n    img {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      border-radius: 3px;\n    }\n  }\n  .desc {\n      overflow: hidden;\n      margin-top: 2px;\n      padding: 0 2px;\n      height: 50px;\n      text-align: left;\n      font-size: ",";\n      line-height: 1.4;\n      color: ",";\n    }\n"]);return g=function(){return e},e}function f(){var e=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]);return f=function(){return e},e}function b(){var e=Object(o.a)(["\n  max-width: 100%;\n  .title {\n    font-weight: 700;\n    padding-left: 6px;\n    font-size: 14px;\n    line-height: 60px;\n  }\n"]);return b=function(){return e},e}var v=c.b.div(b()),w=c.b.div(f()),E=c.b.div(g(),l.a["font-size-s"],l.a["font-color-light"],l.a["font-size-s"],l.a["font-color-desc"]),x=t(6),y=t(7),L=t(128),j=t.n(L);var N=i.a.memo(Object(y.g)((function(e){return i.a.createElement(v,null,i.a.createElement("h1",{className:"title"},"\u63a8\u8350\u6b4c\u5355"),i.a.createElement(w,null,e.recommendList.map((function(n,a){return i.a.createElement(E,{key:n.id+a,onClick:function(){return t=n.id,void e.history.push("/recommend/".concat(t));var t}},i.a.createElement("div",{className:"img_wrapper"},i.a.createElement("div",{className:"decorate"}),i.a.createElement(j.a,{placeholder:i.a.createElement("img",{width:"100%",height:"100%",src:t(137),alt:"music"}),height:50},i.a.createElement("img",{src:n.picUrl+"?param=300x300",width:"100%",height:"100%",alt:"music"})),i.a.createElement("div",{className:"play_count"},i.a.createElement("i",{className:"iconfont play"},"\ue885"),i.a.createElement("span",{className:"count"},Object(x.e)(n.playCount)))),i.a.createElement("div",{className:"desc"},n.name))}))))}))),O=t(32);function k(){var e=Object(o.a)(["\n  position: fixed;\n  top: 90px;\n  bottom: ",";\n  width: 100%;\n"]);return k=function(){return e},e}var z=c.b.div(k(),(function(e){return e.play>0?"60px":0})),D=t(45),C=t(34);n.default=Object(p.b)((function(e){return{bannerList:e.getIn(["recommend","bannerList"]),recommendList:e.getIn(["recommend","recommendList"]),enterLoading:e.getIn(["recommend","enterLoading"]),songsCount:e.getIn(["player","playList"]).size}}),(function(e){return{getBannerDataDispatch:function(){e(h.a())},getRecommendListDataDispatch:function(){e(h.b())}}}))(i.a.memo((function(e){var n=e.bannerList,t=e.recommendList,r=e.enterLoading,o=e.songsCount,c=e.getBannerDataDispatch,l=e.getRecommendListDataDispatch;Object(a.useEffect)((function(){n.size||c(),t.size||l()}),[]);var s=n?n.toJS():[],m=t?t.toJS():[];return i.a.createElement(z,{play:o},i.a.createElement(O.a,{className:"list",onScroll:L.forceCheck},i.a.createElement("div",null,i.a.createElement(u,{bannerList:s}),i.a.createElement(N,{recommendList:m}))),r?i.a.createElement(D.a,null):null,Object(C.a)(e.route.routes))})))}}]);
//# sourceMappingURL=8.67a0448a.chunk.js.map