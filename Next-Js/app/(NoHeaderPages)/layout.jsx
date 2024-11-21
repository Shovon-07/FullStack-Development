//___ Css ___//
import NoHeaderStyle from "./NoHeaderPagesLayout.module.css";

const layout = ({ children }) => {
  return (
    <div className={`d-flex ${NoHeaderStyle.NoHeaderPagesLayout}`}>
      {children}
    </div>
  );
};

export default layout;
