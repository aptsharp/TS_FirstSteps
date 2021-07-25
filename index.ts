//types
//interface

interface IAnimal {
  nome: string;
  tipo: "terrestre" | "aquatico";
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: "pequeno" | "medio" | "grande";
}

type IDomestico = IFelino & ICanino;

const animal: IDomestico = {
  domestico: true,
  nome: "cachorro",
  porte: "medio",
  tipo: "terrestre",
  visaoNoturna: true,
};
