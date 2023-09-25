
import { useState } from "react";

const TwoRadios = () => {
    const game = ['cricket', 'game', 'football', 'volibol'];
    const days = ['weekend', 'weekdays'];

    const [game1, setGame1] = useState('cricket');
    const [day, setday] = useState('weekend');
    return (
        <div>
<div className="text-center mt-20">

{
  game.map(item=>
    <div key={item}>
       <input onChange={(e)=>setGame1(e.target.value)} type="radio" name='option'  value={item} />
      <label htmlFor="">{item}</label> <br />
      </div>
    
  )
}
<p>aadfkafha akglka</p>
{
days.map(item=>
  <div key={item}>
  <input  onChange={(e)=>setday(e.target.value)} type="radio" name='options'  value={item} />
 <label htmlFor="">{item}</label> <br />
 </div>

)

}

<p>game:{game1} days:{day}</p>








{/* {
   arrays.map((item,i)=>{
         return  <> 
         
          <li key={i}>{item}
          <input onChange={(e)=>handlecheck(!e.target.value,i)} type="checkbox" name="check" id="check" />
         
         {
          check && current==i && ( <button onClick={()=>handledelete(i)} className="btn ml-4 mb-2 border border-red-200">delete</button>)
         } 
         </li>
                 
                 </>

          
       })
      
     }
*/}
    
</div>
        </div>
    );
};

export default TwoRadios;