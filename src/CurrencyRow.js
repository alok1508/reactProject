import React from 'react'

const CurrencyRow = (props) => {
   
    const {onChangeAmount, currencyOptions,selectCurrency,onChangeCurrency ,amount } = props;
    return (
        <div>
            <input type="number" value={amount} onChange={onChangeAmount}/>
            <select value={selectCurrency} onChange={onChangeCurrency}
            
            >
            {
                currencyOptions.map(option =>(
                    <option 
                    key={option}
                    value={option}>{option}</option>
                ))
            }
               
            </select>
        </div>
    )
}

export default CurrencyRow;
