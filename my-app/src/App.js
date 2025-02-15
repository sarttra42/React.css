// import logo from './logo.svg';
import './App.css';
// import React from "react";
import Content from "./components/Content"
import { v4 as uuidv4 } from 'uuid';
import Formcomponent from "./components/Formcomponent"

function App() {
  const data = [
    {id:uuidv4(),title:"ค่ารักษาพยาบาล",bath:-500},
    {id:uuidv4(),title:"ค่าข้าว",bath:-2000},
    {id:uuidv4(),title:"ค่าเงินเดือน",bath:14000},
  ]
  return (
    <div className="container">
      <div className="body">
        <h2>ยินดีต้อนรับเข้าสู่โปรแกรมบัญชีรายรับ-รายจ่าย</h2>
        <Formcomponent/>
        {data.map((e)=>{
          return <Content {...e} key={e.id}/>;
        })}
      </div>
    </div>
  );
}

export default App;
