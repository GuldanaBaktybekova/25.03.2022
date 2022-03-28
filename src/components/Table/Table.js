import "./Table.css";
function Table(props) {
  const table = props.src.map((item) => (
    <table>
      <tr>
      <td>{item}</td>
    </tr>
    </table>
  ));
  return <table className="Table">{table}</table>;
}

export default Table;
