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
    return (
      <>
        <div className="ProfileRightSidebar">
          <div className="ProfileRightTop">
            <h1 className="UserInformation"> User Information</h1>
            <div class="Information">City : New York</div>
            <div class="Information">From : New York</div>
            <div class="Information">Relationship : Single</div>
          </div>
          <div className="ProfileRightBottom">
            <h4> User Friends</h4>
            <div className="UsersFriends">
              <div class="UserFriendInformation">
                <img
                  src="/assets/person/3.jpeg"
                  className="FriendInformationImage"
                  alt=""
                />
                <span class="FriendInformationName"> User Friends</span>
              </div>

              <div class="UserFriendInformation">
                <img
                  src="/assets/person/3.jpeg"
                  className="FriendInformationImage"
                  alt=""
                />
                <span class="FriendInformationName"> User Friends</span>
              </div>

              <div class="UserFriendInformation">
                <img
                  src="/assets/person/3.jpeg"
                  className="FriendInformationImage"
                  alt=""
                />
                <span class="FriendInformationName"> User Friends</span>
              </div>

              <div class="UserFriendInformation">
                <img
                  src="/assets/person/3.jpeg"
                  className="FriendInformationImage"
                  alt=""
                />
                <span class="FriendInformationName"> User Friends</span>
              </div>

              <div class="UserFriendInformation">
                <img
                  src="/assets/person/3.jpeg"
                  className="FriendInformationImage"
                  alt=""
                />
                <span class="FriendInformationName"> User Friends</span>
              </div>

              <div class="UserFriendInformation">
                <img
                  src="/assets/person/3.jpeg"
                  className="FriendInformationImage"
                  alt=""
                />
                <span class="FriendInformationName"> User Friends</span>
              </div>

              <div class="UserFriendInformation">
                <img
                  src="/assets/person/3.jpeg"
                  className="FriendInformationImage"
                  alt=""
                />
                <span class="FriendInformationName"> User Friends</span>
              </div>

              <div class="UserFriendInformation">
                <img
                  src="/assets/person/3.jpeg"
                  className="FriendInformationImage"
                  alt=""
                />
                <span class="FriendInformationName"> User Friends</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
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
