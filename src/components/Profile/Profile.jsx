import React from "react";
import ss from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={ss.content}>
      <div>
        <img src="https://pbs.twimg.com/media/E_NfXvgX0AEN1sc.jpg" alt="" />
      </div>
      <div>
        ava + discription
      </div>
    </div>
    
  );
}

export default Profile;
