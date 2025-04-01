import { Link } from "react-router-dom";
import "./Menu.css";




const Menu = () => {
    return (
        <nav className="menu">
            <ul>
              <li>
                  {" "}
                <Link to="/">Inicio </Link></li>
              <li>  
                {" "}
                 <Link to="/Cursos"> Cursos Iniciales</Link>{" "}
                 </li>
                 <li>  
                {" "}
                 <Link to="/personajes"> Elige tu personaje</Link>{" "}
                 </li>
                 

            </ul>


        </nav>
    );
};

export default Menu;