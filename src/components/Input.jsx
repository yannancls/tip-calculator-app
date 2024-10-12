import React, { useState } from 'react'

const Input = ({ bill, setBill, tip, setTip, numOfPeople, setNumOfPeople}) => {

    const [error, setError] = useState('');

    const handleTipClick = (tipValue) => {
        setTip(tipValue);
    }

    function validateNumOfPeople(value) {
        if (value === '0') {
            return "Can't be zero";
        }
        if (!Number.isInteger(Number(value))) {
            return "Can't be a decimal";
        }
        return '';
    }

    const handleValidate = (value) => {
        const validationError = validateNumOfPeople(value);
        if (validationError) {
            setError(validationError);
        } else {
            setError('');
        }
    }

    const handlePeopleChange = (e) => {
        const value = e.target.value;
        setNumOfPeople(value);
        handleValidate(value);
    }

    return (
        <section className='input-container'>
            <div className='div-one'>
                <p>Bill</p>
                <input type='number' value={bill} placeholder='0' onChange={(e) => {setBill(e.target.value)}} />
            </div>
            <div className='div-two'>
                <p>Select Tip %</p>
                <div className='tips-grid'>
                    <button className={tip === 0.05 ? 'active' : ''} onClick={() => handleTipClick(0.05)}>
                        5%
                    </button>
                    <button className={tip === 0.10 ? 'active' : ''} onClick={() => handleTipClick(0.10)}>
                        10%
                    </button>
                    <button className={tip === 0.15 ? 'active' : ''} onClick={() => handleTipClick(0.15)}>
                        15%
                    </button>
                    <button className={tip === 0.25 ? 'active' : ''} onClick={() => handleTipClick(0.25)}>
                        25%
                    </button>
                    <button className={tip === 0.50 ? 'active' : ''} onClick={() => handleTipClick(0.50)}>
                        50%
                    </button>
                    <input 
                        type='number' 
                        placeholder='Custom' 
                        onChange={(e) => handleTipClick(Number(e.target.value) / 100)} 
                    />
                </div>  
            </div>
            <div className='div-three'>
                <div className='num-validation'>
                    <p>Number of People</p>
                    <div className='error-msg'>{error}</div>
                </div>
                <input type='number' value={numOfPeople} placeholder='0' onChange={handlePeopleChange} />
            </div>
        </section>
    )
}

export default Input;
