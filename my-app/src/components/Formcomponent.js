import "./Formcomponent.css"

const Formcomponent = () =>{
    const inputTitle = (event) => console.log(event.target.value)
    const inputbath = (event) => console.log(event.target.value)
    const saveItem = (event) =>{
            event.preventDefault();
            console.log("บันทึกข้อมูลแล้ว")
    }
    return(
        <div>
            <form action="#" onSubmit={saveItem}>
                <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}/>
                </div>
                <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type="number" min="0" max="99999" placeholder="(+ รายรับ - รายจ่าย)" onChange={inputbath}/>
                </div>
                <div>
                    <button type="submit" className="btn-button">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default Formcomponent