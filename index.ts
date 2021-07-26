// utilizando ? para variaveis opconais

interface IUsuario {
  id: string;
  email: string;
  cargo?: "gerente" | "coordenador" | "supervisor" | "funcionario";
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo) {
    //redirecione para cargo
  }

  // redirecione para area
}

// condicionais a partir de parametros

// interface IUsuario {
//   id: string;
//   email: string;
// }

// interface IAdmin extends IUsuario {
//   cargo: "gerente" | "coordenador" | "supervisor";
// }

// function redirecione(usuario: IUsuario | IAdmin) {
//   if ("cargo" in usuario) {
//     //administração
//   }

//   //usuario
// }

// generic types

// function adicionaApendiceLista<T>(array: T[], valor: T) {
//     return array.map(() => valor);
// }

// adicionaApendiceLista([1,2,3], 4);

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
