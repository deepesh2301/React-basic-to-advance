import React from "react";
import Card from "./components/Card";
import './index.css'
const App = () => {
  return (
    <div className="card-container">
      <Card user='Aarav Patel' 
            age="20" 
            p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat. " 
            img='https://picsum.photos/id/1011/600/360' 
      />
       <Card user='Siya Mehta' 
            age="22" 
            p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat. " 
            img='https://picsum.photos/id/1012/600/360' 
      />
       <Card user='Kabir Sharma' 
            age="23" 
           p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat. " 
            img='https://picsum.photos/id/1015/600/360' 
      />
      <Card user='Anaya Singh' 
            age="25" 
            p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat. " 
            img='https://picsum.photos/id/1016/600/360' 
      />
      <Card user='Vivaan Joshi' 
            age="24" 
             p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat. "  
            img='https://picsum.photos/id/1025/600/360' 
      />
      <Card user='Myra Nair' 
            age="22" 
             p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat. " 
            img='https://picsum.photos/id/1027/600/360' 
      />
      <Card user='Reyansh Gupta' 
            age="24" 
            p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat. " 
            img='https://picsum.photos/id/1031/600/360' 
      />
      <Card user='Kiara Verma' 
            age="20" 
             p="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugiat. " 
            img='https://picsum.photos/id/1035/600/360' 
      />
     
      
    </div>
  );
};

export default App;
