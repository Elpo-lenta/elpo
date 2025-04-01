import {  useState, useEffect} from "react";


function Contador () {
    const [contador, setContador] = useState(0);

    useEffect(() =>{
        document.title = ` Clicks: ${contador}`;
    }, [contador]); 

  
 
    return(
       <div>
            <p> Hiciste clic: {contador} veces </p>
            <button onClick= {() => setContador(contador + 1)}> Incrementar </button>
        </div>
    )
}

export default Contador;