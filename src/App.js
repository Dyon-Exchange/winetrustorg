import React, { useContext, useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import './App.css';
import ConnectMetaMask from './components/ConnectMetaMask';
import ProfileSettings from './components/WineTrustProfile';
import SearchProductAsset from './components/SearchProductAsset';

const App  = () => {
  return (
    <Box display="flex" flexDirection="column" minH="inherit">
        <Box>
          <ConnectMetaMask />
          <SearchProductAsset />
        </Box>
    </Box>
    

  );
}

export default App;
