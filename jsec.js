const students = []

function register() {
    let fname = document.querySelector('#inputNom').value
    let lname = document.querySelector('#inputPrenom').value
    const time = new Date()
    students.push({ //rajoute l'eleve 
        firstName: fname,
        lastName: lname,
        timestamp: time.toString
    })
    console.log(students[0])


}

function display() {
    for (student of students) { // affiche les étudiant present
        //afficher les eleve
    }
}


function search(eleve) {



}