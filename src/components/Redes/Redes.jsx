import React from 'react';
import './Redes.css'

const Redes = () => {
    return(
        <div>
            <div className='textoOrLogin'>
            <hr />
            <label>Or login with</label>
            <hr />
            </div>
            <div className='contenidoRedesSociales'>
            <i class="bi bi-google"></i>
            <i class="bi bi-apple"></i>
            <i class="bi bi-facebook"></i>
            </div>
        </div>
    )
}

export { Redes }