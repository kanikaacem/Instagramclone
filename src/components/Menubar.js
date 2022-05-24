import { Search, Person, Message, Notifications } from "@material-ui/icons";

function Menubar() {
  return (
    <div className="Topbar">
      <div className="leftsidebar">
        <span> Socialapp </span>
      </div>
      <div className="centersidebar">
        <div className="searchbarDiv">
          <span className="searchbarIcon">
            <Search />
          </span>
          <span>
            <input
              placeholder="Search for friends, posts  or video ...... "
              className="searchbar"
            />
          </span>
        </div>
      </div>
      <div className="rightsidebar">
        <div className="rightsidebarLinkMenu">
          <div className="rightsidelink">Homepage</div>
          <div className="rightsidelink">Timeline</div>
          <div className="rightsidebarIcon">
            <div className="rightbaricon">
              <Person />
              <span className="rightbaricontext"> 1 </span>
            </div>
            <div className="rightbaricon">
              <Message />
              <span className="rightbaricontext"> 3 </span>
            </div>
            <div className="rightbaricon">
              <Notifications />
              <span className="rightbaricontext"> 1 </span>
            </div>
          </div>
        </div>

        <div className="rightsideicon"></div>
        <img src="/assets/person/1.jpeg" alt="" className="profileImage" />
      </div>
    </div>
  );
}

export default Menubar;

//importing and image
//By defaul your public folder is accessible anywhere in your code just reference it like this below, change your image src to something like this
