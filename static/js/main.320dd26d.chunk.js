(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{108:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),c=a(35),i=a.n(c),n=(a(95),a(9)),l=a(5),o=a(25),d=a(36),m=(a(108),a(0));var j=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(!1),i=Object(n.a)(c,2),j=i[0],h=i[1],u=function(){h(window.scrollY>100)};return Object(s.useEffect)((function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[]),Object(m.jsxs)("nav",{className:"navbar ".concat(j&&"navbar__black"),children:[Object(m.jsx)(l.a,{className:"nav-icon",icon:a?o.b:o.a,onClick:function(){return r(!a)}}),Object(m.jsx)("ul",{className:a?"nav-links active":"nav-links",children:[{href:"home",title:"Home"},{href:"about",title:"About"},{href:"resume",title:"Career"},{href:"portfolio",title:"Projects"},{href:"contact",title:"Get in touch"}].map((function(e,t){return Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(d.Link,{activeClass:"nav-link-active",className:"nav-link",to:e.href,spy:!0,smooth:!0,duration:700,children:e.title})},t)}))})]})},h=a(6),u=a.n(h),b=a(7);a(119);var p=function(){return Object(m.jsxs)("div",{id:"home",children:[Object(m.jsx)("div",{className:"header__text",children:Object(m.jsxs)(h.Fade,{bottom:!0,cascade:!0,children:[Object(m.jsx)("h1",{className:"header__title",children:"Samuel Cer\xf3n"}),Object(m.jsx)("h3",{className:"header__description",children:"Self Taught web developer & Mechatronic engineer"})]})}),Object(m.jsxs)("div",{className:"header__buttons",children:[Object(m.jsxs)("a",{href:"./resume.pdf",download:"Samuel's Resume",className:"header__button",children:[Object(m.jsx)(l.a,{className:"btn-icon",icon:o.c}),"Download CV"]}),Object(m.jsxs)("a",{href:"https://github.com/Samuelprograms",className:"header__button",target:"_BLANK",rel:"noopener noreferrer",children:[Object(m.jsx)(l.a,{icon:b.a,className:"btn-icon"}),"Github"]})]})]})},g=a(37);a(120);var f=function(){return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsx)(u.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"footer__links",children:[Object(m.jsxs)("div",{className:"social__links",children:[Object(m.jsx)("a",{className:"footer__link",target:"_BLANK",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/ceronsamuel/",children:Object(m.jsx)(l.a,{icon:b.c,className:"footer__icon"})}),Object(m.jsx)("a",{className:"footer__link",target:"_BLANK",rel:"noopener noreferrer",href:"https://github.com/Samuelprograms",children:Object(m.jsx)(l.a,{icon:b.a,className:"footer__icon"})}),Object(m.jsx)("a",{className:"footer__link",target:"_BLANK",rel:"noopener noreferrer",href:"https://www.instagram.com/cerondios/?hl=es-la",children:Object(m.jsx)(l.a,{icon:b.b,className:"footer__icon"})}),Object(m.jsx)("a",{className:"footer__link",target:"_BLANK",rel:"noopener noreferrer",href:"https://www.youtube.com/channel/UCxUgwTt1bmirwPmtQejS1Mg",children:Object(m.jsx)(l.a,{icon:b.e,className:"footer__icon"})})]}),Object(m.jsxs)("div",{className:"copyright",children:[Object(m.jsx)("p",{style:{color:"#666"},children:"\xa9 Copyright 2021 \u2022 Design by"}),"\xa0",Object(m.jsx)("a",{className:"footer__name",href:"https://github.com/Samuelprograms",target:"_BLANK",rel:"noopener noreferrer",children:"Samuel Cer\xf3n"})]})]})}),Object(m.jsx)("button",{className:"btn__top",onClick:function(){d.animateScroll.scrollToTop()},children:Object(m.jsx)(l.a,{icon:g.a})})]})},x=a(54),O=a.n(x),v=a(83),_=a(90),N=a(89),w=a(20);a(222);var S=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1],c=Object(N.a)({initialValues:{name:"",email:"",subject:"",message:""},validationSchema:w.a({name:w.b().min(2,"Name must be longer than 2 characters").required("Name is required"),email:w.b().email().required("Email is required"),subject:w.b().min(5,"Subject must be longer than 5 character").required("Subject is required"),message:w.b().min(5,"Message must be longer than 5 character").required("Message is required")}),onSubmit:function(){p()}}),i=c.handleSubmit,o=c.handleChange,d=c.values,j=c.touched,u=c.errors,b=c.handleBlur,p=function(){var e=Object(v.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,_.a.send("service_rdwz3nd","template_6yr1gsf",d,"user_RkBW3FeSHbWnLKiMfMgKA").then((function(e){alert("Message sent succesfully"),console.log(e)})).finally((function(){return r(!1)})).catch((function(e){alert("The message can't be sent"),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{id:"contact",className:"contact",children:Object(m.jsx)("div",{className:"form",children:Object(m.jsxs)(h.Fade,{bottom:!0,cascade:!0,children:[Object(m.jsxs)("form",{className:"contact__form",onSubmit:i,children:[Object(m.jsx)("input",{required:!0,name:"name",className:"form__field",placeholder:"Name",value:d.name,onChange:o,onBlur:b}),j.name&&u.name?Object(m.jsx)("label",{className:"error",children:u.name}):null,Object(m.jsx)("input",{required:!0,name:"email",type:"email",className:"form__field",placeholder:"Email",value:d.email,onChange:o,onBlur:b}),j.email&&u.email?Object(m.jsx)("label",{className:"error",children:u.email}):null,Object(m.jsx)("input",{required:!0,name:"subject",className:"form__field",placeholder:"Subject",value:d.subject,onChange:o,onBlur:b}),j.subject&&u.subject?Object(m.jsx)("label",{className:"error",children:u.subject}):null,Object(m.jsx)("input",{required:!0,name:"message",className:"form__field",placeholder:"Message",value:d.message,onChange:o,onBlur:b}),j.message&&u.message?Object(m.jsx)("label",{className:"error",children:u.message}):null,Object(m.jsxs)("button",{disabled:a,type:"submit",className:"form__button",children:[Object(m.jsx)(l.a,{className:"form__icon",icon:g.b}),"Send"]})]}),Object(m.jsx)("iframe",{className:"contact-video video_one",src:"https://www.youtube.com/embed/7_9Jyuhd9I4",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(m.jsx)("iframe",{className:"contact-video video_two",src:"https://www.youtube.com/embed/rfhVOakcwW4",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})})};a(223);var y=function(){return Object(m.jsx)("a",{href:"https://api.whatsapp.com/send?phone=573134533478",target:"_BLANK",rel:"noopener noreferrer",children:Object(m.jsx)(l.a,{className:"whatsapp-icon",icon:b.d})})};a(224);var k=function(e){var t=e.data,a=e.carrousel;return Object(m.jsx)("div",{id:"about",className:"about",children:Object(m.jsx)(h.Fade,{bottom:!0,cascade:!0,children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"},children:[Object(m.jsxs)("div",{className:"contenedor",children:[Object(m.jsx)("div",{className:"contenedor__left",children:t}),Object(m.jsx)("div",{className:"contenedor__right",children:Object(m.jsx)("div",{className:"contenedor__right--fade"})})]}),Object(m.jsx)("div",{className:"carrousel",children:a.map((function(e){return Object(m.jsx)("img",{src:"/portfolio/images/"+e.url,alt:e.title},e.title)}))})]})})})};a(225);var C=function(e){var t=e.data;if(!t)return null;var a=t.map((function(e,t){var a="/portfolio/images/"+e.image;return Object(m.jsx)("div",{className:"portfolio__project",children:Object(m.jsxs)("div",{className:"portfolio__project__card",children:[Object(m.jsx)("a",{href:e.url,target:"_BLANK",rel:"noreferrer",className:"portfolio__image__link",children:Object(m.jsx)("img",{alt:e.title,src:a,className:"portfolio__image"})}),Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsx)("a",{className:"project-title",href:e.url,target:"_blank",rel:"noreferrer",children:e.title})}),Object(m.jsx)("p",{style:{fontFamily:"Fira Sans",margin:"10px"},children:e.description})]})},t)}));return Object(m.jsx)("section",{id:"portfolio",className:"portfolio",children:Object(m.jsxs)("div",{className:"portfolio__data",children:[Object(m.jsxs)("a",{className:"portfolio__title",href:"https://github.com/Samuelprograms",children:["Check Out Some of My Projects ",Object(m.jsx)(l.a,{icon:b.a})]}),Object(m.jsx)(h.Fade,{bottom:!0,cascade:!0,children:Object(m.jsx)("div",{className:"portfolio__projects",children:a})})]})})},M=(a(226),function(e){e.data;return Object(m.jsx)("div",{className:"current",children:"I am currently working on this section..."})});a(227);var A=function(e){var t=e.data;if(!t)return null;var a=function(){for(var e="#",t=0;t<3;t++)e+="456789ABCDEF"[Math.floor(12*Math.random())];return e},s=t.education.map((function(e,t){return Object(m.jsx)("div",{className:"info",children:Object(m.jsxs)(h.Slide,{left:!0,cascade:!0,children:[Object(m.jsx)("h2",{className:"info__name",children:e.school}),Object(m.jsxs)("span",{className:"info__degree",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"info__degree__date",children:e.graduated})]}),Object(m.jsx)("p",{className:"info__description",children:e.description})]})},t)})),r=t.grades.map((function(e,t){return Object(m.jsx)("div",{className:"info",children:Object(m.jsxs)(h.Slide,{left:!0,cascade:!0,children:[Object(m.jsx)("h2",{className:"info__name",children:e.degree}),Object(m.jsxs)("span",{className:"info__degree",children:[e.school," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"info__degree__date",children:e.graduated})]})]})},t)})),c=t.skills.map((function(e,t){var s=a(),r=e.level;return Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)(h.Slide,{left:!0,cascade:!0,children:Object(m.jsx)("div",{className:"bar",children:Object(m.jsxs)("div",{style:{width:"".concat(r),height:"60px",textAlign:"end",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px",color:"black",fontWeight:"600",borderRadius:"35px",background:"linear-gradient(to right,".concat(s," 50%, #fff)")},children:[Object(m.jsx)("span",{style:{fontSize:"16px",color:"#000"},children:e.name}),r]})})})},t)})),i=t.otheSkills.map((function(e,t){var s=a(),r=e.level;return Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)(h.Slide,{left:!0,cascade:!0,children:Object(m.jsx)("div",{className:"bar",children:Object(m.jsxs)("div",{style:{width:"".concat(r),height:"60px",textAlign:"end",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px",color:"black",fontWeight:"600",borderRadius:"35px",background:"linear-gradient(to right,".concat(s," 50%, #fff)")},children:[Object(m.jsx)("span",{style:{fontSize:"16px",color:"#000"},children:e.name}),r]})})})},t)})),n=t.languages.map((function(e,t){return Object(m.jsx)("div",{className:"bars_language",children:Object(m.jsxs)(h.Slide,{left:!0,cascade:!0,children:[Object(m.jsxs)("h2",{className:"skill__name",children:[e.name,"\u2022",e.level]}),Object(m.jsx)("div",{className:"bar_language",children:e.skills.map((function(e,t){return Object(m.jsxs)("div",{style:{width:Object.values(e),height:"60px",textAlign:"end",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px",color:"black",marginBottom:"3px",fontWeight:"600",borderRadius:"30px",background:"linear-gradient(to right, ".concat(a()," 50%, #fff)")},children:[Object(m.jsx)("span",{children:Object.keys(e)}),Object(m.jsx)("span",{children:Object.values(e)})]},t)}))})]})},t)}));return Object(m.jsx)("section",{id:"resume",className:"resume",children:Object(m.jsxs)(h.Slide,{left:!0,cascade:!0,children:[Object(m.jsxs)("div",{className:"education",children:[Object(m.jsx)("h2",{className:"title",children:"EDUCATION"}),Object(m.jsx)("div",{className:"education__items",children:s})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"grades",children:[Object(m.jsx)("h2",{className:"title",children:"GRADES"}),Object(m.jsx)("div",{className:"grades__items",children:r})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"skill",children:[Object(m.jsx)("h2",{className:"title",children:"SKILLS"}),Object(m.jsx)("div",{className:"skills",children:c})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"skill",children:[Object(m.jsx)("h2",{className:"title",children:"OTHER SKILLS"}),Object(m.jsx)("div",{className:"skills",children:i})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"skill",children:[Object(m.jsx)("h2",{className:"title",children:"LANGUAGES"}),Object(m.jsx)("div",{className:"skills",children:n})]})]})})},T={about:{description:"Here Samuel Cer\xf3n, I am a Mechatronics Engineer student from\n            Universidad Militar Nueva Granada, Self-Taught Web developer and\n            very often python programming teacher looking to gain work\n            experience in web development and design, during my career I have\n            been actively participating in research, leading work groups for\n            final projects highlighting my skills in communication and teamwork.\n            I am also a big fan of agile methodologies like Scrum and technologies for web developing\n            such as JavaScript, TypeScript, React, SQL, Python, Material UI and\n            styled components, I have experience with version control software\n            like Git and cloud services such as Firebase",grades:[{title:"Build amazing sites with HTML, CSS and JS",url:"1.jpg"},{title:"Git & Github essentials",url:"2.jpg"},{title:"Automation",url:"3.jpg"},{title:"Python 3 master course",url:"4.jpg"},{title:"Python 3 desde cero",url:"5.jpg"},{title:"React desde cero",url:"6.jpg"},{title:"Scientific computing with python",url:"7.png"},{title:"Scrum master",url:"8.jpg"}]},resume:{education:[{school:"Universidad Militar Nueva Granada",degree:"Mechatronics Engineering",graduated:"January 2023",description:"mechatronic engineering is a career that allows me to design and implement mechatronic systems such as microcontrollers and the design of mechanical assemblies using software such as SolidWorks"}],grades:[{school:"FreeCodeCamp Academy",degree:"Computing Science with Python",graduated:"2021"},{school:"AWS Educate",degree:"Cloud Computing 101",graduated:"2021"},{school:"Udemy",degree:"React from scratch",graduated:"2021"},{school:"Udemy",degree:"Python 3 Master Course",graduated:"2021"},{school:"Udemy",degree:"Scrum Master",graduated:"2021"},{school:"Amigos Code",degree:"Git & GitHub Essencials",graduated:"2021"}],skills:[{name:"Python",level:"90%"},{name:"React JS",level:"90%"},{name:"Styled-components",level:"90%"},{name:"JavaScript",level:"85%"},{name:"TypeScript",level:"80%"},{name:"Node JS",level:"80%"},{name:"Express",level:"80%"},{name:"SQL",level:"75%"},{name:"MySQL",level:"75%"}],otheSkills:[{name:"Firebase",level:"100%"},{name:"Material UI",level:"90%"},{name:"SolidCAM",level:"85%"},{name:"SolidWorks",level:"80%"}],languages:[{name:"English",level:"B1",skills:[{listening:"80%"},{speaking:"70%"},{writing:"80%"},{reading:"80%"}]}]},portfolio:{projects:[{title:"Gmail clone",image:"gmail.jpg",description:"The Gmail clone is a project made with React, Redux, Firebase and Material UI",url:"https://clone-c44e6.web.app/"},{title:"Netflix landing page",image:"netflix.jpg",description:"The netflix landing page was my first React project, was made using React, vanilla CSS and TMDB api.",url:"https://samuelprograms.github.io/netflix-clone/"},{title:"Resistor",image:"resistor.jpg",description:"This GUI made with Python and Tkinter has as objective calculate different variables used in electronics.",url:"https://github.com/Samuelprograms/Resistor"},{title:"ToDo",image:"todo.jpg",description:"This Todo app was made using React, localstorage and vanilla CSS",url:"https://samuelprograms.github.io/todo/"},{title:"Interest Calculator",image:"intereses.jpg",description:"This GUI is a calculator for interest",url:"https://samuelprograms.github.io/calculadora-de-intereses/"},{title:"School admin panel",image:"school.jpg",description:"This GUI is an administration panel for a school, you can create classes, teachers and students",url:"https://samuelprograms.github.io/sincoabr-school/"},{title:"Weather app",image:"weather.jpg",description:"with this application you will be updated with the world's climate",url:"https://samuelprograms.github.io/weather/"},{title:"Image Compressor",image:"compressor.jpg",description:"This is an image compressor made with React and styled-components",url:"https://samuelprograms.github.io/image-compressor/"}],currentWork:[{title:"My Own Social Network",technologies:[],description:"",image:""},{title:"FullStack project",technologies:[],description:"",image:""}]}},B=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{}),Object(m.jsx)(p,{}),Object(m.jsx)(k,{data:T.about.description,carrousel:T.about.grades}),Object(m.jsx)(A,{data:T.resume}),Object(m.jsx)(C,{data:T.portfolio.projects}),Object(m.jsx)(M,{data:T.portfolio.currentWork}),Object(m.jsx)(S,{}),Object(m.jsx)(f,{}),Object(m.jsx)(y,{})]})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))},95:function(e,t,a){}},[[228,1,2]]]);
//# sourceMappingURL=main.320dd26d.chunk.js.map