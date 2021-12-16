"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    Template.sound = {
        // music
        backgroundTheme: "",
        // sound
        click: ""
    };
    Template.locations = {
        arbeitszimmer: {
            name: "arbeitszimmer",
            background: "./Images/Backgrounds/arbeitszimmer.png"
        }
    };
    // Stilfrage - Eigenen Styleguide für FS veröffentlichen? 
    Template.characters = {
        narrator: {
            name: ""
        },
        addie: {
            name: "Addie",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/characters/addie_normal.png",
            }
        },
        gideon: {
            name: "Gideon",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
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
    function fromRightToOutOfCanvas() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 100) },
            end: { translation: Template.ƒS.positionPercent(120, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromRightToOutOfCanvas = fromRightToOutOfCanvas;
    function fromRightToLeft() {
        return {
            start: { translation: Template.ƒS.positions.bottomright },
            end: { translation: Template.ƒS.positions.bottomleft },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromRightToLeft = fromRightToLeft;
    function fromCenterToLeft() {
        return {
            start: { translation: Template.ƒS.positions.bottomcenter },
            end: { translation: Template.ƒS.positions.bottomleft },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromCenterToLeft = fromCenterToLeft;
    Template.dataForSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Introduction to FS" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("Intro");
        let text = {
            Addie: {
                T0000: "Ich hab mein Kopf nur kurz hingelegt um meine auszuruhen..ich schwö-",
                T0001: "Warte was ? Oh man wieviel Uhr ist es ? Bin ich etwa schonwieder eingenickt"
            },
            Gideon: {
                T0000: "Hallo....hallo ?",
                T0001: "Was ich noch hier mache ? Es ist 6 Uhr am Morgen! lass mich raten du bist hier wieder eingeschlafen.",
                T0002: "Würde ich ja gerne aber du schläfst auf meinen Notizen!",
                T0003: "Würde ich ja gerne aber du schläfst auf meinen Notizen!",
            },
        };
        await Template.ƒS.Location.show(Template.locations.arbeitszimmer);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, text.Gideon.T0000);
        let firstDialogueElementOptions = {
            iSayA: "Gideon....was machst du noch hier ? ",
            iSayB: "Verschwind ich bin noch müde",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                await Template.ƒS.Character.hide(Template.characters.gideon);
                await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.happy, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.gideon, text.Gideon.T0001);
                await Template.ƒS.Character.animate(Template.characters.gideon, Template.characters.gideon.pose.happy, Template.fromCenterToLeft());
                await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positions.right);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.addie, text.Addie.T0000);
                break;
            case firstDialogueElementOptions.iSayB:
                await Template.ƒS.Character.hide(Template.characters.gideon);
                await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.happy, Template.ƒS.positions.center);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.gideon, text.Gideon.T0002);
                await Template.ƒS.Character.animate(Template.characters.gideon, Template.characters.gideon.pose.happy, Template.fromCenterToLeft());
                await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positions.right);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.addie, text.Addie.T0001);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.gideon, text.Gideon.T0003);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map