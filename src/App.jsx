
import TaskStatusUpdating from "./components/TaskStatusUpdating";
import TodoList from "./components/TodoList";
import TwoRadios from "./components/TwoRadios";



function App() {
  
 
//  const [arrays,setArrays] = useState(array);
//  const [check,setCheck] = useState(false);
//  const [current,setCurrent] = useState();

//  const handledelete=(item)=>{
     
//        let newarry = arrays;
//       let remaining =  newarry.filter((it,i)=>{
//            return i!=item;
//         })
       
//         setArrays(remaining);
   
//  }
//  const handlecheck=(value,index)=>{
//      setCheck(!check);
//      setCurrent(index);
//  }
  return (
    <>
      {/* <TwoRadios></TwoRadios> */}
      {/* <TaskStatusUpdating></TaskStatusUpdating> */}
      <TodoList></TodoList>
    </>
  )
}

export default App
