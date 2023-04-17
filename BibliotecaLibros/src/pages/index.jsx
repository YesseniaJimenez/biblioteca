import Book from "../Components/book";
import Layout from "../Components/layout";
import { useAppContext } from "../store/store";

export default function Index() {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  return (
    <Layout>
      <div style={booksContainer}>
        {store.items.map((item) => (
          <Book key={item.title} item={item} />
        ))}
      </div>
    </Layout>
  );
}
