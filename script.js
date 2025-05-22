function addItem() {

    let idiomaActual= "es";
    const t = translations[idiomaActual];
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();

    if (itemText === '') {
        alert(t.alertEmpty);
        return;
    }

    const itemsList = document.getElementById('itemsList');

    
    const li = document.createElement('li');

    
    li.innerHTML = `
        ${itemText}
        <div class="buttons">
            <span class="completeButton material-icons">done</span>   
            <span class="deleteButton material-icons">delete</span>
        </div>
    `;

    
    const completeBtn = li.querySelector('.completeButton');
    const deleteBtn = li.querySelector('.deleteButton');

    
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    
    deleteBtn.addEventListener('click', () => {
        const confirmDelete = confirm(t.confirmDelete);
        if (confirmDelete) {
            li.remove();
        }
    });

    
    itemsList.appendChild(li);

    
    itemInput.value = '';
    itemInput.focus();
}


function cambiarIdioma() {
    const lang = document.getElementById('languageSelect').value;
    const t = translations[lang];

    document.getElementById('title').textContent = t.title;
    document.getElementById('itemInput').placeholder = t.placeholder;
    document.getElementById('addItemBtn').textContent = t.addButton;

    
    IdiomaActual = lang;
}


const translations = {
    es: {
        title: "Lista de Compras",
        placeholder: "Inserta un nuevo ítem",
        addButton: "Agregar",
        confirmDelete: "¿Estás seguro de que quieres eliminar este ítem?",
        alertEmpty: "Por favor, escribe un ítem."
    },
    en: {
        title: "Shopping List",
        placeholder: "Enter a new item",
        addButton: "Add",
        confirmDelete: "Are you sure you want to delete this item?",
        alertEmpty: "Please enter an item."
    }
};

