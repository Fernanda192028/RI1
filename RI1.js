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
      + "diferencial:" + this.diferencial
    }
}

const herois = [personagem1,personagem2]


console.log("--- INICIANDO TORNEIO DE COMPARAÇÕES =) ---\n");


//força 
let maisForte = herois[0]
for(i=1; i< herois.length; i++){
   
  // personagem1 vs personagem2 (descrição)
   console.log(`\n=== COMPARANDO FORÇA: ${personagem1.codinome} VS ${personagem2.codinome} ===\n`);
   
   console.log(personagem1.descricao());
   console.log("\nVs.\n");
   console.log(personagem2.descricao());
   console.log("-----------------------------------------");

   if (maisForte.forca < herois[i].forca){
      console.log(`${personagem2.codinome} VENCE em força!`);
      
   }else{
      console.log(`${personagem1.codinome} VENCE em força!`);
   }
}




//Velocidade
let maisVeloz = herois[0]
for(i=1; i< herois.length; i++){
   
  // personagem1 vs personagem2 (descrição)
   console.log(`\n=== COMPARANDO VELOCIDADE: ${personagem1.codinome} VS ${personagem2.codinome} ===\n`);
   
   console.log(personagem1.descricao());
   console.log("\nVs.\n");
   console.log(personagem2.descricao());
   console.log("-----------------------------------------");

   if (maisVeloz.velocidade < herois[i].velocidade){
      console.log(`${personagem2.codinome} VENCE em velocidade!`);
      
   }else{
      console.log(`${personagem1.codinome} VENCE em velocidade!`);
   }
}




// resistencia
let maisResistente = herois[0]
for(i=1; i< herois.length; i++){
   
  // personagem1 vs personagem2 (descrição)
   console.log(`\n=== COMPARANDO Resistencia: ${personagem1.codinome} VS ${personagem2.codinome} ===\n`);
   
   console.log(personagem1.descricao());
   console.log("\nVs.\n");
   console.log(personagem2.descricao());
   console.log("-----------------------------------------");

   if (maisResistente.resistencia < herois[i].resistencia){
      console.log(`${personagem2.codinome} VENCE em resistente!`);
      
   }else{
      console.log(`${personagem1.codinome} VENCE em resistente!`);
   }
}



  