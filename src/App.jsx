import {  useState } from "react";
import "./App.css";
import { data } from "./data.js";
import ReviewHighlighter from "./components/ReviewHighlighter/ReviewHighlighter.jsx";

const App = () => {
  const [result, setResult] = useState(data);
  console.log(result[0]);

  

  return (
   
    <div className="app">
      {result.length>0&&result.map((item)=>{
        return(
          <ReviewHighlighter key={item.review_id} review={item}/>
        )
      })}
        
    </div>
    
  );
};

export default App;
