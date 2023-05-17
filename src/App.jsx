import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [prev,setPrev] = useState(0);
  const [height,setHeight] = useState(0);
  const [prevHeight,setPrevHeight] = useState(0);

  const [index,setIndex]=useState(-1);
  useEffect(()=>{
    Array.from(document.getElementById("p1").getElementsByTagName("span")).map((e)=>{
      e.style.opacity=0.1;
    })
  },[])
  
  useEffect(()=>{
    console.log(height,prevHeight)
  const data=Array.from(document.getElementById("p1").getElementsByTagName("span"));
  if(index===-1){
    setIndex(index+1);
  }
  else if(index<data.length && height-prevHeight>0){
    data[index].style.opacity=1;
    setIndex(index+1)
  }
  else if(index>0 && height-prevHeight<0){
    data[index].style.opacity=0.1;
    setIndex(index-1)
  }
  setPrevHeight(height)


  },[height])
  window.addEventListener('scroll', throttle(()=>{
    setHeight(window.pageYOffset)
    setPrev(window.pageYOffset)
  }, 1000))

  function throttle(goal_func, wait_ms) { // fires goal_func but only if wait_ms has elapsed, otherwise does nothing.
    var time = Date.now()
    return function() {
      if ((time + wait_ms - Date.now()) < 0) {
        goal_func()
        time = Date.now()
      }
    }
  }
  return (
      <div id="sc">
      <p className="p1" id="p1">
        <span>In </span>
        <span>Chronicle </span>
        <span>everything </span>
        <span>is </span>
        <span>made </span>
        <span>with </span>
        <span>Blocks </span>
        <span>that </span>
        <span>come </span>
        <span>with </span>
        <span>pixel </span>
        <span>perfect </span>
        <span>design, </span>
        <span>interactivity </span>
        <span>and </span>
        <span>motion </span>
        <span>out </span>
        <span>of </span>
        <span>the </span>
        <span>box. </span>
        <span>Instead </span>
        <span>of </span>
        <span>designing </span>
        <span>from </span>
        <span>scratch, </span>

      </p>
      </div>
      
  );
}

export default App;
