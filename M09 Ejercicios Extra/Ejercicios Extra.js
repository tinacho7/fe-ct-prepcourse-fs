/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloPadre = [];
   var arregloHijo = [];
   for (var prop in objeto){
      arregloHijo.push(prop);
      arregloHijo.push(objeto[prop]);
      arregloPadre.push(arregloHijo);
      arregloHijo = [];
   }
   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arr = string.split('');
   arr.sort();
   var sumaLetra = 1;
   var objeto = {};
   for (var i = 0 ; i < arr.length ; i++){
      if (arr[i] == arr[i+1]){
         sumaLetra += 1;
         objeto[arr[i]] = sumaLetra;
      } else if (sumaLetra == 1){
         objeto[arr[i]] = sumaLetra;
      } else {
         sumaLetra = 1
      }
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arr = string.split('');
   var mayus = [];
   var min = [];
   for (var i = 0 ; i < arr.length ; i++){
      if (arr[i] == arr[i].toUpperCase()){
         mayus.push(arr[i]);
      } else {
         min.push(arr[i]);
      }
   }
   var priMay = mayus.join('');
   var segMin = min.join('');
   return priMay + segMin;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arr = frase.split(' ');
   var fraseInv = [];
   for (var i = 0 ; i < arr.length ; i++){
      var arrI = arr[i].split('');
      var arrIR = arrI.reverse();
      var arrOK = arrIR.join('')
      fraseInv.push(arrOK);
   }
   return fraseInv.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var str = numero.toString();
   var arr = str.split('');
   var arrR = arr.reverse();
   var strR = arrR.join('');
   if (str == strR){
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arr = string.split('');
   var arrSin = []
   if (arr.includes('a') == 1 || arr.includes('b') == 1 || arr.includes('c') == 1){
      for (var i = 0 ; i < arr.length ; i++){
         if (arr[i] != 'a' && arr[i] != 'b' && arr[i] != 'c'){
            arrSin.push(arr[i]);
         }
      }
   } else {
      return string;
   }
   var strSin = arrSin.join('');
   return strSin;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a , b){
      return a.length - b.length;
   });
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interArr = [];
   for (var i = 0 ; i < array1.length ; i++){
      for (var j = 0 ; j < array2.length ; j++){
         if (array1[i] === array2[j]){
            interArr.push(array1[i])
         } else {
            continue;
         }
      }
   }
   return interArr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
