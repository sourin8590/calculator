import { useState } from "react";
import "./App.css";

function App() {

  const [val, setVal] = useState('');

  return (
    <div className=" h-screen flex justify-center items-center bg-gray-500">
      <div className=" w-[350px] h-[450px] rounded-md p-3 grid grid-cols-4 place-items-center
       gap-2 bg-gray-700 border border-gray-700 shadow-black shadow-xl text-slate-300">

        <p className=" w-[310px] h-[60px] border border-black col-span-4 rounded-md text-4xl px-2 py-1 text-right font-semibold shadow-sm shadow-black bg-slate-300 text-black overflow-x-auto overflow-y-hidden">{val}</p>

          <button className=" w-[55px] h-[50px] border border-black rounded-md
           bg-red-500 text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal('');
          }}>AC</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md
          bg-red-500 text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            const temp = val.slice(0, -1);
            setVal(temp);
          }}>CE</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '/');
          }}>/</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '*');
          }}>*</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '7');
          }}>7</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '8');
          }}>8</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '9');
          }}>9</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '-');
          }}>-</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '4');
          }}>4</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '5');
          }}>5</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '6');
          }}>6</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '+');
          }}>+</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '1');
          }}>1</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '2');
          }}>2</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '3');
          }}>3</button>
          <button className=" w-[50px] h-[130px] border border-black rounded-md row-span-2 text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            const ans = eval(val);
            setVal(ans);
          }}>=</button>
          <button className=" w-[140px] h-[50px] border border-black rounded-md col-span-2 text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '0');
          }}>0</button>
          <button className=" w-[55px] h-[50px] border border-black rounded-md text-2xl font-semibold shadow-sm shadow-black"
          onClick={()=>{
            setVal(val + '.');
          }}>.</button>
      </div>
    </div>
  );
}

export default App;
