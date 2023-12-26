import React from 'react'
import { useState } from 'react'
import './Vista.css'

const Vista = () => {
    const [modo, setModo] = useState(false);
    const cambiarModo = () => {
        setModo(!modo)
    }
    const estilo = modo ? "oscuro" : "claro";

    return (
        <div className={estilo}>
            <div>Modo Claro o Modo Oscuro</div>
            <button onClick={cambiarModo}>Cambiar modo</button>
            <h2>Componente vista</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam veritatis et cum autem hic neque iusto ipsam perspiciatis pariatur ad quia, mollitia voluptatem aliquam eius unde odio, culpa quas expedita.
        </div>
    )
}

export default Vista