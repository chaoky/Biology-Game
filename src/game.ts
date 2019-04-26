import {
  Mutation,
  Module,
  VuexModule,
  getModule
} from "vuex-module-decorators";

import store from "./store";

interface Place {
  event: string;
  top: string;
  left: string;
}

interface Card {
  color: string;
  question: string;
  options: Array<string | boolean>;
  answer: string | boolean;
  prize: number;
}

@Module({ dynamic: true, name: "game", namespaced: true, store })
class Board extends VuexModule {
  places: Array<Place> = [
    {
      event: "win",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "20%"
    },
    {
      event: "green",
      top: "86%",
      left: "36%"
    },
    {
      event: "yellow",
      top: "86%",
      left: "53%"
    },
    {
      event: "omega green",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "green",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "omega yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "green",
      top: "86%",
      left: "4%"
    },
    {
      event: "yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "omega yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "green",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    },
    {
      event: "yellow",
      top: "86%",
      left: "4%"
    },
    {
      event: "omega green",
      top: "86%",
      left: "4%"
    },
    {
      event: "red",
      top: "86%",
      left: "4%"
    }
  ];
  cards: Array<Card> = [
    {
      color: "red",
      question:
        "-A glicolise é a primeira via metabólica da glicose e apresenta dez reações quimicas. Esse importante processo ocorre no interior da célula, mais precisamente:",
      options: ["Mitocôndria", "Citosol", "Núcleo"],
      answer: "Citosol",
      prize: 1
    },
    {
      color: "red",
      question: "-O processo de respiração celular é responsável pelo?",
      options: [
        "Consumo de dióxido de carbono e liberação de oxigênio para as células",
        "Síntese de molecular orgânicas ricas em energia",
        "Liberação de energia para as funções vitais celulares"
      ],
      answer: "Liberação de energia para as funções vitais celulares",
      prize: 1
    },
    {
      color: "red",
      question:
        "A terceira reação da fase de pagamento da glicólise é catalisada por qual enzima?",
      options: [
        "Fosfogliceromutase",
        "Piravato-quinase",
        "Fosfoglicerato-quinase"
      ],
      answer: "Fosfogliceromutase",
      prize: 1
    },
    {
      color: "red",
      question:
        "Após duas voltas no ciclo do ácido cítrico, observa-se que os carbonos derivados da glicose são oxidados e liberados como moléculas de:",
      options: ["O2", "H2O", "CO2"],
      answer: "CO2",
      prize: 1
    },
    {
      color: "red",
      question:
        "Na glicose a segunda reação da fase preparatória é glisolise-6-fosfato é isomerizada na qual gera?",
      options: [
        "Frutose-6-fosfato",
        "Frutose-1,6-bifosfato",
        "3-fosfoglicerato"
      ],
      answer: "Frutose-6-fosfato",
      prize: 1
    },
    {
      color: "red",
      question:
        "Qual das alternativas é um ponto de controle da via glicolítica?",
      options: ["Hexquinase", "Fosfotrutoquinastase", "Piruvato-neostase"],
      answer: "Hexquinase",
      prize: 1
    },
    {
      color: "red",
      question:
        "A glicólise é uma via metabólica que tem por objetivo oxidar a glicose a fim de conseguir ATP. Nesse processo, a glicose é convertida em duas moléculas de:",
      options: ["Aminoácidos", "Piruvato", "Oxilacetato"],
      answer: "Piruvato",
      prize: 1
    },
    {
      color: "red",
      question:
        "No ciclo de Krebs, observa-se por ciclo a produção de quantas moléculas de ATP?",
      options: ["1", "2", "3"],
      answer: "1",
      prize: 1
    },
    {
      color: "red",
      question:
        "O ciclo de Krebs é uma das etapas de um importante processo que ocorre no organismo de certo seres vivos. Esse processo, que está relacionado com a produção de energia para a célula, é chamado de:",
      options: ["Fotossíntese", "Fermentação alcoólica", "Respiração celular"],
      answer: "Respiração celular",
      prize: 1
    },
    {
      color: "red",
      question:
        "A glicólise é um importante processo que ocorre no interior da célula em que uma molécula de glicose é quebrada:",
      options: [
        "Em uma molécula de ácido pirúvico",
        "Em duas moléculas de ácido pirúvico",
        "Em três moléculas de ácido pirúvico"
      ],
      answer: "Em duas moléculas de ácido pirúvico",
      prize: 1
    },
    {
      color: "red",
      question: "Quantos carbonos tem a molécula de glicose?",
      options: ["12", "6", "3"],
      answer: "6",
      prize: 1
    },
    {
      color: "red",
      question: "Qual é o saldo final de ATP no processo de glicólise?",
      options: ["2", "1", "6"],
      answer: "2",
      prize: 1
    },
    {
      color: "red",
      question: "A glicólise é dividida em quantas fases?",
      options: ["2", "4", "3"],
      answer: "2",
      prize: 1
    },
    {
      color: "red",
      question:
        "É correto afirmar que a glicólise é o processo responsável pela quebra da glicose, transformando-a em piruvato ou ácido pirúvico?",
      options: ["Sim", "Não"],
      answer: "Sim",
      prize: 1
    },
    {
      color: "red",
      question:
        "Na glicólise, para cada molécula de glicose que se converte em ácido pirúvico, a célula utiliza:",
      options: [
        "Uma molécula de ATP e forma dois",
        "Duas molécula de ATP e forma dois",
        "Duas molécula de ATP e forma quatro"
      ],
      answer: "Duas molécula de ATP e forma quatro",
      prize: 1
    },
    {
      color: "red",
      question: "Existem quantos pontos de controle no ciclo do ácido cítrico?",
      options: ["3", "4", "5"],
      answer: "3",
      prize: 1
    },
    {
      color: "red",
      question:
        "Fornecem energia e são intermediários do ciclo, estamos falando do?",
      options: [
        "Ciclo do ácido cítrico do catabolismo",
        "Ciclo do ácido cítrico no anabolismo",
        "Cadeia transportadora de elétrons"
      ],
      answer: "Ciclo do ácido cítrico do catabolismo",
      prize: 1
    },
    {
      color: "red",
      question: "Onde ocorre a glicólise?",
      options: ["Matriz mitocondrial", "Citosol das células", "Núcleo celular"],
      answer: "Citosol das células",
      prize: 1
    },
    {
      color: "red",
      question: "Qual reação que torna o açúcar comprometido com a glicólise?",
      options: [
        "Quinta reação da fase preparatória",
        "Terceira reação da fase preparatória",
        "Segunda reação da fase preparatória"
      ],
      answer: "Terceira reação da fase preparatória",
      prize: 1
    },
    {
      color: "red",
      question: "O ciclo do ácido cítrico possui:",
      options: [
        "5 reações, apenas 3 na matriz mitocondrial",
        "10 reações, apenas 1 na matriz mitocondrial",
        "8 reações, apenas 2 na matriz mitocondrial"
      ],
      answer: "8 reações, apenas 2 na matriz mitocondrial",
      prize: 1
    },
    {
      color: "red",
      question: "Qual a alternativa correta?",
      options: [
        "O ciclo de Krebs ocorre no exterior do complexo golgiense",
        "O ciclo de Krebs envolve diversas reações químicas que garantem a oxidação completa da glicólise",
        "O ciclo de Krebs inicia-se com a reação entre acetil-CoA e ácido oxalacético"
      ],
      answer:
        "O ciclo de Krebs inicia-se com a reação entre acetil-CoA e ácido oxalacético",
      prize: 1
    },
    {
      color: "red",
      question: "Com relação à respiração celular, é correto afirmar que:",
      options: [
        "Consiste nas trocas gasosas entre o ar dos pulmões e o sangue",
        "Não ocorre nas plantas durante o dia já que nesse período elas realizam fotossíntese",
        "Ocorre nas três etapas principais: glicólise, ciclo de Krebs e cadeia transportadora de elétrons"
      ],
      answer:
        "Ocorre nas três etapas principais: glicólise, ciclo de Krebs e cadeia transportadora de elétrons",
      prize: 1
    },
    {
      color: "yellow",
      question:
        "O complexo da piruvato-desidrogenase não é inibido por ATP e NADH.",
      options: ["Verdadeiro", "Falso"],
      answer: "Falso",
      prize: 1
    },
    {
      color: "yellow",
      question:
        "No ciclo do ácido cítrico o citrato é isomerizado em policitrato.",
      options: ["Verdadeiro", "Falso"],
      answer: "Falso",
      prize: 1
    },
    {
      color: "yellow",
      question:
        "A glicólise tem um saldo líquido de 4 ATP, mas se acoplada a outras vias pode chegar a 100. ",
      options: ["Verdadeiro", "Falso"],
      answer: "Falso",
      prize: 1
    },
    {
      color: "yellow",
      question:
        "Na etapa preparatória que existe fora do ciclo do ácido cítrico acontece a conversão de piruvato a citrato.",
      options: ["Verdadeiro", "Falso"],
      answer: "Falso",
      prize: 1
    },
    {
      color: "yellow",
      question: "Existem 5 pontos de controle no cíclo do ácido cítrico.",
      options: ["Verdadeiro", "Falso"],
      answer: "Falso",
      prize: 1
    },
    {
      color: "yellow",
      question: "Glicose é armazenada como amido e glicogênio.",
      options: ["Verdadeiro", "Falso"],
      answer: "Verdadeiro",
      prize: 1
    },
    {
      color: "yellow",
      question:
        "Na via glicolítica a molécula de glicose (6C) é degradada por uma sequência de 10 reações e 2 moléculas de piruvato (3C).",
      options: ["Verdadeiro", "Falso"],
      answer: "Verdadeiro",
      prize: 1
    },
    {
      color: "yellow",
      question:
        "No ciclo do ácido cítrico a conversão de piruvato a acetil-CoA se dá devido ao complexo da piruvato-desidrogenase.",
      options: ["Verdadeiro", "Falso"],
      answer: "Verdadeiro",
      prize: 1
    },
    {
      color: "yellow",
      question: "O ciclo do ácido cítrico é altamente exergônico.",
      options: ["Verdadeiro", "Falso"],
      answer: "Verdadeiro",
      prize: 1
    },
    {
      color: "yellow",
      question:
        "A glicólise anaeróbica é o processo responsável pela quebra da glicose, transformando-a em piruvato ou ácido pirúvico.",
      options: ["Verdadeiro", "Falso"],
      answer: "Verdadeiro",
      prize: 1
    },
    {
      color: "green",
      question: "Eu cataliso a fermentação láctica. Quem sou eu?",
      options: ["Lactatonase", "Lactato-desidrogenase"],
      answer: "Lactato-desidrogenase",
      prize: 1
    },
    {
      color: "green",
      question:
        "Sou uma das enzimas do ponto de controle da glicólise. Quem sou eu?",
      options: ["Fosfofrutoquinase", "Hexolatoquinase"],
      answer: "Fosfofrutoquinase",
      prize: 1
    },
    {
      color: "green",
      question: "Eu sou a primeira via metabólica elucidada. Quem sou eu?",
      options: ["Glicólise", "Ciclo da ureia"],
      answer: "Glicólise",
      prize: 1
    },
    {
      color: "green",
      question:
        "No ciclo do ácido eu sou responsável pela formação de citrato e tenho feedback negativo. Quem sou eu?",
      options: ["Etapa 5", "Etapa 1"],
      answer: "Etapa 1",
      prize: 1
    },
    {
      color: "green",
      question:
        "Somos inibidores do complexo de -cetoglutarato no ciclo do ácido cítrico. Quem sou eu?",
      options: ["ATP, NADH e succinilCoA", "ATP, NADH e O2"],
      answer: "ATP, NADH e succinilCoA",
      prize: 1
    },
    {
      color: "green",
      question:
        "Eu sou composto por essas três enzimas piruvato-desidrogenase, diidrolipoil-transcetilase, diidropoil desidrogenase. Quem sou eu?",
      options: [
        "Complexo da oxalagenase",
        "Complexo da piruvato-desidrogenase"
      ],
      answer: "Complexo da piruvato-desidrogenase",
      prize: 1
    },
    {
      color: "green",
      question: "Na glicólise sou a fase de gasto de ATP. Quem sou eu?",
      options: ["Fase de liberação", "Fase preparatória"],
      answer: "Fase preparatória",
      prize: 1
    },
    {
      color: "green",
      question:
        "Na ausência do oxigênio na glicólise dessas oxidações não acontecem. Quem sou eu?",
      options: ["NADH e piruvato", "FADH e C"],
      answer: "NADH e piruvato",
      prize: 1
    },
    {
      color: "green",
      question:
        "Em eucariotos o ciclo ácido cítrico ocorre em mim. Quem sou eu?",
      options: ["Mitocôndria", "Núcleo"],
      answer: "Mitocôndria",
      prize: 1
    },
    {
      color: "green",
      question:
        "Somos os pontos de controles hormonais da glicose. Quem nós somos?",
      options: [
        "Glucagon, adrenalina e insulina",
        "Tirosina, estrogênio e progesterona"
      ],
      answer: "Glucagon, adrenalina e insulina",
      prize: 1
    },
    {
      color: "win",
      question: "Biologia = diversão foda",
      options: ["Começar"],
      answer: "Começar",
      prize: 1
    }
  ];

  place: number = 0;

  get pos() {
    return this.places[this.place];
  }

  get card() {
    let cards: Array<Card> = [];
    this.cards.forEach((element, index) => {
      if (element.color === this.pos.event) {
        cards.push(element);
        this.cards.splice(index, 1);
      }
    });
    let card = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
    this.cards.push(...cards);

    if (card != undefined) {
      return card;
    } else {
      return {
        color: "",
        question: "Acabaram as cartas desta cor",
        options: ["O paulo = merda???"],
        answer: "O paulo = merda???",
        prize: 1
      };
    }
  }

  @Mutation
  move(ammount: number) {
    this.place + ammount >= 0 ? (this.place += ammount) : this.place;
  }
}
export default getModule(Board);
