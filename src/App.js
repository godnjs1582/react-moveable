import testImage from "./images/123.png"
import ImageMoveable from "./ImageMoveable";
import useRef from "react";
function App() {
  // const target=useRef();
  return (
    <>
      {/* <img src={testImage} alt="" style={{width:"100px", height:"100px"}} /> */}
      <ImageMoveable testImage={testImage}/>
    </>
  );
}

export default App;
