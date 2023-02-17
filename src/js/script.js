const notes = [
    {
        title: "Compras",
        content: "Comprar frutas e legumes",
    },
    {
        title: "Entregar o trabalho",
        content: "Entregar o trabalho de estrutura de dados",
    },
];

const containerNotes = document.getElementById("container");

const generateNotes = () => {
    containerNotes.innerHTML = "";
    notes.forEach((note) => {
        containerNotes.innerHTML += `
        <div class="noteCard">
            <h2 class="titleCard">${note.title}</h2>

            <p>
                ${note.content}
            </p>
        </div>
        `;
    });
};

const addBtn = document.getElementById("addNote");

const containerNewNote = document.getElementById("containerNewNote");

addBtn.addEventListener("click", () =>
    containerNewNote.classList.toggle("active")
);

onload(generateNotes());
