import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/bookService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      toast.error("Error al cargar los libros.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      toast.success("Libro eliminado correctamente.");
      fetchBooks();
    } catch (error) {
      toast.error("Error al eliminar el libro.");
    }
  };

  return (
    <div>
      <h1>Lista de Libros</h1>
      <Link to="/create">Crear Libro</Link>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - <Link to={`/books/${book.id}`}>Ver</Link> |{" "}
            <Link to={`/edit/${book.id}`}>Editar</Link> |{" "}
            <button onClick={() => handleDelete(book.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
