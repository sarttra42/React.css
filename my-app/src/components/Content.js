import './Content.css'
import PropTypes from 'prop-types'; // ES6


function Content(props){
    const {title,bath} = props
    return(
        <div className="form">
            <p>{title} และยอดเงินเท่ากับ = {bath} บาท</p>
        </div>
    )
}

Content.propTypes={
    title:PropTypes.string.isRequired, // isRequired คือไม่อนุญาจิ
    bath:PropTypes.number
} // การกำหนด Proptype เพื่อให้ตรวจสอบค่าที่ส่งมาได้ถูกต้อง


export default Content