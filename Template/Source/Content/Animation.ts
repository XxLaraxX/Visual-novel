namespace Template {
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
          end: {  translation: ƒS.positionPercent(20, 100) },
          duration: 1,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
    
    

      export function fromPosToLeftOut(): ƒS.AnimationDefinition {
        return {
            start: { translation:ƒS.positionPercent(35,100) },
            end: { translation: ƒS.positionPercent(-35,100) },
            duration: 1, // as long as you want
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };



    export function fromLeftOutToPos(): ƒS.AnimationDefinition {
      return {
          start: { translation:ƒS.positionPercent(-35,100) },
          end: { translation: ƒS.positionPercent(35,100) },
          duration: 1, // as long as you want
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      }
  };
}