
import { useContext } from "react";
import LocalStorage from "./components/LocalStorage";
import ProgressBar from "./components/ProgressBar";
import TaskStatusUpdating from "./components/TaskStatusUpdating";
import TodoList from "./components/TodoList";
import TwoRadios from "./components/TwoRadios";
import SelectCheckbox from "./components/selectCheckbox";
import { ThemeContext } from "./ThemeProvider";



function App() {
  const{toggole,ToggleThame} = useContext(ThemeContext);
 

  return (
    <div className={toggole?'bg-red-100':'bg-white'}>
        <button  onClick={()=>ToggleThame(!toggole)}>{toggole?'dark':'white'}</button>
      <TwoRadios></TwoRadios>
      <TaskStatusUpdating></TaskStatusUpdating>
      <TodoList></TodoList> 
      <ProgressBar></ProgressBar>
      <SelectCheckbox></SelectCheckbox>
     <LocalStorage></LocalStorage>
    </div>
  )
}

export default App
