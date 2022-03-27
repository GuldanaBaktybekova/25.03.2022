import "./Table.css";
function Table(props) {
  const table = props.src.map((item) => (
    <tr>
      <td>{item}</td>
    </tr>
  ));
  return <table className="Table">{table}</table>;
}

export default Table;
