import { useEffect, useState } from "react";
import Api from "./Api";
import "./styles.css";

export default function App() {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");

  // useEffect(() => {
  //   //your code here
  //   if (name) {
  //     const time = setTimeout(() => {
  //       console.log("time out ");
  //     }, 2000);
  //     return () => {
  //       console.log("first time ");
  //     };
  //     // return ()=>{clearTimeout(time)}
  //     // console.log("useEffect use one time when dependency is empty")
  //   }
  // }, [name]); //useeffect dependency array

  // console.log("before useEffect");

  return (
    <div>
      <Api />
      {/* <label htmlFor="name">Name</label>
      <input id="name" onChange={(e)=>setName(e.target.value)} value={name}/>
      <br/>
      <br/>
      <label htmlFor="phone">Phone</label>
      <input id="phone" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
      <br/>
      <br/>
      <div>name : {name}</div>
      <div>phone : {phone}</div> */}
    </div>
  );
}
