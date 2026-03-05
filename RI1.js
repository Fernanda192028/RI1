const personagem1 =  {
    nome: "Steven Rogers",
    codinome: "Capitão América ",
    armaPrincipal: "Escudo de Vibranium",
    armaSecundaria: "",
    velocidade: 68,
    forca: 70,
    resistencia: 60,
    descricao:function() {
      return "Nome do personagem: " + this.nome + "\n"
      + "Codinome do personagem: " + this.codinome + "\n"
      + "Arma principal: " + this.armaPrincipal + "\n"
      + "Arma secundaria: " + this.armaSecundaria + "\n"
      + "Nível de força: " + this.forca + "\n"
      + "Nível de velocidade: " + this.velocidade +"\n"
      + "Nível de resistência: " + this.resistencia
    }
}

const personagem2 =  {
    nome: "Thor Odinson",
    codinome: "Deus do Trovão",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "",
    velocidade: 65,
    forca: 95,
    resistencia: 80,
    descricao:function() {
      return "Nome do personagem: " + this.nome + "\n"
      + "Codinome do personagem: " + this.codinome + "\n"
      + "Arma principal: " + this.armaPrincipal + "\n"
      + "Arma secundaria: " + this.armaSecundaria + "\n"
      + "Nível de força: " + this.forca + "\n"
      + "Nível de velocidade: " + this.velocidade +"\n"
      + "Nível de resistência: " + this.resistencia
    }
}

const personagem3 =  {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Mark 85",
    armaSecundaria: "Lasers",
    velocidade: 85,
    forca: 75,
    resistencia: 70,
    descricao:function() {
      return "Nome do personagem: " + this.nome + "\n"
      + "Codinome do personagem: " + this.codinome + "\n"
      + "Arma principal: " + this.armaPrincipal + "\n"
      + "Arma secundaria: " + this.armaSecundaria + "\n"
      + "Nível de força: " + this.forca + "\n"
      + "Nível de velocidade: " + this.velocidade +"\n"
      + "Nível de resistência: " + this.resistencia
    }
}


const herois = [personagem1,personagem2,personagem3]


console.log("--- INICIANDO TORNEIO DE COMPARAÇÕES ---\n");
console.log("=)")

//força 
for(i=0; i< herois.length; i++){
  for (let j = i + 1; j < herois.length; j++){
    let lutador1 = herois[i];
    let lutador2 = herois[j]; 

   console.log(`\n=== COMPARANDO FORÇA: ${lutador1.codinome} VS ${lutador2.codinome} ===\n`);
   
   console.log(lutador1.descricao());
   console.log("\nVs.\n");
   console.log(lutador2.descricao());
   console.log("-----------------------------------------");

   if (lutador1.forca < lutador2.forca){
      console.log(`${lutador2.codinome} VENCE em força!`);
      
   } else if(lutador1.forca > lutador2.forca){
      console.log(`${lutador1.codinome} VENCE em força!`);
   } else{
      console.log("Empate")
   }
 }
}

//Velocidade

for(i=0; i< herois.length; i++){
   for (let j = i + 1; j < herois.length; j++){
      let lutador1 = herois[i];
      let lutador2 = herois[j]; 
   
   console.log(`\n=== COMPARANDO VELOCIDADE: ${lutador1.codinome} VS ${lutador2.codinome} ===\n`);
   
   console.log(lutador1.descricao());
   console.log("\nVs.\n");
   console.log(lutador2.descricao());
   console.log("-----------------------------------------");

   if (lutador1.velocidade < lutador2.velocidade){
      console.log(`${lutador2.codinome} VENCE em velocidade!`);
      
   }else if (lutador2.velocidade < lutador1.velocidade){
      console.log(`${lutador1.codinome} VENCE em velocidade!`);
   }else {
     console.log("Empate")
   }
 }
}

// resistencia

for(i=0; i< herois.length; i++){
  for (let j = i + 1; j < herois.length; j++){
      let lutador1 = herois[i];
      let lutador2 = herois[j]; 
   

   console.log(`\n=== COMPARANDO Resistencia: ${lutador1.codinome} VS ${lutador2.codinome} ===\n`);
   
   console.log(lutador1.descricao());
   console.log("\nVs.\n");
   console.log(lutador2.descricao());
   console.log("-----------------------------------------");

   if (lutador1.resistencia < lutador2.resistencia){
      console.log(`${lutador2.codinome} VENCE em resistente!`);
      
   }else if (lutador2.resistencia < lutador1.resistencia){
      console.log(`${lutador1.codinome} VENCE em resistente!`);
   }else{
      console.log("Empate")
   }
 }
}


  