import { Divider, Heading, HStack, Text, Image } from "@chakra-ui/react";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";

import WineTrustLogoPNG from "./img/WineTrust_Final_favicon_02092021.png";
import ConnectMetaMask from './ConnectMetaMask'

const TopBar = () =>  {
    return (

      <HStack h="50px" spacing="15px">
          <Image alt="Winetrust Logo" src={WineTrustLogoPNG} w="10%" />
          <ConnectMetaMask /> 
      </HStack>
      
    
    );
}

export default TopBar;