import Book from "../Components/book";
import Layout from "../Components/layout";
import { useAppContext } from "../store/store";

export default function Index() {
  const store = useAppContext();
  return (
    <Layout>
      {store.items.map((item) => (
        <Book key={item.title} item={item} />
      ))}
    </Layout>
  );
}
