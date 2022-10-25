import "./Task.css";
import data1 from "../helper/Data";

const Task = () => {
  const taskDone = (e) => {
    console.log(e);
    if (!e.classList.contains("cols")) {
      e.parentElement.classList.add("cols-done");
    } else {
      e.classList.add("cols-done");
    }
  };

  const taskNotDone = (a) => {
    if (!a.classList.contains("cols")) {
      a.parentElement.classList.remove("cols-done");
    } else {
      a.classList.remove("cols-done");
    }
  };
  return (
    <div
      onClick={(e) => taskDone(e.target)}
      onDoubleClick={(a) => taskNotDone(a.target)}
      className="myrow"
    >
      {data1.map((element) => {
        const { id, text, day } = element;
        return (
          <div key={id} className="cols">
            <div className="task-title">{text}</div>
            <div className="task-date">{day}</div>
            <i class="fa-solid fa-trash"></i>
          </div>
        );
      })}
    </div>
  );
};
export default Task;
