const perguntas = [
    {
      categoria: 'ciễncias',
      pergunta: 'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue? ?',
      resposta: 'Entre 4 a 6 litros. São retirados 450 mililitros..'
    },
    {
      categoria: 'Biologia',
      pergunta: ' Pares de genes, com segregação independente podem agir, conjuntamente, na determinação de uma mesma característica fenotípica. Este fenômeno é conhecido como:?',
      resposta: 'interação gênica.'
    },
    {
      categoria: 'Educação Física',
      pergunta: ' A partida de futebol será jogada por duas equipes, formadas, cada uma, no máximo?',
      resposta: 'por 10 jogadores e um goleiro'
    },
    {
      categoria: 'historia',
      pergunta: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
      resposta: 'João Goulart.'
    },
    {
      categoria: 'ingles',
      pergunta: 'O que a palavra legend significa em português?',
      resposta: 'Lenda.'
    },
    {
      categoria: 'portugues',
      pergunta: 'Como é a conjugação do verbo caber na 1.ª pessoa do singular do presente do indicativo?',
      resposta: 'eu caibo'
    }
  ];
  
  perguntas.forEach(({ categoria, pergunta, resposta }) => criaCartao(categoria, pergunta, resposta));