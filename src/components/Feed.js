import ShareFeed from "./ShareFeed";
import ConnectionFeed from "./ConnectionFeed";
import { Posts } from "../DemoData";
function Feed() {
  return (
    <div className="Feed">
      <div className="FeedWrapper">
        <ShareFeed />

        {Posts.map((p) => {
          return <ConnectionFeed post={p} key={p.id} />;
        })}
      </div>
    </div>
  );
}

export default Feed;
