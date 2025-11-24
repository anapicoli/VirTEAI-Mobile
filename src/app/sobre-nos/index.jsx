import React from "react";
import { ScrollView } from "react-native";
import { 
    CardSac,
    ContainerContato,
    ContainerHomens,
    ContainerMissao,
    ContainerMulheres,
    ContainerNossoTime,
    ContainerPerfil,
    ContatoTitulo,
    HomeImage,
    InfoSac,
    Logo, 
    Menu, 
    Navegacao, 
    ParagrafoMissao, 
    Paragrafos, 
    ParagrafoTime, 
    PerfilCreators, 
    PerfilTexto, 
    RotuloSac, 
    SaqImages, 
    SobreNosContainer, 
    TextosSac,
    TituloSobrenos, 
} from "./styles";

export default function SobreNos() {
    return (
        <ScrollView 
            style={{ flex: 1 }} 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <SobreNosContainer>
                {/* Topo */}
                <Navegacao>
                    <Logo source={require('../../assets/images/virteailogo.png')}/>
                    <Menu source={require('../../assets/images/menu.png')}/>
                </Navegacao>

                <HomeImage source={require('../../assets/images/timefoto.png')}/>

                <TituloSobrenos>Sobre nós</TituloSobrenos>
                <Paragrafos>
                    A VirTEAI nasceu em 2025 com um propósito claro: tornar a tecnologia
                    mais humana, sensível e acessível para pessoas com Transtorno do 
                    Espectro Autista (TEA). Nossa empresa surgiu da união entre estudantes
                    apaixonados por inovação, inclusão e transformação social. 
                    Acreditamos que a tecnologia deve ser feita para todos — respeitando 
                    as diferentes formas de perceber, sentir e interagir com o mundo.
                </Paragrafos>

                <ContainerMissao>
                    <TituloSobrenos>Nossa Missão</TituloSobrenos>
                    <ParagrafoMissao>
                        Nosso principal objetivo é oferecer óculos de realidade virtual 
                        acessíveis, seguros e personalizados para pessoas com TEA, 
                        independentemente da idade ou do nível de suporte necessário. 
                        Identificamos uma lacuna no mercado: a maioria dos dispositivos 
                        tecnológicos não considera as particularidades sensoriais e cognitivas
                        das pessoas neurodivergentes.
                    </ParagrafoMissao>
                    <ParagrafoMissao> 
                        A VirTEAI veio para mudar isso.
                    </ParagrafoMissao>
                    <ParagrafoMissao>
                        Desenvolvemos produtos com design adaptado, funcionalidades pensadas para o 
                        conforto e a autonomia do usuário, e personalização que respeita as 
                        necessidades individuais de cada pessoa.
                    </ParagrafoMissao>    
                    <ParagrafoMissao>
                        O que nos diferencia é a escuta ativa, a empatia e o compromisso com a 
                        inclusão verdadeira. Não criamos uma solução genérica — criamos uma 
                        experiência personalizada. Nossos óculos são mais do que tecnologia: 
                        são ferramentas de conexão, aprendizagem e bem-estar
                    </ParagrafoMissao>
                    
                    </ContainerMissao> 

                    <ContainerNossoTime>
                        <TituloSobrenos>Nosso Time</TituloSobrenos>
                        <ParagrafoTime>
                            A força da VirTEAI está na colaboração. Nosso time multidisciplinar
                            reúne talentos de diferentes áreas, comprometidos com a acessibilidade e a inovação social:
                        </ParagrafoTime>   
                        <ContainerMulheres>
                            <ContainerPerfil>
                            <PerfilCreators source={require('../../assets/images/Lyvia.png')}/>
                            <PerfilTexto>
                                Desenvolvedora de código e escrita
                            </PerfilTexto>
                            </ContainerPerfil>
                            <ContainerPerfil>
                                <PerfilCreators source={require('../../assets/images/ana.png')}/>
                                <PerfilTexto>
                                    Designer
                                </PerfilTexto>
                            </ContainerPerfil>
                            <ContainerPerfil>
                                <PerfilCreators source={require('../../assets/images/ester.png')}/>
                                <PerfilTexto>
                                    Desenvolvedora de banco de dados
                                </PerfilTexto>
                            </ContainerPerfil>
                        </ContainerMulheres>

                        <ContainerHomens>
                            <ContainerPerfil>
                                <PerfilCreators source={require('../../assets/images/valdir.png')}/>
                                <PerfilTexto>
                                    Marketing
                                </PerfilTexto>
                            </ContainerPerfil>
                            <ContainerPerfil>
                                <PerfilCreators source={require('../../assets/images/yuri.png')}/>
                                <PerfilTexto>
                                    Desenvolvedor de inteligencia artificial
                                </PerfilTexto>
                            </ContainerPerfil>
                        </ContainerHomens>
                    </ContainerNossoTime>

                    <ContainerContato>
                        <ContatoTitulo>Entre em contato</ContatoTitulo>
                        <CardSac>
                            <SaqImages source={require('../../assets/images/emailiconsac.png')}/>
                            <TextosSac>
                                <RotuloSac>Email</RotuloSac>
                                <InfoSac>Envie dúvidas, sugestões ou propostas</InfoSac>
                            </TextosSac>
                        </CardSac>
                        <CardSac>
                            <SaqImages source={require('../../assets/images/socialmediaicon.png')}/>
                                <TextosSac>
                                <RotuloSac>Redes sociais</RotuloSac>
                                <InfoSac>Nos acompanhe nas redes sociais!</InfoSac>
                                </TextosSac>
                        </CardSac>
                        <CardSac>
                            <SaqImages source={require('../../assets/images/faqicon.png')}/>
                                <TextosSac>
                                    <RotuloSac>FAQ</RotuloSac>
                                    <InfoSac>Dúvidas frequentes</InfoSac>
                                </TextosSac>
                        </CardSac>
                    </ContainerContato>

                        
                
            </SobreNosContainer>
        </ScrollView>
    );
}
