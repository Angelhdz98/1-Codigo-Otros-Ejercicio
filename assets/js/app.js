const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// console.log($n);
// console.log($b);
// console.log($l);


//el código conecta con un api para recibir un archivo JSON y mostrarlo en cosola


async function displayUser(username) {
  $n.textContent = 'cargando...'; 

  try {const response = await fetch(`${usersEndpoint}/${username}`);
  let data = await response.json();
 
    
  } catch (error) {
    console.log("error intentando recibir el dato ")
  }

  const response = await fetch(`${usersEndpoint}/${username}`);
  let data = await response.json();
  



  //console.log(data);
  //console.log(data.name);
  
 $n.textContent = data.name;
  $b.textContent = data.blog;
  $l.textContent = data.location;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);