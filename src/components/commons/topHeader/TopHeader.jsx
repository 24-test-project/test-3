import React from "react";
import SearchTopHeader from "./SearchTopHeader";
import FeedTopHeader from "./FeedTopHeader";
import FollowersTopHeader from "./FollowersTopHeader";
import ProfileTopHeader from "./ProfileTopHeader";
import ProfileEditTopHeader from "./ProfileTopEdit";
import UploadTopHeader from "./UploadTopHeader";

const TopHeader = ({ type }) => {

  switch (type) {
    case "search":
      return <SearchTopHeader/>;

    case "feed":
      return <FeedTopHeader />;

    case "followers":
      return <FollowersTopHeader />;

    case "profile":
      return <ProfileTopHeader />;

    case "upload":
      return <UploadTopHeader />;

    case "profileEdit":
      return <ProfileEditTopHeader />;

    default:
      return null;
  }
};

export default TopHeader;
