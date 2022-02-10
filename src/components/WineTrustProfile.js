import React, { createContext, useCallback, useEffect, useState, useMemo, ReactNode } from "react";
import { Button } from '@material-ui/core';
import { extendTheme } from '@chakra-ui/react';

const WineTrustProfile = () => {

    return(
        <div className="content">
            <div className="left-pane">
                <div className="header"><h1>Profile Settings</h1></div>
                <div className="form">
                    <p>* Required Field</p>
                    <p>Email Address *</p>
                    <input type="email" placeholder="Enter Email Address"></input>
                    <p>Wallet Address</p>
                    <input type="text" disabled></input>
                </div>
            </div>
            <div className="right-pane">
                <p>Profile Image</p>
                <img src="" alt="Profile Image"></img>
            </div>
        </div>

    );

}

export default WineTrustProfile