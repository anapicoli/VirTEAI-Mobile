
import { 
    AcessoConta,
    AcessoText,
    AcessoView,
    ContainerAcesso,
    ContainerContinuar,
    ContinuarText,
    Logo, 
    Menu, 
    Navegacao, 
    Perfil, 
    TelaFundo, 
    Termos, 
    Textinho, 
} from "./styles";

export default function SuaConta () {
    return (
        <AcessoConta>
                        {/* Topo */}
            <Navegacao>
                <Logo source={require('../../assets/images/virteailogo.png')}/>
                <Menu source={require('../../assets/images/menu.png')}/>
                </Navegacao>
                       
                <TelaFundo source={require('../../assets/images/technologybackground.png')}>
                <AcessoView>
                    <AcessoText>Acesse Sua Conta!</AcessoText>
                </AcessoView>
                <ContainerAcesso>
                <Perfil source={require('../../assets/images/perfilicon.png')}/>
                <ContainerContinuar>
                    <ContinuarText>Continuar</ContinuarText>
                </ContainerContinuar>
                <Textinho>Ao continuar você concorda com nossos</Textinho>
                <Termos>Termos de Uso</Termos>
                </ContainerAcesso>
                </TelaFundo>
        </AcessoConta>
            );
        }
