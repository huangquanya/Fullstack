(this["webpackJsonpdeconstruct-sanymusic"]=this["webpackJsonpdeconstruct-sanymusic"]||[]).push([[7],{133:function(n,t,e){"use strict";var a=e(2),r=e(0),i=e.n(r),o=e(3),c=e(6),l=e(1);function s(){var n=Object(a.a)(["\n  .icon_wrapper {\n    position: fixed;\n    z-index: 1000;\n    margin-top: -10px;\n    margin-left: -10px;\n    color: ",";\n    font-size: 14px;\n    display: none;\n    transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);\n    transform: translate3d(0, 0, 0);\n    >div {\n      transition: transform 1s;\n    }\n  }\n"]);return s=function(){return n},n}var u=o.b.div(s(),l.a["theme-color"]),f=Object(r.forwardRef)((function(n,t){var e=Object(r.useRef)(),a=Object(c.i)("transform"),o=function(n){var t="<div class='icon_wrapper'>".concat(n,"</div>"),e=document.createElement("div");return e.innerHTML=t,e.firstChild};Object(r.useEffect)((function(){for(var n=0;n<3;n++){var t=o('<div class="iconfont">&#xe642;</div>');e.current.appendChild(t)}[].slice.call(e.current.children).forEach((function(n){n.running=!1,n.addEventListener("transitionend",(function(){this.style.display="none",this.style[a]="translate3d(0, 0, 0)",this.running=!1,this.querySelector("div").style[a]="translate3d(0, 0, 0)"}),!1)}))}),[]);var l=function(n){for(var t=n.x,r=n.y,i=function(n){var i=[].slice.call(e.current.children)[n];if(!1===i.running)return i.style.left=t+"px",i.style.top=r+"px",i.style.display="inline-block",setTimeout((function(){i.running=!0,i.style[a]="translate3d(0, 750px, 0)",i.querySelector("div").style[a]="translate3d(-40px, 0, 0)"}),20),"break"},o=0;o<3;o++){if("break"===i(o))break}};return Object(r.useImperativeHandle)(t,(function(){return{startAnimation:l}})),i.a.createElement(u,{ref:e})}));t.a=i.a.memo(f)},134:function(n,t,e){"use strict";var a=e(2),r=e(0),i=e.n(r),o=e(3),c=e(1);function l(){var n=Object(a.a)(["\nwidth: 100%;\nheight: 35px;\noverflow: hidden;\nposition: relative;\nwhite-space: nowrap;\n.text {\n  position: absolute;\n  animation: "," 10s linear infinite;\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(a.a)(["\nfrom {\n  left: 100%;\n  transform: translateX(100%);\n  }\nto {\n  left: -100%;\n  transform: translateX(-100%);\n  }\n}\n"]);return s=function(){return n},n}function u(){var n=Object(a.a)(["\n  position: fixed;\n  padding: 5px 10px;\n  padding-top: 0;\n  height: 40px;\n  width: 100%;\n  z-index: 100;\n  display: flex;\n  line-height: 40px;\n  color: ",";\n  .back {\n    margin-right: 5px;\n    font-size: 20px;\n    width: 20px;\n  }\n  >h1 {\n    font-size: ",";\n    font-weight: 700;\n  }\n"]);return u=function(){return n},n}var f=o.b.div(u(),c.a["font-color-light"],c.a["font-size-l"]),d=Object(o.c)(s()),p=o.b.div(l(),d),m=i.a.forwardRef((function(n,t){var e=n.handleClick,a=n.title,r=n.isMarquee;return i.a.createElement(f,{ref:t},i.a.createElement("i",{className:"iconfont back",onClick:e},"\ue655"),r?i.a.createElement(p,null,i.a.createElement("h1",{className:"text"},a)):i.a.createElement("h1",null,a))}));m.defaultProps={handleClick:function(){},title:"\u6807\u9898",isMarquee:!1},t.a=i.a.memo(m)},135:function(n,t,e){"use strict";var a=e(0),r=e.n(a),i=e(2),o=e(3),c=e(1);function l(){var n=Object(i.a)(["\n  >li {\n    display: flex;\n    height: 60px;\n    align-items: center;  \n    .index {\n      flex-basis: 60px;\n      width: 60px;\n      height: 60px;\n      line-height: 60px;\n      text-align: center;\n    }\n    .info {\n      box-sizing: border-box;\n      flex: 1;\n      display: flex;\n      height: 100%;\n      padding: 5px 0;\n      flex-direction: column;\n      justify-content: space-around;\n      border-bottom: 1px solid ",";\n      ","\n      >span {\n        ","\n      }\n      >span:first-child {\n        color: ",";\n      }\n      >span:last-child {\n        font-size: ",";\n        color: #bba8a8;\n      }\n    }\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(i.a)(["\n  border-radius: 10px;\n  opacity: 0.98;\n  // \u6ce8\u610f\u5728\u8fd9\u91cc\u80cc\u666f\u6539\u4e3a\u81ea\u914d\u7f6e\u53c2\u6570\u63a7\u5236\n  ","\n  .first_line {\n    box-sizing: border-box;\n    padding: 10px 0;\n    margin-left: 10px;\n    position: relative;\n    justify-content: space-between;\n    border-bottom: 1px solid ",";\n    .play_all {\n      display: inline-block;\n      line-height: 24px;\n      color: ",";\n      .iconfont {\n        font-size: 24px;\n        margin-right: 10px;\n        vertical-align: top;\n      }\n      .sum {\n        font-size: ",";\n        color: ",";\n      }\n      >span {\n        vertical-align: top;\n      }\n    }\n    .add_list,.isCollected {\n      display: flex;\n      align-items: center;\n      position: absolute;\n      right: 0; top :0; bottom: 0;\n      width: 130px;\n      line-height: 34px;\n      background: ",";\n      color: ",";\n      font-size: 0;\n      border-radius: 3px;\n      vertical-align: top;\n      .iconfont {\n        vertical-align: top;\n        font-size: 10px;\n        margin: 0 5px 0 10px;\n      }\n      span {\n        font-size: 14px;\n        line-height: 34px;\n      }\n    }\n    .isCollected {\n      display: flex;\n      background: ",";\n      color: ",";\n    }\n}\n"]);return s=function(){return n},n}var u=o.b.div(s(),(function(n){return n.showBackground?"background: ".concat(c.a["highlight-background-color"],";"):""}),c.a["border-color"],c.a["font-color-desc"],c.a["font-size-s"],c.a["font-color-desc-v2"],c.a["theme-color"],c.a["font-color-light"],c.a["background-color"],c.a["font-color-desc"]),f=o.b.ul(l(),c.a["border-color"],c.a.noWrap(),c.a.noWrap(),c.a["font-color-desc"],c.a["font-size-s"]),d=e(6),p=e(11),m=e(27),b=r.a.forwardRef((function(n,t){var e,a=n.collectCount,i=n.showCollect,o=n.songs,c=n.changePlayListDispatch,l=n.changeCurrentIndexDispatch,s=n.changeSequecePlayListDispatch,p=n.musicAnimation,m=o.length,b=function(n,t){c(o),s(o),l(t),p(n.nativeEvent.clientX,n.nativeEvent.clientY)};return r.a.createElement(u,{ref:t,showBackground:n.showBackground},r.a.createElement("div",{className:"first_line"},r.a.createElement("div",{className:"play_all",onClick:function(n){return b(n,0)}},r.a.createElement("i",{className:"iconfont"},"\ue6e3"),r.a.createElement("span",null," \u64ad\u653e\u5168\u90e8 ",r.a.createElement("span",{className:"sum"},"(\u5171 ",m," \u9996)"))),i?(e=a,r.a.createElement("div",{className:"add_list"},r.a.createElement("i",{className:"iconfont"},"\ue62d"),r.a.createElement("span",null," \u6536\u85cf (",Math.floor(e/1e3)/10," \u4e07)"))):null),r.a.createElement(f,null,function(n){for(var t=[],e=function(e){var a=n[e];t.push(r.a.createElement("li",{key:a.id,onClick:function(n){return b(n,e)}},r.a.createElement("span",{className:"index"},e+1),r.a.createElement("div",{className:"info"},r.a.createElement("span",null,a.name),r.a.createElement("span",null,a.ar?Object(d.f)(a.ar):Object(d.f)(a.artists)," - ",a.al?a.al.name:a.album.name))))},a=0;a<n.length;a++)e(a);return t}(o)))}));t.a=Object(m.b)(null,(function(n){return{changePlayListDispatch:function(t){n(Object(p.d)(t))},changeCurrentIndexDispatch:function(t){n(Object(p.a)(t))},changeSequecePlayListDispatch:function(t){n(Object(p.g)(t))}}}))(r.a.memo(b))},147:function(n,t,e){"use strict";e.r(t);var a=e(9),r=e(0),i=e.n(r),o=e(127),c=e(2),l=e(3),s=e(1);function u(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border-radius: 10px;\n  z-index: 50;\n"]);return u=function(){return n},n}function f(){var n=Object(c.a)(["\n  position: absolute;\n  z-index: 50;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  >div {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    overflow: visible;\n  }\n"]);return f=function(){return n},n}function d(){var n=Object(c.a)(["\n  position: absolute;\n  left: 0; right: 0;\n  margin: auto;\n  box-sizing: border-box;\n  width: 120px;\n  height: 40px;\n  margin-top: -55px;\n  z-index:50;\n  background: ",";\n  color: ",";\n  border-radius: 20px;\n  text-align: center;\n  font-size: 0;\n  line-height: 40px;\n  .iconfont {\n    display: inline-block;\n    margin-right: 10px;\n    font-size: 12px;\n    vertical-align: 1px;\n  }\n  .text {\n    display: inline-block;\n    font-size:14px;\n    letter-spacing: 5px;\n  }\n"]);return d=function(){return n},n}function p(){var n=Object(c.a)(["\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 75%;\n  transform-origin: top;\n  background: url(",");\n  background-size: cover;\n  z-index: 50;\n  .filter {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(7, 17, 27, 0.3);\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: ",";\n  width: 100%;\n  z-index: 100;\n  overflow: hidden;\n  background: #f2f3f4;\n  transform-origin: right bottom;\n  &.fly-enter, &.fly-appear {\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n  &.fly-enter-active, &.fly-appear-active {\n    transition: transform .3s;\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit {\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit-active {\n    transition: transform .3s;\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n"]);return m=function(){return n},n}var b=l.b.div(m(),(function(n){return n.play>0?"60px":0})),g=l.b.div(p(),(function(n){return n.bgUrl})),h=l.b.div(d(),s.a["theme-color"],s.a["font-color-light"]),x=l.b.div(f()),v=l.b.div(u()),y=e(10),E=e(134),j=e(32),O=e(135),k=e(27),z=e(45),w=e(50),C=e(133);t.default=Object(k.b)((function(n){return{artist:n.getIn(["singerInfo","artist"]),songs:n.getIn(["singerInfo","songsOfArtist"]),loading:n.getIn(["singerInfo","loading"])}}),(function(n){return{getSingerDataDispatch:function(t){n(Object(w.a)(!0)),n(Object(w.b)(t))}}}))(i.a.memo((function(n){var t=Object(r.useRef)(0),e=Object(r.useState)(!0),c=Object(a.a)(e,2),l=c[0],s=c[1],u=n.artist,f=n.songs,d=n.loading,p=n.getSingerDataDispatch,m=u.toJS(),k=f.toJS(),w=Object(r.useRef)(),I=Object(r.useRef)(),N=Object(r.useRef)(),R=Object(r.useRef)(),D=Object(r.useRef)(),S=Object(r.useRef)(),_=Object(r.useRef)();Object(r.useEffect)((function(){var e=n.match.params.id;p(e);var a=I.current.offsetHeight;t.current=a,N.current.style.top="".concat(a-5,"px"),S.current.style.top="".concat(a-5,"px"),R.current.refresh()}),[]);var q=Object(r.useCallback)((function(n){var e=t.current,a=n.y,r=I.current,i=w.current,o=D.current,c=S.current,l=-(e-5)+y.a,s=Math.abs(a/e);a>0?(r.style.transform="scale(".concat(1+s,")"),i.style.transform="translate3d(0, ".concat(a,"px, 0)"),c.style.top="".concat(e-5+a,"px")):a>=l?(c.style.top="".concat(e-5-Math.abs(a),"px"),c.style.zIndex=1,r.style.paddingTop="75%",r.style.height=0,r.style.zIndex=-1,i.style.transform="translate3d(0, ".concat(a,"px, 0)"),i.style.opacity="".concat(1-2*s)):a<l&&(c.style.top="".concat(y.a-5,"px"),c.style.zIndex=1,o.style.zIndex=100,r.style.height="".concat(y.a,"px"),r.style.paddingTop=0,r.style.zIndex=99)}),[]),L=Object(r.useCallback)((function(){s(!1)}),[]);return i.a.createElement(o.a,{in:l,timeout:300,classNames:"fly",appear:!0,unmountOnExit:!0,onExited:function(){return n.history.goBack()}},i.a.createElement(b,null,i.a.createElement(E.a,{handleClick:L,title:m.name,ref:D}),i.a.createElement(g,{ref:I,bgUrl:m.picUrl},i.a.createElement("div",{className:"filter"})),i.a.createElement(h,{ref:w},i.a.createElement("i",{className:"iconfont"},"\ue62d"),i.a.createElement("span",{className:"text"},"\u6536\u85cf")),i.a.createElement(v,{ref:S}),i.a.createElement(x,{ref:N},i.a.createElement(j.a,{ref:R,onScroll:q},i.a.createElement(O.a,{songs:k,showCollect:!1,musicAnimation:function(n,t){_.current.startAnimation({x:n,y:t})}}))),d?i.a.createElement(z.a,null):null,i.a.createElement(C.a,{ref:_})))})))}}]);
//# sourceMappingURL=7.55de276e.chunk.js.map