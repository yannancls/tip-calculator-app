import React, { useState } from 'react'

const Total = ({ tipAmount, total, reset, bill, tip, numOfPeople}) => { 
    const isResetDisabled = !bill || !tip || !numOfPeople;

  return (
    <section className='total-container'>
        <div className='tip-total-info'>
            <div>
                <p>Tip Amount</p>
                <small>/ person</small>
            </div>
            <h2>${tipAmount}</h2>
        </div>
        <div className='tip-total-info'>
            <div>
                <p>Total</p>
                <small>/ person</small>
            </div>
            <h2>${total}</h2>
        </div>
        <button onClick={reset} disabled={isResetDisabled} className={isResetDisabled ? 'disabled' : ''}>RESET</button>
    </section>
  )
}

export default Total