// import "./App.css";
// import {Header1,Header2} from "./Component/Header"
// import Anyname from "./Component/Header"
// import Header from "./Component/Header"
// import Home from "./Component/home"



// function Component(props) {
//   return ( 
//     <>
//   <div className={props.nameforclass}> {props.profession} {props.name} : $ {props.income} </div>
//   </>
// )};


// // another way to write props component by destructuring the variables
// function Component({nameforclass, profession, name, income=10 }) {
//   return ( 
//     <>
//   <div className={nameforclass}> {profession} {name} : $ {income} </div>
//   <hr/>
//   </>
// )};



// function App() {
//   return (
//     <div>
//       hello <Component  name={"abhishek"} nameforclass="div1" income={30000} profession={"CA"}  /> 
//        <Component   name={"abhi"} nameforclass="div2"  income={50000} profession={"ER."} />
//      <Component profession={"Doctor"} name={"abhimanyu"} nameforclass="div3" income={ 656505}  />
//      <Component profession={"professor"} name={"ankit"} nameforclass="div3"   />

//     </div>
//   );
// }



// function App (){
//   return <div> hello <Header1/>  
//   <Header2/>
//   <Anyname/></div>
// }



// function App (){
//   return <div> 
//     <Header/> 
//    <Home/>
//      </div>
// }

// export default App;


 



/* starting the daily goal project  */ 

import React from 'react'
import Header from "./Component/Header";
import Home  from './Component/home';
import "./App.css"
function App() {
  return (
    <div>  <Header/> <Home/>  </div>
  )
}

export default App
