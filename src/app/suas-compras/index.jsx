import React from "react";
import { ScrollView } from "react-native";
import { 
    Button,
    HomeImage,
    Logo, 
    Menu, 
    Navegacao, 
    OfertasContainer, 
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
                    <Logo source={require('../../assets/images/virteailogo.png')}/>
                    <Menu source={require('../../assets/images/menu.png')}/>
                </Navegacao>

                <HomeImage source={require('../../assets/images/bagsicon.png')}/>

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
