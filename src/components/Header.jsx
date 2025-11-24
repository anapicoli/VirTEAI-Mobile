import React from "react";

import { Navegacao, Menu, Logo } from "./styles";

export default function Header() {

  return(
      <Navegacao>
        <Logo source={require('../assets/images/virteailogo.png')}/>
        <Menu source={require('../assets/images/menu.png')}/>
      </Navegacao>
  )
};