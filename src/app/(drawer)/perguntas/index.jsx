import React from "react";
import { ScrollView } from "react-native";

import { 
    CardAreia,
    CardAzul,
    CardCiano,
    CardTextos,
    CardVerde,
    PerguntasFrequentes,
    QuestionImg,
    SubCardAreia,
    SubCards,
    SubPerguntas,
    TituloCards,
    TituloPerguntas,
} from "../../../styles/perguntas";
import Header from "../../../components/header/Header";

export default function Perguntas() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <PerguntasFrequentes>
        <Header/>>
        <TituloPerguntas>Perguntas Frequentes</TituloPerguntas>
        <SubPerguntas>Veja abaixo as respostas de nossas perguntas mais frequentes.</SubPerguntas>
        <CardAreia>
          <QuestionImg source={require('../../../assets/images/questionicon.png')}/>
          <CardTextos>
            <TituloCards>Oque é a VirTEAI</TituloCards>
            <SubCards>A VirTEAi é uma iniciativa que desenvolve óculos de realidade virtual adaptados e personalizados para pessoas com TEA. Promovendo experiências seguras, acessíveis e focadas no bem-estar.</SubCards>
          </CardTextos>
        </CardAreia>
        <CardCiano>
          <QuestionImg source={require('../../../assets/images/questionicon.png')}/>
          <CardTextos>
            <TituloCards>Como os óculos da VirTEAi ajudam pessoas com TEA?</TituloCards>
            <SubCards>Eles permitem vivências controladas em ambientes virtuais que estimulam o aprendizado, a interação e o relaxamento, respeitando os níveis sensoriais de cada pessoa.</SubCards>
          </CardTextos>
        </CardCiano>

        <CardAzul>
          <QuestionImg source={require('../../../assets/images/questionicon.png')}/>
          <CardTextos>
            <TituloCards>Onde posso testar ou adquirir os óculos?</TituloCards>
            <SubCards>Atualmente os testes são feitos em centros de pesquisa e instituições de ensino. Em breve divulgaremos informações sobre o acesso aos dispositivos</SubCards>
          </CardTextos>
        </CardAzul>

        <CardVerde>
          <QuestionImg source={require('../../../assets/images/questionicon.png')}/>
          <CardTextos>
            <TituloCards>A VirTEAi trabalha com instituições ou escolas?</TituloCards>
            <SubCards>Sim! Nós colaboramos com escolas, clínicas e universidades para integrar a tecnologia aos processos terapeuticos, sempre com foco na inclusão.</SubCards>
          </CardTextos>
        </CardVerde>

        <CardAreia>
          <QuestionImg source={require('../../../assets/images/questionicon.png')}/>
          <CardTextos>
            <TituloCards>Como posso entrar em contato com a equipe VirTEAi?</TituloCards>
            <SubCardAreia>Você pode nos enviar um e-mail pelo endereço contato@virteai.com ou acessar a seção “Entre em Contato” em nosso site para conhecer todas as formas de comunicação.</SubCardAreia>
          </CardTextos>
        </CardAreia>
      </PerguntasFrequentes>
    </ScrollView>
  );
}