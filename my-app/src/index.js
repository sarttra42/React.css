import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hellocomponent from './components/Hellocomponent';

// //การสร้าง Component functional
// function Hellocomponent(){
//   return <h1>สวัสดีครับ Component</h1>
// }

// //การสร้าง Component Class
// class Hellocomponent extends React.Component{
//   render() {
//     return (
//       <div>
//         สวัสดีครับ
//       </div>
//     )
//   }
// }

ReactDOM.render(<Hellocomponent/>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* <React.StrictMode>
<App />
</React.StrictMode>, */