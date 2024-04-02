import "./Collapse.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default function TheCollapse({ title }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <article className={`collapse ${isCollapsed ? 'collapsed' : 'expanded'} `}>
        <div>
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          est nibh, faucibus non euismod rhoncus, porttitor non enim. Fusce
          tellus lacus, dignissim sit amet enim eget, ultricies rhoncus neque.
          Cras lorem lectus, viverra sit amet mauris et, vehicula suscipit diam.
          Donec luctus consequat risus ac venenatis. Maecenas a ligula lectus.
          Ut convallis enim at turpis gravida rutrum. Mauris pellentesque
          suscipit tortor, vel commodo lorem malesuada id. Nulla ultricies
          aliquet orci. Integer ultrices commodo leo. Cras ante neque, mollis
          quis sem ut, pretium porttitor enim. Pellentesque molestie pulvinar
          diam id gravida. Maecenas porttitor felis id dui imperdiet, sit amet
          efficitur sapien rutrum. Vivamus id mi non nisl interdum lacinia at ac
          odio. Morbi placerat, mi at congue viverra, mi sapien pharetra ligula,
          non finibus erat metus ut lacus. Curabitur tincidunt neque vitae justo
          maximus, sit amet tempus tellus accumsan.{" "}
        </p>
        </div>
        
        <FontAwesomeIcon icon={faAngleDown}
        onClick={toggleCollapse} 
        className={isCollapsed ? '' : 'rotated'} />
      </article>
    </>
  );
}
