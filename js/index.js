// Iteration 1: Names and Input
hacker1=" juanpi"
console.log("The driver's name is"+ hacker1 );
hacker2=" pepe"
console.log("The navigator's name is"+ hacker2)

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has XX characters")
}


// Iteration 3: Loops
let nombre=""
for(let i=0;i<hacker1.length;i++){

    let hackerletra =hacker1[i]
    let hackerM=hackerletra.toUpperCase()
    nombre+=hackerM + " "
    
} console.log(nombre);


const part2 ="juanpi"
let alreves=""
for (let i = part2.length - 1; i >= 0; i--) {
    const char = part2[i];
    alreves += char;
  }console.log(alreves);



  let ol= "J U A N P I"
let lo= "epep"
let i


for (i=0;ol.localeCompare(lo);i++)
if (ol>lo){
console.log("the driver`s name goes first");
break;
}
else if(lo>ol){
    console.log("yo, the navigator goes first definitely");
break;}
else if(ol===lo){
    console.log("what?! you both have the same name")
break;} 


//BONUS

let pa ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let par="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." 
let parr="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
let count=0;
let longText= pa.length + par.length + parr.length;
console.log(longText)
for(let i=0;i<longText.length;i++){
    const twoChars = longText[i] + longText[i + 1];
 
    if (twoChars === "et") {
      count++;
}}
console.log(count)

//no entiendo bien a que se refiere con palindromo y aun asi no consigo lo que intento
let pali= "Amor roma"
let palin= "gatos de pila"
let palind= "pisar mascotas"
let palindr= "atar rata"
let pali2= pali.toUpperCase()
let palin2= palin.toUpperCase()
let palind2= palind.toUpperCase()
let palindr2= palindr.toUpperCase()



    if (pali2.length-1===pali2) {
        console.log("Amor roma si se lee igual en ambos sentidos")}
    else {
        console.log("Amor roma no se lee igual en ambos sentidos")
    }

    if (palin2.length-1===palin2) {
        console.log("gatos de pila si se lee igual en ambos sentidos")}
    else {
        console.log("gatos de pila no se lee igual en ambos sentidos")
    }

    if (palind2.length-1===palind2) {
        console.log("pisar mascotas si se lee igual en ambos sentidos")}
    else {
        console.log("pisar mascotas no se lee igual en ambos sentidos")
    }

    if (palindr2.length-1===palindr2) {
        console.log("atar rata si se lee igual en ambos sentidos")}
    else {
        console.log("atar rata no se lee igual en ambos sentidos")
    }


