const students = [];

let canv = document.querySelector("#signature"),
  ctx = canv.getContext("2d"),
  mousePressed = false,
  mouseX = 0,
  mouseY = 0;
canv.addEventListener("touchmove", onTouchMove, false);
canv.addEventListener("touchstart", onTouchStart, false);
canv.addEventListener("touchend", onMouseUp, false);
// Tablet
function onTouchMove(event) {
  if (mousePressed) {
    event.preventDefault();
    mouseX = event.targetTouches[0].pageX - canv.offsetLeft;
    mouseY = event.targetTouches[0].pageY - canv.offsetTop;
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }
}

function onTouchStart(event) {
  mousePressed = true;
  mouseX = event.targetTouches[0].pageX - canv.offsetLeft;
  mouseY = event.targetTouches[0].pageY - canv.offsetTop;
  ctx.beginPath();
  ctx.moveTo(mouesX, mouseY);
}

function onMouseUp(event) {
  mousePressed = false;
}
// Desktop
canv.addEventListener("mousemove", onMouseMove, false);
canv.addEventListener("mousedown", onMouseDown, false);
canv.addEventListener("mouseup", onMouseUp, false);

function onMouseMove(event) {
  if (mousePressed) {
    event.preventDefault();
    mouseX = event.clientX - canv.offsetLeft - 0;
    mouseY = event.clientY - canv.offsetTop;
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  mousePressed = true;
  mouseX = event.clientX - canv.offsetLeft;
  mouseY = event.clientY - canv.offsetTop;
  ctx.beginPath();
  ctx.moveTo(mouseX, mouseY);
}

function clearSignature() {
  ctx.clearRect(0, 0, canv.width, canv.height);
}

//end - canva

function register() {
  let fname = document.querySelector("#inputNom").value;
  let lname = document.querySelector("#inputPrenom").value;
  const time = new Date();
  let signature = document.createElement("img");
  signature.src = canv.toDataURL("image/png");
  signature.classList.add("sig");
  students.push({
    //rajoute l'eleve
    firstName: fname,
    lastName: lname,
    timestamp: `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`,
    signature: signature,
  });
  console.log(students);
  display(students);
}

function display(classroom) {
  let d = document.querySelector("#classroom");
  d.hidden = false;
  const tbody = document.querySelector("tbody");
  /*   tbody.childNodes.forEach(element => {
	       element.remove()
	   });  */
  if (tbody.hasChildNodes()) {
    for (const ligne of document.querySelectorAll("tbody .ligne")) {
      ligne.remove();
    }
  }

  for (let i = 0; i <= classroom.length - 1; i++) {
    // affiche les étudiant present
    //recup le template
    let clone = document.importNode(
      document.querySelector("#eleve").content,
      true
    );
    let th = clone.querySelector("th");
    th.textContent = i + 1;
    let td = clone.querySelectorAll("td");
    td[0].textContent = classroom[i].firstName;
    td[1].textContent = classroom[i].lastName;
    td[2].append(classroom[i].signature);

    tbody.append(clone);
  }
}

function search(eleve) {}

document.querySelectorAll(".nav-link").forEach((nav) => {
  nav.addEventListener("click", () => {
    nav.textContent == "Professor"
      ? (document.querySelector("#professor").hidden = false)
      : (document.querySelector("#etudiant").hidden = true);
    nav.textContent == "Etudiant"
      ? (document.querySelector("#etudiant").hidden = false)
      : (document.querySelector("#professor").hidden = true);
  });
});
