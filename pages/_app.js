import '../styles/globals.css'

import React, {useState} from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const [isClicked, setIsClicked] = useState(false); // State variable to track button click

  const { unityProvider } = useUnityContext({
    loaderUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0x0b32a27cff4fae79a2e6779cb431d0052eef892f8c008807a41e906f9ed04717/FirstBuild.loader.js",
    dataUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0x0b32a27cff4fae79a2e6779cb431d0052eef892f8c008807a41e906f9ed04717/FirstBuild.data",
    frameworkUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0x0b32a27cff4fae79a2e6779cb431d0052eef892f8c008807a41e906f9ed04717/FirstBuild.framework.js",
    codeUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0x0b32a27cff4fae79a2e6779cb431d0052eef892f8c008807a41e906f9ed04717/FirstBuild.wasm",
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
