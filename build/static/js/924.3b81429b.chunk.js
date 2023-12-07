"use strict";(self.webpackChunkfrontend_nft=self.webpackChunkfrontend_nft||[]).push([[924],{2535:function(n,e,t){t.d(e,{m:function(){return g}});var i,a,r,o,s,d=t(30168),p=t(29439),l=t(45742),u=t(19626),m=t(47313),c=t(259),f=t(59154),x=t(71917),h=t(23027),y=t(46417),g=function(n){var e=n.image,t=n.name,i=n.animation,a=n.animationType,r=n.padding,o=n.fullWidth,s=(0,m.useState)(!1),d=(0,p.Z)(s,2),l=d[0],u=d[1],c=(0,m.useState)(!1),x=(0,p.Z)(c,2),g=x[0],w=x[1],v=(0,m.useState)(f.Z),j=(0,p.Z)(v,2),Z=j[0],k=j[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b.Content,{className:""===e?"bg-fail":"",padding:r,fullWidth:o,children:"image"!=a?(0,y.jsxs)(b.NFTVideo,{autoPlay:!0,muted:!0,loop:!0,preload:"none",onClick:function(){u(!0)},children:[(0,y.jsx)("source",{src:(0,h.Xw)(i),type:"video/mp4"}),(0,y.jsx)("source",{src:"movie.ogg",type:"video/ogg"})]}):(0,y.jsxs)(b.ContractImage,{fullWidth:o,children:[(0,y.jsx)(b.Image,{onError:function(){k(f.Z)},src:e||Z,onPreviewClose:function(){w(!g)},loading:"lazy"}),g&&(0,y.jsx)("div",{className:"title-image-nft",children:t})]})}),(0,y.jsx)(b.ModalVideo,{open:l,destroyOnClose:!0,centered:!0,onOk:function(){u(!1)},onCancel:function(){u(!1)},children:(0,y.jsxs)(b.NFTVideo,{autoPlay:!0,controls:!0,preload:"none",controlsList:"nodownload",children:[(0,y.jsx)("source",{src:(0,h.Xw)(i),type:"video/mp4"}),(0,y.jsx)("source",{src:"movie.ogg",type:"video/ogg"})]})})]})},b={Content:c.ZP.div(i||(i=(0,d.Z)(["\n    &.bg-fail {\n      background: ",";\n    }\n    width: 100%;\n    height: 100%;\n    ",";\n    background: ",";\n    justify-content: center;\n    align-items: center;\n    video {\n      cursor: pointer;\n    }\n\n    @media (min-width: ",") {\n      ",";\n      display: flex;\n      video {\n        cursor: pointer;\n        ","; \n      }\n    }\n\n    @media (min-width: ",") {\n      ",";         \n      display: flex;\n      video {\n        cursor: pointer;\n        ",";         \n      }\n    }\n\n    @media (min-width: ",") {\n      ",";\n      display: flex;\n      video {\n        cursor: pointer;\n        ","; \n      }\n    }\n  "])),(function(n){return n.theme.gray[1]}),(function(n){return n.padding?"padding: 30px 0px !important;":"padding: 0px !important;"}),(function(n){return n.theme.gray[1]}),x.Pj.md,(function(n){return!n.fullWidth&&"min-width: 330px; !important; min-height: 330px;"}),(function(n){return!n.fullWidth&&"min-width: 330px; !important; min-height: 330px;"}),x.Pj.lg,(function(n){return!n.fullWidth&&"min-width: 500px; !important; min-height: 500px;"}),(function(n){return!n.fullWidth&&"min-width: 500px; !important; min-height: 500px; max-height: 500px;"}),x.Pj.xl,(function(n){return!n.fullWidth&&"min-width: 544px; !important; min-height: 544px;"}),(function(n){return!n.fullWidth&&"min-width: 544px; !important; min-height: 544px;"})),ContractImage:c.ZP.div(a||(a=(0,d.Z)(["\n    display: flex;\n    justify-content: center;\n    ",";\n    height: 100%;\n    .title-image-nft {\n      position: fixed;\n      bottom: 20px;\n      left: 20px;\n      color: black;\n      font-weight: 500;\n      font-size: 1.5rem;\n      z-index: 999999;\n      font-family: Montserrat;\n      font-weight: 500;\n    }\n    \n    @media (max-width: ",") {\n      width: 100%;\n    }\n\n    @media (min-width: ",") {\n      ",";\n    }\n\n    @media (min-width: ",") {\n      ",";\n    }\n\n    @media (min-width: ",") {\n      ",";\n    }\n\n    > .ant-image {\n      width: 100%;\n      height: 100%;\n    }\n\n    .ant-image-mask-info {\n      text-align: center;\n      @media (max-width: ",") {\n        display: none;\n      }\n    }\n\n    .ant-image-mask-info {\n      text-align: center;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: row;\n      font-size: 1.6rem;\n      font-family: Montserrat;\n      font-style: normal;\n      font-weight: 400;\n    }\n  "])),(function(n){return n.fullWidth?"width: 100%;":"width: 50%;"}),x.Pj.sm,x.Pj.md,(function(n){return n.fullWidth?"width: 100% !important;":"max-width: 330px;"}),x.Pj.lg,(function(n){return n.fullWidth?"width: 100% !important;":"max-width: 500px;"}),x.Pj.xl,(function(n){return n.fullWidth?"width: 100% !important;":"max-width: 544px;"}),x.Pj.md),Image:(0,c.ZP)(l.Z)(r||(r=(0,d.Z)(["\n    border-radius: 8px;\n    height: 20%;\n    object-fit: contain;\n    object-position: center;\n    background-color: transparent;\n  "]))),NFTVideo:c.ZP.video(o||(o=(0,d.Z)(["\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n  "]))),ModalVideo:(0,c.ZP)(u.Z)(s||(s=(0,d.Z)(["\n    width: 100% !important;\n    max-width: 750px;\n    height: auto;\n    .ant-modal-content {\n      background: none !important;\n      box-shadow: none;\n    }\n    .ant-modal-footer {\n      display: none;\n    }\n  "])))}},13178:function(n,e,t){t.d(e,{x:function(){return r}});var i=t(47313),a=t(39565);function r(){var n=(0,a.useWeb3React)().provider;return(0,i.useMemo)((function(){return null!==n&&void 0!==n&&n.getSigner?n.getSigner():n}),[n])}},24924:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var i,a,r,o,s,d,p,l,u,m,c,f,x=t(30168),h=t(74165),y=t(15861),g=t(29439),b=t(47313),w=t(58467),v=t(73160),j=t(259),Z=t(3234),k=t(75821),T=t(45742),_=t(70685),z=t(59491),P=t(41517),M=t(2535),I=t(82613),C=t(39565),S=t(13178),F=t(32335),B=t(52969),E=t(23027),W=t(95564),A=t(61679),N=t(90964),O=t(18826),U=t(96749),D=function(n,e){var t=(0,b.useState)(),i=(0,g.Z)(t,2),a=i[0],r=i[1],o=function(){var e=(0,y.Z)((0,h.Z)().mark((function e(t){var i;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===n||void 0===n?void 0:n.getBalance(t);case 2:i=e.sent,r(i);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,b.useEffect)((function(){if(n&&null!==e&&void 0!==e&&e.length){var t=!1;t?(t=!0,r(void 0)):o(e)}}),[n,e]),a},R=t(46417);function L(){var n,e,t=(0,w.s0)(),i=(0,w.TH)().state,a=(0,b.useState)(!1),r=(0,g.Z)(a,2),o=r[0],s=r[1],d=(0,S.x)(),p=(0,C.useWeb3React)(),l=p.account,u=p.chainId,m=p.provider,c=D(m,l),f=(0,F.jU)(u).marketplaceAddress,x=(0,b.useState)(1),j=(0,g.Z)(x,2),T=j[0],_=j[1],z=(0,b.useState)(0),P=(0,g.Z)(z,2),L=P[0],X=P[1],G=(0,b.useState)(0),H=(0,g.Z)(G,2),K=H[0],J=H[1],$=(0,b.useState)(0),q=(0,g.Z)($,2),Q=q[0],Y=q[1],nn=(0,b.useState)(0),en=(0,g.Z)(nn,2),tn=en[0],an=en[1],rn=(0,b.useState)(0),on=(0,g.Z)(rn,2),sn=on[0],dn=on[1],pn=(0,b.useState)(0),ln=(0,g.Z)(pn,2),un=ln[0],mn=ln[1],cn=(0,b.useState)(!1),fn=(0,g.Z)(cn,2),xn=fn[0],hn=fn[1],yn=function(){var n=(0,y.Z)((0,h.Z)().mark((function n(){var e,a,r,o,p,m,x,y;return(0,h.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(d&&l&&i.item.contract_address&&u&&c)){n.next=81;break}if(e=(0,E.uN)(f,B,d),s(!0),n.prev=3,i.listType!=O.k.AUCTION){n.next=11;break}if(!((0,E.P7)(c,18)<i.item.fraction*L)){n.next=8;break}return(0,N.cB)("you have not enough balance"),n.abrupt("return");case 8:r={value:(0,U.parseEther)(i.item.fraction*L+"")},n.next=15;break;case 11:if(!((0,E.P7)(c,18)<T*i.ExitPrice)){n.next=14;break}return(0,N.cB)("you have not enough balance"),n.abrupt("return");case 14:r={value:(0,U.parseEther)(T*i.ExitPrice+"")};case 15:if(i.listType!=O.k.AUCTION){n.next=27;break}return console.log("auction"),console.log(i),n.next=20,e.bid(i.item.contract_address,i.item.tokenId,r);case 20:return(o=n.sent)?(0,A.fC)(o.hash,A.iU.createCollection):(0,A.b2)(),n.next=24,o.wait();case 24:a=n.sent,n.next=59;break;case 27:if(!(i.item.fraction>1)){n.next=50;break}return console.log("fraction"),console.log(i),n.next=32,e.getListedCollections();case 32:return p=n.sent,console.log("collections"),console.log(p),n.next=37,e.getUserListedItemIds("0x85C75455e529C1d5592e828b4c106191EFdE5B8C","0x80201f05101a2fc2cF04b40cE4C924C28722A9Aa");case 37:return m=n.sent,console.log("idds"),console.log(m),console.log(),n.next=43,e.instantBuyFraction(i.item.contract_address,i.item.tokenId,T,r);case 43:return(x=n.sent)?(0,A.fC)(x.hash,A.iU.createCollection):(0,A.b2)(),n.next=47,x.wait();case 47:a=n.sent,n.next=59;break;case 50:return console.log("not not"),console.log(i),n.next=54,e.instantBuy(i.item.contract_address,i.item.tokenId,r);case 54:return(y=n.sent)?(0,A.fC)(y.hash,A.iU.createCollection):(0,A.b2)(),n.next=58,y.wait();case 58:a=n.sent;case 59:if(!a){n.next=72;break}if(i.listType!=O.k.FIXED_PRICE){n.next=65;break}return n.next=63,(0,W.K)().buyFixedPrice(i.item.id,i.item.collection,i.ExitPrice,T,l);case 63:n.next=67;break;case 65:return n.next=67,(0,W.K)().bidAuction(i.item.id,i.item.collection,i.ExitPrice,T,l);case 67:s(!1),(0,N.t5)("successfully sold!"),t("/"),n.next=74;break;case 72:s(!1),(0,N.cB)("error is occured on chain.");case 74:n.next=81;break;case 76:n.prev=76,n.t0=n.catch(3),console.log(c),s(!1),(0,N.cB)("error is occured on chain.");case 81:case"end":return n.stop()}}),n,null,[[3,76]])})));return function(){return n.apply(this,arguments)}}(),gn=(0,b.useCallback)((function(){var n=i.duration-un;n<=0&&hn(!0);var e=Math.floor(n/3600/24);J(e);var t=Math.floor((n-3600*e*24)/3600);Y(t);var a=Math.floor((n-3600*e*24-3600*t)/60);an(a);var r=Math.floor(n-3600*e*24-3600*t-60*a);dn(r),mn(un+1)}),[un]);return(0,b.useEffect)((function(){var n=setInterval(gn,1e3);return xn&&clearInterval(n),function(){clearInterval(n)}}),[i,gn,xn]),(0,R.jsxs)(v.U,{fullWidth:!0,noMargin:!0,children:[(0,R.jsx)(Z.Z,{justify:"center",children:(0,R.jsx)(M.m,{image:(0,E.Xw)(i.item.metadata.image||""),name:i.item.metadata.title,animation:i.item.metadata.animation_url,animationType:i.item.metadata.media_type||"image",padding:!0,fullWidth:!1})}),(0,R.jsx)(Z.Z,{justify:"center",children:(0,R.jsx)(V.Title,{children:i.item.metadata.title})}),(0,R.jsxs)(Z.Z,{justify:"center",children:[(0,R.jsxs)(V.Desc,{children:[(0,R.jsx)("h4",{children:"Created by"}),(0,R.jsxs)("div",{children:[(0,R.jsx)("img",{src:i.item.creator_logo?I.b.server_url+I.b.user_profile_image+i.item.creator_logo:""}),(0,R.jsx)("span",{children:i.item.creator_name})]})]}),(0,R.jsxs)(V.Desc,{children:[(0,R.jsx)("h4",{children:"Collection"}),(0,R.jsxs)("div",{children:[(0,R.jsx)("img",{className:"collection",src:i.item.collection_image?I.b.server_url+I.b.collection_featuredImage+i.item.collection_image:""}),(0,R.jsx)("span",{children:i.item.collection_name})]})]}),i.item.fraction>1&&(0,R.jsxs)(V.Desc,{children:[(0,R.jsx)("h4",{style:{marginBottom:"20px"},children:"Fractionized"}),(0,R.jsx)("div",{children:(0,R.jsx)("span",{className:"fraction",children:i.item.fraction})})]})]}),(0,R.jsx)(Z.Z,{justify:"center",children:(0,R.jsx)(V.Content,{children:(0,R.jsxs)(Z.Z,{justify:"center",children:[(0,R.jsxs)(k.Z,{sm:24,md:12,lg:12,xl:12,children:[(0,R.jsx)("h4",{style:{color:"rgb(120,120,120)"},children:"Current Price"}),(0,R.jsx)("div",{style:{fontFamily:"ftbasebold",fontSize:"28px",fontWeight:"bolder",marginTop:"10px",position:"relative",display:"inline-block"},children:i.ExitPrice+("56"===i.item.chain?"BNB":"MATIC")})]}),(0,R.jsx)(k.Z,{className:"right_content",sm:24,md:12,lg:12,xl:12,children:i.listType===O.k.FIXED_PRICE?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("h4",{style:{color:"rgb(120,120,120)"},children:"fractionz amount"}),(0,R.jsx)(V.Input,{type:"number",maxLength:10,value:T,placeholder:"Enter fractionz amount",onChange:function(n){return _(n.target.value)},readOnly:1===i.item.fraction})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("h4",{style:{color:"rgb(120,120,120)"},children:"Auction Ends in"}),(0,R.jsx)("div",{style:{fontFamily:"ftbasebold",fontSize:"28px",fontWeight:"bolder",marginTop:"10px",position:"relative",display:"inline-block"},children:xn?"Ended":(K>0?K+" Days ":"")+(Q>0?Q+" Hrs ":"")+(tn>0?tn+" Mins ":"")+(sn>0?sn+" Secs":"")}),(0,R.jsx)("h4",{style:{color:"rgb(120,120,120)"},children:"Offer"}),(0,R.jsx)(V.Input,{type:"number",maxLength:10,value:L,placeholder:"Enter your offer",onChange:function(n){return X(n.target.value)}})]})}),(0,R.jsx)(V.Button,{onClick:function(){return yn()},loading:o,children:i.listType===O.k.AUCTION?"Place a bid":"Buy Now"})]})})}),(0,R.jsx)(V.Row,{justify:"center",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("span",{children:"Owned by"}),(0,R.jsx)("img",{className:"owner",src:i.item.owner_logo?I.b.server_url+I.b.user_profile_image+i.item.owner_logo:""}),(0,R.jsx)("span",{children:i.item.owner_name})]})}),(0,R.jsx)(Z.Z,{children:(0,R.jsx)(V.SubTitle,{children:"Description"})}),(0,R.jsx)(Z.Z,{justify:"center",children:(0,R.jsx)("div",{style:{fontFamily:"ftbasebold",width:"60%",height:"0px",border:"1px solid #888",display:"block"}})}),(0,R.jsx)(Z.Z,{children:(0,R.jsx)(V.SubDesc,{children:null===i||void 0===i||null===(n=i.item)||void 0===n||null===(e=n.metadata)||void 0===e?void 0:e.description})}),(0,R.jsx)(V.Row,{justify:"center",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("img",{className:"scan",src:"assets/icons/etherscan.jpg"}),(0,R.jsx)("a",{children:"View on EtherScan"}),(0,R.jsx)("img",{className:"scan",src:"assets/icons/ipfs.png"}),(0,R.jsx)("a",{children:"View on IPFS"})]})})]})}var V={Content:j.ZP.div(i||(i=(0,x.Z)(["\n    padding: 20px 30px;\n    width: 50%;\n    margin-top: 5rem;\n    border: 1px solid ",";\n    border-radius: 20px;\n    .right_content {\n      @media (min-width: 500px) {\n        border-left: 2px solid #888;\n        padding-left: 20px;\n      }\n    }\n    h3 {\n      font-family: ftbasebold;\n    }\n  "])),(function(n){return n.theme.gray[1]})),Desc:j.ZP.div(a||(a=(0,x.Z)(["\n    margin: 0px 10px;\n    h4 {\n      margin: 0px 0px 10px;\n      font-size: 16px;\n      font-family: brand;\n      color: ",";\n      @media (min-width: 280px) {\n        font-size: 11px;\n      }\n    }\n    div > span {\n      font-size: 24px;\n      font-weight: bolder;\n      font-family: ftbasebold;\n      position: relative;\n      top: -8px;\n      left: 6px;\n      word-break: break-word;\n      @media (min-width: 280px) {\n        font-size: 12px;\n      }\n      @media (min-width: 360px) {\n        font-size: 14px;\n      }\n      @media (min-width: 768px) {\n        font-size: 18px;\n      }\n      @media (min-width: 1024px) {\n        font-size: 24px;\n      }\n    }\n    div > img {\n      width: 34px;\n      height: 34px;\n      border-radius: 17px;\n    }\n    .collection {\n      border-radius: 8px !important;\n    }\n    .fraction {\n      font-size: 24px;\n      font-weight: bolder;\n      font-family: ftbasebold;\n      position: relative;\n      \n      left: 6px;\n      word-break: break-word;\n      @media (min-width: 280px) {\n        font-size: 12px;\n        top: 0px;\n      }\n      @media (min-width: 360px) {\n        font-size: 14px;\n        top: 0px;\n      }\n      @media (min-width: 768px) {\n        font-size: 18px;\n        top: -3px;\n      }\n      @media (min-width: 1024px) {\n        font-size: 24px;\n        top: -8px;\n      }\n    } \n  "])),(function(n){return n.theme.gray[4]})),Image:(0,j.ZP)(T.Z)(r||(r=(0,x.Z)(["\n    width: 100%;\n    min-height: 300px;\n  "]))),Title:j.ZP.div(o||(o=(0,x.Z)(["\n    font-size: 5rem;\n    font-weight: 600;\n    font-family: ftbasemedium;\n    color: ",";\n    margin: 1rem 0;\n    word-break: break-word;\n    @media (min-width: 280px) {\n      font-size: 2rem;\n    }\n    @media (min-width: 360px) {\n      font-size: 3rem;\n    }\n    @media (min-width: 768px) {\n      font-size: 4rem;\n    }\n    @media (min-width: 1024px) {\n      font-size: 5rem;\n    }\n  "])),(function(n){return n.theme.black})),Back:j.ZP.div(s||(s=(0,x.Z)(["\n    width: 60px;\n    font-size: 1rem;\n    color: ",";\n    cursor: pointer;\n  "])),(function(n){return n.theme.gray[4]})),Input:(0,j.ZP)(_.Z)(d||(d=(0,x.Z)(["\n    border-radius: 3px;\n    box-shadow: 1px 1px 5px hsl(0deg 0% 0% / 30%);\n    margin: 15px 0px 15px;\n    color: ",";\n    background: ",";\n    border: 1px solid ",";\n    width: 90%;\n  "])),(function(n){return n.theme.gray[4]}),(function(n){return n.theme.gray[0]}),(function(n){return n.theme.gray[1]})),Button:(0,j.ZP)(z.ZP)(p||(p=(0,x.Z)(["\n    background: ",";\n    color: ",";\n    font-weight: bold;\n    font-size: 20px;\n    font-family: ftbasebold;\n    border: 1px solid ",";\n    border-radius: 10px !important;\n    padding: 5px 15px 7px 15px !important;\n    cursor: pointer !important;\n    height: 40px;\n    width: 90%;\n    margin: 30px 10px;\n    &:hover,\n    &:active,\n    &:focus {\n      background-color: rgb(22, 22, 22);\n      color: white;\n    }\n  "])),(function(n){return n.theme.black}),(function(n){return n.theme.white}),(function(n){return n.theme.gray[1]})),Row:(0,j.ZP)(Z.Z)(l||(l=(0,x.Z)(["\n    margin: 20px 0px 30px;\n    .owner {\n      width: 34px;\n      height: 34px;\n      border-radius: 17px;\n    }\n    .scan {\n      width: 34px;\n      height: 34px;\n      margin-left: 20px;\n      @media (min-width: 280px) {\n        width: 20px;\n        height: 20px;\n      }\n      @media (min-width: 768px) {\n        width: 25px;\n        height: 25px;\n      }\n      @media (min-width: 1024px) {\n        width: 34px;\n        height: 34px;\n      }\n    }\n    a {\n      font-size: 14px;\n      font-family: ftbasebold;\n      position: relative;\n      top: -10px;\n      left: 6px;\n      color: black;\n      margin-right: 20px;\n      word-break: break-word;\n      &:hover {\n        color: blue;\n      }\n      @media (min-width: 280px) {\n        font-size: 11px;\n        top: -5px;\n      }\n      @media (min-width: 360px) {\n        font-size: 12px;\n        top: -5px;\n      }\n      @media (min-width: 768px) {\n        font-size: 14px;\n        top: -7px;\n      }\n      @media (min-width: 1024px) {\n        font-size: 14px;\n        top: -10px;\n      }\n    }\n    span {\n      padding-right: 20px;\n      font-size: 24px;\n      font-weight: bolder;\n      font-family: ftbasebold;\n      position: relative;\n      top: -8px;\n      left: 6px;\n      @media (min-width: 280px) {\n        font-size: 12px;\n      }\n      @media (min-width: 360px) {\n        font-size: 14px;\n      }\n      @media (min-width: 768px) {\n        font-size: 18px;\n      }\n      @media (min-width: 1024px) {\n        font-size: 24px;\n      }\n    }\n  "]))),Select:(0,j.ZP)(P.Z)(u||(u=(0,x.Z)(["\n    width: 90%;\n    max-width: none !important;\n    height: 30px;\n\n    border-radius: 8px;\n    margin-top: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    .ant-select-selector {\n      width: 90%;\n      height: 30px !important;\n\n      background: ",";\n      border-radius: 8px !important;\n      border: none;\n      font-style: normal;\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 24px;\n      color: ",";\n      padding-right: 15px;\n      outline: none !important;\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .ant-select-arrow {\n      color: ",";\n    }\n  "])),(function(n){return n.theme.white}),(function(n){return n.theme.gray[3]}),(function(n){return n.theme.gray[3]})),PropertyItem:j.ZP.div(m||(m=(0,x.Z)(["\n    display: grid;\n    grid-template-columns: 4fr 4fr 1fr;\n    gap: 16px;\n\n    &:not(:last-child) {\n      margin-bottom: 16px;\n    }\n\n    > input {\n      border-radius: 8px;\n      height: 40px;\n    }\n  "]))),SubTitle:j.ZP.p(c||(c=(0,x.Z)(["\n    font-family: ftbasebold;\n    width: 100%;\n    padding-left: 20%;\n    font-size: 24px;\n    font-weight: bolder;\n    @media (min-width: 280px) {\n      font-size: 14px;\n    }\n    @media (min-width: 360px) {\n      font-size: 16px;\n    }\n    @media (min-width: 768px) {\n      font-size: 18px;\n    }\n    @media (min-width: 1024px) {\n      font-size: 24px;\n    }\n  "]))),SubDesc:j.ZP.p(f||(f=(0,x.Z)(["\n    font-family: ftbasebold;\n    width: 100%;\n    padding-left: 20%;\n    font-size: 18px;\n    @media (min-width: 280px) {\n      font-size: 12px;\n    }\n    @media (min-width: 360px) {\n      font-size: 14px;\n    }\n    @media (min-width: 768px) {\n      font-size: 16px;\n    }\n    @media (min-width: 1024px) {\n      font-size: 18px;\n    }\n  "])))}},73160:function(n,e,t){t.d(e,{U:function(){return y}});var i,a,r,o,s,d,p,l=t(30168),u=t(29439),m=t(47313),c=t(259),f=t(11805),x=t(78388),h=t(46417);function y(n){var e=n.children,t=n.bgGray,i=n.noMargin,a=n.fullWidth,r=n.sidebar,o=n.marginMedium,s=(0,m.useState)(!1),d=(0,u.Z)(s,2),p=d[0],l=d[1];return(0,m.useEffect)((function(){void 0!=r&&l(!0)}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.h,{}),(0,h.jsx)(g.Main,{bgGray:!!t,noMargin:!!i,sidebar:r,isSidebar:p,marginMedium:o,children:(0,h.jsx)(g.Container,{fullWidth:!!a,children:e})}),(0,h.jsx)(f.$,{})]})}var g={Main:c.ZP.main(i||(i=(0,l.Z)(["\n    min-height: calc(100vh - 72px);\n    background: ",";\n    display: block;\n    align-items: center;\n    padding-top: 100px !important;\n\n    ","\n\n    ","\n    ","\n    \n    @media (min-width: ",") {\n      min-height: calc(100vh - 48.2px);\n    }\n    @media (min-width: ",") {\n      min-height: calc(100vh - 72px);\n      padding: ",";\n      ","\n      ","\n    }\n\n    @media (min-width: ",") {\n      padding: ",";\n      ","\n      ","\n      ","\n    }\n\n    .infinite-scroll-component {\n      vertical-align: top !important;\n    }\n  "])),(function(n){return n.theme.white}),(function(n){return n.bgGray&&(0,c.iv)(a||(a=(0,l.Z)(["\n        background: ",";\n      "])),n.theme.gray[0])}),(function(n){return(0,c.iv)(r||(r=(0,l.Z)(["\n        padding: ",";\n      "])),n.noMargin?0:n.marginMedium?n.theme.margin.medium:n.theme.margin.small)}),(function(n){return n.isSidebar&&!n.sidebar&&"padding-left: 74px !important;"}),(function(n){return n.theme.viewport.mobile}),(function(n){return n.theme.viewport.tablet}),(function(n){return n.theme.margin.small}),(function(n){return(0,c.iv)(o||(o=(0,l.Z)(["\n          padding: ",";\n        "])),n.noMargin?0:n.marginMedium?n.theme.margin.medium:n.theme.margin.small)}),(function(n){return n.isSidebar&&!n.sidebar&&"padding-left: 74px !important;"}),(function(n){return n.theme.viewport.desktop}),(function(n){return n.theme.margin.small}),(function(n){return(0,c.iv)(s||(s=(0,l.Z)(["\n          padding: ",";\n        "])),n.noMargin?0:n.marginMedium?n.theme.margin.medium:n.theme.margin.small)}),(function(n){return n.sidebar&&"padding-left: 324px !important;"}),(function(n){return n.isSidebar&&!n.sidebar&&"padding-left: 74px !important;"})),Container:c.ZP.div(d||(d=(0,l.Z)(["\n    width: 100%;\n    margin: 0 auto;\n    ","\n  "])),(function(n){return!n.fullWidth&&(0,c.iv)(p||(p=(0,l.Z)(["\n        max-width: ",";\n      "])),n.theme.viewport.desktopXl)}))}},52969:function(n){n.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"fee_","type":"uint256"},{"internalType":"address","name":"feeRecipient_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"instantBuyPrice_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minBidAmount_","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endTime_","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isAuction_","type":"bool"}],"name":"CreateMarketItem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_avaialbleAuctions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nft_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"acceptWinBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nft_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"bid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address","name":"nft_","type":"address"}],"name":"cancelList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nft_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"claimNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nft_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"claimPendingAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getListedCollections","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nft_","type":"address"}],"name":"getMarketItems","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress_","type":"address"},{"internalType":"address","name":"nft_","type":"address"}],"name":"getUserBidInfo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress_","type":"address"},{"internalType":"address","name":"nft_","type":"address"}],"name":"getUserListedItemIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nft_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"instantBuy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nft_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"uint256","name":"fractionAmount_","type":"uint256"}],"name":"instantBuyFraction","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"uint256","name":"instantBuyPrice_","type":"uint256"},{"internalType":"uint256","name":"minBidAmount_","type":"uint256"},{"internalType":"uint256","name":"endTime_","type":"uint256"},{"internalType":"bool","name":"isAuction_","type":"bool"},{"internalType":"bool","name":"isFraction_","type":"bool"},{"internalType":"address","name":"nft_","type":"address"},{"internalType":"uint256","name":"fractionAmount_","type":"uint256"}],"name":"listForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee_","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"feeRecipient_","type":"address"}],"name":"setFeeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')}}]);