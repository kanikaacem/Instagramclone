import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";

function Home() {
  return (
    <>
      <div className="mainDiv">
        <div className="mainContainer">
          <Sidebar></Sidebar>
          <Feed></Feed>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </>
  );
}

export default Home;
