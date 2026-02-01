import React, { useState, useCallback, useEffect, useRef, createContext } from 'react'
import './layout.css';
import InputBox from './input';
import useCurrencyInfo from '../../../hooks/usecurrencyhooks';


export const UserContext = createContext(null)

function Layout() {

  // currency converter

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertAmt] = useState(0);

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = () => {
    setConvertAmt(amount * currencyInfo[to])
  }

  // currency converter end

  //password generator code
  const [length, setLength] = useState(8);

  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const[password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*()`-_+=[]{}"
    for (let i = 1; i <= length; i++ ) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)
    
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClick = useCallback (() => {
    passwordRef.current?.select();
    passwordRef.current?.setselectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
  }, [password]) 

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed, charAllowed, setPassword])

  //password generator code end
   

  return (
    <div>
      fsdfsdf
      <h1>Password Generator</h1>

      //password generator code
      <div className="w-50 text-bg-secondary p-3 rounded-2">
        <div className='w-100 d-flex'>
          <input type="text" className='w-100' value={password} placeholder='password' ref={passwordRef} readOnly />
          <button onClick={copyPasswordToClick} type='button' className='bg-dark text-white'>copy</button>
        </div>
        <div className="d-flex align-items-center gap-3">
          <input type="range" min={6} max={13} value={length} className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}} />
          <label htmlFor="">Length: {length}</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={numberAllowed} 
            onChange={(e) => {setNumberAllowed((prev) => !prev)}} />
            <label className="form-check-label" for="checkDefault">
              Number
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={charAllowed} 
            onChange={(e) => {setCharAllowed((prev) => !prev)}} />
            <label className="form-check-label" for="checkChecked">
              Special Character
            </label>
          </div>
        </div>
      </div>
      //password generator code end

      //currency converter

      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/7947742/pexels-photo-7947742.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox label="From" amount={amount} currencyOptions={options} 
                            onCurrencyChange={(currency) => setFrom(currency)} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)}/>
                        </div>
                        <div className="position-relative w-100 h-0.5">
                            <button
                                type="button"
                                className="absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                currencyOptions={options}
                                onCurrencyChange={(currency) =>
                                  setTo(currency)}
                                  selectCurrency={from}
                                  amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-dark text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} 
                        </button>
                    </form>
                </div>
            </div>
        </div>

      //currency converter end

    </div>
  )
}

export default Layout;