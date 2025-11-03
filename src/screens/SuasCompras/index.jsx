import React from "react";
import { ScrollView } from "react-native";
import { 
    Button,
    Footer, 
    FooterColumn, 
    FooterContact, 
    Footerimg, 
    HomeImage,
    Logo, 
    LogoFooter, 
    Menu, 
    Navegacao, 
    OfertasContainer, 
    TextFooter,
    TextoButton,
    TituloCompras,
} from "./styles";

export default function SuasCompras () {
    return (
        <ScrollView 
            style={{ flex: 1 }} 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <OfertasContainer>
                {/* Topo */}
                <Navegacao>
                    <Logo source={require('../../assets/virteailogo.png')}/>
                    <Menu source={require('../../assets/menu.png')}/>
                </Navegacao>

                <HomeImage source={require('../../assets/bagsicon.png')}/>

                <TituloCompras>Nenhuma Compra Pendente no Momento</TituloCompras>
                <Button>
                    <TextoButton>
                        Comprar Agora
                    </TextoButton>
                </Button>

                {/* Rodapé */}
                <Footer>
                    <FooterColumn>
                        <LogoFooter source={require('../../assets/virteaifooter.png')}/>
                        <TextFooter>Copyright © 2025 VirTEAi ltd.</TextFooter>
                        <TextFooter>All rights reserved</TextFooter>
                    </FooterColumn>
                    <FooterColumn>
                        <TextFooter>Contato</TextFooter>
                        <FooterContact>
                            <Footerimg source={require('../../assets/whatsappicon.png')}/>
                            <TextFooter>+55 (11) 91233-5678</TextFooter>
                        </FooterContact>
                        <FooterContact>
                            <Footerimg source={require('../../assets/emailicon.png')}/>
                            <TextFooter>contato@virteai.com.br</TextFooter>
                        </FooterContact>
                        <FooterContact>
                            <Footerimg source={require('../../assets/instagramicon.png')}/>
                            <TextFooter>@virteai.lab</TextFooter>
                        </FooterContact>
                        <FooterContact>
                            <Footerimg source={require('../../assets/linkedinicon.png')}/>
                            <TextFooter>linkedin.com/company/virteai</TextFooter>
                        </FooterContact>
                    </FooterColumn>
                    <FooterColumn>
                        <TextFooter>Ajuda</TextFooter>
                        <TextFooter>FAQ</TextFooter>
                        <TextFooter>Suporte</TextFooter>
                    </FooterColumn>
                    <FooterColumn>
                        <TextFooter>Termos</TextFooter>
                        <TextFooter>Termos de serviço</TextFooter>
                        <TextFooter>Termos legais</TextFooter>
                        <TextFooter>Política de privacidade</TextFooter>
                    </FooterColumn>
                </Footer>
            </OfertasContainer>
        </ScrollView>
    );
}
