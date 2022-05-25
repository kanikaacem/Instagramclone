import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";
import RightSidebar from "./RightSidebar";

function ProfilePage() {
  return (
    <>
      <div className="mainDiv">
        <div className="mainContainer">
          <Sidebar></Sidebar>
          <UserProfile></UserProfile>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
