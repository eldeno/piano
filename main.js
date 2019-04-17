const keyDO = document.getElementById('do');
const keyRE = document.getElementById('re');
const keyMI = document.getElementById('mi');
const keyFA = document.getElementById('fa');
const keySOL = document.getElementById('sol');
const keyLA = document.getElementById('la');
const keySI = document.getElementById('si');
const keyDO2 = document.getElementById('do2');

const keyDOSB = document.getElementById('doSB');
const keyRESB = document.getElementById('reSB');
const keyMISB = document.getElementById('miSB');
const keyFASB = document.getElementById('faSB');
const keySOLSB = document.getElementById('solSB');

// Audio

soundDO = new Audio();
soundRE = new Audio();
soundMI = new Audio();
soundFA = new Audio();
soundSOL = new Audio();
soundLA = new Audio();
soundSI = new Audio();
soundDO2 = new Audio();

soundDOSB = new Audio();
soundRESB = new Audio();
soundMISB = new Audio();
soundFASB = new Audio();
soundSOLSB = new Audio();

soundDO.src = 'audio/203481__tesabob2001__c-4.mp3';
soundRE.src = 'audio/203472__tesabob2001__d4.mp3';
soundMI.src = 'audio/203471__tesabob2001__e4.mp3';
soundFA.src = 'audio/203500__tesabob2001__f-4.mp3';
soundSOL.src = 'audio/203492__tesabob2001__g4.mp3';
soundLA.src = 'audio/203465__tesabob2001__a4.mp3';
soundSI.src = 'audio/203462__tesabob2001__b4.mp3';
soundDO2.src = 'audio/203485__tesabob2001__c5.mp3';

soundDOSB.src = 'audio/203480__tesabob2001__c-5.mp3';
soundRESB.src = 'audio/203473__tesabob2001__d5.mp3';
soundMISB.src = 'audio/203476__tesabob2001__e5.mp3';
soundFASB.src = 'audio/203499__tesabob2001__f-5.mp3';
soundSOLSB.src = 'audio/203495__tesabob2001__g5.mp3';

///////////////

const init = () => {
  getInput();
}

const getInput = () => {

  keyDO.addEventListener('click', () => {
    soundDO.play();
  });
  keyRE.addEventListener('click', () => {
    soundRE.play();
  });
  keyMI.addEventListener('click', () => {
    soundMI.play();
  });
  keyFA.addEventListener('click', () => {
    soundFA.play();
  });
  keySOL.addEventListener('click', () => {
    soundSOL.play();
  });
  keyLA.addEventListener('click', () => {
    soundLA.play();
  });
  keySI.addEventListener('click', () => {
    soundSI.play();
  });
  keyDO2.addEventListener('click', () => {
    soundDO2.play();
  });
  keyDO.addEventListener('click', () => {
    soundDO.play();
  });

  keyDOSB.addEventListener('click', () => {
    soundDOSB.play();
  });
  keyRESB.addEventListener('click', () => {
    soundRESB.play();
  });
  keyMISB.addEventListener('click', () => {
    soundMISB.play();
  });
  keyFASB.addEventListener('click', () => {
    soundFASB.play();
  });
  keySOLSB.addEventListener('click', () => {
    soundSOLSB.play();
  });

}

init();