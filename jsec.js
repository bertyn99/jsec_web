const students = []

let can = document.querySelector("#signature"),
		ctx = can.getContext('2d'),
		mousePressed = false,
		mouseX = 0,
		mouseY = 0;
	can.addEventListener('touchmove', onTouchMove, false);
	can.addEventListener('touchstart', onTouchStart, false);
	can.addEventListener('touchend', onMouseUp, false);
	// Tablet
	function onTouchMove(event){
		if (mousePressed) {
			event.preventDefault();
			mouseX = (event.targetTouches[0].pageX) - can.offsetLeft;
			mouseY = (event.targetTouches[0].pageY) - can.offsetTop;
			ctx.lineTo(mouseX, mouseY);
			ctx.stroke();
		}
	}
	
	function onTouchStart(event){
		mousePressed = true;
		mouseX = (event.targetTouches[0].pageX) - can.offsetLeft;
		mouseY = (event.targetTouches[0].pageY) - can.offsetTop;
		ctx.beginPath();
		ctx.moveTo(mouesX, mouseY);
	}
	
	function onMouseUp(event){
		mousePressed = false;
	}
	// Desktop
	can.addEventListener('mousemove', onMouseMove, false);
	can.addEventListener('mousedown', onMouseDown, false);
	can.addEventListener('mouseup', onMouseUp, false);
	
	function onMouseMove(event) {
		if (mousePressed) {
			event.preventDefault();
			mouseX = event.clientX - can.offsetLeft - 0;
			mouseY = event.clientY - can.offsetTop ;
			ctx.lineTo(mouseX, mouseY);
			ctx.stroke();
		}
	}
	
	function onMouseDown(event) {
		mousePressed = true;
		mouseX = event.clientX - can.offsetLeft ;
		mouseY = event.clientY - can.offsetTop ;
		ctx.beginPath();
		ctx.moveTo(mouseX, mouseY);
	}
	
	$('#clearsig')[0].addEventListener('click', clearSignature, false);
	
	function clearSignature() {
		ctx.clearRect(0, 0, can.width, can.height);
    }
    



function register() {
    let fname = document.querySelector('#inputNom').value
    let lname = document.querySelector('#inputPrenom').value
    const time = new Date()
    students.push({ //rajoute l'eleve 
        firstName: fname,
        lastName: lname,
        timestamp: time.toString()
    })
    display(students) 

}

function display(classroom) {
   let d= document.querySelector('#classroom')
    d.hidden=false
    const tbody = document.querySelector("tbody");
 /*   tbody.childNodes.forEach(element => {
        element.remove()
    });  */if(tbody.hasChildNodes()){
 document.querySelector("tbody .ligne").remove();  
    }
   
    for (let i=0;i<=classroom.length-1;i++) { // affiche les étudiant present
         //recup le template
        let clone = document.importNode(document.querySelector("#eleve").content, true);
        let th = clone.querySelector("th");
        th.textContent=i+1
        let td = clone.querySelectorAll("td");
        td[0].textContent = classroom[i].firstName;
        td[1].textContent = classroom[i].lastName;
    
        tbody.append(clone);
    }
}


function search(eleve) {



}
