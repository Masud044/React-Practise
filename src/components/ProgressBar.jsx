import { useState } from 'react';
import './progressbar.css';

const ProgressBar = () => {
    const [input, setInput] = useState('')
    
    const handlechange = (e) => {
        setInput(e.target.value)
    }


    return (
        <div className="text-center mt-20">

            <h1>Progress bar</h1>
            {
                input>0 && ( <div className="progress-bar">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${parseInt(input)}%` }}
                >
                    <p>{parseInt(input)}%</p>
                </div>
            </div>) 
            }

           


            <label className="mr-8" htmlFor="">input percent</label>
            <input onChange={handlechange} type="number" placeholder="add here" value={input} />
            
        </div>
    );
};

export default ProgressBar;