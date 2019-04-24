import { createModule, Mutation } from "vuex-typesafe-class";

interface Place {
  event: string;
  top: string;
  left: string;
}

class Board {
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
  place: number = 0;

  get pos() {
    return this.places[this.place];
  }

  @Mutation
  move(ammount: number) {
    this.place += ammount;
  }
}

export default createModule(Board);
