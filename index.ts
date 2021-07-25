// generic types

function adicionaApendiceLista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceLista([1,2,3], 4);

//types

// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });

//types
//interface

// interface IAnimal {
//   nome: string;
//   tipo: "terrestre" | "aquatico";
//   domestico: boolean;
// }

// interface IFelino extends IAnimal {
//   visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//   porte: "pequeno" | "medio" | "grande";
// }

// type IDomestico = IFelino & ICanino;

// const animal: IDomestico = {
//   domestico: true,
//   nome: "cachorro",
//   porte: "medio",
//   tipo: "terrestre",
//   visaoNoturna: true,
// };
