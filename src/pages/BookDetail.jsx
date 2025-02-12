import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/bookService";
import { toast } from "react-toastify";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const data = await getBookById(id);
      setBook(data);
    } catch (error) {
      toast.error("Error al cargar el libro.");
    }
  };

  if (!book) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
