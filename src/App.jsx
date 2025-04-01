
import "./App.css";
import Footer from "./componentes/footer/footer";
import Header from "./componentes/header/Header";
import Seccion from "./componentes/seccion/Seccion";
import Menu from "./componentes/menu/Menu";
import ListaCursos from "./componentes/Cursos/ListaCurso";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaPersonajes from "./componentes/personajes/ListaPersonajes";
import DetallePersonaje from "./componentes/personajes/DetallePersonaje";
import Form from "./componentes/form.js/Form";


function App() {


  return (
    <Router>
      <div className='container'>
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/Cursos" element={<ListaCursos />} />
            <Route path="/personajes" element={<ListaPersonajes />} />
            <Route path="DetallePersonaje/:id" element={<DetallePersonaje />} />
          </Routes>
          </main>

         <div>
          <h1>Formulario de registro</h1>
          <Form/>
         </div>
   

        <Footer />
      </div>
    </Router>
  );
}
export default App;



