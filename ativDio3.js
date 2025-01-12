class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
  
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  function criarHerois() {
    return [
      new Heroi("Jãozin", 150, "mago"),
      new Heroi("Arthur", 35, "guerreiro"),
      new Heroi("Lee Sin", 28, "monge"),
      new Heroi("Naruto", 22, "ninja")
    ];
  }
  
  function fazerHeroisAtacar(herois) {
    for (let i = 0; i < herois.length; i++) {
      herois[i].atacar();  
    }
  }
  
  let herois = criarHerois();
  
  fazerHeroisAtacar(herois);