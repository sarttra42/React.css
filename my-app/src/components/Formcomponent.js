import "./Formcomponent.css"
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

const Formcomponent = (props) =>{
    console.log("Renser Form Component")
    const [title,setTitle] = useState('')
    const [bath,setBath] = useState('0')  //การใช้งาน State เป็นการสร้างตัวแปรรอรับค่าที่เปลี่ยนแปลงได้
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event) => setTitle(event.target.value)
    const inputbath = (event) => setBath(event.target.value)

    const saveItem = (event) =>{
            event.preventDefault();  // เพื่อให้คำสั่งที่เรนเดอร์ component หยุดแสดงผลใน console ก่อน ไม่งั้น react จะเคลียร์ค่าออกไปทำให้เราเช็คการทำงานได้ยาก
            const itemData = {
                id:uuidv4(),
                title:title,
                bath:Number(bath)
            }

            props.onAddItem(itemData)
            setTitle('')
            setBath('0')
    }

    useEffect(()=>{
        
    },[bath])
    return(
        <div>
            <form action="#" onSubmit={saveItem}>
                <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="number" max="99999" placeholder="(+ รายรับ - รายจ่าย)" onChange={inputbath} value={bath}/>
                </div>
                <div>
                    <button type="submit" className="btn-button">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default Formcomponent