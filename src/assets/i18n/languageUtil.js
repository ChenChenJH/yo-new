import zh_CN from './zh_CN.js';
import en_US from './en_US.js';
import zh_TW from './zh_TW.js';

const cn = zh_CN;
const en = en_US;
const tw = zh_TW;
let CurrentLang = cn;

function chooseLocale(){
  
    if(window.sessionStorage.lang){
      let language = JSON.parse(sessionStorage['lang']);
      if(language=='zh_TW'){
        CurrentLang = tw;
      }else if(language == 'en_US'){
        CurrentLang = en;
      }else{
        CurrentLang = cn;
      }
      return;
    }
    
    switch(navigator.language.split('-')[0]){
        case 'en':
          CurrentLang = en;
          if(!window.sessionStorage.lang){
            sessionStorage.lang=JSON.stringify(CurrentLang.lang);
          }
          break;
        case 'zh':
        	if(navigator.language.toLowerCase() == "zh_tw" || navigator.language.toLowerCase() == "zh_hk"){
           		CurrentLang = tw;
        	}else{
         		CurrentLang = cn;
         	}
           if(!window.sessionStorage.lang){
            sessionStorage.lang=JSON.stringify(CurrentLang.lang);
          }
            break;
       
        default:
          CurrentLang = cn;
          if(!window.sessionStorage.lang){
            sessionStorage.lang=JSON.stringify(CurrentLang.lang);
          }
          break;
    }
}

chooseLocale();
function SetCurrentLang(value){
	if(value=="en_US"){
		CurrentLang = en;
	}else if(value == "zh_TW"){
		CurrentLang = tw;
	}else{
		CurrentLang = cn;
	}
  sessionStorage.lang=JSON.stringify(CurrentLang.lang);
	return CurrentLang;
}

export {CurrentLang,SetCurrentLang};