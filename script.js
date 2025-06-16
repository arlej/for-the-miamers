// 🟦🟦🟦 DOM
const nameSelect = document.querySelector(".name");
const quantityInput = document.querySelector("#quantity");
const itemInput = document.querySelector("#item");

const btnSubmit = document.querySelector(".btn");
const itemsList = document.querySelector(".details");

// 🟪🟪🟪 VARIABLES (global/init)

const itemsArray = [];

class itemsToBring {
    constructor(name, item, quantity) {
        this.name = name;
        this.item = item;
        this.quantity = quantity;
    }
}

// 🟧🟧🟧 FUNCTIONS

// vérifie si le tableau est vide dans ce cas le message s'affiche
function isEmpty(){
    if (itemsArray.length === 0) {
        const p = document.createElement("p");
        p.textContent = "Votre liste est vide 😿";
        itemsList.append(p);
    }
}

// la fonction vide la liste des items, affiche une liste des items (nom, quantité et la personne) présent dans le tableau, et appel isEmpty(); 
function displayItems(){
    itemsList.innerHTML = "";

    itemsArray.forEach((e, index) => {
        const p = document.createElement("p");
        p.textContent = `[${e.name}] ${e.quantity} x ${e.item}`;

        // créer le bouton delete et au clic delete l'item voulu + appel siplayItems();
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.classList.add("btn-delete");
        deleteBtn.addEventListener("click", () => {
            itemsArray.splice(index, 1);
            displayItems();
        })
        
        p.append(deleteBtn);
        itemsList.append(p);
    });
    isEmpty();
}

// 🟩🟩🟩 EVENTS
btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault();

    // récupère les valeurs des inputs
    const name = nameSelect.value;
    const item = itemInput.value.trim();
    const quantity = quantityInput.value;

    // vérifie que tous les champs sont remplis
    if (!name || !item || !quantity){
        alert ('Veuillez remplir tous les champs');
        return
    };
    // Ajout du nouvel item dans le tableau
    const newItem = { name, item, quantity };
    itemsArray.push(newItem);

    displayItems();

    // reset les inputs
    nameSelect.value = "";
    itemInput.value = "";
    quantityInput.value = "";
    console.log(itemsArray);
})