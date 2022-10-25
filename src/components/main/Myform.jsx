import "./Myform.css";

const Myform = () => {
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="Add date"
          />
        </div>
        <div className="button-submit">
          <button type="submit" className="btn submit-button btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Myform;
