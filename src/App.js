import React, { useContext, useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import './App.css';
import ConnectMetaMask from './components/ConnectMetaMask';

const App  = () => {
  return (
    <Box display="flex" flexDirection="column" minH="inherit">
        <ConnectMetaMask />
    </Box>
  );
}

export default App;
