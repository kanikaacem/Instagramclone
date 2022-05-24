// import PersonIcon from '@mui/icons-material/Person';
// import topbar from "./components/topbar";

import Menubar from "./components/Menubar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import "./components/index.css";

function App() {
  return (
    <>
      <div className="mainDiv">
        <Menubar></Menubar>
        <div className="mainContainer">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </>
  );
}

export default App;

//tutorial
//https://www.youtube.com/playlist?list=PLj-4DlPRT48nfYgDK00oTjlDF4O0ZZyG8
//install material ui packages.
//https://mui.com/material-ui/material-icons/
//to resolve depency use, npm config set legacy-peer-deps true.
//to download material ui : link https://stackoverflow.com/questions/50829728/how-to-use-material-ui-icons-in-react

// to use material icons : type material icons

//sidebar,feed,rightsidebar
//You need to install Icons
//Yarn add @material-ui/icons
//npm install @material-ui/icons
