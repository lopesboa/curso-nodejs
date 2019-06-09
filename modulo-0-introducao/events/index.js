const eventEmiter = require("events");
class meuEmissor extends eventEmiter {}

const MeuEmissor = new meuEmissor();
const nomeEvento = "usuario:click";
MeuEmissor.on(nomeEvento, function(click) {
  console.log("um usúario clicou", click);
});

// MeuEmissor.emit(nomeEvento, "na barra de rolagem");
// MeuEmissor.emit(nomeEvento, "no ok");

// let count = 0;
// setInterval(function() {
//   MeuEmissor.emit(nomeEvento, "no ok " + count++);
// }, 1000);

const stdin = process.openStdin();

function main() {
  return new Promise((resolve, reject) => {
    stdin.addListener("data", function(value) {
      // console.log(`Você digitou: ${value.toString().trim()}`);
      return resolve(value);
    });
  });
}

main().then(function(resultado) {
  console.log(`Resultado`, resultado.toString().trim());
});
