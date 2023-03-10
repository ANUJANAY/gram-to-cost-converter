import React, { useState } from 'react'
import '../App.css';

function CalculationComponent(props) {
  const [result, setResult] = useState(0);
  const [priceof1kg, setPriceof1kg] = useState("");
  const [price, setPrice] = useState("");
  const [showResult, setShowResult] = useState(false);

  const {
    calculationType,
    setCalculationType,
    onChangePriceof1kg,
    onChangePrice,
    onCalculateBtnclick,
  } = props;

  const handleCalculateBtnclick = () => {
    let result = 0;
    if (calculationType === "Price") {
      result = (1000 / priceof1kg) * price + " cost ";
    } else if (calculationType === "Grams") {
      result = (priceof1kg / 1000) * price + " gram ";
    } else if (calculationType === "KiloGrams") {
      result = (price / priceof1kg) + " Kg ";
    }
    setResult(result);
    setShowResult(true);
  }
  const handleChangePriceof1kg = (e) => {
    let typedValue = e.target.value;
    setPriceof1kg(typedValue);
  }
  const handleChangePrice = (e) => {
    let typedValue = e.target.value;
    setPrice(typedValue);
  }
  return (
    <div className="Container">
      <h style={{ fontWeight: '500' }}>BasicDetails</h>
      <div style={{ height: '1px', background: 'gray' }}></div>
      <div>Enter Price of 1 KG</div>
      <input type='text'
        style={{ height: '45px', fontSize: '20px' }}
        onChange={(e) => { onChangePriceof1kg(e) }}></input>
      <div className="Container1" >Calculator</div>
      <div style={{ height: '1px', background: 'gray' }}></div>
      <div className="Container3">Choose One to Calculate</div>
      <select name="calculationType" style={{ height: '40px', fontSize: '20px' }}
        value={calculationType}
        onChange={(e) => setCalculationType(e.target.value)}>
        <option value="Price">Price</option>
        <option value="Grams">Grams</option>
        <option value="KiloGrams"> KiloGrams</option>
      </select>
      <div className="Container2"> Enter {calculationType}</div>
      <input type='text'
        placeholder={`Enter ${calculationType == "Price"
          ? "Price"
          : calculationType == "Grams"
            ? "Grams"
            : "KiloGrams"
          }`}
        style={{ height: "40px", fontSize: "20px" }}
        onChange={(e) => {
          onChangePrice(e);
        }}
      ></input>
      <button onClick={onCalculateBtnclick} style={{ backgroundColor: '#F16767', height: '45px', color: 'white', justifyContent: 'center', margin: '10px 0', fontSize: '20px' }}>Calculate</button>
    </div>
  )
}
export default CalculationComponent