import React, { useState, useEffect } from 'react';
import './Recibo.scss';
import { Print } from './Print.js'

export const Recibo = () => {
  const [from,setFrom] = useState('Johan Vargas');
  const [to,setTo] = useState('Johan Vargas');
  const [amount,setAmount] = useState(0);
  const [date,setDate] = useState(new Date());
  const [observations, setObservations] = useState('Pagado');

  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });

  return (
    <div className="recibo">
      <div className="recibo__datos">
        <div className="recibo__formgroup"> 
          <label>
            De:
            <input type="text" value={from} onChange={e => setFrom(e.target.value)}  />        
          </label>
        </div>
        <div className="recibo__formgroup"> 
          <label>
            Para:
            <input type="text" value={to} onChange={e => setTo(e.target.value)}  />        
          </label>
        </div>
        <div className="recibo__formgroup"> 
          <label>
            Monto:
            <input type="text" value={amount} onChange={e => setAmount(e.target.value)} />        
            
          </label>
        </div>
        <div className="recibo__formgroup"> 
          <label>
            Fecha:
            <input type="text" value={date} onChange={e => date(e.target.value)}  />        
          </label>
        </div>
        <div className="recibo__formgroup"> 
          <label>
            Observaciones:
            <textarea type="text" value={observations} onChange={e => setObservations(e.target.value)}   />        
          </label>
        </div>
      </div>
      <Print from={from} to={to} amount={amount} date={date } observations={observations}/>
    </div>  
  );
}