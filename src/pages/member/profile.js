import React from 'react';
import './profile.css';
import { PlaneButton } from '../../components/planeButton';
import { useNavigate } from 'react-router-dom';
import { AvatarImage } from '../../components/imageLoading';

const ProfileComponent = (props) => {
  const userData = props.userData;
  console.log('rebuilding profile component');
  const navigate = useNavigate();

  let handleOnClick = ()=>{
    navigate('../editUser');
  }

  return (
    <div className='profile_Container'>
      <div className='user_profile_avatarDiv' >
        <AvatarImage dId='sideProfileAvatar' id={userData._id} height='100%' width='100%' />
      </div>
      <p className='profile_profileName'>{userData.fullName}</p>
      <div style={{ margin: '10px' }}>
        <PlaneButton onClick={handleOnClick} >Show More</PlaneButton>
      </div>
    </div>
  );
};

export default React.memo(ProfileComponent);

