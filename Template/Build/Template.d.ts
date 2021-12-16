declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let sound: {
        backgroundTheme: string;
        click: string;
    };
    let locations: {
        arbeitszimmer: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        addie: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        gideon: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
            };
        };
    };
    function fromRightToOutOfCanvas(): ƒS.AnimationDefinition;
    function fromRightToLeft(): ƒS.AnimationDefinition;
    function fromCenterToLeft(): ƒS.AnimationDefinition;
    let dataForSave: {};
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
