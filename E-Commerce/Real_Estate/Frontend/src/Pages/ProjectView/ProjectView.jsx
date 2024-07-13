import { useParams } from "react-router-dom";

//___ Css ___//
import "./ProjectView.css";

const ProjectView = () => {
  const { id } = useParams();

  return <div className="ProjectView page content">ProjectView {id}</div>;
};

export default ProjectView;
