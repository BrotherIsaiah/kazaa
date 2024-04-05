import "./Collapse.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default function TheCollapse({ title, children, text }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <article>
        <div className="collapse">
          <div className="title-icon">
            <h3>{title}</h3>
            <FontAwesomeIcon
              icon={faAngleDown}
              onClick={toggleCollapse}
              className={isCollapsed ? "" : "rotated"}
            />
          </div>
          <div className={isCollapsed ? "collapsed" : ""} id="text-area">
            {children}
            {text && <p>{text}</p>}
          </div>
        </div>
      </article>
    </>
  );
}
