namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;



  // Punktesystem
  export let minPoints = 0;
  export let maxPoints = 100;
  export let pointsGideon = 0;
  export let pointsViktor= 0;





  export function AddPointsViktor(num: number) {
    if (pointsViktor < maxPoints) {
      pointsViktor += num;
    }
    let character = characters.V;
    var loader = document.getElementById("points");
    loader.removeAttribute("style");


    loader.innerHTML = character.name +
     ' fand diese Antwort gut.';
 
     fade();


  

  }
  export function GetPointsViktor(): number {

    return pointsViktor;
  }



  export function AddPointsGideon(num: number) {
    if (pointsGideon < maxPoints) {
      pointsGideon += num;
    }
    let character = characters.gideon;
    var loader = document.getElementById("points");
    loader.removeAttribute("style");


    loader.innerHTML = character.name +
     ' fand diese Antwort gut.';
 
     fade();


  

  }

  export function GetPointsGideon(): number {

    return pointsGideon;
  }








 









  
  function fade(){

     var el = document.getElementById('points');

     setTimeout(function () {
     el.classList.remove('hide','fade-out');
    },3000);
     el.classList.add('fade-in')
    

    el.classList.add('fade-out');
    el.classList.remove('fade-in');
    setTimeout(function () {
      el.classList.add('hide');
    },3000);
  }
















  // MENU - create Menu with buttons
  let gameMenu: ƒS.Menu;


  //  MENU - Audio functions

  let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume >= 10) {
      return;
    }

    volume += 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decrementSound(): void {
    if (volume <= 0) {
      return;
    }

    volume -= 0.5;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print("Hier könnten jetzt Credits stehen.");

    // showCredits();
  }

  export let inGameMenu = {
    save: "Save",
    load: "Load",
    close: "Close",
    turnUpVolume: "+",
    turndownVolume: "-",
    credits: "Credits",
    about: "Controls",
  };


  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        menu = false;
        break;
      case inGameMenu.credits:
        // CREDIT SCENE
        break;
      case inGameMenu.turnUpVolume:
        incrementSound();
        break;
      case inGameMenu.turndownVolume:
        decrementSound();
    }
  }


  let menu: boolean = true;
  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.M:

        if (menu) {

          gameMenu.close();
          menu = false;
        }
        else {
          gameMenu.open();
          menu = true;
        }
        break;
    }
  }

  export let dataForSave = {

  };




  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu =
      ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");



    let scenes: ƒS.Scenes = [
      { scene: Scene12, name: "Scene12" },
      { scene: Scene11, name: "Scene11" },
      { scene: Scene10, name: "Scene10" },
      { scene: Scene10_1, name: "Scene10_1" },
      { scene: Scene10_2, name: "Scene10_2" },
      { scene: Scene9, name: "Scene9" },
     
      
   
     
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    ƒS.Progress.go(scenes);
  }


}