/*function contadorCaracteres(id) {
  document.getElementById("txt").innerHTML = id.value.length + "caracteres";
}*/

function contador(id) {
  palabra = id.value;
  for (let i = palabra.length; i < 11; i++) {
    document.getElementById("letras").innerHTML = palabra.length;
  }
}


function contadorPalabras(id) {
  parrafo = id.value;
  for (let i = parrafo.length; i <700; i++) {
      document.getElementById("palabras").innerHTML = id.value.split(" ").length + "palabras";
        } 
  }     


  /* function alerta() {
      alert(" ");
   
   
  
  let person = new Promise((resolve,reject) => {
    let edad = 0 > 18; 
    if (edad => 18){
      resolve("Todas las personas son mayores de 18");

    } else{
      reject("no son mayores de 18");
    }

  });

  then(res =>(res))
  .catch(error =>(err))
};*/



/*function alerta() {
  alert(" ");


const edades = () => {
  const buscar = new Promise((resolve,reject)=> {
    setTimeout (() =>{
      if (edad => 18){
      resolve ("mayor de 18")
      
    } else{
      reject("no son mayores de 18");
    }
  },3000)
  })
  
  return buscar 
  
}

const miraredad = async () => {
    const edadp = await edades()
    
}

miraredad()

}*/

function procesarPromesa() {
  
      const numero1=document.getElementById("edades1").value;
      const numero2=document.getElementById("edades2").value;
      const numero3=document.getElementById("edades3").value;
      const numero4=document.getElementById("edades4").value;
      const numero5=document.getElementById("edades5").value;

      return new Promise((resolve, reject) => {  
        if(numero1 === "" || numero2 === "" || numero3 === "" || numero4 === "" || numero5 === ""){

          alert("llene todos los campos")
          }            
        if(numero1 >17 && numero2 >17 && numero3 >17 && numero4 >17 && numero5 >17) {    
          
          resolve("son mayores de 18") 
        
        } else {    
          reject("son menores de 18")  
        }
      }) 
    }
  
    function nombre(){
      const personas= document.getElementById("person")
      procesarPromesa()
        .then(respuesta=>{
          personas.innerHTML=respuesta
          console.log(respuesta) 
        })
     
    .catch(error =>{
    personas.innerHTML=error
    console.log(error) 
 })
}   
