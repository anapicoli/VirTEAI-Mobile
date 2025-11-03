import React from "react";
import { ScrollView } from "react-native";
import { 
    Footer, 
    FooterColumn, 
    FooterContact, 
    Footerimg, 
    ImagemNotificacao,
    Logo, 
    LogoFooter, 
    Menu, 
    Navegacao, 
    NotificacoesContainer, 
    NotificacoesView, 
    NotificacoesViewGrey, 
    TextFooter,
    TextoImagem,
    TextoMaior,
    TextoMenor,
    TituloNotificacoes,
    Voltar,
} from "./styles";

export default function Notificacoes () {
    return (
        <ScrollView 
            style={{ flex: 1 }} 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <NotificacoesContainer>
                {/* Topo */}
                <Navegacao>
                    <Logo source={require('../../assets/virteailogo.png')}/>
                    <Menu source={require('../../assets/menu.png')}/>
                </Navegacao>

                <Notificacoes>
                    <TituloNotificacoes>Notificações</TituloNotificacoes>
                    <Voltar source={require('../../assets/voltarmobile.png')}/>
                </Notificacoes>

                <NotificacoesView>
                    <TextoImagem>
                        <TextoMaior>Novo recurso disponível!:</TextoMaior>
                        <ImagemNotificacao source={require('../../assets/iconeengrenagem.png')}/>
                    </TextoImagem>
                    <TextoMenor>Ajuste de intensidade visual e sonora.</TextoMenor>
                </NotificacoesView>
                <NotificacoesView>
                    <TextoImagem>
                        <TextoMenor>Seu formulário de avaliação foi atualizado!</TextoMenor>
                        <ImagemNotificacao source={require('../../assets/profissionais.png')}/>
                    </TextoImagem>
                    <TextoMaior>Acompanhe!</TextoMaior>
                </NotificacoesView>
                <NotificacoesViewGrey>
                    <TextoImagem>
                        <TextoMenor>Atualizamos a interface para melhorar a acessibilidade</TextoMenor>
                        <ImagemNotificacao source={require('../../assets/iconeengrenagem.png')}/>
                    </TextoImagem>
                    <TextoMaior></TextoMaior>
                </NotificacoesViewGrey>
                <NotificacoesViewGrey>
                    <TextoImagem>
                        <TextoMenor>Temos novas opções de personalização disponíveis!</TextoMenor>
                        <ImagemNotificacao source={require('../../assets/cerebro.png')}/>
                    </TextoImagem>
                        <TextoMaior>Acompanhe!</TextoMaior>
                </NotificacoesViewGrey>
                <NotificacoesViewGrey>
                    <TextoImagem>
                        <TextoMenor>Hora de fazer uma pausa ⏱️</TextoMenor>
                        <ImagemNotificacao source={require('../../assets/calendario.png')}/>
                    </TextoImagem>
                    <TextoMaior></TextoMaior>
                </NotificacoesViewGrey>
                <NotificacoesView>
                    <TextoImagem>
                        <TextoMenor>Você sabia que pode ajustar o tempo de uso na sua conta?</TextoMenor>
                        <ImagemNotificacao source={require('../../assets/cerebro.png')}/>
                    </TextoImagem>
                    
                </NotificacoesView>

                 
            </NotificacoesContainer>
        </ScrollView>
    );
}
