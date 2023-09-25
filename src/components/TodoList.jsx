
import { useRef, useState } from "react";



const TodoList = () => {
  const [item,setItem] = useState([]);

  const reff = useRef(null);
  
  const handle=()=>{
    if((reff.current.value).trim()!==''){
        setItem([...item,reff.current.value])
        reff.current.value='';
    }
    

    
  }
  const handledelete=(li)=>{
     const up = [...item];
     up.splice(li,1);
     setItem(up)
  }
    

  return (
    <div className="text-center mt-20 ">
     
        <input ref={reff} type="text" placeholder="add name" />
        <button onClick={handle} className="btn border-2 px-1 ">add</button>
       
       
        {
            item.map((list,index)=>{
                return <div key={index} className="flex justify-center gap-2" > <li >{list}</li>
                <button onClick={()=>handledelete(list)} className="btn border-2 px-1 mb-2 ">x</button></div>
            }
                 
            )
        }
       
      
       
       
    </div>
  );
    
};

export default TodoList;