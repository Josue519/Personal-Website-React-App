(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{19:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(15),i=(a(9),a(10)),l=a(3),c=a(1);const s={background:"#ffffff",text:"#000000",accent:"#007BFF",secondary:"#3a0ca3",light:"#ffffff",dark:"#333333",card:"rgba(255, 255, 255, 0.8)",cardBorder:"rgba(255, 255, 255, 0.3)",shadow:"rgba(0, 0, 0, 0.1)",shadowHover:"rgba(0, 0, 0, 0.15)",timeline:"rgba(67, 97, 238, 0.3)",tagBg:"rgba(67, 97, 238, 0.1)",tagText:"#4361ee",glowColor:"0 0 15px rgba(67, 97, 238, 0.6)"},d={background:"#000000",text:"#ffffff",accent:"#FF8C00",secondary:"#7209b7",light:"#1e1e1e",dark:"#f8f9fa",card:"rgba(30, 30, 30, 0.8)",cardBorder:"rgba(80, 80, 80, 0.3)",shadow:"rgba(0, 0, 0, 0.3)",shadowHover:"rgba(0, 0, 0, 0.4)",timeline:"rgba(76, 201, 240, 0.3)",tagBg:"rgba(76, 201, 240, 0.1)",tagText:"#4cc9f0",glowColor:"0 0 15px rgba(76, 201, 240, 0.6)"},m=c.d.section`
  padding: ${e=>{let{$fullHeight:t}=e;return t?"0":"6rem 0"}};
  min-height: ${e=>{let{$fullHeight:t}=e;return t?"100vh":"auto"}};
  position: relative;
  overflow: hidden;
`;var p=e=>{let{id:t,children:a,fullHeight:r}=e;return n.a.createElement(m,{id:t,$fullHeight:r},a)};const g=c.e`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(5px, 10px) rotate(5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;c.d.div`
  position: absolute;
  width: ${e=>e.size||"400px"};
  height: ${e=>e.size||"400px"};
  top: ${e=>e.top};
  left: ${e=>e.left};
  right: ${e=>e.right};
  bottom: ${e=>e.bottom};
  z-index: ${e=>e.zIndex||0};
  opacity: ${e=>e.opacity||.5};
  transform: translateY(${e=>e.$scrollY*e.multiplier}px)
             ${e=>e.rotate?"rotate("+.05*e.$scrollY+"deg)":""};
  animation: ${g} 6s ease-in-out infinite;
  pointer-events: none;
  margin-left: ${e=>e.$isLeft?"10px":"0"};
`,c.d.svg`
  width: 100%;
  height: 100%;
  fill: ${e=>e.color||e.theme.accent};
  opacity: 0.1;
`;var u=c.d.div`
  background-color: rgba(255, 255, 255, 0.9); // Set a solid background color
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  margin-top: 2rem;
`;const h=c.d.div`
  
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  color: ${e=>{let{theme:t}=e;return t.text}};
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,f=c.d.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,b=c.d.div`
  max-width: 600px;
  text-align: left;

  h2 {
    font-size: var(--fs-h2);
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--clr-accent), var(--text-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: var(--fs-body);
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`,x=c.d.div`
  flex-shrink: 0;
  width: 287.5px;
  height: 287.5px;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(31, 38, 135, 0.2);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform, box-shadow;
  backface-visibility: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`,v=c.d.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`,w=c.d.li`
  padding: 0.75rem 1.5rem; /* Adjust padding for button-like appearance */
  background: linear-gradient(135deg, rgba(128, 0, 128, 0.1), rgba(0, 0, 255, 0.1)); /* Apply gradient */
  border-radius: 12px; /* Rounded corners for button style */
  text-align: center;
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add shadow for button effect */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px); /* Slightly lift on hover */
  }
`,E=c.e`
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.05);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`,y=c.d.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(76, 110, 245, 0.2);
  border-radius: 50%;
  filter: blur(20px);
  animation: ${E} 10s ease-in-out infinite;
  z-index: 0;
  filter: blur(20px);
`,k=c.d.h2`
  font-size: var(--fs-h2); /* Use global variable */
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`,z=c.d.div`
  position: absolute;
  top: -10%;
  right: -10%;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-color: rgba(76, 110, 245, 0.08);
  z-index: 1;
  filter: blur(20px);
`;var S=()=>n.a.createElement(h,{id:"about"},n.a.createElement(z,null),n.a.createElement(y,{style:{top:"10%",left:"10%"}}),n.a.createElement(y,{style:{bottom:"10%",right:"10%"}}),n.a.createElement(f,null,n.a.createElement(x,null,n.a.createElement("img",{src:"/DSC05202.jpg",alt:"Josue Marante"})),n.a.createElement(b,null,n.a.createElement(k,null,"About Me"),n.a.createElement("p",null,"I am a Technology Consultant, Software Developer, and Certified Personal Trainer. My unique combination of skills allows me to bridge the gap between technology and wellness, creating innovative solutions that enhance both digital and physical well-being."),n.a.createElement("p",null,"With experience in customer service, technical support, and software development, I bring a comprehensive approach to problem-solving and client satisfaction. My bilingual capabilities in English and Spanish enable me to connect with and serve a diverse client base effectively."),n.a.createElement(u,null,n.a.createElement(v,null,n.a.createElement(w,null,"Driven"),n.a.createElement(w,null,"Analytical"),n.a.createElement(w,null,"Empathetic"),n.a.createElement(w,null,"Creative"),n.a.createElement(w,null,"Resilient"),n.a.createElement(w,null,"Detail-Oriented"))))));var C=c.d.div`
  background: var(--card-gradient);
  border-radius: 10px;
  box-shadow: 0 4px 20px var(--shadow);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px var(--glow-effect), 0 10px 25px var(--shadow-hover);
  }
`;var $=c.d.h2`
  font-size: var(--fs-h2);
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--clr-dark);
`;var T=c.d.p`
  font-size: var(--fs-body);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: var(--clr-dark);
  opacity: 0.8;
`,A=a(6),D=a(4);const j=c.d.button`
  background-color: var(--clr-accent);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: var(--fs-body); /* Use global variable */
  font-weight: var(--fw-bold); /* Use global variable */
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`,I=(Object(c.d)(j)`
  background-color: transparent;
  color: var(--clr-dark);
  border: 2px solid var(--clr-accent);
  
  &:hover {
    background-color: var(--clr-accent);
    color: white;
  }
`,c.d.div`
  padding: 0 2rem;
  position: relative;
`),O=c.d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,M=c.d.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--clr-accent);
  
  ${C}:hover & {
    animation: pulse 1s ease infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`,P=c.d.h3`
  font-size: var(--fs-h3);
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`,L=c.d.p`
  font-size: var(--fs-body);
  line-height: 1.6;
  color: var(--text-secondary);
  opacity: 0.8;
  text-align: left;
  flex-grow: 1;
`,Y=c.d.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    font-size: var(--fs-body);
    color: var(--text-secondary);
    opacity: 0.8;
  }
`,F=c.d.div`
  text-align: center;
  margin-top: 3rem;
`;var R=()=>n.a.createElement(I,null,n.a.createElement($,null,"Specialties"),n.a.createElement(T,null,"Explore my core areas of expertise in technology, business consulting, and health & wellness."),n.a.createElement(O,null,n.a.createElement(C,null,n.a.createElement(M,null,n.a.createElement(A.a,{icon:D.g})),n.a.createElement(P,null,"Full-Stack Development"),n.a.createElement(L,null,"Building responsive and scalable web applications using modern technologies."),n.a.createElement(Y,null,n.a.createElement("li",null,"Front-end & Back-end Development"),n.a.createElement("li",null,"React & Node.js"),n.a.createElement("li",null,"Database Design"))),n.a.createElement(C,null,n.a.createElement(M,null,n.a.createElement(A.a,{icon:D.a})),n.a.createElement(P,null,"Apple Ecosystem Expertise"),n.a.createElement(L,null,"Specialized knowledge in Apple products, services, and integrations."),n.a.createElement(Y,null,n.a.createElement("li",null,"iOS & macOS Development"),n.a.createElement("li",null,"Apple Device Management"),n.a.createElement("li",null,"Enterprise Solutions"))),n.a.createElement(C,null,n.a.createElement(M,null,n.a.createElement(A.a,{icon:D.i})),n.a.createElement(P,null,"Personal Training"),n.a.createElement(L,null,"Certified personal training with customized fitness programs."),n.a.createElement(Y,null,n.a.createElement("li",null,"Customized Workout Programs"),n.a.createElement("li",null,"Nutrition Coaching"),n.a.createElement("li",null,"Body Transformations")))),n.a.createElement(F,null,n.a.createElement(i.b,{to:"/specialties"},n.a.createElement(j,null,"View All Specialties"))));c.d.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
`;const B=c.d.div`
  padding: 0 2rem;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 0; /* Remove top padding on small screens */
  }
`,J=c.d.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    width: 4px;
    background-color: var(--clr-accent);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;

    @media (max-width: 768px) {
      display: none; /* Remove timeline line on small screens */
    }
  }
`,U=c.d.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--clr-accent);
  border-radius: 50%;
  left: 50%;
  margin-left: -10px;
  top: ${e=>{let{position:t}=e;return t}}%;

  @media (max-width: 768px) {
    display: none; /* Remove circles on small screens */
  }
`,H=c.d.div.attrs(e=>({style:{alignSelf:e.isLeft?"flex-start":"flex-end"}}))`
  background: var(--card-gradient);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  width: 45%;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%; /* Full width on small screens */
    align-self: center; /* Center align on small screens */
  }
`,W=c.d.div`
  font-size: 2rem;
  color: var(--clr-accent);
  margin-bottom: 1rem;
  text-align: center;
`,N=c.d.h3`
  font-size: var(--fs-h3);
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-align: center;
`,_=c.d.p`
  font-size: 1.1rem;
  color: var(--clr-accent);
  margin-bottom: 0.5rem;
  text-align: center;
`,q=c.d.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  opacity: 0.7;
  margin-bottom: 1rem;
  text-align: center;
`,K=c.d.div`
  font-size: var(--fs-body);
  color: var(--text-primary);
  opacity: 0.8;
  text-align: justify;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  display: ${e=>{let{expanded:t}=e;return t?"block":"none"}};

  p {
    margin-bottom: 1rem;
  }
`,V=c.d.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  opacity: 0.7;
  text-align: center;
  margin-top: 2rem;
`;var X=()=>{const[e,t]=Object(r.useState)(null),a=[{icon:D.v,title:"Technical Expert",company:"Kaseya",duration:"Jan 2024 - Jan 2025",description:["Utilized diagnostic tools to troubleshoot software and hardware concerns, enhancing operational efficiency.","Delivered tailored solutions to customer challenges, balancing technical expertise with clear communication.","Advocated for customer needs by identifying patterns in recurring issues and providing actionable feedback to technical teams.","Maintained high productivity in a fast-paced environment, contributing to increased customer retention."]},{icon:D.a,title:"Technical Specialist",company:"Apple",duration:"May 2023 - Dec 2023",description:["Utilized diagnostic tools to troubleshoot software and hardware concerns, enhancing operational efficiency.","Delivered tailored solutions to customer challenges, balancing technical expertise with clear communication.","Advocated for customer needs by identifying patterns in recurring issues and providing actionable feedback to technical teams.","Maintained high productivity in a fast-paced environment, contributing to increased customer retention."]},{icon:D.w,title:"Product Specialist",company:"Apple",duration:"Aug 2021 - May 2023",description:["Provided exceptional customer service, ensuring personalized experiences that enhanced satisfaction and sales.","Maintained consistently high customer ratings by effectively communicating product benefits and solutions","Developed deep expertise in Apple products, helping customers make informed purchasing decisions","Fostered strong customer relationships, reinforcing Apple's brand loyalty and sales performance"]}];return n.a.createElement(B,null,n.a.createElement($,null,"My Journey"),n.a.createElement(T,null,"A brief overview of my professional journey and milestones."),n.a.createElement(J,null,a.map((a,r)=>n.a.createElement(n.a.Fragment,{key:r},n.a.createElement(U,{position:33*r+10}),n.a.createElement(H,{isLeft:r%2===0,onClick:()=>(a=>{t(e===a?null:a)})(r)},n.a.createElement(W,null,n.a.createElement(A.a,{icon:a.icon})),n.a.createElement(N,null,a.title),n.a.createElement(_,null,a.company),n.a.createElement(q,null,a.duration),n.a.createElement(K,{expanded:e===r},a.description.map((e,t)=>n.a.createElement("p",{key:t},e))))))),n.a.createElement(V,null,"Kissimmee FL 813 993 6765 | marantefitness@gmail.com"))};const G=c.d.div`
  padding: 0 2rem;
  position: relative;
  text-align: center;
`,Q=c.d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Z=c.d.div`
  font-size: 2rem;
  color: var(--clr-accent);
  margin-bottom: 1rem;
`;Object(c.d)(C)`
  // No additional styles needed, inherits from Card
`;var ee=()=>n.a.createElement(G,null,n.a.createElement($,null,"Education"),n.a.createElement(T,null,"My educational background has provided me with a strong foundation in software development and other relevant skills."),n.a.createElement(Q,null,n.a.createElement(C,null,n.a.createElement(Z,null,n.a.createElement(A.a,{icon:D.c})),n.a.createElement("h3",{style:{fontSize:"var(--fs-h3)",color:"var(--text-primary)",textAlign:"center"}},"Certificate in Software Development"),n.a.createElement("p",{style:{fontSize:"1.1rem",color:"var(--clr-accent)",textAlign:"center"}},"California Institute of Arts & Technology"),n.a.createElement("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",opacity:.7,textAlign:"center"}},"June 2022"),n.a.createElement("p",{style:{fontSize:"var(--fs-body)",color:"var(--text-primary)",opacity:.8,textAlign:"center"}},"Computer Software Engineering program focusing on modern development practices and technologies.")),n.a.createElement(C,null,n.a.createElement(Z,null,n.a.createElement(A.a,{icon:D.l})),n.a.createElement("h3",{style:{fontSize:"var(--fs-h3)",color:"var(--text-primary)",textAlign:"center"}},"Personal Training Diploma"),n.a.createElement("p",{style:{fontSize:"1.1rem",color:"var(--clr-accent)",textAlign:"center"}},"National Personal Training Institute"),n.a.createElement("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",opacity:.7,textAlign:"center"}},"December 2018"),n.a.createElement("p",{style:{fontSize:"var(--fs-body)",color:"var(--text-primary)",opacity:.8,textAlign:"center"}},"Comprehensive training in fitness instruction, nutrition, and client management.")),n.a.createElement(C,null,n.a.createElement(Z,null,n.a.createElement(A.a,{icon:D.r})),n.a.createElement("h3",{style:{fontSize:"var(--fs-h3)",color:"var(--text-primary)",textAlign:"center"}},"High School Diploma"),n.a.createElement("p",{style:{fontSize:"1.1rem",color:"var(--clr-accent)",textAlign:"center"}},"Leto High School"),n.a.createElement("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",opacity:.7,textAlign:"center"}},"December 2018"),n.a.createElement("p",{style:{fontSize:"var(--fs-body)",color:"var(--text-primary)",opacity:.8,textAlign:"center"}},"General education with focus on academic excellence and foundational skills."))));const te=c.d.div`
  padding: 6rem 2rem; /* Increased padding for more space */
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: visible; /* Ensure shapes don't overflow */
`,ae=c.d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack items on smaller screens */
  }
`,re=c.d.div`
  background: var(--card-gradient);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px var(--glow-effect), 0 10px 25px var(--shadow-hover);
  }
`,ne=c.d.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: var(--clr-accent);
  }
`,oe=c.d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,ie=c.d.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,le=c.d.div`
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-left: 1rem;
`,ce=c.d.div`
  height: 100%;
  background: linear-gradient(90deg, var(--clr-accent), var(--clr-accent-light));
  width: ${e=>e.progress}%;
  border-radius: 4px;
  transition: width 1s ease;
`,se=c.d.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-primary);
`,de=c.d.p`
  text-align: center;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
`;var me=()=>{Object(r.useEffect)(()=>{const e=()=>{};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const e=[{category:"Technical Skills",icon:D.g,skills:[{name:"Front-End Development",level:90},{name:"React.js",level:85},{name:"HTML/CSS/JavaScript",level:90},{name:"SwiftUI",level:75}]},{category:"Languages",icon:D.m,skills:[{name:"English",level:100},{name:"Spanish",level:100}]},{category:"Professional Skills",icon:D.p,skills:[{name:"Customer Service",level:95},{name:"Problem Solving",level:90},{name:"Communication",level:95},{name:"Team Collaboration",level:90}]},{category:"Technologies & Tools",icon:D.k,skills:[{name:"Microsoft Office Suite",level:90},{name:"MacOS",level:95},{name:"CRM Systems",level:85},{name:"Support Platforms",level:90}]},{category:"Apple Ecosystem",icon:D.a,skills:[{name:"iOS/macOS Support",level:95},{name:"Apple Device Management",level:90},{name:"Apple Services",level:90}]},{category:"Backend & Infrastructure",icon:D.s,skills:[{name:"Database Management",level:75},{name:"API Integration",level:80},{name:"Cloud Services",level:75}]}];return n.a.createElement(te,null,n.a.createElement(se,null,"Skills & Expertise"),n.a.createElement(de,null,"A comprehensive overview of my technical and professional capabilities, developed through years of experience in technology and customer service."),n.a.createElement(ae,null,e.map((e,t)=>n.a.createElement(re,{key:t},n.a.createElement(ne,null,n.a.createElement(A.a,{icon:e.icon}),e.category),n.a.createElement(oe,null,e.skills.map((e,t)=>n.a.createElement(ie,{key:t},e.name,n.a.createElement(le,null,n.a.createElement(ce,{progress:e.level})))))))))},pe=a(11);const ge=c.d.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`,ue=Object(c.d)(ge)`
  background-color: var(--clr-accent);
  color: white;
  border: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`,he=Object(c.d)(ge)`
  background-color: transparent;
  color: var(--clr-dark);
  border: 2px solid var(--clr-accent);

  &:hover {
    background-color: var(--clr-accent);
    color: white;
  }
`,fe=c.b`
  body {
    background-color: #ffffff; /* Light background for light mode */
    color: #333333; /* Darker text for contrast */
    overflow-x: hidden;
  }
  html {
    scroll-behavior: smooth;
  }
  a {
    color: #1a73e8; /* Accent color for links */
  }
`,be=c.e`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`,xe=c.e`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: var(--clr-accent);
  }
`,ve=(c.e`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,c.e`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`),we=c.e`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`,Ee=c.e`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ye=c.e`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`,ke=c.d.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    flex-direction: column-reverse; /* Stack with image on top */
    padding: 2rem;
    gap: 1rem;
  }
`,ze=c.d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  backdrop-filter: blur(10px); /* Apply blur effect */
`,Se=c.d.svg`
  position: absolute;
  width: 180%;
  height: 120%;
  fill: var(--clr-accent);
  opacity: 0.08;
  filter: blur(1px);
  transform: rotate(0deg) scale(1) scaleY(1);
  transition: transform 0.1s ease-out;
  will-change: transform;
  filter: blur(10px);
  z-index: 1;
`,Ce=c.d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 500px;
  z-index: 1; /* Lower z-index for content */
  
  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
    margin-top: 1rem;
  }
`,$e=c.d.h1`
  font-size: var(--fs-h1);
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #333333;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust for smaller screens */
  }
`,Te=c.d.div`
  position: relative;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  height: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    height: 2rem;
  }
`,Ae=c.d.span`
  position: relative;
  color: var(--clr-accent);
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  border-right: 3px solid var(--clr-accent);
  animation: 
    ${e=>e.isTyping?c.c`
      ${be} ${e=>e.typingDuration||"4s"} steps(${e=>e.steps||50}, end),
      ${xe} 0.75s step-end infinite
    `:c.c`
      ${xe} 0.75s step-end infinite
    `};
`,De=c.d.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--clr-text-light);
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`,je=c.d.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,Ie=c.d.div`
  display: flex;
  gap: 1.2rem;
`,Oe=c.d.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--clr-text);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-accent) 100%);
    color: #fff;
    box-shadow: 0 10px 20px rgba(31, 38, 135, 0.2);
  }
`,Me=(c.d.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 4; // Ensure the image is above background shapes
  max-width: 500px;
  overflow: visible; // Ensure no clipping of the image
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 350px;
  }
`,c.d.div`
  flex: 0.5;
  max-width: 300px;
  position: relative; /* Ensure z-index works */
  z-index: 2; /* Higher z-index to bring to front */
`),Pe=(c.d.div`
  position: absolute;
  top: -10%;
  filter: blur(10px);
  right: -10%;
  width: 70%;
  height: 50%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background-color: rgba(76, 110, 245, 0.08);
  z-index: 1;
  animation: ${we} 8s ease-in-out infinite, 
             ${Ee} 25s linear infinite;
  
  @media (max-width: 768px) {
    width: 60%;
    height: 40%;
  }
`,c.d.div`
  position: absolute;
  filter: blur(10px);
  bottom: 10%;
  left: -10%;
  width: 80%;
  height: 89%;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  background-color: rgba(71, 110, 228, 0.06);
  z-index: 1;
  animation: ${we} 10s ease-in-out infinite, 
             ${ye} 30s linear infinite;
  
  @media (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`,c.d.div`
  position: absolute;
  filter: blur(10px);
  top: 15%;
  left: -5%;
  width: 50%;
  height: 60%;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  background-color: rgba(31, 38, 135, 0.1);
  z-index: 1;
  animation: ${we} 12s ease-in-out infinite, 
             ${Ee} 35s linear infinite;
  
  @media (max-width: 768px) {
    width: 35%;
    height: 35%;
  }
`,c.d.img`
  width: 100%;
  height: auto;
  display: block;
`),Le=(c.d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  filter: blur(5px);
  height: 95%;
  border-radius: 40% 56% 70% 30% / 40% 50% 60% 50%;
  background: url('/OrganicShape.png') no-repeat center center;
  background-size: cover;
  z-index: 5;
  transform: ${e=>{let{$multiplier:t}=e;return`scale(${t})`}};
  transform-origin: bottom;
  animation: ${ve} 6s ease-in-out infinite;
  ${e=>{let{$rotate:t}=e;return t&&c.c`
    transform: ${Ee} 25s linear infinite;
  `}};
`,c.d.div`
  position: relative;
  overflow: visible;
  min-height: 130h; // Increase height
`),Ye=c.d.div`
  position: absolute;
  top: -20%; // Adjust position
  right: -20%;
  width: 100%; // Increase size
  height: 80%;
  border-radius: 50%;
  background-color: rgba(76, 110, 245, 0.08);
  z-index: 1;
  filter: blur(5px);
`,Fe=c.d.div`
  width: 100%;
  height: 2px;
  background-color: var(--clr-accent);
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    position: relative;
    left: -calc(200px + 3rem); /* Move the line further to the left */
    width: calc(100% + 200px + 3rem); /* Extend the line to cover the entire section */
  }
`;c.d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
`,c.d.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem; /* Add margin to move the image down on smaller screens */
    margin-bottom: 2rem; /* Ensure consistent spacing */
  }

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`,c.d.div`
  max-width: 600px;
  flex: 1; /* Allow the details to take up available space */
`,c.d.h2`
  margin: 0;
  font-size: 1.5rem;
  color: var(--text-primary);
`,c.d.div`
  position: relative;
  width: calc(100% + 250px + 4rem);
  height: 50px;
  border: 2px solid var(--clr-accent);
  border-radius: 25px;
  margin-top: 2rem;
  z-index: 0;
`;var Re=()=>{const[e,t]=Object(r.useState)(0),[a,o]=Object(r.useState)(!0),i=["UI/UX Designer","Technology Consultant","Software Developer","Certified Personal Trainer","Front-End Developer","Cloud Services Specialist","API Integration Expert","Nutrition Coach","Content Creator","Event Planner"];return Object(r.useEffect)(()=>{const e=setTimeout(()=>{o(!1);const e=setTimeout(()=>{t(e=>(e+1)%i.length),o(!0)},1500);return()=>clearTimeout(e)},6e3);return()=>clearTimeout(e)},[e,i.length]),n.a.createElement(Le,null,n.a.createElement(Ye,null),n.a.createElement(fe,null),n.a.createElement(ke,null,n.a.createElement(ze,null,n.a.createElement(Se,{viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg",style:{left:"-30%",top:"-30%"}},n.a.createElement("path",{d:"M42.9,-57.1C53.9,-46.7,63.5,-34.2,68.8,-19.5C74.1,-4.8,75.1,12.1,69.3,26.5C63.5,40.9,50.9,52.8,36.3,60.9C21.7,69,5.1,73.3,-11.9,72.5C-28.9,71.7,-46.3,65.8,-59.1,53.3C-71.9,40.8,-80.1,21.7,-79.9,2.8C-79.7,-16.1,-71.1,-32.1,-58.9,-42.1C-46.7,-52.1,-30.9,-56.1,-15.8,-61.4C-0.7,-66.7,14.7,-73.3,29.5,-65.5C44.3,-57.7,29.5,-65.5,42.9,-57.1Z",transform:"translate(100 100) scale(1, 1.3)"}))),n.a.createElement(Ce,{id:"about-me"},n.a.createElement($e,null,"Josue Marante"),n.a.createElement(Te,null,n.a.createElement(Ae,{isTyping:a,typingDuration:"4s",steps:3*i[e].length},i[e])),n.a.createElement(De,null,"I am a Technology Consultant, Software Developer, and Certified Personal Trainer. I offer a wide range of services that integrate technology, business consulting, and health & wellness. My expertise spans software development, IT infrastructure consulting, process optimization, and personal training, allowing me to provide customized solutions for both businesses and individuals."),n.a.createElement(je,null,n.a.createElement(ue,{href:"/Josue_Marante_2025.pdf",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(A.a,{icon:D.h})," Download Resume"),n.a.createElement(he,{href:"mailto:marantefitness@gmail.com"},n.a.createElement(A.a,{icon:D.j})," Contact Me")),n.a.createElement(Ie,null,n.a.createElement(Oe,{href:"https://github.com/Josue519",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(A.a,{icon:pe.a})),n.a.createElement(Oe,{href:"https://www.linkedin.com/in/josue-marante-0399321b5",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(A.a,{icon:pe.c})),n.a.createElement(Oe,{href:"https://www.instagram.com/josuemarante/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(A.a,{icon:pe.b})))),n.a.createElement(Me,null,n.a.createElement(Pe,{src:"/ProfileImage.png",alt:"Profile"}),n.a.createElement(Fe,null))))};const Be=Object(r.createContext)(),Je=e=>{let{children:t}=e;const[a,o]=Object(r.useState)(!1);Object(r.useEffect)(()=>{"dark"===localStorage.getItem("theme")&&o(!0)},[]);return n.a.createElement(Be.Provider,{value:{darkMode:a,toggleDarkMode:()=>{o(!a),localStorage.setItem("theme",a?"light":"dark")}}},t)},Ue=c.d.button`
  background: ${e=>{let{$isDark:t}=e;return t?"var(--clr-dark)":"var(--clr-light)"}};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;var He=()=>{const{darkMode:e,toggleDarkMode:t}=Object(r.useContext)(Be);return console.log("Dark Mode:",e),n.a.createElement(Ue,{onClick:t,$isDark:e,"aria-label":"Toggle theme"},n.a.createElement(A.a,{icon:e?D.t:D.n,color:e?"yellow":"blue"}))};const We=c.d.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`,Ne=c.d.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 10px 10px;
    display: ${e=>{let{isOpen:t}=e;return t?"flex":"none"}};
  }
`,_e=Object(c.d)(i.b)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    color: var(--clr-accent);
    background-color: rgba(0, 102, 204, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
`,qe=c.d.h1`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;
`,Ke=c.d.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;var Ve=e=>{let{isDark:t,toggleTheme:a,showThemeToggle:o}=e;const[i,c]=Object(r.useState)(!1),[s,d]=Object(r.useState)(!1),m=Object(l.n)(),p=Object(l.p)();Object(r.useEffect)(()=>{const e=()=>{window.scrollY>50?c(!0):c(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const g=(e,t,a)=>{if(e.preventDefault(),m.pathname!==t)p(t),setTimeout(()=>{const e=document.getElementById(a);e&&e.scrollIntoView({behavior:"smooth"})},100);else{const e=document.getElementById(a);e&&e.scrollIntoView({behavior:"smooth"})}d(!1)};return n.a.createElement(We,null,n.a.createElement(qe,null,"JM"),n.a.createElement(Ke,{onClick:()=>{d(!s)}},n.a.createElement(A.a,{icon:s?D.u:D.b})),n.a.createElement(Ne,{isOpen:s},n.a.createElement(_e,{to:"/",onClick:e=>g(e,"/","profile")},"Profile"),n.a.createElement(_e,{to:"/",onClick:e=>g(e,"/","about")},"About"),n.a.createElement(_e,{to:"/specialties",onClick:e=>g(e,"/specialties","specialties")},"Specialties")),o&&n.a.createElement(He,{isDark:t,toggleTheme:a}))};const Xe=c.d.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;c.d.p`
  font-size: var(--fs-body);
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  color: ${e=>{let{theme:t}=e;return t.text}};
  opacity: 0.8;
`,c.d.div`
  transform: ${e=>{let{$rotate:t}=e;return t?"rotate(45deg)":"none"}};
  animation-duration: ${e=>{let{$typingDuration:t}=e;return t}}s;
  // other styles...
`;var Ge=()=>n.a.createElement(c.a,{theme:s},n.a.createElement(Xe,null,n.a.createElement(Ve,{showThemeToggle:!1}),n.a.createElement(p,{id:"profile"},n.a.createElement(Re,null)),n.a.createElement(p,{id:"about"},n.a.createElement(S,null)),n.a.createElement(p,{id:"specialties"},n.a.createElement(R,null)),n.a.createElement(p,{id:"journey"},n.a.createElement(X,null)),n.a.createElement(p,{id:"education"},n.a.createElement(ee,null)),n.a.createElement(p,{id:"skills"},n.a.createElement(me,null))));var Qe=c.d.div`
  background: var(--card-gradient);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 40px rgba(0, 0, 0, 0.15);
  }
`;const Ze=c.b`
  body {
    background-color: ${e=>{let{theme:t}=e;return t.background}};
    color: ${e=>{let{theme:t}=e;return t.text}};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`,et=c.d.div`
  max-width: 1100px;
  margin: 5rem auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
`,tt=c.d.h1`
  color: var(--clr-accent);
  text-align: center;
  padding-bottom: 1rem;
`,at=c.d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  margin-bottom: 0.5rem;
  transition: background 0.3s ease, transform 0.3s ease, color 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    color: var(--clr-accent);
    box-shadow: 0 4px 20px rgba(0, 102, 204, 0.4);
  }
`,rt=c.d.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 1rem;
  display: ${e=>{let{$isOpen:t}=e;return t?"block":"none"}};
`,nt=c.d.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--clr-accent);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(var(--clr-accent), 10%);
  }
`,ot={tech:[{name:"Front-End Development",description:"HTML, CSS, JavaScript, React JS, SwiftUI",icon:D.g},{name:"Cloud Services & Database Management",description:"AWS, Azure, SQL",icon:D.f},{name:"UI/UX Design Principles",description:"Creating intuitive and user-friendly interfaces",icon:D.g},{name:"Software Troubleshooting & Technical Support",description:"Resolving software issues and providing support",icon:D.g},{name:"API Integration & Automation",description:"RESTful APIs, workflow automation",icon:D.g},{name:"Website Development & Optimization",description:"Designing, developing, and improving business websites",icon:D.g}],consulting:[{name:"Technology Infrastructure Consulting",description:"Website setup, IT system implementation",icon:D.f},{name:"Process Organization & Optimization",description:"Streamlining business workflows",icon:D.f},{name:"Professional Services Consulting in Automation Software",description:"Experience with Kaseya Autotask PSA",icon:D.f},{name:"Training & Advising on AI and Tech Tools",description:"Enhancing productivity and automation",icon:D.f},{name:"Customer Support & IT Troubleshooting",description:"Providing support and troubleshooting IT issues",icon:D.f}],wellness:[{name:"Certified Personal Training",description:"Customized fitness programs tailored to individual goals",icon:D.i},{name:"Nutrition Coaching",description:"Personalized nutrition guidance",icon:D.i},{name:"Workout Program Design",description:"Specializing in 3-month body transformations",icon:D.i},{name:"Corporate Wellness & Fitness Consulting",description:"Developing health programs for businesses",icon:D.i}],creative:[{name:"Content Creation & Design",description:"Flyers, marketing materials, workout plans",icon:D.o},{name:"Event Planning & Coordination",description:"Organizing fitness and tech-related events",icon:D.o},{name:"Bilingual Communication",description:"Fluent in English & Spanish",icon:D.o},{name:"Team Collaboration & Leadership",description:"Leading teams and fostering collaboration",icon:D.o}]};var it=()=>{const[e,t]=Object(r.useState)(null);return n.a.createElement(n.a.Fragment,null,n.a.createElement(Ze,null),n.a.createElement(Ve,{showThemeToggle:!1}),n.a.createElement(et,null,n.a.createElement(tt,null,"Specialties"),n.a.createElement("p",null,"I am a Technology Consultant, Software Developer, and Certified Personal Trainer. I offer a wide range of services that integrate technology, business consulting, and health & wellness. My expertise spans software development, IT infrastructure consulting, process optimization, and personal training, allowing me to provide customized solutions for both businesses and individuals."),Object.keys(ot).map(a=>n.a.createElement("div",{key:a},n.a.createElement(at,{onClick:()=>(a=>{t(e===a?null:a)})(a)},a.replace(/^\w/,e=>e.toUpperCase()),n.a.createElement(A.a,{icon:e===a?D.e:D.d})),n.a.createElement(rt,{$isOpen:e===a},ot[a].map(e=>n.a.createElement(Qe,{key:e.name},n.a.createElement("h3",{style:{fontSize:"1.2rem",margin:"0.5rem 0"}},n.a.createElement(A.a,{icon:e.icon})," ",e.name),n.a.createElement("p",null,e.description))))))),n.a.createElement(nt,{onClick:()=>{const e=encodeURIComponent("Request for Call"),t=encodeURIComponent("I would like to schedule a call. Please let me know your available times.");window.location.href=`mailto:marantefitness@gmail.com?subject=${e}&body=${t}`}},n.a.createElement(A.a,{icon:D.q})," Book a Call"))};c.d.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  color: ${e=>{let{theme:t}=e;return t.text}};
  // other styles...
`;var lt=()=>{const{darkMode:e}=Object(r.useContext)(Be);return n.a.createElement(c.a,{theme:e?d:s},n.a.createElement(Ze,null),n.a.createElement(i.a,null,n.a.createElement(Ve,null),n.a.createElement(l.c,null,n.a.createElement(l.a,{path:"/",element:n.a.createElement(Ge,null)}),n.a.createElement(l.a,{path:"/specialties",element:n.a.createElement(it,null)}))))};const ct=document.getElementById("root"),st=Object(o.createRoot)(ct);c.d.div`
  transform: ${e=>{let{$rotate:t}=e;return t?"rotate(45deg)":"none"}};
  animation-duration: ${e=>{let{$typingDuration:t}=e;return t}}s;
  // other styles...
`,c.d.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  color: ${e=>{let{theme:t}=e;return t.text}};
  // other styles...
`;st.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Je,null,n.a.createElement(lt,null)))),document.addEventListener("gesturestart",(function(e){e.preventDefault()})),document.addEventListener("touchmove",(function(e){1!==e.scale&&e.preventDefault()}),{passive:!1})},9:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.2dd1eef1.chunk.js.map