import BookDetail from "../components/BookDetail";
import Navbar from "../components/Navbar";
import PopularBooks from "../components/PopularBooks";

export default function HomePage() {
  return (
    <>
    <Navbar />
    <BookDetail />
      <PopularBooks />
    </>
  );
}
