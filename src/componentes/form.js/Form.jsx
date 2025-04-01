import { useState } from "react";
import "./Form.css";
 
const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        asunto: '',
        descripcion: '',
        comentario: '',
        contraseña: '',
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.nombre]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
        alert('Formulario enviado con exito');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label for="nombre"> Nombre</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>

            <div >
                <label for="apellido"> Apellido</label>
                <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required />
            </div>

            <div>
                <label for="telefono"> Telefono</label>
                <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </div>

            <div>
                <label for="email"> Email</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div >
                <label for="asunto"> Asunto</label>
                <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={handleChange} required />
            </div>

            <div>
                <label for="comentario"> Comentario</label>
                <textarea name="" id="comentario" maxlength="100"></textarea>
                <p id="contador"> 0/100 </p>
            </div>
            <div >
            <label for="password"> Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>

            <button type="submit" class="boton"> Registrar </button>
        </form>


    );
};

export default Form;