import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
    render() {
        return (
            <div>
                <Profile {...this.props} props={this.props} />
            </div>
        );
    }
 
};

export default ProfileContainer;
