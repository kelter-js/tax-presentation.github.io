(this.webpackJsonptax=this.webpackJsonptax||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(6),p=a.n(n),l=(a(15),a(7)),o=a(8),u=a(10),r=a(9),i=a(0),d=function(e){Object(u.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={hasError:!1},s}return Object(o.a)(a,[{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("h1",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(c.a.Component),b=a(3),j=a(2),m=a(4),_=function(e){var t=Object(s.useState)(e.checked),a=Object(j.a)(t,2),c=a[0],n=a[1];return Object(i.jsxs)("li",{className:"popup__repayment-item",children:[Object(i.jsx)("input",{type:"checkbox",checked:c,className:"popup__repayment-checkbox visually-hidden",onChange:function(){n(!c)},id:e.id}),Object(i.jsx)("label",{className:"popup__repayment-label",htmlFor:e.id,children:Object(i.jsxs)("p",{className:"popup__text popup__text--amount",children:["".concat(e.money," \u0440\u0443\u0431\u043b\u0435\u0439 "),Object(i.jsx)("span",{className:"popup__repayment-year",children:e.year})]})})]})},h=function(e){var t=function(e,t,a,s){return Object(i.jsx)(_,{checked:e,id:t,money:a,year:s},t)},a=e.deduction.formula(e.salary).toFixed(e.deduction.fractional),s=Math.floor(e.deduction.maxValue/a);if(0===s)return t(!0,0,e.deduction.maxValue,e.vocabulary[0]);for(var c=(e.deduction.maxValue%a).toFixed(e.deduction.fractional),n=[],p=1;p<=s;p++)n.push(t(!0,p,a,e.vocabulary[p]));return n.push(t(!1,s+1,c,e.vocabulary[s+1])),Object(i.jsx)(i.Fragment,{children:n})},O=function(e){return Object(i.jsxs)("div",{className:"popup__repayment-wrapper",children:[Object(i.jsx)("p",{className:"popup__text popup__text--repayment",children:e.repayments}),Object(i.jsx)("ul",{className:"popup__repayments-list",children:Object(i.jsx)(h,{deduction:e.deduction,salary:e.salary,vocabulary:e.vocabulary})})]})},y=function(e){return Object(i.jsx)("div",{className:"popup__message-wrapper",children:Object(i.jsx)("p",{className:"popup__message-text",children:e.message})})},x=function(e){var t=Object(s.useState)(e.state.calculationIsOpen),a=Object(j.a)(t,2),c=a[0],n=a[1],p=Object(s.useState)(e.state.salaryState),l=Object(j.a)(p,2),o=l[0],u=l[1],r=Object(s.useState)(e.state.discontState),d=Object(j.a)(r,2),_=d[0],h=d[1],x=Object(s.useState)(e.state.userAttention),f=Object(j.a)(x,2),v=f[0],N=f[1],g=Object(s.useState)(e.state.messageState),S=Object(j.a)(g,2),k=S[0],w=S[1],C=function(e){var t=e.target,a=Object.create(null,Object.getOwnPropertyDescriptors(_));for(var s in a)a[s]=!1;h(Object(b.a)(Object(b.a)({},a),{},Object(m.a)({},t.value,!0)))};return Object(i.jsxs)("div",{className:c?"popup popup--calculation-enabled":"popup",children:[Object(i.jsx)("h3",{className:"popup__text popup__header",children:e.state.header}),Object(i.jsx)("p",{className:"popup__text popup__annotation",children:e.state.about}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o&&(w(!0),setTimeout((function(){return w(!1)}),e.state.messageTimer))},className:"popup__form",action:"https://echo.somewhereelse.com/",method:"post",children:[Object(i.jsx)("label",{htmlFor:"salary",className:"popup__label",children:e.state.salaryInfo}),Object(i.jsx)("input",{type:"number",name:"salary",id:"salary",className:v?"popup__salary-value popup__salary-value--attention":"popup__salary-value",value:o,placeholder:e.state.salaryPlaceholder,onChange:function(e){c&&n(!1),v&&N(!1),u(e.target.value)}}),v&&Object(i.jsx)("p",{className:"popup__user-attention",children:e.state.requiredField}),Object(i.jsx)("button",{type:"button",className:c?"popup__button popup__calculate popup__calculate--enabled":"popup__button popup__calculate",onClick:function(t){o<e.state.deduction.minValue?N(!0):n(!c)},children:e.state.calculate}),c&&Object(i.jsx)(O,{deduction:e.state.deduction,vocabulary:e.state.vocabulary,salary:o,repayments:e.state.totalEarlyRepayment}),Object(i.jsxs)("div",{className:c?"popup__discont-wrapper popup__discont-wrapper--enabled":"popup__discont-wrapper",children:[Object(i.jsx)("p",{className:"popup__text popup__discont-text",children:e.state.discontInfo}),Object(i.jsxs)("label",{className:_.payment?"popup__label popup__label--selected popup__label--discont":"popup__label popup__label--discont",children:[e.state.discontPayment,Object(i.jsx)("input",{type:"radio",name:"discont",value:"payment",className:"visually-hidden",defaultChecked:_.payment,onClick:C})]}),Object(i.jsxs)("label",{className:_.time?"popup__label popup__label--selected popup__label--discont":"popup__label popup__label--discont",children:[e.state.discontTime,Object(i.jsx)("input",{type:"radio",name:"discont",value:"time",className:"visually-hidden",defaultChecked:_.time,onClick:C})]})]}),Object(i.jsx)("button",{type:"submit",className:"popup__button popup__submit",children:e.state.submit})]}),k&&Object(i.jsx)(y,{message:e.state.successfulMessage}),Object(i.jsx)("button",{type:"button",className:"popup__button popup__close-button",onClick:e.closeModal,children:Object(i.jsx)("span",{className:"visually-hidden",children:e.state.close})})]})},f=function(e){var t=Object(s.useState)(e.state.popupIsOpen),a=Object(j.a)(t,2),c=a[0],n=a[1],p=function(){n(!c)};return Object(i.jsxs)("main",{className:c?"calculation calculation--opened":"calculation",children:[Object(i.jsx)("h1",{className:"visually-hidden",children:e.state.firstHeader}),Object(i.jsxs)("section",{className:"calculation__wrapper",children:[Object(i.jsx)("h2",{className:"visually-hidden",children:e.state.secondHeader}),!c&&Object(i.jsx)("button",{type:"button",className:"calculation__show-popup",onClick:p,children:e.state.calculationText}),c&&Object(i.jsx)(x,{closeModal:p,state:e.state.popUp})]})]})},v=function(e){return Object(i.jsx)(f,Object(b.a)({},e))},N={mainSection:{firstHeader:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0446\u0438\u044f \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0433\u043e \u043f\u043e\u0433\u0430\u0448\u0435\u043d\u0438\u044f \u0438\u043f\u043e\u0442\u0435\u043a\u0438",secondHeader:"\u0420\u0430\u0441\u0441\u0447\u0435\u0442 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430",calculationText:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442",popUpIsOpen:!1,popUp:{header:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442",calculationIsOpen:!1,userAttention:!1,about:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e. \u0420\u0430\u0437\u043c\u0435\u0440\xa0\u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435\xa0\u0431\u043e\u043b\u0435\u0435 13% \u043e\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430.",salaryInfo:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446",salaryPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",calculate:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c",discontInfo:"\u0427\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u043c?",discontPayment:"\u041f\u043b\u0430\u0442\u0451\u0436",discontTime:"\u0421\u0440\u043e\u043a",submit:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",close:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e",salaryState:"",totalEarlyRepayment:"\u0418\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043d\u0435\u0441\u0442\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445:",discontState:{payment:!0,time:!1},successfulMessage:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b",messageTimer:2e3,messageState:!1,requiredField:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",minDebounce:400,deduction:{formula:function(e){return 12*Number(e)*.13},maxValue:26e4,minValue:13617,fractional:2},vocabulary:{1:"\u0432 1-\u044b\u0439 \u0433\u043e\u0434",2:"\u0432\u043e 2-\u043e\u0439 \u0433\u043e\u0434",3:"\u0432 3-\u0438\u0439 \u0433\u043e\u0434",4:"\u0432 4-\u044b\u0439 \u0433\u043e\u0434",5:"\u0432 5-\u044b\u0439 \u0433\u043e\u0434",6:"\u0432 6-\u043e\u0439 \u0433\u043e\u0434",7:"\u0432 7-\u043e\u0439 \u0433\u043e\u0434",8:"\u0432 8-\u043e\u0439 \u0433\u043e\u0434",9:"\u0432 9-\u044b\u0439 \u0433\u043e\u0434",10:"\u0432 10-\u044b\u0439 \u0433\u043e\u0434",11:"\u0432 11-\u044b\u0439 \u0433\u043e\u0434",12:"\u0432 12-\u044b\u0439 \u0433\u043e\u0434",13:"\u0432 13-\u044b\u0439 \u0433\u043e\u0434"}}}};p.a.render(Object(i.jsx)(d,{children:Object(i.jsx)(v,{state:N.mainSection})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4dc4ce1c.chunk.js.map