
const prompt = require("prompt-sync")();
const { Console } = require("console");
const fs = require("fs");


let allproducts = fs.readFileSync("data.json");
allproducts = JSON.parse(allproducts);
console.log(allproducts);


function menu() {
    console.log("1. ajouter un produit:");
    console.log("2. modifier un produit:");
    console.log("3. supprimer un produit:");
    console.log("4. afficher un produit:");
    console.log("5. quitter:");
}

function ajouter() {
    nom = prompt("nom de produit");
    description = prompt(" Description du produit ");
    quantite = prompt("  quantite du produit");
    prix = prompt(" prix de produit");
    allproducts.push({ "nom": nom, "Description": description, "quantite": quantite, "prix": prix })
    fs.writeFileSync("data.json", JSON.stringify(allproducts), null, 4)

}
function modifier() {
    let index = Number(prompt("entrer  l id  de vous choise"));
    if (index < 0 || index >= allproducts.length) {
        console.log("vide");
    } else {
        allproducts[index].nom = prompt("entrer le noveau nom: ");
        allproducts[index].description = prompt("entrer  le noveau description: ");
        allproducts[index].quantite = prompt("entrer  le  noveau quantite: ");
        allproducts[index].prix = prompt("entrer  le noveau price: ");
        fs.writeFileSync("data.json", JSON.stringify(allproducts), null, 4)
    }


}


function supprimer() {
    let id = prompt("entrer  l id  de vous choise");
    if (id < 0 || id >= allproducts.length) {
        console.log("vide");
    } else {
        allproducts.splice(id, 1);

    }

}
function afficher() {
    console.log(allproducts);

}

let choix;
do {
    menu();
    choix = Number(prompt("entrer votre choix: "));

    switch (choix) {
        case 1:
            ajouter();
            break;
        case 2:
            modifier();
            break;
        case 3:
            supprimer();
            break;
        case 4:
            afficher();
            break;
        case 5:
            fs.writeFileSync("data.json", JSON.stringify(allproducts, null, 4));
            console.log("au revoir");
            break;
        default:
            console.log("choix invalid");
            break;



    }

} while (choix <= 5);









