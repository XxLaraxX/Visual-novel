declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let minPoints: number;
    let maxPoints: number;
    let pointsGideon: number;
    let pointsViktor: number;
    function AddPointsViktor(num: number): void;
    function GetPointsViktor(): number;
    function AddPointsGideon(num: number): void;
    function GetPointsGideon(): number;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
    let inGameMenu: {
        save: string;
        load: string;
        close: string;
        turnUpVolume: string;
        turndownVolume: string;
        credits: string;
        about: string;
    };
    function buttonFunctionalities(_option: string): Promise<void>;
    let dataForSave: {};
}
declare namespace Template {
    function fromRightToOutOfCanvas(): ƒS.AnimationDefinition;
    function fromRightToLeft(): ƒS.AnimationDefinition;
    function fromCenterToLeft(): ƒS.AnimationDefinition;
    function fromPosToLeftOut(): ƒS.AnimationDefinition;
    function fromLeftOutToPos(): ƒS.AnimationDefinition;
}
declare namespace Template {
    let sound: {
        BackgroundTheme: string;
        OutsideTheme: string;
        MysteriousTheme: string;
        click: string;
    };
}
declare namespace Template {
    let characters: {
        dad: {
            name: string;
        };
        addie: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                angry: string;
                shocked: string;
                sad: string;
            };
        };
        gideon: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                angry: string;
                shocked: string;
                sad: string;
            };
        };
        V: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                angry: string;
                sad: string;
            };
        };
        unknown: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                mysterious: string;
            };
        };
    };
}
declare namespace Template {
    let text: {
        Addie: {
            scene1: {
                T0000: string;
                T0001: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
            };
            scene2: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
            };
            scene3: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
            };
            scene3_1: {
                T0000: string;
            };
            scene3_2: {
                T0000: string;
                T0001: string;
                T0002: string;
            };
            scene4: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
            };
        };
        Gideon: {
            scene1: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
            };
            scene2: {
                T0000: string;
                T0001: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
            };
            scene3_1: {
                T0000: string;
                T0001: string;
                T0002: string;
            };
            scene3_2: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
            };
            scene4: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
            };
        };
        Dad: {
            scene1: {
                T0000: string;
            };
        };
        V: {
            scene4: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
            };
        };
    };
}
declare namespace Template {
    let locations: {
        arbeitszimmer: {
            name: string;
            background: string;
        };
        gehweg: {
            name: string;
            background: string;
        };
        gasse1: {
            name: string;
            background: string;
        };
        gasse2: {
            name: string;
            background: string;
        };
        wald: {
            name: string;
            background: string;
        };
        mansion: {
            name: string;
            background: string;
        };
        leiche: {
            name: string;
            background: string;
        };
        black: {
            name: string;
            background: string;
        };
        white: {
            name: string;
            background: string;
        };
        zeitreise: {
            name: string;
            background: string;
        };
        karte: {
            name: string;
            background: string;
        };
        chapter12: {
            name: string;
            background: string;
        };
        chapter11: {
            name: string;
            background: string;
        };
        chapter10: {
            name: string;
            background: string;
        };
        chapter9: {
            name: string;
            background: string;
        };
        chapter8: {
            name: string;
            background: string;
        };
        chapter7: {
            name: string;
            background: string;
        };
        chapter6: {
            name: string;
            background: string;
        };
        chapter5: {
            name: string;
            background: string;
        };
        chapter4: {
            name: string;
            background: string;
        };
        chapter3: {
            name: string;
            background: string;
        };
        chapter2: {
            name: string;
            background: string;
        };
        chapter1: {
            name: string;
            background: string;
        };
        ende1: {
            name: string;
            background: string;
        };
        ende2: {
            name: string;
            background: string;
        };
        ende3: {
            name: string;
            background: string;
        };
        ende4: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    let transition: {
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Template {
    function Ende1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ende2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ende3(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ende4(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene10(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene10_1(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene10_2(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene11(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene12(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene9(): ƒS.SceneReturn;
}
