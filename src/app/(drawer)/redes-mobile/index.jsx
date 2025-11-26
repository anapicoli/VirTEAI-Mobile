import React from "react";
import { 
    CardSocialMidia,
    ContainerSocialMidia,
    LogoRedes,
    RedesMobile,
    SubSocialMidia,
    TextoSocialMidia,
    TituloSocialMidia, 

} from "../../../styles/redesmobile";
import Header from "../../../components/header/Header";

export default function RedesSociais() {
    return (
        <RedesMobile>
          <Header/>
            <TituloSocialMidia>Nossas redes sociais</TituloSocialMidia>
            <SubSocialMidia>Acompanhe nossos projetos e novidades!</SubSocialMidia>
            <ContainerSocialMidia>
                <CardSocialMidia>
                <LogoRedes source={require('../../../assets/images/instagramiconwhite.png')}/>
                <TextoSocialMidia>Instagram</TextoSocialMidia>

                </CardSocialMidia>
                <CardSocialMidia>
                <LogoRedes source={require('../../../assets/images/linkedinwhite.png')}/>
                <TextoSocialMidia>LinkedIn</TextoSocialMidia>
                </CardSocialMidia>

            </ContainerSocialMidia>
        </RedesMobile>
    );
}