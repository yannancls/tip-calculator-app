import React, { useState, useEffect } from 'react'
import Input from './Input'
import Total from './Total'

const Calculator = () => {
    const [bill, setBill] = useState('');
    const [tip, setTip] = useState(null);
    const [numOfPeople, setNumOfPeople] = useState('');
    const [tipAmount, setTipAmount] = useState('0.00');
    const [total, setTotal] = useState('0.00');

    useEffect(() => {
      if (numOfPeople > 0 && bill > 0 && tip != null) {
          const tipCompute = (tip * bill) / numOfPeople;
          const formattedTip = parseFloat(tipCompute).toFixed(2);
          setTipAmount(formattedTip);
          
          const totalCompute = (bill / numOfPeople) + parseFloat(formattedTip);
          const formattedTotal = parseFloat(totalCompute).toFixed(2);
          setTotal(formattedTotal);
      }
  }, [bill, tip, numOfPeople]);

  const resetAll = () => {
    setBill('');
    setTip(null);
    setNumOfPeople('');
    setTipAmount('0.00');
    setTotal('0.00');
};

  return (
    <div className='main-container'>
        <Input
        bill={bill}
        setBill={setBill}
        tip={tip}
        setTip={setTip}
        numOfPeople={numOfPeople}
        setNumOfPeople={setNumOfPeople} />

        <Total
        tipAmount={tipAmount}
        total={total}
        reset={resetAll}
        bill={bill}
        tip={tip}
        numOfPeople={numOfPeople} />
    </div>
  )
}

export default Calculator