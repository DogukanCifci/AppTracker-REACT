import { useState } from "react";
import "./Myform.css";

const Myform = () => {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  console.log(taskName);
  console.log(date);
  return (
    <div className="container form-part text-start">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Task</label>
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="Add Task"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            className="form-control"
            id="date"
            placeholder="Add date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="button-submit">
          <button type="submit" className="btn submit-button btn-primary">
            SAVE TASK
          </button>
        </div>
      </form>
    </div>
  );
};
export default Myform;
