(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[461],{61994:function(e,s,l){Promise.resolve().then(l.bind(l,667))},667:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return Z}});var t=l(3827),a=l(64090),r=l(47907),n=l(16450),i=l(18190),o=l(13810),u=l(10384),c=l(46453),d=l(71801),m=l(52273),h=l(42440),x=l(30953),f=l(777),j=l(37963),p=l(81583),g=l(1861);function Z(){let[e]=p.Z.useForm(),s=(0,r.useSearchParams)();s.get("token");let l=s.get("id"),[Z,_]=(0,a.useState)(null),[b,w]=(0,a.useState)(""),[N,k]=(0,a.useState)(""),[S,y]=(0,a.useState)(""),[v,E]=(0,a.useState)("");return(0,a.useEffect)(()=>{l&&(0,f.W_)(l).then(e=>{let s=e.login_url;console.log("login_url:",s),y(s);let l=e.token,t=(0,j.o)(l);E(l),console.log("decoded:",t),_(t.key),console.log("decoded user email:",t.user_email),k(t.user_email)})},[l]),(0,t.jsx)("div",{className:"mx-auto max-w-md mt-10",children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(h.Z,{className:"text-sm mb-5 text-center",children:"\uD83D\uDE85 LiteLLM"}),(0,t.jsx)(h.Z,{className:"text-xl",children:"Sign up"}),(0,t.jsx)(d.Z,{children:"Claim your user account to login to Admin UI."}),(0,t.jsx)(i.Z,{className:"mt-4",title:"SSO",icon:x.GH$,color:"sky",children:(0,t.jsxs)(c.Z,{numItems:2,className:"flex justify-between items-center",children:[(0,t.jsx)(u.Z,{children:"SSO is under the Enterprise Tirer."}),(0,t.jsx)(u.Z,{children:(0,t.jsx)(n.Z,{variant:"primary",className:"mb-2",children:(0,t.jsx)("a",{href:"https://forms.gle/W3U4PZpJGFHWtHyA9",target:"_blank",children:"Get Free Trial"})})})]})}),(0,t.jsxs)(p.Z,{className:"mt-10 mb-5 mx-auto",layout:"vertical",onFinish:e=>{console.log("in handle submit. accessToken:",Z,"token:",v,"formValues:",e),Z&&v&&(e.user_email=N,(0,f.pf)(Z,e,null).then(e=>{var s;let l="/ui/";console.log("redirecting to:",l+="?userID="+((null===(s=e.data)||void 0===s?void 0:s.user_id)||e.user_id)+"&token="+v),window.location.href=l}))},children:[(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.Z.Item,{label:"Email Address",name:"user_email",children:(0,t.jsx)(m.Z,{type:"email",disabled:!0,value:N,defaultValue:N,className:"max-w-md"})}),(0,t.jsx)(p.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"password required to sign up"}],help:"Create a password for your account",children:(0,t.jsx)(m.Z,{placeholder:"",type:"password",className:"max-w-md"})})]}),(0,t.jsx)("div",{className:"mt-10",children:(0,t.jsx)(g.ZP,{htmlType:"submit",children:"Sign Up"})})]})]})})}}},function(e){e.O(0,[665,876,235,777,971,69,744],function(){return e(e.s=61994)}),_N_E=e.O()}]);