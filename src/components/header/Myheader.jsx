import { useState } from "react";
import Myform from "../main/Myform";
import "./Myheader.css";

const Myheader = () => {
  const [show, setShow] = useState(true);
  const [btnYazi, setBtnYazi] = useState("Show Add Taskbar");
  const showFunction = () => {
    setShow(!show);
    if (!show) {
      setBtnYazi("Close Add Taskbar");
    } else {
      setBtnYazi("Show Add Taskbar");
    }
  };
  return (
    <div className="container kapsayici text-center mt-4">
      <header>
        <h1>Task Tracker</h1>
        <button className="header-btn btn btn-success" onClick={showFunction}>
          {btnYazi}
        </button>
      </header>

      {show && <Myform />}
    </div>
  );
};
export default Myheader;
