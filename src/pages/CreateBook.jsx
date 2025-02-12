import { useState } from "react";
import { createBook } from "../services/bookService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBook({ title });
      toast.success("Libro creado correctamente.");
      navigate("/");
    } catch (error) {
      toast.error("Error al crear el libro.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título del libro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CreateBook;