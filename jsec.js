const students = []

function register() {
    let fname = document.querySelector('#inputNom').value
    let lname = document.querySelector('#inputPrenom').value
    const time = new Date()
    students.push({ //rajoute l'eleve 
        firstName: fname,
        lastName: lname,
        timestamp: time.toString()
    })
    console.log(students[0])
    display(students)

}

function display(classroom) {
   let d= document.querySelector('#classroom')
    d.hidden=false
    const tbody = document.querySelector("tbody");
    tbody.removeChild(tbody.childNodes)
    for (student of classroom) { // affiche les étudiant present
        const studTemplate = document.querySelector("#eleve"); //recup le template
        const clone = document.importNode(studTemplate.content, true);
        let th = clone.querySelector("th");
        th.textContent=1
        let td = clone.querySelectorAll("td");
        td[0].textContent = student.firstName;
        td[1].textContent = student.lastName;
        tbody.appendChild(clone);
    }
}


function search(eleve) {



}