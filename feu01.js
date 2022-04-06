#! node

// Script qui affiche un rectangle

// Parsing
let arg = process.argv;
arg.splice(0, 2);

const column = Number(arg[0]);
const row = Number(arg[1]);

// Getion d'erreur
if (arg.length != 2) {
  console.log(
    "Veuillez indiquer au script, deux entiers naturels. Le premier pour indiquer le nombre de colonne du rectangle et le deuxieme pour indiquer le nombre de ligne."
  );
  return;
}

if (column % 1 !== 0 || row % 1 !== 0) {
  console.log("Veuillez indiquer des entiers naturels au script.");
  return;
}

if (column < 1 || row < 1) {
  console.log("Veuillez indiquer des entiers supérieurs ou égal à 1");
  return;
}

// Function

const width = (column) => {
  if (column == 1) {
    console.log("O");
  } else {
    console.log("O" + "-".repeat(column - 2) + "O");
  }
};

const height = (row, column) => {
  if (row === 1) {
    return;
  }
  if (row === 2) {
    console.log("O");
    return;
  }
  if (column == 1) {
    while (row != 2) {
      console.log("|");
      row--;
    }
    return;
  }
  while (row != 2) {
    console.log("|" + " ".repeat(column - 2) + "|");
    row--;
  }
};

// Résolution du problème et Affichage

width(column);
height(row, column);
if (row === 1) {
  return;
}
width(column);
