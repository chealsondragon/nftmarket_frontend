/*! For license information please see 255.81d6f7cb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend_nft=self.webpackChunkfrontend_nft||[]).push([[255],{72090:function(n,e,t){t.d(e,{Z:function(){return T}});var r,o,i,a,s,l,c,u,p=t(30168),d=t(74165),h=t(15861),m=t(29439),f=t(70685),g=t(59491),x=t(47313),b=t(259),v=t(78388),w=t(54972),y=t(58467),Z=t(82613),_=t(93149),k=t.p+"static/media/banner.a6b160022c4ff2d5593f.jpg",S=t(46417);function T(n){var e=n.name,t=n.banner,r=n.item_count,o=n.collection_id,i=n.collection_address,a=n.category,s=n.detail,l=(0,y.s0)(),c=(0,x.useState)(!1),u=(0,m.Z)(c,2),p=u[0],f=u[1],g=(0,x.useState)(!1),b=(0,m.Z)(g,2),T=b[0],j=b[1],P=(0,x.useState)(!1),E=(0,m.Z)(P,2),L=E[0],C=E[1],D=["sub__menus"];L?D.push("sub__menus__Active"):D.push("");var B=function(){var n=(0,h.Z)((0,d.Z)().mark((function n(e,t,r,i,s){var c;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),f(!1===p),j(!1===T),"createItem"!==t){n.next=7;break}l({pathname:r,search:"?category=".concat(a,"&collectionId=").concat(i,"&collectionAddress=").concat(s)}),n.next=18;break;case 7:if("updateCollection"!==t){n.next=11;break}l({pathname:r,search:"?mode=update&collectionId=".concat(i)}),n.next=18;break;case 11:return c={collection_id:o},n.next=14,(0,_.P4)(c);case 14:if(n.sent){n.next=17;break}return n.abrupt("return");case 17:l({pathname:r,search:"?mode=delete&collectionId=".concat(i)});case 18:case"end":return n.stop()}}),n)})));return function(e,t,r,o,i){return n.apply(this,arguments)}}();return(0,S.jsxs)(I.Container,{children:[(0,S.jsx)(v.h,{}),(0,S.jsx)("img",{src:t?Z.b.server_url+Z.b.collection_bannerImage+t:k,alt:"",style:{width:"100%",height:"auto",maxHeight:"500px"}}),!s&&(0,S.jsx)("div",{style:{float:"right",marginTop:"-50px"},children:(0,S.jsxs)(I.SettingButton,{onClick:function(){C(!1===L)},className:"sub__menus__arrows",children:[(0,S.jsx)(w._tD,{style:{width:"25px",fontSize:"18px",margin:"-6px 0 0 -13px"}}),(0,S.jsxs)(I.SettingsUl,{className:D.join(" "),children:[(0,S.jsxs)("li",{className:"sub-item",style:{borderBottom:"0px"},children:[" ",(0,S.jsx)(I.SettingsLink,{onClick:function(n){return B(n,"createItem","/createItem",o||"",i||"")},children:" Add Item "})," "]}),(0,S.jsxs)("li",{className:"sub-item",style:{borderBottom:"0px"},children:[(0,S.jsx)(I.SettingsLink,{onClick:function(n){return B(n,"updateCollection","/collection/operation",o||"","")},children:" Edit Collection "})," "]}),(0,S.jsxs)("li",{className:"sub-item",style:{borderBottom:"0px"},children:[(0,S.jsx)(I.SettingsLink,{onClick:function(n){return B(n,"delete","/collection/mycollection","","")},children:" Delete Collection "})," "]})]})]})}),(0,S.jsx)("div",{style:{width:"100%",textAlign:"center",marginTop:"30px"},children:(0,S.jsx)("span",{className:"collectionname",children:e||"Collection"})}),!s&&(0,S.jsx)("div",{style:{width:"100%",textAlign:"center",marginTop:"40px",paddingBottom:"30px"},children:(0,S.jsxs)(I.InfoDiv,{children:[r,(0,S.jsx)("div",{children:"Items"})]})})]})}var I={SettingsLink:b.ZP.div(r||(r=(0,p.Z)(["\n    color: ",";\n    margin: 0 0 0 10px;\n    background: ",";\n    width: 100%;\n    border: 0px;\n    font-size: 15px;\n    line-height: 2rem;\n    &:hover,\n    &:active,\n    &:focus {\n      background: ",";\n    }\n  "])),(function(n){return n.theme.black}),(function(n){return n.theme.white}),(function(n){return n.theme.white})),SettingsUl:b.ZP.ul(o||(o=(0,p.Z)(["\n    background: ",";\n    width: 140px;\n    margin-left: -100px !important;\n    margin-top: 15px;\n    text-align: left;\n    @media (min-width: ",") {\n      margin-left: 5px;\n    }\n  "])),(function(n){return n.theme.white}),(function(n){return n.theme.viewport.desktop})),InfoDiv:b.ZP.div(i||(i=(0,p.Z)(["\n    display: inline-block;\n    font-size: 20px;\n    font-weight: bold;\n    width: 100px;\n    height: 70px;\n    padding-top: 5px;\n    border: 1px solid ",";\n    color: ",";\n\n    > div {\n      font-size: 20px;\n      font-weight: bold;\n      font-family: ftbasebold;\n      color: ",";\n    }\n  "])),(function(n){return n.theme.gray[1]}),(function(n){return n.theme.black}),(function(n){return n.theme.black})),Container:b.ZP.div(a||(a=(0,p.Z)(["\n    background: ",";\n    color: ",";\n    .collectionname {\n      font-size: 36px;\n      font-weight: bold;\n      color: black;\n      font-family: ftbasebold;\n    }\n  "])),(function(n){return n.theme.white}),(function(n){return n.theme.gray[4]})),SettingInput:(0,b.ZP)(f.Z)(s||(s=(0,p.Z)(["\n    opacity: 0;\n    position: relative;\n    width: 35px;\n    height: 35px;\n    appearance: none;\n    cursor: default;\n    align-items: baseline;\n    color: inherit;\n    text-overflow: ellipsis;\n    white-space: pre;\n    text-align: start !important;  \n    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));\n    margin-left: -35px;\n    padding: 1px 2px;\n    border-width: 2px;\n    border-style: inset;\n    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));\n    border-image: initial;\n  "]))),SettingButton:(0,b.ZP)(g.ZP)(l||(l=(0,p.Z)(["\n    background-color: "," !important;\n    color: ",";\n    border: 1px solid ",";\n    border-radius: 5px;\n    box-shadow: none;\n    position: relative;\n    width: 35px;\n    height: 35px;\n    padding: 4px 0 0 0;\n    margin: 0px 5px;\n  "])),(function(n){return n.theme.gray[1]}),(function(n){return n.theme.gray[3]}),(function(n){return n.theme.gray[2]})),BannerInput:(0,b.ZP)(f.Z)(c||(c=(0,p.Z)(["\n    opacity: 0;\n    position: absolute;\n    width: 35px;\n    height: 35px;\n    top: 90px;\n    right: 5px;\n    appearance: none;\n    cursor: default;\n    align-items: baseline;\n    color: inherit;\n    text-overflow: ellipsis;\n    white-space: pre;\n    text-align: start !important;  \n    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));\n    margin: 0em;\n    padding: 1px 2px;\n    border-width: 2px;\n    border-style: inset;\n    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));\n    border-image: initial;\n  "]))),BannerButton:(0,b.ZP)(g.ZP)(u||(u=(0,p.Z)(["\n    background-color: "," !important;\n    color: ",";\n    border: 1px solid ",";\n    border-radius: 5px;\n    box-shadow: none;\n    position: absolute;\n    width: 35px;\n    height: 35px;\n    top: 90px;\n    right: 5px;\n    padding: 0 0 0 3px;\n  "])),(function(n){return n.theme.gray[1]}),(function(n){return n.theme.gray[3]}),(function(n){return n.theme.gray[2]}))}},24825:function(n,e,t){t.r(e),t.d(e,{S:function(){return G},default:function(){return $}});var r,o,i,a,s,l,c,u,p,d,h,m,f,g,x,b,v,w,y,Z=t(30168),_=t(74165),k=t(15861),S=t(93433),T=t(29439),I=t(59491),j=t(70685),P=t(71917),E=t(47313),L=t(2135),C=t(86948),D=t(259),B=t(72090),z=t(11805),Y=t(78388),F=t(93149),M=t(69918),A=t(83725),N=t(59154),R=t(23027),O=t(46417),H=function(n){var e,t,r=n.name,o=n.image,i=n.loading,a=n.url,s=n.itemId,l=n.tokenId,c=n.className,u=n.contract,p=(n.exitPrice,n.priceDollar,n.category,n.size),d=n.metadata,h=n.fraction,m=n.lazy,f=n.slot;e=o||("undefined"!==typeof d?d.image:""),t="undefined"!==typeof d?d.animation_url:"";var g=(0,E.useState)(e&&(0,R.Xw)(e)||N.Z),x=(0,T.Z)(g,2),b=x[0],v=x[1],w=(0,E.useState)(t&&(0,R.Xw)(t)||N.Z),y=(0,T.Z)(w,2),Z=y[0];y[1];return(0,O.jsxs)(U.Card,{className:"".concat(c," ").concat(p||""),to:{pathname:a,search:"?itemId=".concat(s,"&collectionAddress=").concat(u,"&lazy=").concat(m?1:0,"&slot=").concat(f,"&fraction=").concat(h,"&tokenId=").concat(l)},children:[(0,O.jsxs)(U.BoxImage,{className:""===e?"bg-fail":"",children:["undefined"!==typeof d&&"image"!==d.media_type?(0,O.jsxs)(U.NFTVideo,{autoPlay:!0,muted:!0,loop:!0,preload:"none",children:[(0,O.jsx)("source",{src:Z||b}),"Your browser does not support the video tag."]}):(0,O.jsx)(U.Img,{src:b,className:b===N.Z?"img-fail":"",onError:function(){v(N.Z)},alt:r||"not found",hidden:!!i,loading:"lazy"}),(0,O.jsx)(M.Z,{indicator:(0,O.jsx)(A.Z.Avatar,{active:!0,size:64,shape:"circle"}),spinning:!!i})]}),(0,O.jsx)(U.BoxInfo,{children:(0,O.jsx)(U.Wrapper,{children:(0,O.jsx)(U.Content,{children:(0,O.jsxs)(A.Z,{className:"full-width-skeleton",loading:i,active:!0,paragraph:{rows:0},children:[(0,O.jsx)(U.Label,{children:r}),1!==h&&(0,O.jsxs)(U.Frac,{children:["Fractionz ",h]})]})})})})]})},U={Card:(0,D.ZP)(L.rU)(r||(r=(0,Z.Z)(["\n    min-width: 304px;\n    padding: 16px;\n    height: 416px;\n    border: 1px solid ",";\n    box-sizing: border-box;\n    border-radius: 8px;\n    justify-content: center;\n    box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.05);\n    background: ",";\n\n    .hidden {\n      display: none;\n    }\n\n    &.small {\n      height: 370px;\n    }\n\n    &:hover {\n      cursor: pointer;\n      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n      transition: box-shadow ease-in 250ms;\n    }\n\n    @media (max-width: ",") {\n      margin: 0 auto;\n    }\n  "])),(function(n){return n.theme.gray[2]}),(function(n){return n.theme.white}),P.Pj.md),BoxImage:D.ZP.div(o||(o=(0,Z.Z)(["\n    width: 100%;\n    height: 270px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 8px;\n    margin-bottom: 8px;\n    align-items: center;\n\n    .ant-skeleton {      \n      display: flex;\n      align-items: center;\n    }\n  "]))),Img:D.ZP.img(i||(i=(0,Z.Z)(["\n    max-width: 100%;\n    max-height: 270px;\n    width: auto;\n    height: auto;\n    -webkit-user-drag: none;\n    border-radius: 4px;\n  "]))),NFTVideo:D.ZP.video(a||(a=(0,Z.Z)(["\n    max-width: 100%;\n    max-height: 270px;\n  "]))),NFTAudio:D.ZP.audio(s||(s=(0,Z.Z)(["\n    max-width: 100%;\n    max-height: 270px;\n  "]))),BoxInfo:D.ZP.div(l||(l=(0,Z.Z)(["\n    border-top: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    .full-width-skeleton .ant-skeleton-content .ant-skeleton-title {\n      width: 100% !important;\n    }\n    .ant-skeleton {\n      height: 26px;\n      display: flex;\n      align-items: center;\n    }\n  "]))),Label:D.ZP.label(c||(c=(0,Z.Z)(["\n    color: ",";\n    font-size: 18px;\n    font-weight: bolder;\n    font-family: ftbasebold;\n    line-height: 13px;\n    margin-top: 22px;\n    white-space: nowrap;\n    text-decoration: none;\n  "])),(function(n){return n.theme.black})),Name:D.ZP.span(u||(u=(0,Z.Z)(["\n    font-family: ",";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 16px;\n    color: ",";\n\n    margin-top: 4px;\n    height: 16px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "])),P.Rq.nunito,(function(n){return n.theme.gray[4]})),Informative:D.ZP.span(p||(p=(0,Z.Z)(["\n    font-family: ",";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px !important;\n    line-height: 18px;\n    color: ",";\n  "])),P.Rq.nunito,P.O9.gray1),Content:D.ZP.div(d||(d=(0,Z.Z)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n\n    span {\n      font-family: ",";\n      font-style: normal;\n      font-weight: 400;\n    }\n    .hidden-collection {\n      display: none;\n    }\n\n    .invisible {\n      display: none;\n      margin-top: 16px;\n    }\n  "])),P.Rq.nunito),Price:D.ZP.span(h||(h=(0,Z.Z)(["\n    color: ",";\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n  "])),P.O9.gray2),Symbol:D.ZP.small(m||(m=(0,Z.Z)(["\n    font-size: 8px;\n  "]))),Wrapper:D.ZP.div(f||(f=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n  "]))),Frac:D.ZP.div(g||(g=(0,Z.Z)(["\n    background-color: rgb(50 65 211);\n    color: white;\n    border-radius: 8px;\n    width: 140px;\n    text-align: center;\n    padding: 3px;\n    margin-top: 16px;\n    margin-left: 15%;\n  "])))},X=t(32335),W=t(39565),q=t(45263),V=t(13178);function $(){var n=(0,L.lr)(),e=(0,T.Z)(n,1)[0],t=e.get("collectionId"),r=e.get("collectionAddress"),o=(0,E.useState)({_id:"",name:"",bannerImage:"",featuredImage:"",logoImage:"",symbol:"",category:"",tag:"",creator:"",creatorFee:0}),i=(0,T.Z)(o,2),a=i[0],s=i[1],l=(0,V.x)(),c=(0,W.useWeb3React)(),u=c.account,p=c.chainId,d=(0,E.useState)(!0),h=(0,T.Z)(d,2),m=h[0],f=h[1],g=(0,E.useState)([]),x=(0,T.Z)(g,2),b=x[0],v=x[1],w=(0,E.useState)(0),y=(0,T.Z)(w,2),Z=y[0],I=y[1],j=(0,E.useState)(X.s7),P=(0,T.Z)(j,2),D=P[0],M=P[1],A=(0,E.useState)(!0),N=(0,T.Z)(A,2),R=N[0],U=N[1],$=(0,O.jsx)(G.CardsContainer,{children:(0,S.Z)(Array(X.s7)).map((function(){return(0,O.jsx)(H,{loading:!0,size:"small"},"loading-".concat(Math.random()))}))});(0,E.useEffect)((function(){J()}),[t]);var J=function(){var n=(0,k.Z)((0,_.Z)().mark((function n(){var e,r;return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={_id:t},n.next=3,(0,F.SX)(e,p);case 3:r=n.sent,s(r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,E.useEffect)((function(){var n=function(){var n=(0,k.Z)((0,_.Z)().mark((function n(){var e;return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(u&&p&&r)){n.next=13;break}return n.prev=1,n.next=4,(0,q.z)().get3525OwnedItems(u,t,0,X.s7,l,r);case 4:e=n.sent,v(e.items),I(e.itemCount),U(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:f(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[u,X.s7]);var K=function(){var n=(0,k.Z)((0,_.Z)().mark((function n(){var e;return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(u&&p&&r)){n.next=13;break}return n.prev=1,n.next=4,(0,q.z)().get3525OwnedItems(u,t,D,X.s7,l,r);case 4:e=n.sent,v([].concat((0,S.Z)(b),(0,S.Z)(e.items))),M(D+X.s7),e.items.length<X.s7&&U(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(!0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(){return n.apply(this,arguments)}}();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Y.h,{}),(0,O.jsx)(G.Main,{children:(0,O.jsx)(B.Z,{name:a.name,banner:a.bannerImage,item_count:Z,collection_id:t,collection_address:a.contract_address,category:a.category})}),(0,O.jsxs)(G.Contents,{children:[m&&$,!m&&(0,O.jsx)(C.Z,{dataLength:b.length,next:K,hasMore:R,loader:$,children:(0,O.jsx)(G.CardsContainer,{children:b.map((function(n){return(0,O.jsx)(H,{name:"".concat(n.metadata.title),itemId:n.id,tokenId:n.tokenId||"",metadata:n.metadata,contract:n.contract_address,fraction:n.fraction,lazy:n.lazy_minting,slot:n.slot,url:"/item",size:"small"},"".concat(n.id||n.tokenId))}))})})]}),(0,O.jsx)(z.$,{})]})}var G={Button:(0,D.ZP)(I.ZP)(x||(x=(0,Z.Z)(["\n  margin-right: 20px !important;\n  background-color: ",";\n  color: ",";\n  border-radius: 5px !important;\n  padding: 3px 15px 5px 15px !important;\n  cursor: pointer !important;\n  float: left;\n\n  &:hover,\n  &:active,\n  &:focus {\n    background-color: ",";\n    opacity: 0.8;\n  }\n  margin-top: 10px;\n  margin-bottom: -10px;\n  @media (min-width: ",") {\n    margin-top: 0px;\n    margin-right: 0px !important;\n    margin-left: 20px !important;\n    float: right;\n  }\n  "])),P.O9.red1,P.O9.white,P.O9.red2,(function(n){return n.theme.viewport.tablet})),Input:(0,D.ZP)(j.Z)(b||(b=(0,Z.Z)(["\n    padding: 0.375rem 0.75rem;\n    fontSize: 0.875rem;\n    lineHeight: 1.5;\n    color: ",";\n    background: ",";\n    backgroundClip: padding-box;\n    border: 1px solid ",";\n    borderRadius: 0.25rem;\n    marginBottom: 10px;\n    width: 100%;\n    display: inline-block;\n\n    @media (min-width: ",") {\n      width: calc(100% - 230px);\n    }\n  "])),(function(n){return n.theme.gray[4]}),(function(n){return n.theme.gray[0]}),(function(n){return n.theme.gray[2]}),(function(n){return n.theme.viewport.tablet})),Main:D.ZP.div(v||(v=(0,Z.Z)(["\n    width: 100%;\n    background: #F6F6F6;\n    margin-top: 96px;\n  "]))),Contents:D.ZP.div(w||(w=(0,Z.Z)(["\n    padding: 3px 24px; \n    background: ",";\n    display: block;\n    align-items: center;\n\n    @media (min-width: ",") {\n      min-height: 31.1vh;\n    }\n    @media (min-width: ",") {\n      min-height: 39.3vh;\n    }\n    @media (min-width: ",") {\n      min-height: 54.2vh;\n    }\n    @media (min-width: ",") {\n      min-height: 33.3vh;\n      padding: 3px 124px;\n    }\n    @media (min-width: ",") {\n      min-height: 33.3vh;\n      padding: 3px 250px;\n    }\n  "])),(function(n){return n.theme.white}),(function(n){return n.theme.viewport.mobile}),(function(n){return n.theme.viewport.tablet}),(function(n){return n.theme.viewport.desktop}),(function(n){return n.theme.viewport.desktopl}),(function(n){return n.theme.viewport.desktopXl})),CardsContainer:D.ZP.div(y||(y=(0,Z.Z)(["\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 2vw;\n    justify-content: flex-start;\n    align-items: flex-start;\n    a {\n      text-decoration: none !important;\n    }\n    \n    > div:last-of-type {\n      margin-bottom: 4vw;\n    }\n\n    @media (min-width: ",") {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    @media (min-width: ",") {\n      grid-template-columns: repeat(3, 1fr);\n\n      > div:last-of-type {\n        margin-bottom: 4vw;\n      }\n    }\n\n    @media (min-width: ",") {\n      grid-template-columns: repeat(4, 1fr);\n      gap: 2vw;\n\n      > div:last-of-type {\n        margin-bottom: 2vw;\n      }\n    }\n  "])),(function(n){return n.theme.viewport.tablet}),(function(n){return n.theme.viewport.desktop}),(function(n){return n.theme.viewport.desktopXl}))}},93149:function(n,e,t){t.d(e,{El:function(){return m},P4:function(){return d},SX:function(){return u},YR:function(){return p},b4:function(){return h},bv:function(){return f}});var r=t(74165),o=t(15861),i=t(41905),a=t(90964),s=t(82613),l=t(39610),c=t(20004),u=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,u,p,d,h;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=new c.Z,u={headers:{"content-type":"application/json",Authorization:"Bearer "+o.get("token")}},p={_id:"",name:"",symbol:"",description:"",decimals:18,bannerImage:"",featuredImage:"",logoImage:"",contract_address:"",category:"",tag:"",creator:"",creatorFee:0},n.prev=3,n.next=6,l.Z.post(s.b.server_api_url+s.b.collection_detail,e,u);case 6:if(200!==(d=n.sent).status){n.next=23;break}if(!(h=d.data).status){n.next=23;break}return p._id=h.result._id,p.name=h.result.name,p.symbol=h.result.symbol,p.description=h.result.description,p.bannerImage=h.result.bannerImage,p.featuredImage=h.result.featuredImage,p.logoImage=h.result.logoImage,p.contract_address=h.result.contract_address,p.category=h.result.category,p.tag=h.result.tag,p.creator=h.result.creator,p.creatorFee=h.result.creatorFee,n.abrupt("return",p);case 23:return n.abrupt("return",p);case 26:return n.prev=26,n.t0=n.catch(3),(0,a.cB)(i.T[5011]),n.abrupt("return",p);case 30:case"end":return n.stop()}}),n,null,[[3,26]])})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=!1,o=new c.Z,u={headers:{"content-type":"application/json",Authorization:"Bearer "+o.get("token")}},n.next=5,l.Z.post(s.b.server_api_url+s.b.collection_update,e,u).then((function(n){200===n.status&&(n.data.status?((0,a.t5)("successfully updated"),t=!0):(0,a.cB)("name is duplicated"))})).catch((function(n){(0,a.cB)(i.T[5011],n)}));case 5:return n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",!1);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=!1,o=new c.Z,u={headers:{"content-type":"application/json",Authorization:"Bearer "+o.get("token")}},n.next=5,l.Z.post(s.b.server_api_url+s.b.collection_add,e,u).then((function(n){200===n.status&&(n.data.status?((0,a.t5)("successfully created"),t=!0):(0,a.cB)("name is duplicated"))})).catch((function(n){(0,a.cB)(i.T[5011],n)}));case 5:return n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=!1,c="",c="banner"===t?s.b.server_api_url+s.b.collection_bannerImage_upload:"featured"===t?s.b.server_api_url+s.b.collection_featuredImage_upload:s.b.server_api_url+s.b.collection_logoImage_upload,n.next=5,l.Z.post(c,e).then((function(n){if(200===n.status){var e=n.data;o=e.status}})).catch((function(n){(0,a.cB)(i.T[5011],n)}));case 5:return n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){return{getCollectionItems:function(n,e,t){var u=arguments;return(0,o.Z)((0,r.Z)().mark((function o(){var p,d,h,m,f,g,x,b;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return p=u.length>3&&void 0!==u[3]?u[3]:0,d=new c.Z,h={headers:{"content-type":"application/json",Authorization:"Bearer "+d.get("token")}},m=[],(f={}).paginationLimit=n,f.offset=p,f.searchName=e,f.type="my",f.chain=t,r.prev=10,r.next=13,l.Z.post(s.b.server_api_url+s.b.collection_list,f,h);case 13:if(200!==(g=r.sent).status){r.next=21;break}if(!(x=g.data).status){r.next=21;break}return b=0,x.data.find((function(n){var e={_id:"",name:"",symbol:"",bannerImage:"",featuredImage:"",logoImage:"",category:"",tag:"",creator:"",creatorFee:0,contract_address:""};e._id=n._id,e.name=n.name,e.symbol=n.symbol,e.bannerImage=n.bannerImage,e.featuredImage=n.featuredImage,e.logoImage=n.logoImage,e.category=n.category,e.tag=n.tag,e.creator=n.creator,e.creatorFee=n.creatorFee,e.contract_address=n.contract_address,m[b]=e,b++})),r.abrupt("return",m);case 21:return r.abrupt("return",[]);case 24:return r.prev=24,r.t0=r.catch(10),(0,a.cB)(i.T[5011]),r.abrupt("return",[]);case 28:case"end":return r.stop()}}),o,null,[[10,24]])})))()}}}},86948:function(n,e,t){var r=t(47313),o=function(n,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},o(n,e)};var i=function(){return i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},i.apply(this,arguments)};var a={Pixel:"Pixel",Percent:"Percent"},s={unit:a.Percent,value:.8};function l(n){return"number"===typeof n?{unit:a.Percent,value:100*n}:"string"===typeof n?n.match(/^(\d*(\.\d+)?)px$/)?{unit:a.Pixel,value:parseFloat(n)}:n.match(/^(\d*(\.\d+)?)%$/)?{unit:a.Percent,value:parseFloat(n)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),s):(console.warn("scrollThreshold should be string or number"),s)}var c=function(n){function e(e){var t=n.call(this,e)||this;return t.lastScrollTop=0,t.actionTriggered=!1,t.startY=0,t.currentY=0,t.dragging=!1,t.maxPullDownDistance=0,t.getScrollableTarget=function(){return t.props.scrollableTarget instanceof HTMLElement?t.props.scrollableTarget:"string"===typeof t.props.scrollableTarget?document.getElementById(t.props.scrollableTarget):(null===t.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},t.onStart=function(n){t.lastScrollTop||(t.dragging=!0,n instanceof MouseEvent?t.startY=n.pageY:n instanceof TouchEvent&&(t.startY=n.touches[0].pageY),t.currentY=t.startY,t._infScroll&&(t._infScroll.style.willChange="transform",t._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},t.onMove=function(n){t.dragging&&(n instanceof MouseEvent?t.currentY=n.pageY:n instanceof TouchEvent&&(t.currentY=n.touches[0].pageY),t.currentY<t.startY||(t.currentY-t.startY>=Number(t.props.pullDownToRefreshThreshold)&&t.setState({pullToRefreshThresholdBreached:!0}),t.currentY-t.startY>1.5*t.maxPullDownDistance||t._infScroll&&(t._infScroll.style.overflow="visible",t._infScroll.style.transform="translate3d(0px, "+(t.currentY-t.startY)+"px, 0px)")))},t.onEnd=function(){t.startY=0,t.currentY=0,t.dragging=!1,t.state.pullToRefreshThresholdBreached&&(t.props.refreshFunction&&t.props.refreshFunction(),t.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){t._infScroll&&(t._infScroll.style.overflow="auto",t._infScroll.style.transform="none",t._infScroll.style.willChange="unset")}))},t.onScrollListener=function(n){"function"===typeof t.props.onScroll&&setTimeout((function(){return t.props.onScroll&&t.props.onScroll(n)}),0);var e=t.props.height||t._scrollableNode?n.target:document.documentElement.scrollTop?document.documentElement:document.body;t.actionTriggered||((t.props.inverse?t.isElementAtTop(e,t.props.scrollThreshold):t.isElementAtBottom(e,t.props.scrollThreshold))&&t.props.hasMore&&(t.actionTriggered=!0,t.setState({showLoader:!0}),t.props.next&&t.props.next()),t.lastScrollTop=e.scrollTop)},t.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:e.dataLength},t.throttledOnScrollListener=function(n,e,t,r){var o,i=!1,a=0;function s(){o&&clearTimeout(o)}function l(){var l=this,c=Date.now()-a,u=arguments;function p(){a=Date.now(),t.apply(l,u)}i||(r&&!o&&p(),s(),void 0===r&&c>n?p():!0!==e&&(o=setTimeout(r?function(){o=void 0}:p,void 0===r?n-c:n)))}return"boolean"!==typeof e&&(r=t,t=e,e=void 0),l.cancel=function(){s(),i=!0},l}(150,t.onScrollListener).bind(t),t.onStart=t.onStart.bind(t),t.onMove=t.onMove.bind(t),t.onEnd=t.onEnd.bind(t),t}return function(n,e){function t(){this.constructor=n}o(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}(e,n),e.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(n){this.props.dataLength!==n.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(n,e){return n.dataLength!==e.prevDataLength?i(i({},e),{prevDataLength:n.dataLength}):null},e.prototype.isElementAtTop=function(n,e){void 0===e&&(e=.8);var t=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,r=l(e);return r.unit===a.Pixel?n.scrollTop<=r.value+t-n.scrollHeight+1:n.scrollTop<=r.value/100+t-n.scrollHeight+1},e.prototype.isElementAtBottom=function(n,e){void 0===e&&(e=.8);var t=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,r=l(e);return r.unit===a.Pixel?n.scrollTop+t>=n.scrollHeight-r.value:n.scrollTop+t>=r.value/100*n.scrollHeight},e.prototype.render=function(){var n=this,e=i({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),t=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(e){return n._infScroll=e},style:e},this.props.pullDownToRefresh&&r.createElement("div",{style:{position:"relative"},ref:function(e){return n._pullDown=e}},r.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!t&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(r.Component);e.Z=c}}]);