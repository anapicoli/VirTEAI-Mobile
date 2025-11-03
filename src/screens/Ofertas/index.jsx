import React from "react";
import { ScrollView } from "react-native";
import { 
    ButtonMensal,
    Apartir,
    BeneficiosPersonalizado,
    ButtonPersonalizados,
    CardBeneficios,
    CardBeneficiosMarrom,
    CardContainer,
    CardContainerMarrom,
    CardMensal,
    CardPersonalizado,
    Check,
    ContainerBeneficios,
    ContainerBeneficiosPersonalizados,
    ContainerPreco,
    Descricao,
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
    Paragrafo, 
    Preco, 
    Precos, 
    TextFooter,
    TextoButton,
    TextoButtonMarrom,
    TituloMensal,
    TituloOfertas,
    Titulopersonalizado,
    TextButton,

} from "./styles";

export default function Ofertas() {
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

                <HomeImage source={require('../../assets/ofertasimagem.png')}/>

                <TituloOfertas>Escolha o Seu Plano Ideal:</TituloOfertas>
                <Paragrafo>
                    A VirTEAi oferece planos acessiveis e inclusivos para todos os perfis.
                </Paragrafo>
                <Paragrafo>Veja abaxo o que cada plano oferece:</Paragrafo>

                <CardMensal>
                    <CardContainer>
                        <TituloMensal>Plano Mensal</TituloMensal>
                    </CardContainer>
                    <Descricao>Óculos VR adaptado por assinatura</Descricao>
                    <CardBeneficios>
                        <ContainerBeneficios>
                        <Check source={require('../../assets/check.png')}/>
                        <BeneficiosPersonalizado>1 óculos VR adaptado por mês</BeneficiosPersonalizado>
                        </ContainerBeneficios>
                        <ContainerBeneficios>
                            <Check source={require('../../assets/check.png')}/>
                            <BeneficiosPersonalizado>Troca mensal de modelo</BeneficiosPersonalizado>
                        </ContainerBeneficios>
                        <ContainerBeneficios>
                            <Check source={require('../../assets/check.png')}/>
                            <BeneficiosPersonalizado>Manutenção inclusa</BeneficiosPersonalizado>
                        </ContainerBeneficios>
                        <ContainerBeneficios>
                            <Check source={require('../../assets/check.png')}/>
                            <BeneficiosPersonalizado>Conteúdos exclusivos</BeneficiosPersonalizado>
                        </ContainerBeneficios>
                        <ContainerBeneficios>
                            <Check source={require('../../assets/check.png')}/>
                            <BeneficiosPersonalizado>Cancelamento fácil</BeneficiosPersonalizado>
                        </ContainerBeneficios>
                    </CardBeneficios>

                    <Preco>R$49,90/mês</Preco>

                    <ButtonMensal>
                        <TextButton>saiba mais</TextButton>
                    </ButtonMensal>
                </CardMensal>


                {/* */}
                <CardPersonalizado>
                    <CardContainerMarrom>
                        <Titulopersonalizado>Plano Personalizado</Titulopersonalizado>
                    </CardContainerMarrom>
                    <Descricao>Óculos VR adaptado por assinatura</Descricao>
                    <CardBeneficiosMarrom>
                        <ContainerBeneficiosPersonalizados>
                        <Check source={require('../../assets/check.png')}/>
                        <BeneficiosPersonalizado>Escolha de cor e material</BeneficiosPersonalizado>
                        </ContainerBeneficiosPersonalizados>
                        <ContainerBeneficiosPersonalizados>
                            <Check source={require('../../assets/check.png')}/>
                            <BeneficiosPersonalizado>Filtros sensoriais adicionais</BeneficiosPersonalizado>
                        </ContainerBeneficiosPersonalizados>
                        <ContainerBeneficiosPersonalizados>
                            <Check source={require('../../assets/check.png')}/>
                            <BeneficiosPersonalizado>Ajustes anatômicos</BeneficiosPersonalizado>
                        </ContainerBeneficiosPersonalizados>
                        <ContainerBeneficiosPersonalizados>
                            <Check source={require('../../assets/check.png')}/>
                            <BeneficiosPersonalizado>Garantia de 12 meses</BeneficiosPersonalizado>
                        </ContainerBeneficiosPersonalizados>
                      
                    </CardBeneficiosMarrom>

                   <ContainerPreco>
                    <Apartir>A partir de</Apartir>
                     <Precos>R$450,00</Precos>
                   </ContainerPreco>

                    <ButtonPersonalizados>
                        <TextButton>saiba mais</TextButton>
                    </ButtonPersonalizados>
                </CardPersonalizado>
                
            </OfertasContainer>
        </ScrollView>
    );
}
