import ConnectionFeed from "./ConnectionFeed";
import { Posts } from "../DemoData";

function UserProfile() {
  return (
    <>
      <div className="UserProfileDiv">
        <div className="UserProfiletop">
          <img
            src="/assets/post/3.jpeg"
            className="profileBackgroundImage"
            alt=""
          ></img>
          <img
            src="/assets/person/1.jpeg"
            className="profileUserImage"
            alt=""
          ></img>
        </div>
        <div className="UserProfileBottom">
          <div className="UserName"> User Name</div>
          <div className="ProfileDescription"> Hello ! , my friends .</div>
        </div>

        {Posts.map((p) => {
          return <ConnectionFeed post={p} key={p.id} />;
        })}
      </div>
    </>
  );
}
export default UserProfile;
