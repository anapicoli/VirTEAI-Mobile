import React from "react";
import { 
    CardSocialMidia,
    ContainerSocialMidia,
    Logo,
    LogoRedes,
    Menu,
    Navegacao,
    RedesMobile,
    SubSocialMidia,
    TextoSocialMidia,
    TituloSocialMidia, 

} from "./styles";

export default function RedesSociais() {
    return (
        <RedesMobile>
            <Navegacao>
                <Logo source={require('../../assets/images/virteailogo.png')}/>
                <Menu source={require('../../assets/images/voltarmobile.png')}/>
            </Navegacao>
            <TituloSocialMidia>Nossas redes sociais</TituloSocialMidia>
            <SubSocialMidia>Acompanhe nossos projetos e novidades!</SubSocialMidia>
            <ContainerSocialMidia>
                <CardSocialMidia>
                <LogoRedes source={require('../../assets/images/instagramiconwhite.png')}/>
                <TextoSocialMidia>Instagram</TextoSocialMidia>

                </CardSocialMidia>
                <CardSocialMidia>
                <LogoRedes source={require('../../assets/images/linkedinwhite.png')}/>
                <TextoSocialMidia>LinkedIn</TextoSocialMidia>
                </CardSocialMidia>

            </ContainerSocialMidia>
        </RedesMobile>
    );
}