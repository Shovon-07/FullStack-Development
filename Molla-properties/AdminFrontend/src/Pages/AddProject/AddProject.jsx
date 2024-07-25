//___ Css ___//
import "./AddProject.css";

const AddProject = () => {
  return (
    <div className="AddProject">
      <h3 className="pageTitle">Add Project</h3>
      <form>
        <div className="formTop d-flex gap-30">
          <div className="inputWrapper">
            <input type="text" placeholder="Title" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Project name" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Developer" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Location" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Land area" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Total plot" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Contact no" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Features" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Project map" />
          </div>
          <div className="inputWrapper">
            <input type="text" placeholder="Total plot" />
          </div>
          <div className="inputWrapper">
            <input type="file" placeholder="Project image" />
          </div>
          <div className="inputWrapper">
            <select name="" id="">
              <option value="" defaultChecked>
                Project type
              </option>
              <option value="">Ongoing</option>
              <option value="">Completed</option>
              <option value="">Upcoming</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
