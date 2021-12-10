import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ss from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if(!props.profile) {
  //if (props.profile == null || props.profile === undefined) 
    return <Preloader />
  }

  return (
    <div>
      {/*<div>*/}
      {/*  <img src='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' />*/}
      {/*</div>*/}
      <div className={ss.descriptionBlock}>
        <img src={props.profile.photos.large} alt='' />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
