import { MoreVert } from "@material-ui/icons";
import { Users } from "../DemoData";
function ConnectionFeed({ post }) {
  return (
    <div className="connectionFeedContainer">
      <div className="connectionFeedTop">
        <img
          className="connectionProfileImage"
          src={Users.filter((u) => u.id === post.userId)[0].ProfilePicture}
          alt=""
        />
        <span className="connectionName">
          {Users.filter((u) => u.id === post.userId)[0].username}
        </span>
        <span className="postTime">{post.date}</span>
        <span className="moreView">
          <MoreVert> </MoreVert>
        </span>
      </div>
      <div className="connectionFeedDescription">{post?.desc}</div>
      <div className="connectionFeedCenter">
        <img className="connectionFeedImage" src={post.photo} alt="" />
      </div>
      <div className="connectionFeedBottom">
        <img className="ShareIcon" src="/assets/like.png" alt=""></img>
        <img className="HeartIcon" src="/assets/heart.png" alt=""></img>
        <span className="peopleLikeCount"> {post.like} people liked it </span>
        <span className="peopleCommentCount"> {post.comment} comments</span>
      </div>
    </div>
  );
}

export default ConnectionFeed;
