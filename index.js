
//Criando a função do relógio
//Loop infinito
let ligado = true;

let corFundo = 0;

//Variáveis do cronometro
let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;

let estado = 0;
//0 = desligado
//1 = ligado

let cronometro = 0;


//Variavel pais
let pais = 0;
let listPais = [
    {
        id: "BR",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
        dia: "",
        data: "",
        diff: 0,
        tempo: {
            hora: 0,
            minuto: 0,
            segundo: 0
        }
    },
    {
        id: "USA",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/US_flag_large_51_stars.png/1024px-US_flag_large_51_stars.png",
        dia: "",
        data: "",
        diff: 1,
        tempo: {
            hora: 0,
            minuto: 0,
            segundo: 0
        }
    },
    {
        id:"DE",
        img: "https://s5.static.brasilescola.uol.com.br/be/2020/10/bandeira-da-alemanha.jpg",
        dia: "",
        data: "",
        diff: 5,
        tempo: {
            hora: 0,
            minuto: 0,
            segundo: 0
        }
    }, 
    {
        id:"EQ",
        img: "http://geo5.net/imagens/bandeira-do-equador-2000px.png",
        dia: "",
        data: "",
        diff: -2,
        tempo: {
            hora: 0,
            minuto: 0,
            segundo: 0
        }  
    },
    {
        id:"IN",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/255px-Flag_of_England.svg.png",
        dia: "",
        data: "",
        diff: 4,
        tempo: {
            hora: 0,
            minuto: 0,
            segundo: 0
        }  
    },
    {
        id:"IN",
        img: "data:image/png;base64,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",
        dia: "",
        data: "",
        diff: 15,
        tempo: {
            hora: 0,
            minuto: 0,
            segundo: 0
        }  
    },
    {
        id:"IN",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/1200px-Flag_of_Mauritius.svg.png",
        dia: "",
        data: "",
        diff: 7,
        tempo: {
            hora: 0,
            minuto: 0,
            segundo: 0
        }  
    }
];

const cronometroTempo = document.getElementById('tempo');
//Variavel controle - armazenar nosso setInterval - Assim podemos para ele a qualquer momento

//setInterval - setarum intervalo [1s]

const tempo = document.getElementById('hours');
const data = document.getElementById('data');
const dia = document.getElementById('dia');

const monitor = document.querySelector('.monitor');

const clockTime = document.querySelector('.time');
const clockInfos = document.querySelector('.info');

const btnLigaDesliga = document.getElementById('btnLD');

btnLigaDesliga.addEventListener('click', () => {
    if(ligado){
        console.log('ligado');
        //monitor ligado
        clockTime.style.display = 'none';
        clockInfos.style.display = 'none';
        ligado = !ligado;
    }else{
        console.log('desliago');
        //monitor desliago
        clockTime.style.display = 'flex';
        clockInfos.style.display = 'flex';
        ligado = !ligado;
    }
});

setInterval(() => {
    //laço de repetição
    //passe por todos os paises e atualize a hora deles;

    listPais.forEach((element, id) => {
        //passar em cada elemento
        //verificar o pais e atualizar os dados
        const hoje = new Date();
        const tempoLocal = hoje.getTime();
        const diffLocal = hoje.getTimezoneOffset();

        const utc = tempoLocal + diffLocal;

        const horarioPaisMs = utc + (3600000 * element.diff);
        const horarioPaisAgora = new Date(horarioPaisMs);

        listPais[id].data = horarioPaisAgora.toLocaleDateString();
        listPais[id].dia = verificarDia(horarioPaisAgora); 
        //horas, segundos e minutos - alterar o listPais;
        listPais[id].tempo.hora =  horarioPaisAgora.getHours() < 10 ? '0'+horarioPaisAgora.getHours() : horarioPaisAgora.getHours();
        listPais[id].tempo.minuto = horarioPaisAgora.getMinutes() < 10 ? '0'+horarioPaisAgora.getMinutes() : horarioPaisAgora.getMinutes();
        listPais[id].tempo.segundo = horarioPaisAgora.getSeconds() < 10 ? '0'+horarioPaisAgora.getSeconds() : horarioPaisAgora.getSeconds();
    });

    mostrarNaTela(listPais[pais]);

}, 1000);

//timeout - ms - milisegundo
//Date - datas e horas

function mostrarNaTela(info){
    tempo.innerHTML = `${info.tempo.hora}:${info.tempo.minuto}:${info.tempo.segundo}`;
    data.innerHTML = info.data;
    dia.innerHTML = info.dia;
}

//Função - Verificar qual dia da semana estamos
function verificarDia(hoje){
    //Saber o dia 
    //Analiser em queal posição está
    //0 - Domingo
    //1 - Segunda
    //2 - terça 
    //3 - quarta
    //4 - quinta
    
    const dia = hoje.getDay();
    //getDay - Retornar qual posição estamos
    if(dia == 0) return 'Domingo';
    if(dia == 1) return 'Segunda';
    if(dia == 2) return 'Terça';
    if(dia == 3) return 'Quarta';
    if(dia == 4) return 'Quinta';
    if(dia == 5) return 'Sexta';
    if(dia == 6) return 'Sábado';
};


function startTime(){
    ///criar um intervalo que ocorre em um 10ms
    stopTimer();
    cronometro = setInterval(() => {timer()}, 10)
}

function stopTimer(){
    //Parar o intervalo
    clearInterval(cronometro);
}

function resetTimer(){
    hora = 00;
    segundo = 00;
    minuto = 00;
    milisegundo = 00;
    cronometroTempo.innerHTML = `${hora}:${minuto}:${segundo}`;
}

function playPause(){
    if(estado == 0){    
        //Desligado => ligado
        startTime();
        estado = 1;
    }else{
        //Ligado => desligado
        stopTimer();
        estado = 0;
    }
}

function timer(){   
    milisegundo = milisegundo + 10;
    
    //analisar os ms == 1000
    //analisar os s == 60
    //analisar m == 60
    if(milisegundo == 1000){
        milisegundo = 0;
        segundo++;
    }
    if(segundo == 60){
        segundo = 0;
        minuto++;
    }
    if(minuto == 60){
        minuto = 0;
        hora++;
    }

    const tempo = `${zeroStart(hora)}:${zeroStart(minuto)}:${zeroStart(segundo)}`;
    cronometroTempo.innerHTML = tempo;
}

function zeroStart(number){
    return number> 10 ? number : `0${number}`;
}








function changeColor(){
    //LISTA - CORES
    //Sortear umma cor dentro do JASON
    //Coloar uma cor no monitor

    const colors =[
        "black",
        "red",
        "yellow",
        "blue",
        "white",
        "orange",
        "purple",
        "brown",
        "indigo"
    ];


    const radomNumber = Math.floor(Math.random() * colors.length);

    monitor.style.backgroundColor = colors[radomNumber];
}
    function mudarCor(){
        const colors =[
            "black",
            "red",
            "yellow",
            "blue",
            "white",
            "orange",
            "purple",
            "brown",
            "indigo"
        ];
        //variavel de contrele - Saber em qual cor está
        corFundo = corFundo + 1;

        //Analisar se a cor de fundo chegou ao final
        if(corFundo > colors.length - 1){
        corFundo = 0;
        //Mudar a cor do fundo
        monitor.style.backgroundColor = colors[0];
        }else{
            //Muda a cor do fundo para o index selecionado
            monitor.style.backgroundColor = colors[corFundo];
        }

     

    }

    function mudarPais(){
        const bandeira = document.querySelector(".flag");

        pais = pais + 1;

        if(pais > (listPais.length - 1)){
            pais = 0;
           //src
           bandeira.src = listPais[0].img; 
        }else{
           bandeira.src = listPais[pais].img;
        }

        mostrarNaTela(listPais[pais]);
    }
