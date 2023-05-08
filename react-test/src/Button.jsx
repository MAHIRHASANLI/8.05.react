import { useState } from "react";

const Button = () => {
    let [btnState, setBtnState] = useState(false)
    function handleClick(){
       setBtnState(btnState => !btnState);
    }
    let ClassBtn = btnState ? ' active': '';
    let btn = ClassBtn? 'show' : 'hide';
    let count = ClassBtn? '' : 'This is text';
  return (
    <>
    <button className={` btn ${ClassBtn}`}
    onClick={handleClick}>{btn}</button>
    <p className="count">{count}</p>
    </>
  )
}
export default Button;