"use strict";(self.webpackChunkfrontend_nft=self.webpackChunkfrontend_nft||[]).push([[933],{11805:function(e,n,t){t.d(n,{$:function(){return u}});var r,a,i=t(30168),o=(t(47313),t(259)),c=t(46417),u=function(e){var n=e.className;return(0,c.jsx)(s.Footer,{className:n,children:(0,c.jsx)(s.Span,{children:"Copyright @2023 CryptoTrades All Rights Reserved"})})},s={Footer:o.ZP.footer(r||(r=(0,i.Z)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    background: ",";\n    position: absolute;\n  "])),(function(e){return e.theme.white})),Span:o.ZP.span(a||(a=(0,i.Z)(["\n    font-family: ",";\n    font-weight: 400;\n    text-decoration: none;\n    font-size: 16px;\n    color: ",";\n    padding: 11px;\n  "])),(function(e){return e.theme.fonts.primary}),(function(e){return e.theme.black}))}},13178:function(e,n,t){t.d(n,{x:function(){return i}});var r=t(47313),a=t(39565);function i(){var e=(0,a.useWeb3React)().provider;return(0,r.useMemo)((function(){return null!==e&&void 0!==e&&e.getSigner?e.getSigner():e}),[e])}},933:function(e,n,t){t.r(n),t.d(n,{default:function(){return Y}});var r,a,i,o,c,u,s,l,d,p,m,g,h,x,f=t(30168),b=t(74165),y=t(15861),v=t(29439),Z=t(3234),w=t(27648),j=t(41517),I=t(70685),k=t(59491),_=t(97178),C=t(75821),S=t(66493),M=t(47313),P=t(58467),T=t(2135),A=t(259),B=t(71917),F=t(60860),E=t(90964),N=t(93149),z=t(71272),O=t(73160),R=t(32335),D=t(39565),G=t(82613),W=t(13178),H=t(23027),U=t(61679),L=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_collection","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"NewCollection","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint8","name":"_creatorFee","type":"uint8"}],"name":"createPrivateCollection","outputs":[{"internalType":"address","name":"_collection","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_decimals","type":"uint256"},{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint8","name":"_creatorFee","type":"uint8"}],"name":"createPublicCollection","outputs":[{"internalType":"address","name":"_collection","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCollectionAddress","outputs":[{"internalType":"address","name":"_collection","type":"address"}],"stateMutability":"view","type":"function"}]'),V=t(46417);function Y(){var e=(0,P.s0)(),n=(0,T.lr)(),t=(0,v.Z)(n,1)[0],r=t.get("mode"),a=t.get("collectionId"),i=(0,D.useWeb3React)(),o=i.account,c=i.chainId,u=(0,M.useState)(),s=(0,v.Z)(u,2),l=s[0],d=s[1],p=(0,M.useState)(""),m=(0,v.Z)(p,2),g=m[0],h=m[1],x=(0,M.useState)(""),f=(0,v.Z)(x,2),I=f[0],k=f[1],_=(0,M.useState)(""),C=(0,v.Z)(_,2),S=C[0],A=C[1],B=(0,M.useState)(""),Y=(0,v.Z)(B,2),X=Y[0],$=Y[1],J=(0,M.useState)(""),K=(0,v.Z)(J,2),Q=K[0],ee=K[1],ne=(0,M.useState)(!0),te=(0,v.Z)(ne,2),re=te[0],ae=te[1],ie=(0,M.useState)(!0),oe=(0,v.Z)(ie,2),ce=oe[0],ue=oe[1],se=(0,M.useState)(!0),le=(0,v.Z)(se,2),de=le[0],pe=le[1],me=(0,M.useState)(0),ge=(0,v.Z)(me,2),he=ge[0],xe=ge[1],fe=(0,M.useState)(0),be=(0,v.Z)(fe,2),ye=be[0],ve=be[1],Ze=(0,M.useState)(0),we=(0,v.Z)(Ze,2),je=we[0],Ie=we[1],ke=(0,M.useState)(!1),_e=(0,v.Z)(ke,2),Ce=_e[0],Se=_e[1],Me=(0,M.useState)("Art"),Pe=(0,v.Z)(Me,2),Te=Pe[0],Ae=Pe[1],Be=(0,M.useState)(""),Fe=(0,v.Z)(Be,2),Ee=Fe[0],Ne=Fe[1],ze=(0,M.useState)(""),Oe=(0,v.Z)(ze,2),Re=Oe[0],De=Oe[1],Ge=(0,M.useState)(0),We=(0,v.Z)(Ge,2),He=We[0],Ue=We[1],Le=[];Le.push({label:"3D Art",value:"3D Art"},{label:"PhotoGraph",value:"PhotoGraph"},{label:"2D Art",value:"2D Art"});var Ve=(0,R.jU)(c).minterAddress,Ye=(0,W.x)();(0,M.useEffect)((function(){"update"===r&&qe()}),[r]);var qe=function(){var e=(0,y.Z)((0,b.Z)().mark((function e(){var n,t;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={_id:a},e.next=3,(0,N.SX)(n,c);case 3:(t=e.sent)&&(h(t.name),k(t.symbol?t.symbol:""),d(t.description),A(t.bannerImage),$(t.logoImage),ee(t.featuredImage),ae(!1),ue(!1),pe(!1),xe("100%"),ve("100%"),Ie("100%"),Ae(t.category),Ne(t.tag),De(t.creator),Ue(t.creatorFee?t.creatorFee:void 0));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Xe=function(){var e=(0,y.Z)((0,b.Z)().mark((function e(n,t){var r,a,i,o,c,u,s,l;return(0,b.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,a=Date.now(),i=n.target.files,o=new FormData,c=Math.random().toString()+a+".jpg",u=0,s=Object.keys(i);case 6:if(!(u<s.length)){e.next=15;break}if(l=s[u],!1!==/\.(jpe?g|png|gif|bmp)$/i.test(i[l].name)){e.next=11;break}return r=!1,e.abrupt("break",15);case 11:o.append("file",i[l],c);case 12:u++,e.next=6;break;case 15:if(r){e.next=18;break}return(0,E.VW)("Not image format"),e.abrupt("return");case 18:return e.next=20,(0,N.El)(o,t);case 20:e.sent&&("banner"===t?(A(c),ae(!1),xe("100%")):"logo"===t?($(c),ue(!1),ve("100%")):"featured"===t&&(ee(c),pe(!1),Ie("100%")));case 22:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),$e=function(e,n){"banner"===n?(A(""),ae(!0),xe(0)):"featured"===n?(ee(""),pe(!0),Ie(0)):"logo"===n&&($(""),ue(!0),ve(0))},Je=function(){var n=(0,y.Z)((0,b.Z)().mark((function n(){var t,i,u,s,d;return(0,b.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(Se(!0),(0,z.Gu)("Collection name",g)){n.next=4;break}return Se(!1),n.abrupt("return");case 4:if((0,z.Gu)("Collection bannerImage",S)){n.next=7;break}return Se(!0),n.abrupt("return");case 7:if((0,z.Gu)("Collection featuredImage",Q)){n.next=10;break}return Se(!0),n.abrupt("return");case 10:if((0,z.Gu)("Collection logoImage",X)){n.next=13;break}return Se(!0),n.abrupt("return");case 13:if("create"!==r){n.next=45;break}if(!Ye||!o){n.next=43;break}return t=(0,H.uN)(Ve,L,Ye),n.prev=16,n.next=19,t.createPrivateCollection(g,I,18,o,Re,He);case 19:return(i=n.sent)?(0,U.fC)(i.hash,U.iU.createCollection):(0,U.b2)(),n.next=23,i.wait();case 23:if(!n.sent){n.next=35;break}return n.next=27,t.getCollectionAddress();case 27:u=n.sent,s={_id:"",name:g,symbol:I,decimals:18,description:l,bannerImage:S,featuredImage:Q,logoImage:X,category:Te,tag:Ee,creator:Re,creatorFee:He||0,contract_address:u,chain:c},(0,N.b4)(s),Se(!1),(0,E.t5)("Collection created successfully! You will be redirected to the myCollection page in a few seconds"),e("/collection/mycollection"),n.next=37;break;case 35:Se(!1),(0,E.cB)("error is occured on chain.");case 37:n.next=43;break;case 39:n.prev=39,n.t0=n.catch(16),Se(!1),(0,E.cB)("error is occured on chain.");case 43:n.next=51;break;case 45:return d={_id:a,name:g,symbol:g,decimals:18,description:l,bannerImage:S,featuredImage:Q,logoImage:X,category:Te,tag:Ee,creator:Re,creatorFee:He||0},n.next=48,(0,N.YR)(d);case 48:Se(!1),(0,E.t5)("Collection updated successfully! You will be redirected to the myCollection page in a few seconds"),e("/collection/mycollection");case 51:case"end":return n.stop()}}),n,null,[[16,39]])})));return function(){return n.apply(this,arguments)}}();return(0,V.jsx)(O.U,{noMargin:!0,fullWidth:!0,children:(0,V.jsx)(q.Content,{children:(0,V.jsxs)(q.Layout,{children:[(0,V.jsx)("header",{children:"Add Your Collection"}),(0,V.jsxs)(q.subContent,{children:[(0,V.jsx)(q.Span,{children:"Name"}),(0,V.jsx)(q.Input,{maxLength:50,value:g,placeholder:"Enter Collection Name",onChange:function(e){return h(e.target.value)},readOnly:"update"===r}),(0,V.jsx)(q.Span,{children:"Symbol"}),(0,V.jsx)(q.Input,{maxLength:10,value:I,placeholder:"Enter Collection Symbol",onChange:function(e){return k(e.target.value)}}),(0,V.jsx)(q.Span,{children:"Description"}),(0,V.jsx)(q.TextArea,{maxLength:1e3,showCount:!0,rows:2,id:"Descript",placeholder:"Enter Description",value:l,onChange:function(e){return d(e.target.value)}}),(0,V.jsx)(q.Span,{children:"Banner Image"}),(0,V.jsx)(q.Help,{children:"This image will also be used for navigation. 1400 x 350 recommended."}),(0,V.jsxs)(q.ImageArea,{children:[(0,V.jsx)("img",{src:""===S?"":G.b.server_url+G.b.collection_bannerImage+S,alt:"",style:{width:"100%",objectFit:"fill",height:he}}),re?(0,V.jsx)(F.S2h,{id:"logo_icon",style:{width:"50px",height:"50px"}}):null,re?(0,V.jsx)("span",{children:"No Image Selected"}):null,re?(0,V.jsxs)(q.Button,{children:[(0,V.jsx)(F.qiC,{style:{width:"20px",height:"20px",marginBottom:"-5px",marginRight:"5px"}}),"Select Image",(0,V.jsx)(q.ImageInput,{type:"file",name:"logo",onChange:function(e){return Xe(e,"banner")}})]}):null,re?null:(0,V.jsx)("button",{className:"returnbtn",onClick:function(e){return $e(0,"banner")},children:"REMOVE"})]}),(0,V.jsxs)(Z.Z,{children:[(0,V.jsxs)(q.Col,{lg:12,xl:12,md:12,xs:12,sm:12,children:[(0,V.jsx)(q.Span,{children:"Featured Image"}),(0,V.jsx)(q.Help,{children:"This image will be used for featuring your collection."}),(0,V.jsx)(q.Help,{children:"600 x 400 Recommended."}),(0,V.jsxs)(q.ImageArea,{children:[(0,V.jsx)("img",{src:""===Q?"":G.b.server_url+G.b.collection_featuredImage+Q,alt:"",style:{width:"100%",objectFit:"fill",height:je}}),de?(0,V.jsx)(F.S2h,{id:"logo_icon",style:{width:"50px",height:"50px"}}):null,de?(0,V.jsx)("span",{children:"No Image Selected"}):null,de?(0,V.jsxs)(q.Button,{children:[(0,V.jsx)(F.qiC,{style:{width:"20px",height:"20px",marginBottom:"-5px",marginRight:"5px"}}),"Select Image",(0,V.jsx)(q.ImageInput,{type:"file",name:"logo",onChange:function(e){return Xe(e,"featured")}})]}):null,de?null:(0,V.jsx)("button",{className:"returnbtn",onClick:function(e){return $e(0,"featured")},children:"REMOVE"})]})]}),(0,V.jsxs)(q.Col,{lg:12,xl:12,md:12,xs:12,sm:12,children:[(0,V.jsx)(q.Span,{children:"Logo Image"}),(0,V.jsx)(q.Help,{children:"This image will also be used for display purposes."}),(0,V.jsx)(q.Help,{children:"350 x 350 Recommended."}),(0,V.jsxs)(q.ImageArea,{children:[(0,V.jsx)("img",{src:""===X?"":G.b.server_url+G.b.collection_logoImage+X,alt:"",style:{width:"100%",objectFit:"fill",height:ye}}),ce?(0,V.jsx)(F.S2h,{id:"logo_icon",style:{width:"50px",height:"50px"}}):null,ce?(0,V.jsx)("span",{children:"No Image Selected"}):null,ce?(0,V.jsxs)(q.Button,{children:[(0,V.jsx)(F.qiC,{style:{width:"20px",height:"20px",marginBottom:"-5px",marginRight:"5px"}}),"Select Image",(0,V.jsx)(q.ImageInput,{type:"file",name:"logo",onChange:function(e){return Xe(e,"logo")}})]}):null,ce?null:(0,V.jsx)("button",{className:"returnbtn",onClick:function(e){return $e(0,"logo")},children:"REMOVE"})]})]})]}),(0,V.jsx)(q.Span,{children:"Category and Tags"}),(0,V.jsx)(q.Help,{children:"Make your items more discoverable on FractionzM by adding tag and a category."}),(0,V.jsxs)(Z.Z,{style:{marginBottom:"20px"},children:[(0,V.jsx)(q.Col,{lg:12,xl:12,md:12,xs:24,sm:24,children:(0,V.jsxs)(q.Row,{children:[(0,V.jsx)(w.ZP,{value:1,onChange:function(){return Ae("Art")},checked:"Art"===Te,children:"Art"}),(0,V.jsx)(w.ZP,{value:2,onChange:function(){return Ae("Merchandize")},checked:"Merchandize"===Te,children:"Merchandize"}),(0,V.jsx)(w.ZP,{value:3,onChange:function(){return Ae("Memebership")},checked:"Membership"===Te,children:"Membership"}),(0,V.jsx)(w.ZP,{value:4,onChange:function(){return Ae("Utility")},checked:"Utility"===Te,children:"Utility"})]})}),(0,V.jsx)(q.Col,{lg:12,xl:12,md:12,xs:24,sm:24,children:(0,V.jsx)(j.Z,{value:Ee,style:{width:"80%",marginTop:"20px"},onChange:function(e){Ne(e)},options:Le})})]}),(0,V.jsx)(q.Span,{children:"Creator Earnings"}),(0,V.jsx)(q.Help,{children:"Earn a percentage of the sale price every time one of your items is re-sold using OpenSea. Adding multiple addresses may increase gas fees for buyers."}),(0,V.jsxs)(Z.Z,{children:[(0,V.jsx)(q.Col,{xs:20,sm:20,md:16,lg:16,xl:16,children:(0,V.jsx)(q.Input,{value:Re,placeholder:"Enter Creator Address",onChange:function(e){return De(e.target.value)},readOnly:"update"===r})}),(0,V.jsx)(q.Col,{xs:4,sm:4,md:4,lg:4,xl:4,children:(0,V.jsx)(q.InputNumber,{min:0,max:50,value:He,placeholder:"earning percent for creator",onChange:function(e){return Ue(Math.round(e))},readOnly:"update"===r})})]}),(0,V.jsx)(q.Button,{style:{width:"100px",marginTop:"20px"},id:"login",loading:Ce,onClick:Je,children:"create"===r?"Create":"Update"})]})]})})})}var q={Content:A.ZP.div(r||(r=(0,f.Z)(["\n    display: flex;\n    color: ",";\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n  "])),(function(e){return e.theme.gray[4]})),Layout:A.ZP.div(a||(a=(0,f.Z)(["\n    border: 1px solid ",";\n    border-radius: 5px;\n    line-height: 1.5rem;\n    @media (min-width: ",") {\n      width: 80%;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    @media (min-width: ",") {\n      width: 60%;\n      margin-top: 100px;\n      margin-bottom: 100px;\n    }\n    header {\n      height: 40px;\n      background: ",";\n      border-bottom: 1px solid ",";\n      padding: 7px 20px;\n    }\n  "])),(function(e){return e.theme.gray[1]}),(function(e){return e.theme.viewport.tablet}),(function(e){return e.theme.viewport.desktopXl}),(function(e){return e.theme.gray[0]}),(function(e){return e.theme.gray[1]})),subContent:A.ZP.div(i||(i=(0,f.Z)(["\n    padding: 10px 20px 20px 20px;\n  "]))),Span:A.ZP.span(o||(o=(0,f.Z)(["\n    color: ",";\n    font-family: ",";\n  "])),(function(e){return e.theme.black}),(function(e){return e.theme.fonts.primary})),ImageInput:(0,A.ZP)(I.Z)(c||(c=(0,f.Z)(["\n    opacity: 0;\n    position: absolute;\n    width: 150px;\n    height: 30px;\n    right:0px !important;\n    appearance: none;\n    cursor: default;\n    align-items: baseline;\n    color: inherit;\n    text-overflow: ellipsis;\n    white-space: pre;\n    text-align: start !important;  \n    background-color: ",";\n    margin: 0em;\n    padding: 1px 2px;\n    border-width: 2px;\n    border-style: inset;\n    border: none;\n    border-image: initial;\n  "])),(function(e){return e.theme.gray[0]})),Button:(0,A.ZP)(k.ZP)(u||(u=(0,f.Z)(["\n    border-radius: 5px;\n    background-color: rgb(34, 106, 237);\n    color: ",";\n    border: none;\n    box-shadow: none;\n    width: 150px;\n    font-size: 16px;\n    font-weight: bold;\n    height: 40px;\n    padding-bottom: 7px;\n\n    &:hover,\n    &:active,\n    &:focus {\n      background-color: rgb(34, 106, 237);\n      color: ",";\n      opacity: 0.8;\n      box-shadow: none;\n      border: none;\n    }\n  "])),B.O9.white,B.O9.white),Input:(0,A.ZP)(I.Z)(s||(s=(0,f.Z)(["\n    border-radius: 3px;\n    box-shadow: 1px 1px 5px hsl(0deg 0% 0% / 30%);\n    margin-top: 8px;\n    margin-bottom: 15px;\n    color: ",";\n    background: ",";\n    border: 1px solid ",";\n  "])),(function(e){return e.theme.gray[4]}),(function(e){return e.theme.gray[0]}),(function(e){return e.theme.gray[1]})),InputNumber:(0,A.ZP)(_.Z)(l||(l=(0,f.Z)(["\n    border-radius: 3px;\n    box-shadow: 1px 1px 5px hsl(0deg 0% 0% / 30%);\n    margin-top: 8px;\n    margin-bottom: 15px;\n    color: ",";\n    background: ",";\n    border: 1px solid ",";\n  "])),(function(e){return e.theme.gray[4]}),(function(e){return e.theme.gray[0]}),(function(e){return e.theme.gray[1]})),TextArea:(0,A.ZP)(S.Z)(d||(d=(0,f.Z)(["\n    border-radius: 8px;\n    border: none;\n    margin-bottom: 15px;\n    box-shadow: 1px 1px 5px hsl(0deg 0% 0% / 5%);\n    .ant-input {\n      color: ",";\n      background: ",";\n      border: 1px solid ",";\n    }\n  "])),(function(e){return e.theme.gray[4]}),(function(e){return e.theme.gray[0]}),(function(e){return e.theme.gray[1]})),Help:A.ZP.div(p||(p=(0,f.Z)(["\n    margin-top: 5px;\n    font-size: 12px;\n    color: #999;\n  "]))),ImageArea:A.ZP.div(m||(m=(0,f.Z)(["\n    border:1px solid ",";\n    text-align: center; \n    height: 200px; \n    position: relative; \n    display: flex; \n    justify-content: center; \n    flex: 1; \n    margin-bottom:20px;\n    align-items: center; \n    flex-direction: column; \n    background-color: ",";\n    .returnbtn {\n      position: absolute;\n      top:0;\n      right: 0;\n      border-radius: 5px;\n      background-color:  rgb(34, 106, 237);\n      color: ",";\n      border: none;\n      box-shadow: none;\n      width: 100px;\n      font-size: 14px;\n      font-weight: bold;\n      height: 30px;\n      padding-bottom: 7px;\n\n      &:hover,\n      &:active,\n      &:focus {\n        background-color: ",";\n        color: ",";\n        opacity: 0.8;\n        box-shadow: none;\n        border: none;\n      }\n    }\n  "])),(function(e){return e.theme.gray[1]}),(function(e){return e.theme.gray[0]}),B.O9.white,B.O9.red2,B.O9.white),Row:(0,A.ZP)(Z.Z)(g||(g=(0,f.Z)(["\n    margin: 20px 0px 10px !important;\n    h4 {\n      margin: 0px;\n      text-align: center;\n    }\n  "]))),Col:(0,A.ZP)(C.Z)(h||(h=(0,f.Z)(["\n    margin: 0px 0px !important;\n    border: 0px solid !important;\n    padding: 0px 5px !important;\n  "]))),PropertyItem:A.ZP.div(x||(x=(0,f.Z)(["\n    display: grid;\n    grid-template-columns: 2fr 2fr;\n    gap: 16px;\n    margin: 0px !important;\n    border-width: 0px !important;\n    width: 100% !important;\n    &:not(:last-child) {\n      margin-bottom: 16px;\n    }\n\n    > input {\n      border-radius: 8px;\n      height: 40px;\n    }\n\n    > button {\n      border: none;\n      box-shadow: none;\n      height: 40px;\n      border-radius: 8px;\n      background-color: ",";\n      color: ",";\n      margin-top: 8px;\n      \n      > span {\n        font-size: 16px;\n        line-height: 24px;\n      }\n\n      &:hover,\n      &:active,\n      &:focus {\n        border: none;\n        box-shadow: none;\n        opacity: 0.6;\n      }\n    }\n  "])),B.O9.black,B.O9.white)}},73160:function(e,n,t){t.d(n,{U:function(){return f}});var r,a,i,o,c,u,s,l=t(30168),d=t(29439),p=t(47313),m=t(259),g=t(11805),h=t(78388),x=t(46417);function f(e){var n=e.children,t=e.bgGray,r=e.noMargin,a=e.fullWidth,i=e.sidebar,o=e.marginMedium,c=(0,p.useState)(!1),u=(0,d.Z)(c,2),s=u[0],l=u[1];return(0,p.useEffect)((function(){void 0!=i&&l(!0)}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.h,{}),(0,x.jsx)(b.Main,{bgGray:!!t,noMargin:!!r,sidebar:i,isSidebar:s,marginMedium:o,children:(0,x.jsx)(b.Container,{fullWidth:!!a,children:n})}),(0,x.jsx)(g.$,{})]})}var b={Main:m.ZP.main(r||(r=(0,l.Z)(["\n    min-height: calc(100vh - 72px);\n    background: ",";\n    display: block;\n    align-items: center;\n    padding-top: 100px !important;\n\n    ","\n\n    ","\n    ","\n    \n    @media (min-width: ",") {\n      min-height: calc(100vh - 48.2px);\n    }\n    @media (min-width: ",") {\n      min-height: calc(100vh - 72px);\n      padding: ",";\n      ","\n      ","\n    }\n\n    @media (min-width: ",") {\n      padding: ",";\n      ","\n      ","\n      ","\n    }\n\n    .infinite-scroll-component {\n      vertical-align: top !important;\n    }\n  "])),(function(e){return e.theme.white}),(function(e){return e.bgGray&&(0,m.iv)(a||(a=(0,l.Z)(["\n        background: ",";\n      "])),e.theme.gray[0])}),(function(e){return(0,m.iv)(i||(i=(0,l.Z)(["\n        padding: ",";\n      "])),e.noMargin?0:e.marginMedium?e.theme.margin.medium:e.theme.margin.small)}),(function(e){return e.isSidebar&&!e.sidebar&&"padding-left: 74px !important;"}),(function(e){return e.theme.viewport.mobile}),(function(e){return e.theme.viewport.tablet}),(function(e){return e.theme.margin.small}),(function(e){return(0,m.iv)(o||(o=(0,l.Z)(["\n          padding: ",";\n        "])),e.noMargin?0:e.marginMedium?e.theme.margin.medium:e.theme.margin.small)}),(function(e){return e.isSidebar&&!e.sidebar&&"padding-left: 74px !important;"}),(function(e){return e.theme.viewport.desktop}),(function(e){return e.theme.margin.small}),(function(e){return(0,m.iv)(c||(c=(0,l.Z)(["\n          padding: ",";\n        "])),e.noMargin?0:e.marginMedium?e.theme.margin.medium:e.theme.margin.small)}),(function(e){return e.sidebar&&"padding-left: 324px !important;"}),(function(e){return e.isSidebar&&!e.sidebar&&"padding-left: 74px !important;"})),Container:m.ZP.div(u||(u=(0,l.Z)(["\n    width: 100%;\n    margin: 0 auto;\n    ","\n  "])),(function(e){return!e.fullWidth&&(0,m.iv)(s||(s=(0,l.Z)(["\n        max-width: ",";\n      "])),e.theme.viewport.desktopXl)}))}},93149:function(e,n,t){t.d(n,{El:function(){return g},P4:function(){return p},SX:function(){return l},YR:function(){return d},b4:function(){return m},bv:function(){return h}});var r=t(74165),a=t(15861),i=t(41905),o=t(90964),c=t(82613),u=t(39610),s=t(20004),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,l,d,p,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new s.Z,l={headers:{"content-type":"application/json",Authorization:"Bearer "+a.get("token")}},d={_id:"",name:"",symbol:"",description:"",decimals:18,bannerImage:"",featuredImage:"",logoImage:"",contract_address:"",category:"",tag:"",creator:"",creatorFee:0},e.prev=3,e.next=6,u.Z.post(c.b.server_api_url+c.b.collection_detail,n,l);case 6:if(200!==(p=e.sent).status){e.next=23;break}if(!(m=p.data).status){e.next=23;break}return d._id=m.result._id,d.name=m.result.name,d.symbol=m.result.symbol,d.description=m.result.description,d.bannerImage=m.result.bannerImage,d.featuredImage=m.result.featuredImage,d.logoImage=m.result.logoImage,d.contract_address=m.result.contract_address,d.category=m.result.category,d.tag=m.result.tag,d.creator=m.result.creator,d.creatorFee=m.result.creatorFee,e.abrupt("return",d);case 23:return e.abrupt("return",d);case 26:return e.prev=26,e.t0=e.catch(3),(0,o.cB)(i.T[5011]),e.abrupt("return",d);case 30:case"end":return e.stop()}}),e,null,[[3,26]])})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,a=new s.Z,l={headers:{"content-type":"application/json",Authorization:"Bearer "+a.get("token")}},e.next=5,u.Z.post(c.b.server_api_url+c.b.collection_update,n,l).then((function(e){200===e.status&&(e.data.status?((0,o.t5)("successfully updated"),t=!0):(0,o.cB)("name is duplicated"))})).catch((function(e){(0,o.cB)(i.T[5011],e)}));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!1);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,a=new s.Z,l={headers:{"content-type":"application/json",Authorization:"Bearer "+a.get("token")}},e.next=5,u.Z.post(c.b.server_api_url+c.b.collection_add,n,l).then((function(e){200===e.status&&(e.data.status?((0,o.t5)("successfully created"),t=!0):(0,o.cB)("name is duplicated"))})).catch((function(e){(0,o.cB)(i.T[5011],e)}));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,s="",s="banner"===t?c.b.server_api_url+c.b.collection_bannerImage_upload:"featured"===t?c.b.server_api_url+c.b.collection_featuredImage_upload:c.b.server_api_url+c.b.collection_logoImage_upload,e.next=5,u.Z.post(s,n).then((function(e){if(200===e.status){var n=e.data;a=n.status}})).catch((function(e){(0,o.cB)(i.T[5011],e)}));case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){return{getCollectionItems:function(e,n,t){var l=arguments;return(0,a.Z)((0,r.Z)().mark((function a(){var d,p,m,g,h,x,f,b;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d=l.length>3&&void 0!==l[3]?l[3]:0,p=new s.Z,m={headers:{"content-type":"application/json",Authorization:"Bearer "+p.get("token")}},g=[],(h={}).paginationLimit=e,h.offset=d,h.searchName=n,h.type="my",h.chain=t,r.prev=10,r.next=13,u.Z.post(c.b.server_api_url+c.b.collection_list,h,m);case 13:if(200!==(x=r.sent).status){r.next=21;break}if(!(f=x.data).status){r.next=21;break}return b=0,f.data.find((function(e){var n={_id:"",name:"",symbol:"",bannerImage:"",featuredImage:"",logoImage:"",category:"",tag:"",creator:"",creatorFee:0,contract_address:""};n._id=e._id,n.name=e.name,n.symbol=e.symbol,n.bannerImage=e.bannerImage,n.featuredImage=e.featuredImage,n.logoImage=e.logoImage,n.category=e.category,n.tag=e.tag,n.creator=e.creator,n.creatorFee=e.creatorFee,n.contract_address=e.contract_address,g[b]=n,b++})),r.abrupt("return",g);case 21:return r.abrupt("return",[]);case 24:return r.prev=24,r.t0=r.catch(10),(0,o.cB)(i.T[5011]),r.abrupt("return",[]);case 28:case"end":return r.stop()}}),a,null,[[10,24]])})))()}}}},71272:function(e,n,t){t.d(n,{DW:function(){return i},Gu:function(){return a}});var r=t(90964),a=function(e,n){var t=!0;return void 0!=n&&""!=n||((0,r.VW)(e+" is required"),t=!1),t},i=function(e){var n=!0;return/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e)||((0,r.VW)("Invalidated Email"),n=!1),n}}}]);