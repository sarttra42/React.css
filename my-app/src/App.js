import './App.css';
import {useState} from 'react'
import Content from "./components/Content"
// import { v4 as uuidv4 } from 'uuid';
import Formcomponent from "./components/Formcomponent"
import DataContext from './data/DataContext';

function App() {
  // const data = [
  //   {id:uuidv4(),title:"ค่ารักษาพยาบาล",bath:-500},
  //   {id:uuidv4(),title:"ค่าข้าว",bath:-2000},
  //   {id:uuidv4(),title:"ค่าเงินเดือน",bath:14000},
  // ]
  const [items,setItems] = useState([])
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      console.log("ข้อมูลที่ Prev ",prevItem)
      return [newItem,...prevItem]
    })
    
    console.log("ข้อมูลที่ส่งมาจาก Form",newItem)
  }
  return (
    <DataContext.Provider value={"Sarttra"}>
      <div className="container">
      <div className="body">
        <h2>ยินดีต้อนรับเข้าสู่โปรแกรมบัญชีรายรับ-รายจ่าย</h2>
        <Formcomponent onAddItem={onAddNewItem}/>
        {items.map((e)=>{
          return <Content {...e} key={e.id}/>;
        })}
      </div>
    </div>
    </DataContext.Provider>
  );
}

export default App;
