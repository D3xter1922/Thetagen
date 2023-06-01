import '../styles/globals.css'

import React, {useState} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const [isClicked, setIsClicked] = useState(false); // State variable to track button click

  const { unityProvider } = useUnityContext({
    loaderUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0xa029127250240be1de0939a31e09e304ec070f0c45de3a302f361acc94176a5b/FirstBuild.loader.js",
    dataUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0xa029127250240be1de0939a31e09e304ec070f0c45de3a302f361acc94176a5b/FirstBuild.data",
    frameworkUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0xa029127250240be1de0939a31e09e304ec070f0c45de3a302f361acc94176a5b/FirstBuild.framework.js",
    codeUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0xa029127250240be1de0939a31e09e304ec070f0c45de3a302f361acc94176a5b/FirstBuild.wasm",
  });

  const handleClick = () => {
    setIsClicked(true); // Set isClicked to true when the button is clicked
  };

  return (
    <div>
      {isClicked ? ( // Render Unity component only when the button is clicked
        <Unity unityProvider={unityProvider} style={{ width: 1900, height: 1000 }}/>
      ) : (
        <button onClick={handleClick}>Click me</button>
      )}
    </div>
  );}



export default App
