import React from 'react'
import { useEffect, useState } from 'react';

const WineTrustProfile = (props: any) => {

  const [metamaskaddress, setmetamaskaddress] = useState();

  useEffect(() => {
    setmetamaskaddress(props.value);
  },[props.value])

  return (
    <div className="content">
      <div className="left-pane">
        <div className="header">
          <h1>Profile Settings</h1>
        </div>
        <div className="form">
          <p>* Required Field</p>
          <p>Email Address *</p>
          <input type="email" placeholder="Enter Email Address"></input>
          <p>Wallet Address</p>
          <input type="text" value={metamaskaddress} disabled></input>
        </div>
      </div>
      <div className="right-pane">
        <p>Profile Image</p>
      </div>
    </div>
  )
}

export default WineTrustProfile
