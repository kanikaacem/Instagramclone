import OnlineFriend from "./OnlineFriend";
import { Users } from "../DemoData";
function RightSidebar({ profile }) {
  const HomeRightSidebar = () => {
    return (
      <>
        <div className="BirthdayDiv">
          <img className="BirthdayImage" src="/assets/gift.png" alt="" />
          <span>
            Connection Friends and 3 other Friends have their birthday{" "}
          </span>
        </div>
        <div className="onlineAds">
          <img className="onlineAdsImage" src="/assets/ad.png" alt="" />
        </div>
        <hr className="RightSidebarSeperator" />
        <div className="onlineFriends">
          <h1> Online Friends</h1>
          {Users.map((user) => (
            <OnlineFriend user={user} key={user.id} />
          ))}
        </div>
      </>
    );
  };

  const ProfileRightSidebar = () => {
    return <>this is prrofile</>;
  };
  return (
    <div className="RightSidebar">
      <div className="RightSideBarWrapper">
        {profile === "profile" ? (
          <ProfileRightSidebar></ProfileRightSidebar>
        ) : (
          <HomeRightSidebar></HomeRightSidebar>
        )}
      </div>
    </div>
  );
}

export default RightSidebar;
