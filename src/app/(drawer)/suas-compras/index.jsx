import React from "react";
import { ScrollView } from "react-native";
import {
  Button,
  HomeImage,
  OfertasContainer,
  TextoButton,
  TituloCompras,
} from "../../../styles/suascompras";
import Header from "../../../components/header/Header";

export default function SuasCompras () {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <OfertasContainer>
        <Header/>
        <HomeImage source={require('../../../assets/images/bagsicon.png')}/>
        <TituloCompras>Nenhuma Compra Pendente no Momento</TituloCompras>
        <Button>
          <TextoButton>
            Comprar Agora
          </TextoButton>
        </Button>
      </OfertasContainer>
    </ScrollView>
  );
}
