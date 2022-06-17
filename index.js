import express from "express";

const server = express();

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "3/1/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" }
];

server.get("/holidays" , (request ,response) => {

  response.send(holidays);

})

server.get("/is-today-holiday" , (request ,response) => {

  const today = new Date();
  const todayString= today.toLocaleDateString();
  const holiMatch = holidays.filter((item) => item===todayString);
  if(holiMatch.length!==0){
    response.send(`Sim, hoje é ${holiMatch[0].name}`);
  }
  response.send(`Não, hoje não é feriado`);
})

server.get("/holidays/:idMonth" , (request ,response) => {

  const id = request.params.idMonth
  const monthMatch= holidays.filter((item) => item.date.split("/",1)[0]===id );
  response.send(monthMatch);
})

// Configura o servidor para rodar na porta 4000
server.listen(4000);