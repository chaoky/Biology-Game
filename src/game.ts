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
      color: "win",
      question: "Biologia = diversão foda",
      options: ["Começar"],
      answer: "Começar",
      prize: 1
    },
    {
      color: "yellow",
      question:
        "O complexo da piruvato-desidrogenase não é inibido por ATP e NADH",
      options: [true, false],
      answer: true,
      prize: 1
    },
    {
      color: "green",
      question: "- Eu cataliso a fermentao lctica. Quem sou eu?",
      options: ["Lactatonase", "Lactato-desidrogenase"],
      answer: "Lactato-desidrogenase",
      prize: 1
    },
    {
      color: "suprise",
      question: "Ande uma casa",
      options: ["yikes"],
      answer: "yikes",
      prize: 1
    },
    {
      color: "red",
      question:
        "-A glicolise � a primeira via metab�lica da glicose e apresenta dez rea��es quimicas. Esse importante processo ocorre  no interior da c�lula, mais precisamente:",
      options: ["Mitoc�ndria", "Citosol", "N�cleo"],
      answer: "Citosol",
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
