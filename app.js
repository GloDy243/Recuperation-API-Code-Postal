

monImput = document.getElementById("cp");

monImput.addEventListener('input', () =>{
    if(monImput.value.length === 5){
        let url = `https://geo.api.gouv.fr/communes?codePostal=${monImput.value}&fields=nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=json&geometry=centre`;

        fetch(url)
        .then(response => response.json()
        .then(data =>{
            console.log(data);
            let affichage = '<ul>'
            for(let ville of data){
                affichage += `<li> La ville de <strong>${ville.nom}</strong> ayant une population de : <strong>${ville.population}</strong> </li>`
            }
            affichage += '</ul>';
            document.getElementById('villes').innerHTML = affichage;
        }))
        .catch(error => console.error(error))
    }
});

