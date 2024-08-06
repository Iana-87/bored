import './App.css';
import { useEffect, useState } from 'react';


function App() {

const [tips, setTips] = useState("");



useEffect(() => {
fetchTips();
}, [])

const fetchTips = async () => {
const response = await fetch(`http://bored.api.lewagon.com/api/activity/`);
const data = await response.json();
console.log(data.activity);
setTips(data.activity)
}



return (

<div className="App">

<h2> {tips} </h2>
<button onClick={fetchTips}>Clik to know what todo</button>



</div>

);

}
export default App;