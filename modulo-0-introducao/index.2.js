/**
 * 0 - Obter um usuario
 * 1 - obter numero de telefone apertir do seu ID
 * 2 - Obter o endereço do usuario pelo ID
 */
//importamos um modulo interno do node.js

const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  //Se der algum problema chama -> reject(ERRO)
  //Quando for sucesso chama -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date()
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: "908987654",
        ddd: 12
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Rua Balalaica",
      numero: 324
    });
  }, 2000);
}

/**
 *  1 - Adicionar palavra reservada async -> automativamente ela retornará uma promise
 */
main();
async function main() {
  try {
    console.time("Medida-promise");
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEnderecoAsync(usuario.id);
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ]);

    const endereco = resultado[1];
    const telefone = resultado[0];
    console.log(`
     Nome: ${usuario.nome},
     Telefone: (${telefone.ddd}) ${telefone.telefone},
     Endereço: ${endereco.rua}, ${endereco.numero}`);

    console.timeEnd("Medida-promise");
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}

// const usuarioPromises = obterUsuario();
// /**
//  * Para manipular o sucesso, usamos a função .then
//  * Para manipular erros, usamos o .catch
//  * usuario -> telefone -> telefone
//  */
// usuarioPromises
//   .then(function(usuario) {
//     return obterTelefone(usuario.id).then(function resolverTelefone(result) {
//       return {
//         usuario: {
//           nome: usuario.nome,
//           id: usuario.id
//         },
//         telefone: result
//       };
//     });
//   })
//   .then(function(resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id);
//     return endereco.then(function resolverEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result
//       };
//     });
//   })
//   .then(function(resultado) {
//     console.log(`
//     Nome: ${resultado.usuario.nome},
//     Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero},
//     Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone},`);
//   })
//   .catch(function(error) {
//     console.log("DEU RUIM", error);
//   });
// obterUsuario(function resolverUsuario(error, usuario) {
//   if (error) {
//     console.log("DEU RUIM EM USUARIO", error);
//     return;
//   }

//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.log("DEU RUIM em TELEFONE", error1);
//       return;
//     }

//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//       if (error2) {
//         console.log("DEU RUIM em ENDEREÇO", error2);
//         return;
//       }
//       console.log(`
//       Nome: ${usuario.nome},
//       Endereço: ${endereco.rua}, ${endereco.numero},
//       Telefone: (${telefone.ddd})${telefone.telefone}`);
//     });
//   });
// });
// const telefone = obterTelefone();

// console.log("telefone", telefone);
