import React, {useEffect, useRef, useState} from 'react'
import Moveable from "react-moveable";
import testImage from './images/123.png';

const ImageMoveable =(props)=>{
    const [text, setText]=useState("")
    const target=useRef();
    const [isReverse, setIsReverse] = useState(false)
    const moveable = useRef()
    const onChange = e =>{
        console.log(e.target.value)
        setText(e.target.value)
    }
    const [isShow, setIsShow]=useState(true)
    const toggle= ()=>{
        setIsShow(prev=>!prev)
    }
    const reflect = () =>{
        if(!target.current.style.transform.includes("rotateY(180deg)")){
            target.current.style.transform +="rotateY(180deg)" 
        }else{
          target.current.style.transform=  target.current.style.transform.replace("rotateY(180deg)", '')
  
        }
       
       
    }

    // useEffect(()=>{
    //     console.log(target.current.style.transform,"12dfsdfsdfsdwerwer")
    // },[target])
    
    return (
      <>
       
        <button onClick={reflect}>reflect</button>
        <button onClick={toggle}>X버튼</button>
       {/* {isShow&&<h1 ref={target} style={{fontSize:"100px", color:"#242526"}}>테스트 텍스트 입니다</h1>} */}
       {isShow&&<img src={testImage} ref={target} alt="" style={{width:"100px", height:"100px"}}/>}
        <Moveable
          ref={moveable}
          target={target}
          container={null}
          origin={true}
          //resise event edge
          edge={false} //true이면 모서리 네개만 dot이 생김
          //draggable
          draggable={true} //false이면 움직이지 않음
          throttleDrag={0} //숫자를 주면 반응도가 느려짐
          onDragStart={({ target, clientX, clientY }) => {
            console.log("onDragStart", clientX, clientY);
            //clientX, clientY는 image의 width와 height를 의미
          }}
          onDrag={({
            target,
            beforeDalta,
            beforeDist,
            left,
            top,
            right,
            bottom,
            delta,
            dist,
            transform,
            clientX,
            clientY,
          }) => {
            // console.log("onDrag left, top", left, top);
            //target.style.left =`${left}px`
            //target.style.top = `${top}px`
            // console.log("onDrag translate", dist);
     
            target.style.transform = transform;
            
        
          }}
          onDragEnd={({ target, isDrag, clientX, clientY }) => {
            console.log("onDragEnd", target, isDrag);
          }}
          //resizable
          resizable={true}
          throttleResize={0} //숫자를 높이면 resize에 대한 반응 속도가 느려짐
          onResizeStart={({ target, clientX, clientY }) => {
            console.log("onResizeStart", target);
          }}
          onResize={({
            target,
            width,
            height,
            dist,
            delta,
            direction,
            clientX,
            clientY,
          }) => {
            
            delta[0] && (target.style.width = `${width}px`);
            delta[1] && (target.style.height = `${height}px`);
            // target.style.fontSize =`${Math.min(width/9,height)}px`;
            console.log("onResize", target.style.fontSize);
            
          }}
          onResizeEnd={({ target, isDrag, clientX, clientY }) => {
            console.log("onResizeEnd", target, isDrag);
          }}
          //scalable
          // scalable={true}
          // throttleScale={0}
          // onScaleStart={({target, clientX, clientY})=>{
          //     console.log("onScaleStart", target)
          // }}
          // onScale={({
          //     target, scale, dist, delta, transform, clientX, clientY,
          // })=>{
          //     console.log("onScale", scale);
          //     target.style.transform=transform
          // }}
          // onScaleEnd={({target, isDrag, clientX, clientY})=>{
          //     console.log("onScaleEnd", target, isDrag);
          // }}

          //rotatable
          rotatable={true} //false로 바꾸면 회전이 불가능해짐
          throttleRotate={0}
          onRotateStart={({ target, clientX, clientY }) => {
            console.log("onRotateStart", target);
            
          }}
         
          onRotate={({ target, delta, dist, transform, clientX, clientY }) => {
            console.log("onRotate", dist);
            target.style.transform = transform;
            console.log(target.style.transform )
          }}
          onRotateEnd={({ target, isDrag, clientX, clientY }) => {
            console.log("onRotateEnd", target, isDrag);
          }}
          //Enabling pinchable lets you use events that
          //can be used in draggable, resizable, scalable, and rotateable
          pinchable={false}
          onPinchable={({ target, clientX, clientY, datas }) => {
            console.log("onPinchStart");
          }}
          onPinch={({ target, clientX, clientY, datas }) => {
            console.log("onPinch");
          }}
          onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {
            console.log("onPinchEnd");
          }}
        //   warpable={true}
       />
      </>
    );
}

export default ImageMoveable