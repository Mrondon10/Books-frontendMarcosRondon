# Prueba Técnica Remota - Frontend

##  Tecnologías Utilizadas
- **React.js** con Vite
- **Axios** para las peticiones HTTP
- **React Router** para la navegación
- **Bootstrap** para estilos
- **GitFlow** para la gestión de ramas en Git

---

##  Requisitos del Proyecto

### **Backend (Web API)**
La aplicación consume una API REST alojada en `https://localhost:7138/api/Books`. 

Los endpoints disponibles en la API son:

| Método  | Endpoint                       | Descripción  |
|---------|--------------------------------|--------------|
| `GET`   | `/api/Books`                   | Listar libros |
| `GET`   | `/api/Books/{id}`              | Obtener libro por ID |
| `POST`  | `/api/Books/`                  | Crear nuevo libro |
| `PUT`   | `/api/Books/{id}`              | Editar libro |
| `DELETE`| `/api/Books/{id}`              | Eliminar libro |

> **Nota:** La API es un **Fake API**, por lo que las actualizaciones no se guardan realmente.

---

##  **Frontend**

### **Funcionalidades Implementadas**
- **Listar libros** obtenidos desde la API
- **Ver detalle de un libro** seleccionado
- **Eliminar libros**
- **Crear un nuevo libro**
- **Editar un libro existente**
- **Buscar libros por ID**
- **Manejo de errores** con alertas cuando la API responde con error

### **Estructura del Proyecto**
```plaintext
books-frontend/
├── src/
│   ├── components/
│   │   ├── BookCard.jsx
│   │   ├── BookForm.jsx
│   │   ├── Navbar.jsx
│   ├── pages/
│   │   ├── BookList.jsx
│   │   ├── BookDetail.jsx
│   │   ├── CreateBook.jsx
│   │   ├── EditBook.jsx
│   ├── services/
│   │   ├── bookService.js
│   ├── App.jsx
│   ├── main.jsx
├── public/
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
```

---

##  **Configuración y Ejecución**

###  **1️⃣ Clonar el repositorio**
```bash
git clone https://github.com/Mrondon10/Books-frontendMarcosRondon.git

cd books-frontend
```

###  **2️⃣ Instalar dependencias**
```bash
npm install
```

### **3️⃣ Configurar la URL del backend**
Si el backend corre en un puerto diferente, actualiza `src/services/bookService.js`:
```javascript
const API_URL = "https://localhost:7138/api/Books";
```

###  **4️⃣ Ejecutar la aplicación**
```bash
npm run dev
```
Luego, abre `http://localhost:5173` en tu navegador.

---

## **Uso de GitFlow**

Este proyecto sigue **GitFlow** para la gestión de ramas:
- `develop` - Rama de desarrollo
- `feature/*` - Ramas para nuevas funcionalidades
- `release/v1.0` - Release estable
- `master` - Producción

Para iniciar una nueva funcionalidad:
```bash
git flow feature start nombre-feature
```

Para finalizar una funcionalidad y mergear a `develop`:
```bash
git flow feature finish nombre-feature
```


## **Desarrollado por:** Marcos Rondon
 Fecha: `12/02/2025`  

**Listo para entrega!**

