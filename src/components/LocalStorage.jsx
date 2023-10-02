import { useState } from "react";



const LocalStorage = () => {
  const [value, setValue] = useState("");
  const[local,setLocal] = useState([]);
 

  const handleButtonClick = () => {
    const previousData = JSON.parse(localStorage.getItem("name"));
    let list =[];
    const Name = {value};
    console.log(previousData)
    if(previousData){
      list.push(...previousData,Name)
       localStorage.setItem('name',JSON.stringify(list))
      
       setLocal(list)
       setValue('')
    
    }
    else{
        list.push(Name)
        localStorage.setItem('name',JSON.stringify(list))
        setLocal(list)
        setValue('')
       
       
    
      
    }
   
    
   
  };
  // remove item form locastorage and ui
  const handleclick=(value)=>{
    const previousData = JSON.parse(localStorage.getItem("name"));
    const data = previousData.filter(pre=>pre.value!=value);
    localStorage.setItem('name',JSON.stringify(data));
    setValue('');
    setLocal(data)

  }

  return (
    <div className="text-center mt-20">
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        value={value}
      />
      <br />
      <button onClick={handleButtonClick} type="button">
        Submit
      </button>
     
      
        {
            local.map((t,index)=>{
            return <div key={index} className="flex gap-4 justify-center">
                   <li >{t.value}</li>
                   <button onClick={()=>handleclick(t.value)}>x</button>
                </div>
            
         
           
             } )
           
        }
       
      
     
     
    </div>
  );
};

export default LocalStorage;
