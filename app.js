console.log("Welcome, this is a notes app")
let notesObj = [];
showNotes();
// if user adds a note , add it to the local storage
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener('click', function(e){ 
        let addText = document.getElementById("addTxt");
        let notes = localStorage.getItem("notes");
        if(notes == null){
            notesObj = []
        }else{
            notesObj = JSON.parse(notes)
        }
        if(addText.value.length>0){
        notesObj.push(addText.value);
        localStorage.setItem("notes", JSON.stringify(notesObj))
        addText.value = "";
        console.log(notesObj);
        showNotes();
        }
    })

function showNotes(){
    let notes = localStorage.getItem("notes")
    if(notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function(element,index){
        html += `
        <div class="card mx-2 my-2 noteCard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-primary">Delete Note</button>
        </div>
        </div>
                `
        
        document.getElementById("notes").innerHTML = html
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElm.innerHTML = html
    }else{
        notesElm.innerHTML = `Nothing to show here , use "Add Note" section to add notes`
    }
}
