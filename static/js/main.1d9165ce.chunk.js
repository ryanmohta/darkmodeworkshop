(this.webpackJsonpdarkmodeworkshop=this.webpackJsonpdarkmodeworkshop||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),a=s(7),c=s.n(a),o=(s(12),s(3)),i=s(4),d=s(6),l=s(5),u=(s(13),s.p+"static/media/yams.c593bd39.jpg"),m=[{question:"1. What kind of food is a yam?",answers:["Fruit","Vegetable","Mango","Juice"],correctAnswerIndex:1},{question:"2. How many species of yams are found around the world?",answers:["20","50","400","600"],correctAnswerIndex:3},{question:"3. Which continent produces the most yams?",answers:["Africa","Asia","North America","UC Irvine"],correctAnswerIndex:0},{question:"4. Which is these is NOT a possible color of the inside of a yam?",answers:["White","Orange","Yellow","Purple"],correctAnswerIndex:1},{question:"5. What season are yams usually harvested in?",answers:["Spring","Summer","Fall","Winter"],correctAnswerIndex:2},{question:"6. Which vitamin are yams NOT a major source of?",answers:["Vitamin A","Vitamin B","Vitamin C","Potassium"],correctAnswerIndex:0},{question:"7. In Ghana, yams are traditionally served to celebrate what?",answers:["AntAlmanac and Zotistics joining PeterPortal","Mars starting work at Cameo","Ryan stealing Patrick's Igloo","The arrival of a new baby"],correctAnswerIndex:3},{question:"8. What food item are yams usually confused with?",answers:["Bananas","Potatoes","Sweet Potatoes","Taro"],correctAnswerIndex:2},{question:"9. For how long have people been cultivating yams?",answers:["2,000 years","10,000 years","100,000 years","Since the start of time"],correctAnswerIndex:1},{question:"10. Which is NOT a health benefit of yams?",answers:["Heals skin diseases","Cures respiratory problems","Aids digestion","Improves eyesight"],correctAnswerIndex:3}],h=s(0),w=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).onQuestionSelected=function(e,t){n.setState((function(s){return{selectedAnswers:s.selectedAnswers.map((function(s,n){return n==e?t:s}))}}))},n.submit=function(){n.setState({submitted:!0})},n.calculateScore=function(){for(var e=0,t=0;t<n.state.selectedAnswers.length;t++)n.state.selectedAnswers[t]==m[t].correctAnswerIndex&&e++;return e},n.toggleDarkMode=function(){document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light")):document.documentElement.classList.contains("light")?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("light"):document.documentElement.classList.add("dark")},n.state={selectedAnswers:new Array(10).fill(void 0),submitted:!1},n}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h2",{children:"How well do you know about"}),Object(h.jsx)("h1",{children:"YAMS?"}),Object(h.jsx)("h2",{children:"By Ryam"})]}),Object(h.jsx)("img",{onClick:this.toggleDarkMode,className:"yam-image",src:u,alt:"An image of yams by ryam"}),Object(h.jsx)("div",{className:"questions",children:m.map((function(t,s){return Object(h.jsx)(b,{questionIndex:s,question:t.question,answers:t.answers,correctAnswerIndex:t.correctAnswerIndex,onQuestionSelected:e.onQuestionSelected,submitted:e.state.submitted},s)}))}),Object(h.jsx)("div",{className:"results",children:Object(h.jsx)("button",{onClick:this.submit,children:this.state.submitted?"".concat(this.calculateScore(),"/10 correct!"):"How'd I do?"})})]})}}]),s}(r.a.Component),b=function(e){Object(d.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={selectedIndex:void 0},n}return Object(i.a)(s,[{key:"getButtonClass",value:function(e){if(this.props.submitted){if(this.props.correctAnswerIndex==e)return"correct";if(this.state.selectedIndex==e)return"incorrect"}else if(this.state.selectedIndex==e)return"selected";return""}},{key:"handleClick",value:function(e){this.setState({selectedIndex:e}),this.props.onQuestionSelected(this.props.questionIndex,e)}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"Question",children:[Object(h.jsx)("h3",{children:this.props.question}),Object(h.jsx)("div",{className:"row",children:this.props.answers.map((function(t,s){return Object(h.jsx)("button",{className:e.getButtonClass(s),onClick:function(){return e.handleClick(s)},children:t},s)}))})]})}}]),s}(r.a.Component),f=w,j=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),r(e),a(e),c(e)}))};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.1d9165ce.chunk.js.map