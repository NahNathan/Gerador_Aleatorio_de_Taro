
const btn = document.getElementById("botao")
var texto = document.getElementById("texto")
var final = document.getElementById("final")

function random(){
    let i = Math.floor(Math.random()*44)
    carta.setAttribute("src",`./Cartas/${i}.png`)
    switch (i){
    case 0:
        texto.firstChild.nodeValue="O Tolo, carta zero do tarô, encoraja você a experimentar algo novo e aventureiro. A falta de familiaridade pode ser revigorante, mas tome cuidado para não se colocar em perigo desnecessário"
        final.firstChild.nodeValue="🤡 Feito por Nathan RDS"
        break;
    case 1:
        texto.firstChild.nodeValue="O Mago prevê que uma oportunidade ou ideia se apresentará a você como por mágica, mas você deve agarrá-la antes que ela desapareça sob truques e falsas promessas"
        final.firstChild.nodeValue="🧙‍♂️ Feito por Nathan RDS"
        break;
    case 2:
        texto.firstChild.nodeValue="A Suma Sacerdotisa recomenda que você se conecte com sua intuição para descobrir novos insights e verdades, mas você deve ser paciente com o processo, pois ele resistirá aos seus esforços para controlá-lo."
        final.firstChild.nodeValue="🧙‍♀️ Feito por Nathan RDS"
        break;
    case 3:
        texto.firstChild.nodeValue="A Imperatriz pede que você enfrente um desafio por meio de gentileza, abertura e generosidade, mas você deve ter cuidado para não permitir que outros usem sua boa vontade para fins egoístas"
        final.firstChild.nodeValue="👸 Feito por Nathan RDS"
        break;
    case 4:
        texto.firstChild.nodeValue="O Imperador aconselha você a assumir o controle de uma situação caótica com firmeza e determinação, mas você deve evitar ser muito duro e incorrer no ressentimento daqueles ao seu redor"
        final.firstChild.nodeValue="🤴 Feito por Nathan RDS"
        break;
    case 5:
        texto.firstChild.nodeValue="O Hierofante, também conhecido como O Papa, aconselha você a seguir seu caminho atual e evitar distrações ou desvios, mas não se deixe ficar rígido ou quebradiço, pois as coisas quebradiças tendem a rachar"
        final.firstChild.nodeValue="👨‍⚖️ Feito por Nathan RDS"
        break;
    case 6:
        texto.firstChild.nodeValue="Os Amantes convidam você a explorar uma paixão negligenciada ou negligenciada, mas não deixe que chamas momentâneas de capricho e entusiasmo destruam seus compromissos de longa data"
        final.firstChild.nodeValue="💞 Feito por Nathan RDS" 
        break;
    case 7:
        texto.firstChild.nodeValue="A Carruagem insta você a perseguir uma antiga ambição com nova intensidade e vigor. O sucesso é iminente, mas você deve se concentrar no caminho que está à frente, para não cair."
        final.firstChild.nodeValue="🎠 Feito por Nathan RDS"
        break;
    case 8:
        texto.firstChild.nodeValue="A força o orienta a reunir sua bravura e coragem para superar um desafio teimoso, mas você não deve desperdiçar esse poder em trivialidades"
        final.firstChild.nodeValue="🦁 Feito por Nathan RDS"
        break;
    case 9:
        texto.firstChild.nodeValue="O Eremita o lembra de dar a si mesmo o tempo adequado para auto-reflexão e introspecção, mas você também deve tomar cuidado para não cair no isolamento ou no auto-envolvimento excessivo"
        final.firstChild.nodeValue="🎅 Feito por Nathan RDS"
        break;
    case 10:
        texto.firstChild.nodeValue="A Roda da Fortuna pressagia uma mudança de circunstâncias, muitas vezes para melhor, mas ocasionalmente não. Você deve se lembrar, no entanto, que as rodas do destino nunca param de girar, e a adaptabilidade é importante"
        final.firstChild.nodeValue="🎡 Feito por Nathan RDS"
        break;
    case 11:
        texto.firstChild.nodeValue="A Justiça informa que agora é a hora de corrigir uma injustiça cometida contra você ou um ente querido, mas em troca você deve começar a lidar com suas próprias ações injustas"
        final.firstChild.nodeValue="⚔ Feito por Nathan RDS"
        break;
    case 12:
        texto.firstChild.nodeValue="O Enforcado lembra que o sucesso requer sacrifício pessoal e dedicação inabalável. Lembre-se, no entanto, que é tolice se martirizar apenas por atenção ou simpatia"
        final.firstChild.nodeValue="🎣 Feito por Nathan RDS"
        break;
    case 13:
        texto.firstChild.nodeValue="A morte prenuncia o fim de algo querido para você e a chegada de algo novo para substituí-lo. Você não deve tentar parar este processo, pois é natural e inevitável"
        final.firstChild.nodeValue="💀 Feito por Nathan RDS"
        break;
    case 14:
        texto.firstChild.nodeValue="A temperança o impele a buscar o sucesso através do equilíbrio e da moderação. Evite decisões precipitadas ou soluções extremas, bem como timidez ou presunção excessiva"
        final.firstChild.nodeValue="🍷 Feito por Nathan RDS"    
        break;
    case 15:
        texto.firstChild.nodeValue="O Diabo desafia você a se libertar de um vício ou apego doentio, mas você deve ser paciente consigo mesmo, pois o Diabo pode se alimentar de ódio a si mesmo"
        final.firstChild.nodeValue="😈 Feito por Nathan RDS"
        break;
    case 16:
        texto.firstChild.nodeValue="A Torre avisa que parte de sua vida precisa urgentemente de uma reestruturação e pode desmoronar em breve, mas com algum planejamento, você pode construir algo muito mais forte em seu lugar"
        final.firstChild.nodeValue="🏰 Feito por Nathan RDS"
        break;
    case 17:
        texto.firstChild.nodeValue="A Estrela aconselha você a não perder a esperança por algo aparentemente inatingível. Está muito mais perto do que você pensa, mas desejar por si só é insuficiente. Você deve agir em seus pensamentos também"
        final.firstChild.nodeValue="🌟 Feito por Nathan RDS"
        break;
    case 18:
        texto.firstChild.nodeValue="A Lua aconselha você a procurar as respostas para suas perguntas em lugares escuros e inexplorados. Os resultados serão brilhantes, mas podem levar algum tempo para encontrar"
        final.firstChild.nodeValue="🌙 Feito por Nathan RDS"
        break;
    case 19:
        texto.firstChild.nodeValue="O Sol sugere que a resposta às suas perguntas está claramente diante de você como uma luz brilhante, mas é melhor abordá-la com calma e a uma certa distância, pois a verdade pode queimar você"
        final.firstChild.nodeValue="☀ Feito por Nathan RDS"
        break;
    case 20:
        texto.firstChild.nodeValue="O julgamento o aconselha a examinar suas motivações e prioridades e abandonar o que é inútil ou mesquinho. No entanto, não julgue as coisas com muita severidade, pois a utilidade vem de muitas formas"
        final.firstChild.nodeValue="⚖ Feito por Nathan RDS"
        break;
    case 21:
        texto.firstChild.nodeValue="O Mundo, a última carta e culminação do tarô, encoraja você a reunir seus pensamentos e ações dispersos e colocá-los em algo significativo. Os resultados vão surpreendê-lo, mas o processo leva tempo"
        final.firstChild.nodeValue="🌎 Feito por Nathan RDS"
        break;
    case 22:
        texto.firstChild.nodeValue="O Tolo Invertido representa imprudência, desconsideração e ser aproveitado"
        final.firstChild.nodeValue="Feito por Nathan RDS 🤡"
        break;
    case 23:
        texto.firstChild.nodeValue="O Mago Invertido representa truques, ilusões e estar fora de contato"
        final.firstChild.nodeValue="Feito por Nathan RDS 🧙‍♂️"
        break;
    case 24:
        texto.firstChild.nodeValue="A Suma Sacerdotisa Invertida simboliza falta de centro, perda da voz interior e sentimentos reprimidos"
        final.firstChild.nodeValue="Feito por Nathan RDS 🧙‍♀️"
        break;
    case 25:
        texto.firstChild.nodeValue="A Imperatriz Invertida simboliza dependência, sufocamento, vazio, bisbilhotice"
        final.firstChild.nodeValue="Feito por Nathan RDS 👸"
        break;
    case 26:
        texto.firstChild.nodeValue="O Imperador Invertido representa a tirania, rigidez e frieza"
        final.firstChild.nodeValue="Feito por Nathan RDS 🤴"
        break;
    case 27:
        texto.firstChild.nodeValue="O Hierofante Invertido significa rebelião, subversão, novas abordagens"
        final.firstChild.nodeValue="Feito por Nathan RDS 👨‍⚖️"
        break;
    case 28:
        texto.firstChild.nodeValue="Os Amantes Invertidos significa perda de equilíbrio, unilateralidade e desarmonia"
        final.firstChild.nodeValue="Feito por Nathan RDS 💞" 
        break;
    case 29:
        texto.firstChild.nodeValue="A Carruagem Invertida representa falta de controle, falta de direção, agressão"
        final.firstChild.nodeValue="Feito por Nathan RDS 🎠"
        break;
    case 30:
        texto.firstChild.nodeValue="A Força Invertida representa auto dúvida, fraqueza e insegurança"
        final.firstChild.nodeValue="Feito por Nathan RDS 🦁"
        break;
    case 31:
        texto.firstChild.nodeValue="O Eremita invertido representa solidão, isolamento e que você pode ter perdido o seu caminho"
        final.firstChild.nodeValue="Feito por Nathan RDS 🎅"
        break;
    case 32:
        texto.firstChild.nodeValue="A Roda da Fortuna Invertida simboliza falta de controle, má sorte e o apego ao controle"
        final.firstChild.nodeValue="Feito por Nathan RDS 🎡"
        break;
    case 33:
        texto.firstChild.nodeValue="A Justiça Invertida simboliza desonestidade, irresponsabilidade e injustiça"
        final.firstChild.nodeValue="Feito por Nathan RDS ⚔"
        break;
    case 34:
        texto.firstChild.nodeValue="O Enforcado Invertido representa protelação, sacrifício desnecessário, medo do sacrifício"
        final.firstChild.nodeValue="Feito por Nathan RDS 🎣"
        break;
    case 35:
        texto.firstChild.nodeValue="A Morte Invertida representa o medo da mudança, apegar-se a algo desnecessário, estagnação, decadência"
        final.firstChild.nodeValue="Feito por Nathan RDS 💀"
        break;
    case 36:
        texto.firstChild.nodeValue="A Temperança Invertida significa extremos, excessos e falta de equilíbrio"
        final.firstChild.nodeValue="Feito por Nathan RDS 🍷"    
        break;
    case 37:
        texto.firstChild.nodeValue="O Diabo Invertido significa liberdade, liberar e restaurar o controle"
        final.firstChild.nodeValue="Feito por Nathan RDS 😈"
        break;
    case 38:
        texto.firstChild.nodeValue="A Torre Invertida simboliza o desastre evitado, o desastre atrasado e o medo do sofrimento"
        final.firstChild.nodeValue="Feito por Nathan RDS 🏰"
        break;
    case 39:
        texto.firstChild.nodeValue="A Estrela Invertida simboliza infidelidade, desânimo, insegurança"
        final.firstChild.nodeValue="Feito por Nathan RDS 🌟"
        break;
    case 40:
        texto.firstChild.nodeValue="A Lua Invertida representa confusão, medo, má interpretação e desentendimento"
        final.firstChild.nodeValue="Feito por Nathan RDS 🌙"
        break;
    case 41:
        texto.firstChild.nodeValue="O Sol Invertido representa negatividade, depressão e tristeza"
        final.firstChild.nodeValue="Feito por Nathan RDS ☀"
        break;
    case 42:
        texto.firstChild.nodeValue="O Julgamento Invertido significa falta de autoconsciência, dúvida, auto-aversão"
        final.firstChild.nodeValue="Feito por Nathan RDS ⚖"
        break;
    case 43:
        texto.firstChild.nodeValue="O Mundo Invertido significa incompletude e falta de encerramento"
        final.firstChild.nodeValue="Feito por Nathan RDS 🌎"
        break;
    }
} 

btn.addEventListener("click",random)