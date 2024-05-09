import { useState } from 'react';
import './App.css'
import { GrGroup } from "react-icons/gr";

function App() {
  const [Interest, setInterest] = useState(0);
  const [Billamt, setBillamt] = useState(0);
  const [TipAmt, setTipamt] = useState("");
  const [Perperson, setperPerson] = useState("");
  const [People, setpeople] = useState(0);

  const handleInterest = (e) => {

    setInterest(e.target.value);

  }

  const InpPeople = (e) => {
    setpeople(e.target.value)



  }
  const InpBillAmt = (e) => {
    setBillamt(e.target.value)
  }

  const Total_Tip_Amt = () => {
    let total = (Billamt * (Interest / 100)).toFixed(2)
    setTipamt(total);
    
    let division = ((parseFloat(Billamt) + parseFloat(total)) / People).toFixed(2);
    setperPerson(division)

  };

  return (
    <>

      <div className=' justify-center text-center p-4  rounded-3xl border-2 bg-violet-200 my-28 lg:w-1/2  items-center'>
        <div className='p-4 '>
          <label className='Poppins  font-bold text-black'>Tip Amount </label>
          <span className='text-2xl text-black'>₹</span> <input type="text" className='w-32 text-4xl p-2 text-black outline-none bg-violet-200 poppins-semibold' value={TipAmt} readOnly />
        </div>
        <div className='p-2 '>
          <label className='Poppins  font-bold text-black'>Total Per Person </label>
          <span className='text-2xl text-black'>₹</span> <input type="text" className='poppins-semibold text-black p-2 w-32 text-4xl bg-violet-200 outline-none' value={Perperson} readOnly />
        </div>
        <hr />
        <div className='p-5 flex  justify-center items-center'>

          <div className='p-1 '>
            <div className='flex  '>
              <span className='text-2xl text-black p-2'>₹</span> <input type="text" className=' w-32 outline-none bg-violet-200 text-2xl  text-black' onChange={InpBillAmt} />

            </div>
            <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-32' />

            <h2 className='text-black mr-10'>Bill Amount</h2>
          </div>
          <div className='p-1 \'>
            <div className='flex '>
              <span className='text-2xl text-black p-2'><GrGroup /></span> <input type="text" onChange={InpPeople} className='w-32 p-2 text-2xl text-black outline-none bg-violet-200' />
            </div>
            <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 ' />

            <h2 className='text-black'>Number of People</h2>
          </div>


        </div>
        <div >
          <button className='border-2 bg-cyan-600 p-2 m-2  rounded-2xl hover:bg-zinc-700' value={5} onClick={handleInterest}>5 %</button>
          <button className='border-2 bg-cyan-600 p-2 m-2  rounded-2xl hover:bg-zinc-700' value={10} onClick={handleInterest}>10 %</button>
          <button className='border-2 bg-cyan-600 p-2 m-2  rounded-2xl hover:bg-zinc-700' value={15} onClick={handleInterest}>15 %</button>
          <button className='border-2 bg-cyan-600 p-2 m-2  rounded-2xl hover:bg-zinc-700' value={20} onClick={handleInterest}>20 %</button>
        </div>
        <h1 className='m-2 text-black'> Rate of Interest : <input type="text" className='w-10 bg-violet-200 text-center outline-none ' />{Interest} %</h1>

        <button className='p-2 bg-indigo-800 rounded-md m-2' onClick={Total_Tip_Amt}>Calculate</button>
      </div>

    </>
  )
}

export default App
