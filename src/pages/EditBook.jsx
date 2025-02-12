import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById, updateBook } from "../services/bookService";
import { toast } from "react-toastify";

const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const data = await getBookById(id);
      setTitle(data.title);
    } catch (error) {
      toast.error("Error al cargar el libro.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, { title });
      toast.success("Libro actualizado.");
      navigate("/");
    } catch (error) {
      toast.error("Error al actualizar.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default EditBook;
