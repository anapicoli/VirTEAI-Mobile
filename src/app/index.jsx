import React from "react";
import { ScrollView } from "react-native";
import { 
    CadastroContainer, 
    CardEmpresa, 
    CardRelatoCliente, 
    CardTextoClientes, 
    CardTextosRelatos, 
    ContainerEmpresa, 
    DescricaoEmpresas, 
    EmpresaImage, 
    EmpresasParceiras,
    HomeImage, 
    ImageRelatos,
    RelatosHome,
    SectionEmpresas,
    TextoClientes, 
    TextoRelatos 
} from "./styles";
import Header from "../components/Header";

export default function Home() {
    return (
        <ScrollView 
            style={{ flex: 1 }} 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <CadastroContainer>
                {/* Topo */}

                <Header/>

                <HomeImage source={require('../assets/images/Personalizado.png')}/>

                {/* Relatos */}
                <RelatosHome>Relatos</RelatosHome>
                <TextoRelatos>
                    Alguns de nossos clientes relataram suas experiências com nossos produtos.
                </TextoRelatos>
                <TextoRelatos>Dê uma olhada:</TextoRelatos>

                {/* Carrossel de relatos */}
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToAlignment="center"
                    decelerationRate="fast"
                    contentContainerStyle={{ 
                        paddingHorizontal: 20, 
                        gap: 20
                    }}
                >
                    <CardRelatoCliente>
                        <ImageRelatos source={require('../assets/images/MarianaS.png')}/>
                        <CardTextosRelatos>
                            <TextoClientes>
                                Mariana S. - Mãe do Lucas (7 anos, TEA nível 2)
                            </TextoClientes>
                            <CardTextoClientes>
                                Meu filho sempre teve dificuldades com lugares novos
                                e interações sociais. Com os óculos personalizados 
                                conseguimos criar simulações controladas que ajudaram 
                                ele a se sentir mais seguro antes de sair para ambientes 
                                diferentes. Ele adora os momentos de imersão e até melhorou 
                                na escola! Foi uma das melhores decisões que tomamos.
                            </CardTextoClientes>
                        </CardTextosRelatos>
                    </CardRelatoCliente>

                    <CardRelatoCliente>
                        <ImageRelatos source={require('../assets/images/RafaelM.png')}/>
                        <CardTextosRelatos>
                            <TextoClientes>Rafael M. - Psicólogo infantil</TextoClientes>
                            <CardTextoClientes>
                                Trabalho com crianças no espectro autista e sempre busco ferramentas
                                que possam ajudá-las no desenvolvimento das habilidades sociais e 
                                emocionais. Esses óculos são incríveis porque permitem personalizar
                                estímulos e tornar a terapia mais envolvente. Meus pacientes adoram 
                                e vejo resultados positivos no dia a dia!
                            </CardTextoClientes>
                        </CardTextosRelatos>
                    </CardRelatoCliente>

                    <CardRelatoCliente>
                        <ImageRelatos source={require('../assets/images/BeatrizL.png')}/>
                        <CardTextosRelatos>
                            <TextoClientes>Beatriz L. - Estudante Universitária (21 anos, TEA nível 1)</TextoClientes>
                            <CardTextoClientes>
                                Sempre tive dificuldades com ambientes muito barulhentos e imprevisíveis.
                                Os óculos me ajudam a treinar situações do dia a dia antes de enfrentá-las
                                na realidade. Além disso, os filtros de luz me permitem estudar por mais 
                                tempo sem sentir tanto desconforto sensorial. Recomendo para qualquer pessoa 
                                que busca mais autonomia!
                            </CardTextoClientes>
                        </CardTextosRelatos>
                    </CardRelatoCliente>

                    <CardRelatoCliente>
                        <ImageRelatos source={require('../assets/images/CarlosF.png')}/>
                        <CardTextosRelatos>
                            <TextoClientes>Carlos F. - Pai do Henrique (12 anos, TEA nível 3)</TextoClientes>
                            <CardTextoClientes>
                                O Henrique tem dificuldades para lidar com mudanças na rotina e se sente facilmente
                                sobrecarregado. Com os óculos de realidade virtual personalizados, conseguimos criar
                                um ambiente seguro onde ele pode explorar novos desafios de forma gradual. 
                                Isso tem feito uma diferença enorme na nossa vida!
                            </CardTextoClientes>
                        </CardTextosRelatos>
                    </CardRelatoCliente>

                    <CardRelatoCliente>
                        <ImageRelatos source={require('../assets/images/JulioC.png')}/>
                        <CardTextosRelatos>
                            <TextoClientes>Julio C. - Programador (Ansiedade social e TEA nível 1)</TextoClientes>
                            <CardTextoClientes>
                                Sempre tive dificuldade em interações sociais e ambientes desconhecidos
                                me deixavam muito ansioso. Com os óculos personalizados, consegui treinar
                                situações como entrevistas de emprego e apresentações em público sem o medo de errar. 
                                Isso me deu mais confiança para encarar o mundo real no meu próprio ritmo. Foi um
                                divisor de águas para mim!
                            </CardTextoClientes>
                        </CardTextosRelatos>
                    </CardRelatoCliente>
                </ScrollView>

                {/* Empresas parceiras */}
                <SectionEmpresas>
                    <EmpresasParceiras>Empresas Parceiras</EmpresasParceiras>
                    <ContainerEmpresa>
                        <CardEmpresa>
                            <EmpresaImage source={require('../assets/images/aacdlogo.png')}/>
                            <DescricaoEmpresas>Associação de assistência à criança deficiente</DescricaoEmpresas>
                        </CardEmpresa>
                        <CardEmpresa>
                            <EmpresaImage source={require('../assets/images/ama.png')}/>
                            <DescricaoEmpresas>Associação de amigos do autista</DescricaoEmpresas>
                        </CardEmpresa>
                        <CardEmpresa>
                            <EmpresaImage source={require('../assets/images/ijc.png')}/>
                            <DescricaoEmpresas>Instituição Jô Clemente</DescricaoEmpresas>
                        </CardEmpresa>
                        <CardEmpresa>
                            <EmpresaImage source={require('../assets/images/lemda.png')}/>
                            <DescricaoEmpresas>Lar Mãe do Divino Amor</DescricaoEmpresas>
                        </CardEmpresa>
                    </ContainerEmpresa>
                </SectionEmpresas>

                
            </CadastroContainer>
        </ScrollView>
    );
}
