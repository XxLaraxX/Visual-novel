namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

 




  export let sound = {
    // music
    backgroundTheme: "",

    // sound
    click: ""
  };


  export let locations = {
    arbeitszimmer: {
      name: "arbeitszimmer",
      background: "./Images/Backgrounds/arbeitszimmer.png"
    }
  };

  // Stilfrage - Eigenen Styleguide für FS veröffentlichen? 
  export let characters = {
    narrator: {
      name: ""
    },
    addie: {
      name: "Addie",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/characters/addie_normal.png",
      
      }
    },
    gideon: {
      name: "Gideon",
      
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/characters/gideon_normal.png",
        happy: "./Images/characters/gideon_happy.png",
  
      }
    }
  };

  // Animations
  // export function jirkaAnimation(): ƒS.AnimationDefinition {
  //   return {
  //     start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0) },
  //     end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
  //     duration: 1,
  //     playmode: ƒS.ANIMATION_PLAYMODE.LOOP
  //   };
  // }

  export function fromRightToOutOfCanvas(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 100) },
      end: { translation: ƒS.positionPercent(120, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }

  export function fromRightToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomright },
      end: { translation: ƒS.positions.bottomleft },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }


  export function fromCenterToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomcenter },
      end: { translation: ƒS.positions.bottomleft },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
   




  export let dataForSave = {

  };



  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Introduction to FS" }
    ];



    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);


    // start the sequence
    ƒS.Progress.go(scenes);
  }


}