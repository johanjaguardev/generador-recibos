import React from 'react';
import './Print.scss';
import stamp from './../../assets/stamp.png';

export const Print = (props) => {
  return (
    <div className="print">
      <div className="print__stamp">
        <img src={stamp} alt="Stamp" />
      </div>
      <div className="print__names">
        <div className="print__name print__from">
          <em>De: </em>
          <p>{props.from}</p>
        </div>
        <div className="print__name print__to">
          <em>Para: </em>
          <p>{props.to}</p>
        </div>
      </div>

      <div className={`print__amount ${props.amount > 0 ? "print__amount-positive" : "print__amount-negative"}`}>
        <em>Quien {props.amount > 0 ? 'pago' : 'adeuda'}: </em>
        <p>${props.amount}</p>
      </div>
      <div className="print__date">
        <em>Fecha: </em>
        <p>{props.date.getUTCDate()}/{props.date.getUTCMonth() + 1}/{props.date.getUTCFullYear()}</p>
      </div>
      <div className="print__observations">
        <em>Motivo: </em>
        <p>{props.observations}</p>
      </div>
    </div>
  );
}