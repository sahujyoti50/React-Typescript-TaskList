import React,{useState} from 'react'

type prop={
    setInput:React.Dispatch<React.SetStateAction<string>>,
    input:string,
    addHandler: (e: any) => void
}

function InputField({setInput,input,addHandler}:prop) {
  return (
    <form className="App" onSubmit={addHandler}>
        <h3>Add Skills</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="button">Add</button>
      </form>
  )
}

export default InputField;
