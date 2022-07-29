function Vendeur(nom, email, categorie, telephone) {
    this.Nom = nom;
    this.Email = email;
    this.Categorie = categorie;
    this.Telephone = telephone;
}

var form = document.querySelector("form");
    form.onsubmit = function(){
    	
    	nom = document.getElementById("nom").value
    	email =  document.getElementById("email").value;
    	categorie =  document.getElementById("categorie").value;
    	telephone = document.getElementById("telephone").value

    	newTask = new Vendeur(nom, email, categorie, telephone)
    	list.push(newTask)
    }

let confirmation = /[a-zA-Z( )--_@.]+$