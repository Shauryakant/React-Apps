import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import {Inputbox} from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  };
  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/10531120/pexels-photo-10531120.jpeg)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border-gray-50 rounded-lg p-5 bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="FROM"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={fromCurrency}
              ></Inputbox>
            </div>
            <div className="relative w-full h-0.5">
              <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="TO"
                amount={convertedAmount}
                amountDisabled
                currencyOptions={options}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                selectedCurrency={toCurrency}
              ></Inputbox>
            </div>
            <button type="submit"  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert {fromCurrency} to {toCurrency}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
