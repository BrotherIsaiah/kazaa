import "./Collapse.css";

export default function TheCollapse({title}) {
  return (
    <>
        <article className="collapse">
          <h3>{title}</h3>
        </article>
    </>
  );
}
