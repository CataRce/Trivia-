var score = 0; //declarar variable punataje

const checkbtn = (Option) => {
  switch(Option) {
    
  case 'Hojas': 
  alert('Respuesta Correcta')
  document.getElementById("boton1").className = 'botonCorrecto'
  score= score+1
  console.log(score)
  break;
  
  case 'Miel': 
  alert('Respuesta Inorrecta')
  document.getElementById("boton2").className = 'botonError'
  document.getElementById("boton1").className = 'botonCorrecto'
  document.getElementById("boton3").className = 'botonError'
  break;

  case 'Pescados': 
  alert('Respuesta Inorrecta')
  document.getElementById("boton3").className = 'botonError'
  document.getElementById("boton2").className = 'botonError'
  document.getElementById("boton1").className = 'botonCorrecto'
   break;
}
}
