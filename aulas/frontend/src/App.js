import React, { useState } from 'react';
import api from './api.js'

function App() {
    const [valor, setValor] = useState('');
    const [valorr, setValorr] = useState('');
    const [valorrr, setValorrr] = useState('');
    const [valorrrr, setValorrrr] = useState('');
    async function calcular(){
        const response= await api.get(`/projeto?metodo=${valorr}&x=${valorrr}&y=${valorrrr}`);
        setValor(response.data);
    }
    return (
        <>
            <input type="text" onChange={e=> setValorrr(e.target.value)}/>
            <input type="text" onChange={e=> setValorr(e.target.value)}/>
            <input type="text" onChange={e=> setValorrrr(e.target.value)}/>
            <button onClick={calcular}>AQUI</button>
            <h3>Resultado: {valor.res}</h3>
        </>
  );
}


export default App;
