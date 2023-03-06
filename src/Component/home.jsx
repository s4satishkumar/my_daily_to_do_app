import { React, useState , useEffect} from "react";
import Task from "./Task";

// import { useState , useEffect } from 'react';

// const Home = () => {

// const [inputvalue,setInputValue]= useState(0);  // useState

//   // let inputvalue = 0;

//   // const ChangeHandler = (e) => {
//   //   inputvalue= e.target.value;
//   //   console.log(inputvalue);
//   //  }

//   const increment = ()=>{
// // inputvalue++;  // it wil not not work so we will use usestate hooks
// setInputValue(inputvalue+1);
//   }

//   const decrement = ()=>{
//     // inputvalue--; // it wil not not work so we will use usestate hooks
//     setInputValue(inputvalue-1);
//   }

//    const btnStyle={
//     padding:20,
//     border:"none",
//     backgroundColor:"blue",
//     margin:10

//    }

// // useEffect

// useEffect(() => {
//  console.log("run");

// }, [])

//   return (
//     <div>
//       <input style={{padding:20, border: "1px solid blue" }}

//       type="number" placeholder="enter something"

//     //  onChange = { ChangeHandler}

//     value= {inputvalue}
//     readOnly // now input value will be read only
//      />

//      <button style={btnStyle}  onClick = {increment}> +</button>
//      <button  style={btnStyle}  onClick={decrement}> -</button>

//     </div>
//   )
// }

// export default Home

/*  starting the daily goal project */

const Home = () => {
  const initialArray= localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);


  const submitHandler = (e) => {

    e.preventDefault();
// if(setTasks===""){
//   console.log("please input your value");
// }else{
//   setTasks([...tasks, { title, description }]);
// }

    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArr=tasks.filter((val,i)=>{
      return i!==index;
  });
  console.log(filteredArr)
  setTasks(filteredArr);
  };


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
   
  }, [tasks]);
  
  
  return (
    <div className="container">
      <h1> Daily Goals</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)
          }
        />
        <textarea
          placeholder="discription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {/* { title!== ""? <button type="submit" >ADD</button>:null}  // this will disable add button untill any text input given*/}  
        <button type="submit" disabled={ title===''} >ADD</button>
      </form>
      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
