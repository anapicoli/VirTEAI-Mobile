import React from "react";
import { ScrollView } from "react-native";
import {
  ImagemNotificacao,
  NotificacoesContainer,
  NotificacoesView,
  NotificacoesViewGrey,
  TextoImagem,
  TextoMaior,
  TextoMenor,
  TituloNotificacoes,
  NotificacoesHeader
} from "../../../styles/notificacoes";
import Header from "../../../components/header/Header";

export default function Notificacoes () {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <NotificacoesContainer>
        <Header/>
        <NotificacoesHeader>
          <TituloNotificacoes>Notificações</TituloNotificacoes>
        </NotificacoesHeader>

        <NotificacoesView>
          <TextoImagem>
            <TextoMaior>Novo recurso disponível!:</TextoMaior>
            <ImagemNotificacao source={require('../../../assets/images/iconeengrenagem.png')}/>
          </TextoImagem>
          <TextoMenor>Ajuste de intensidade visual e sonora.</TextoMenor>
        </NotificacoesView>

        <NotificacoesView>
          <TextoImagem>
            <TextoMenor>Seu formulário de avaliação foi atualizado!</TextoMenor>
            <ImagemNotificacao source={require('../../../assets/images/profissionais.png')}/>
          </TextoImagem>
          <TextoMaior>Acompanhe!</TextoMaior>

        </NotificacoesView>

        <NotificacoesViewGrey>
          <TextoImagem>
            <TextoMenor>Atualizamos a interface para melhorar a acessibilidade</TextoMenor>
            <ImagemNotificacao source={require('../../../assets/images/iconeengrenagem.png')}/>
          </TextoImagem>
          <TextoMaior></TextoMaior>
        </NotificacoesViewGrey>

        <NotificacoesViewGrey>
          <TextoImagem>
            <TextoMenor>Temos novas opções de personalização disponíveis!</TextoMenor>
            <ImagemNotificacao source={require('../../../assets/images/cerebro.png')}/>
          </TextoImagem>
          <TextoMaior>Acompanhe!</TextoMaior>
        </NotificacoesViewGrey>

        <NotificacoesViewGrey>
          <TextoImagem>
            <TextoMenor>Hora de fazer uma pausa ⏱️</TextoMenor>
            <ImagemNotificacao source={require('../../../assets/images/calendario.png')}/>
          </TextoImagem>
          <TextoMaior></TextoMaior>
        </NotificacoesViewGrey>

        <NotificacoesView>
          <TextoImagem>
            <TextoMenor>Você sabia que pode ajustar o tempo de uso na sua conta?</TextoMenor>
            <ImagemNotificacao source={require('../../../assets/images/cerebro.png')}/>
          </TextoImagem>
          <TextoMaior></TextoMaior>
        </NotificacoesView>

      </NotificacoesContainer>
    </ScrollView>
  );
}
