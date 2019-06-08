/**
 * 0 - Obter um usuario
 * 1 - obter numero de telefone apertir do seu ID
 * 2 - Obter o endereço do usuario pelo ID
 */

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "908987654",
      ddd: 12
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Rua Balalaica",
      numero: 324
    });
  }, 2000);
}

function resolverUsuario(erro, usuario) {
  console.log("usuario", usuario);
}
obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.log("DEU RUIM EM USUARIO", error);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.log("DEU RUIM em TELEFONE", error1);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.log("DEU RUIM em ENDEREÇO", error2);
        return;
      }
      console.log(`
      Nome: ${usuario.nome},
      Endereço: ${endereco.rua}, ${endereco.numero},
      Telefone: (${telefone.ddd})${telefone.telefone}`);
    });
  });
});
// const telefone = obterTelefone();

// console.log("telefone", telefone);
