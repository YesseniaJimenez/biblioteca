import { Link } from "react-router-dom";

export default function Book({ item }) {
  const booksContainerStyle = {
    display: "flex",
    flexDirection: "colunm",
    width: "300px",
  };

  const bookInfoStyle = {
    display: "flex",
    flexDirection: "colunm",
    alingItems: "center",
    textAling: "center",
  };
  return (
    <div style={booksContainerStyle}>
      <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <img src={item.cover} width="200" alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}
