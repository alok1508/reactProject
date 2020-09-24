import React,{ useEffect,useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = " https://api.exchangeratesapi.io/latest";

const App = () => {
  const [currencyOptions,setCurrencyOptions] = useState([]);
  const [formCurrency,setFormCurrency] = useState();
  const [exchangeRate,setExchangeRate] = useState();
  const [toCurrency,setToCurrency] = useState();
  const [amount,setAmount] = useState(1);
  const [amountOnFromCurrency,setAmountOnFromCurrency] = useState(true);

 let toAmount,fromAmount
 if(amountOnFromCurrency){
   fromAmount=amount
   toAmount=amount*exchangeRate
 }else{
   toAmount=amount
   fromAmount = amount/exchangeRate
 }
  useEffect(()=>{
    fetch(BASE_URL).then(res => res.json()).then(
      data =>{
        const firstCurrency = Object.keys(data.rates)[0] 
      setCurrencyOptions([data.base,...Object.keys(data.rates)]);
      setFormCurrency(data.base);
      setToCurrency(firstCurrency);
      setExchangeRate(data.rates[firstCurrency])
    }
      )
  },[]);
  useEffect(()=>{
    if(formCurrency != null && toCurrency != null){
      fetch(`${BASE_URL}?base=${formCurrency}&symbols=${toCurrency}`).then(
        res => res.json()
      ).then(data => setExchangeRate(data.rates[toCurrency])) 
    }
     
  },[formCurrency,toCurrency]);
 const handleFromAmountChange = (e) => {
      setAmount(e.target.value);  
      setAmountOnFromCurrency(true);
  }


 const handleToAmountChange = (e) => {
    setAmount(e.target.value);  
    setAmountOnFromCurrency(false);
}

  return (
    <div className="App">
    <h1>Currency Converter EUR</h1>
   <CurrencyRow 
    currencyOptions={currencyOptions}
    selectCurrency={formCurrency}
    amount={fromAmount}
    onChangeCurrency={e => setFormCurrency(e.target.value)}
    onChangeAmount={handleFromAmountChange}
   />
   =
   <CurrencyRow
selectCurrency={toCurrency}
currencyOptions={currencyOptions}
onChangeCurrency={e => setToCurrency(e.target.value)}
amount={toAmount}
onChangeAmount={handleToAmountChange}
   />
    </div>
  );
}

export default App;
