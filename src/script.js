button.addEventListener("click", function () {
  button.style.backgroundColor = "brown";
});

var menuItems = document.querySelectorAll('.footer-menu ul li');

// for (var i = 0; i < menuItems.length; i++) {
// menuItems[i].addEventListener('click', function() {
//     for (var j = 0; j < menuItems.length; j++) {
//     menuItems[j].classList.remove('active');
//     }
//     this.classList.add('active');
// });
// }

function toggleActive(btn) {
    // remove active class from all buttons
    const buttons = document.querySelectorAll('.btn-group-vertical button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  
    // add active class to clicked button
    btn.classList.add('active');
  
    // hide all grids except the one related to the clicked button
    const grids = document.querySelectorAll('.row.overflow-x-auto');
    grids.forEach(grid => {
      if (grid.id === 'grid' + btn.id.slice(-1)) {
        grid.style.display = 'grid';
      } else {
        grid.style.display = 'none';
      }
    });
    
    // hide base grid
    const base = document.getElementById("grid0");
    base.style.display = 'none';
  
    // hide text for recommended cafes
    const rec = document.getElementById("txtrec");
    rec.style.display = 'none';
  
    // show text for most evaluated cafes
    const ava = document.getElementById("txtava");
    ava.style.display = 'flex';
}

function ocultarElementos() {
  var conteudo = document.getElementById("conteúdo");
  var resultados = document.getElementById("search-result");
  var search = document.getElementById("search1");
  conteudo.style.display = 'none';
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Search the JSON file on keyup event
    search.addEventListener('keyup', () => {
      // Get the user's input
      const input = search.value.toLowerCase();

      // Only show resultados after at least 3 characters have been entered
      if (input.length < 3) {
        resultados.style.display = 'none';
        return;
      }

      // Filter the data array based on the user's input
      const filteredData = data.filter(item => {
        return item.nome.toLowerCase().includes(input) || item.local.toLowerCase().includes(input);
      });

      // Clear the resultados container
      resultados.innerHTML = '';

      // Display the filtered resultados in the resultados container
      /*filteredData.forEach(item => {
        const listapesq = document.createElement('li');
        listapesq.innerText = `${item.nome}`;
        listapesq.setAttribute('data-href', `https://google.com`);
        resultados.appendChild(listapesq);
      });*/
      filteredData.forEach((item, index) => {
        if (index >= 10) {
          return; // sai do loop após o 10º item
        }
        const listapesq = document.createElement('li');
        const link = document.createElement('a');
      
        link.innerText = item.nome;
        link.href = item.links;
        listapesq.appendChild(link);
        resultados.appendChild(listapesq);
      
        listapesq.addEventListener('click', function() {
          window.location.href = item.links;
        });
      });

      // Show the resultados container
      resultados.style.display = 'block';
    });
  });
}

function exibirElementos() {
  var conteudo = document.getElementById("conteúdo");
  var resultados = document.getElementById("search-result");
  resultados.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      return;
    }else{
      conteudo.style.display = 'block';
      resultados.style.display = 'none';
    }
  });

  
}

