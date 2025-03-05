import './Content.css'
import PropTypes from 'prop-types'; // ES6


function Content(props){
    const {title,bath} = props
    const status = bath<0 ? "expense" : "income"
    const symbol = bath<0 ? "-" : "+"
    return(
        <div className="form">
            <p className={status}>{title} และยอดเงินเท่ากับ = {symbol}{Math.abs(bath)} บาท</p>
        </div>
    )
}

Content.propTypes={
    title:PropTypes.string.isRequired, // isRequired คือไม่อนุญาตให้เป็นค่าว่าง
    bath:PropTypes.number
} // การกำหนด Proptype เพื่อให้ตรวจสอบค่าที่ส่งมาได้ถูกต้อง


export default Content