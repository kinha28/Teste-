let nome = "Yanka";  
let idade = 28;  
let carteiraDeMotorista = false;  
let mes = "agosto"; // Mês de nascimento  

let anoAtual = new Date().getFullYear(); // Obtém o ano atual  
let mesAtual = new Date().getMonth() + 1; // Obtém o mês atual (de 0 a 11, por isso soma 1)  

// Se ainda não fez aniversário este ano, subtrai 1 do ano de nascimento
let anoNascimento = (mesAtual >= 8) ? (anoAtual - idade) : (anoAtual - idade - 1);  

console.log("Nome:", nome);  
console.log("Idade:", idade);  
console.log("Tem carteira de motorista?", carteiraDeMotorista);  
console.log("Ano de nascimento:", anoNascimento);  
console.log("Mês de nascimento:", mes);
