import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';

const UserProfile = () => {
  const { state, userLevel } = useContext(GlobalContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Total Coins Earned: {state.totalCoinsEarned}</p>
      <p>Current Level: {userLevel}</p>
    </div>
  );
};

export default UserProfile;
