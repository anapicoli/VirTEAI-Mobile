import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Cadastro from './src/screens/cadastro';
import Login from './src/screens/Login';
import Home from './src/screens/home';
import SobreNos from './src/screens/SobreNos';
import Ofertas from './src/screens/Ofertas';
import Notificacoes from './src/screens/notificacoes';


const ContainerApp = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden/>
      {/* <Cadastro/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <SobreNos/> */}
      {/* <Ofertas/> */}
      <Notificacoes/>
    </ContainerApp>
  );
}