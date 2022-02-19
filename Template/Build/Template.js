"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    // Punktesystem
    Template.minPoints = 0;
    Template.maxPoints = 100;
    Template.pointsGideon = 0;
    Template.pointsViktor = 0;
    function AddPointsViktor(num) {
        if (Template.pointsViktor < Template.maxPoints) {
            Template.pointsViktor += num;
        }
        let character = Template.characters.V;
        var loader = document.getElementById("points");
        loader.removeAttribute("style");
        loader.innerHTML = character.name +
            ' fand diese Antwort gut.';
        fade();
    }
    Template.AddPointsViktor = AddPointsViktor;
    function GetPointsViktor() {
        return Template.pointsViktor;
    }
    Template.GetPointsViktor = GetPointsViktor;
    function AddPointsGideon(num) {
        if (Template.pointsGideon < Template.maxPoints) {
            Template.pointsGideon += num;
        }
        let character = Template.characters.gideon;
        var loader = document.getElementById("points");
        loader.removeAttribute("style");
        loader.innerHTML = character.name +
            ' fand diese Antwort gut.';
        fade();
    }
    Template.AddPointsGideon = AddPointsGideon;
    function GetPointsGideon() {
        return Template.pointsGideon;
    }
    Template.GetPointsGideon = GetPointsGideon;
    function fade() {
        var el = document.getElementById('points');
        setTimeout(function () {
            el.classList.remove('hide', 'fade-out');
        }, 3000);
        el.classList.add('fade-in');
        el.classList.add('fade-out');
        el.classList.remove('fade-in');
        setTimeout(function () {
            el.classList.add('hide');
        }, 3000);
    }
    // MENU - create Menu with buttons
    let gameMenu;
    //  MENU - Audio functions
    let volume = 1.0;
    function incrementSound() {
        if (volume >= 10) {
            return;
        }
        volume += 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0) {
            return;
        }
        volume -= 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.decrementSound = decrementSound;
    function showCredits() {
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print("Hier könnten jetzt Credits stehen.");
        // showCredits();
    }
    Template.showCredits = showCredits;
    Template.inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        turnUpVolume: "+",
        turndownVolume: "-",
        credits: "Credits",
        about: "Controls",
    };
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Template.inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
            case Template.inGameMenu.credits:
                // CREDIT SCENE
                break;
            case Template.inGameMenu.turnUpVolume:
                incrementSound();
                break;
            case Template.inGameMenu.turndownVolume:
                decrementSound();
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    let menu = true;
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
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
    Template.dataForSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu =
            Template.ƒS.Menu.create(Template.inGameMenu, buttonFunctionalities, "gameMenu");
        let scenes = [
            { scene: Template.Scene10, name: "Scene10" },
            { scene: Template.Scene10_2, name: "Scene10_1" },
            { scene: Template.Scene10_2, name: "Scene10_2" },
            { scene: Template.Scene9, name: "Scene9" },
            { scene: Template.Scene11, name: "Scene11" },
            { scene: Template.Scene12, name: "Scene12" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
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
            end: { translation: Template.ƒS.positionPercent(20, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromCenterToLeft = fromCenterToLeft;
    function fromPosToLeftOut() {
        return {
            start: { translation: Template.ƒS.positionPercent(35, 100) },
            end: { translation: Template.ƒS.positionPercent(-35, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromPosToLeftOut = fromPosToLeftOut;
    ;
    function fromLeftOutToPos() {
        return {
            start: { translation: Template.ƒS.positionPercent(-35, 100) },
            end: { translation: Template.ƒS.positionPercent(35, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromLeftOutToPos = fromLeftOutToPos;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sound = {
        // music
        BackgroundTheme: "./Audio/Time for Rest.ogg",
        OutsideTheme: "./Audio/Town Square Well.wav",
        MysteriousTheme: "./Audio/Weird SItuation.ogg",
        // sound
        click: ""
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        dad: {
            name: "Dad"
        },
        addie: {
            name: "Addie",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/characters/addie_normal.png",
                happy: "./Images/characters/addie_happy.png",
                angry: "./Images/characters/addie_angry.png",
                shocked: "./Images/characters/addie_shocked.png",
                sad: "./Images/characters/addie_sad.png",
            }
        },
        gideon: {
            name: "Gideon",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/characters/gideon_normal.png",
                happy: "./Images/characters/gideon_happy.png",
                angry: "./Images/characters/gideon_angry.png",
                shocked: "./Images/characters/gideon_shocked.png",
                sad: "./Images/characters/gideon_sad.png",
            }
        },
        V: {
            name: "V",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/characters/V_normal.png",
                happy: "./Images/characters/V_happy.png",
                angry: "./Images/characters/V_angry.png",
                sad: "./Images/characters/V_sad.png",
            }
        },
        unknown: {
            name: "???",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                mysterious: "./Images/characters/V_mysterious.png",
            }
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.text = {
        Addie: {
            scene1: {
                T0000: "Ich hab mein Kopf nur kurz hingelegt um meine Augen auszuruhen.ich schwö-",
                T0001: "Warte was ? Oh man wieviel Uhr ist es ? Bin ich etwa schon wieder eingenickt.",
                T0003: "Hör bloß auf mit dem gejammer, ich hab die ganze Nacht durchgemacht um den Standort deiner verlorenen Zeituhr zufinden,damit du Dad keinen Herzinfakt zum Geburtstag schenken musst.",
                T0004: "Ich bin deine einzige Schwester.....",
                T0005: "Ja gib mir nur eine Sekunde,ich hab das Gefühl alles wieder vergessen zuhaben ...",
                T0006: "oh man ist ja schon gut,ich hab nicht alles vergessen du Idiot.",
                T0007: " Wir stecken in keinem Mordfall Gid ! ",
                T0008: "Wir kommen."
            },
            scene2: {
                T0000: "...also die Zeituhren haben ein GPS Track System, selbst durch die Zeit scheint es noch zu funktioniert.Somit können Dad und die anderen feststellen wo jeder einzelne von uns Zeitreisende sich gerade befindet, ich hab mir in der Nacht kurz einen Blick auf das System erlaubt...  ",
                T0001: "Tja was denkst du wohl ? Deine Lieblingsschwester hat dafür gesorgt dass das komplette System ein total versagen hat,die werden erstmal beschäftigt sein und können außerdem nicht nachverfolgen zu welcher Zeit wir an welchem Ort sind.",
                T0002: "Du hast es erfasst.",
                T0003: "Ok hier sollte uns niemand sehen,bist du bereit.",
                T0004: "Hier müsste es sein.",
                T0005: "Ich bin mir nicht sicher,lass uns einfach schnell nachsehen und wieder zurückreisen,das ganze ist mir zu unheimlich.",
                T0006: "jetzt geht das wieder los....",
                T0007: "und schon was gefunden ?",
                T0008: "Gideon was ist los ? ",
                T0009: "AH...aber wie ist das Möglich ? sein Zeitreisegerät es ist in unserer Zeit,ich hab es gesehen als ich nach dem GPS deiner Uhr aussschau gehalten habe.",
                T0010: "ja ...du hast wahrscheinlich recht ....aber schau sein Zeitreisegerät ...es ist auch nichtmehr dort.",
                T0011: "Wer war das ? ",
                T0012: "Da war gerade jemand....huh hier liegt etwas auf dem Boden ",
                T0013: "Entschuldige....Lass uns springen. ",
            },
            scene3: {
                T0000: " Ah das war knapp...  ",
                T0001: " Bevor wir den Wald verlassen habe,das auf dem Boden war eine Karte, ich vermute die anderen verschwundenen Zeitreisenden müssen sich dort befinden  ",
                T0002: " ...Wir sollten nun Dad und den anderen davon erzählen ,Mike wird schon länger vermisst. ",
                T0003: " Nein...ich...ja du hast recht es tut mir leid ich werde dir helfen....ich weiß auch schon wo wir anfangen können",
            },
            scene3_1: {
                T0000: " Möchtest du die Karte jetzt sehen oder nicht ? ",
            },
            scene3_2: {
                T0000: " Meinst du nicht das wir nun größere Probleme haben als deine dämliche Zeituhr,das ist doch nicht so schlimm ? ",
                T0001: " Okay,wir bekommen das schon hin ich weiß auch wo wir anfangen können,bereit für die nächste Zeitreise ?  ",
                T0002: " Gideon,du weißt wir müssen es Dad sagen. ",
            },
            scene4: {
                T0000: "Ich weiß nicht aber möglich ist es schon... ",
                T0001: "....möglich ",
                T0002: " Dahinten. ",
                T0003: "Okay .... ",
                T0004: "Hey stehen bleiben  ",
                T0005: " Wer bist du ? Wieso verfolgst du uns die ganze Zeit ? Bist du unser Feind oder unser Verbündeter ?   ",
                T0006: "Was meinst du damit ? Ich frage jetzt noch einmal wer bist du ?  ",
                T0007: "Hast du mir etwa die Karte vor die Füße gelegt,wieso willst du mir helfen ?  ",
                T0008: "Hör auf in Rätsekn zu sprechen und beantworte mir die Frage.  ",
                T0009: "Wovon sprichst du ?  ",
                T0010: " Warum sollte ich ? Ich stelle hier die Fragen. ",
                T0011: " Ja... ich weiß nicht wieso aber ja  ",
            },
        },
        Gideon: {
            scene1: {
                T0000: "Hallo....hallo ?",
                T0001: "Was ich noch hier mache ? Es ist bereits 8 Uhr am Morgen! Was tust du noch hier im Arbeitszimmer,Dad sucht dich schon ....",
                T0002: "Würde ich ja gerne aber du schläfst auf meinen Notizen!",
                T0003: "Ich hoffe dir ist in den restlichen Stunden die du hier noch verbracht hast, etwas hilfreiches eingefallen andernfalls war es  das mit mir!",
                T0004: "DU, bist eben meine absolute Lieblingsschwester",
                T0005: "Erklärst du mir alles auf dem Weg zu unserem neuen Auftrag ? Wir müssen jetzt echt los.",
                T0006: "Ok nochmal kurzer Rewind Addie, du und ich wir sind Teil einer Zeitreise Familie und arbeiten für die TimeForce..sowas wie  das FBI für Zeitreisen und-",
                T0007: "Hast du auch nicht vergessen das Dad uns dort nur die Drecksarbeit erledigen lässt, und wir jetzt vielleicht mitten in einem Mordfall in den 80ern stecken! ",
                T0008: "KÖNNTE ABER SEIN, wir haben keinen blassen Schimmer mehr Addie,der Typ hat unsere Gedanken gelöscht oder so ein Scheiß...ICH DREH DURCH",
                T0009: "Du nimmst das alles hier nicht wirklich ernst oder ? ",
                T0010: "Ja ...Ich bin einfach nur Froh das du dabei warst und wir das Problem nun gemeinsam lösen.",
            },
            scene2: {
                T0000: "GPS durch die Zeit ??? Ja klar ! Ich hab schon lange aufgehört für solche Fragen eine logische Antwort zu finden, aber wie konnte niemand bis jetzt davon erfahren das ich nichtmehr im besitz mmeiner Zeituhr bin ?  ",
                T0001: " Oh verdammt,Wir werden heute wohl nicht brav unseren , Auftrag erledigen oder ? ",
                T0003: " Bereit,wenn du es bist. ",
                T0004: " Mhm in welchem Jahr befinden wir uns ? Sieht mir nicht nach den 80ern aus..... ",
                T0005: "Mir ist so übel,du bist echt so mies im Zeitreisen ! Ich will mein eigenes Zeitreisegerät zurück, das ist ja nichtmehr auszuhalten.",
                T0006: "Endlich da... wir hätten uns den Laufweg sparen könen wenn wir zuvor mit der Bahn gefahren wären, aber nein du hattest es ja eilig.....dann lass uns mal suchen gehen.",
                T0008: "nein .... ich .... OMG",
                T0009: "Mike ...er ...",
                T0010: "Das ist doch nicht von Bedeutung,Addie er ist Tot...Wir müssen sofort zurück und das melden.",
                T0011: "Was meinst du ? ",
                T0012: "ADDIE ?? ",
            },
            scene3_1: {
                T0000: "Am Tatort bist du verrückt du lässt dort deine Fingerabdrücke ",
                T0001: " ja zeig mal her  ",
                T0002: " mhmm Mike war hier .... das heißt du hast wahrscheinlich recht mit deiner Vermutung lass uns keine Zeit verlieren. ",
            },
            scene3_2: {
                T0000: "Das geht nicht Addie,wir muessten ihm andernfalls auch von meiner verlorenen Yeituhr erzählen",
                T0001: " für dich vielleicht. ",
                T0002: "Super ",
                T0003: "Du würdest mir so in den Rücken fallen ?  ",
            },
            scene4: {
                T0000: "Denkst du er folgt uns ? ",
                T0001: " und denkst du wir finden noch eine Leiche ?   ",
                T0002: " Ich bin sowas von nicht bereit dafür.... ",
                T0003: " Lisa...",
                T0004: " Sie ist auch nichtmehr da.",
                T0005: " Ich lauf den ganz schnell runter,warte hier auf mich",
            },
        },
        Dad: {
            scene1: {
                T0000: "WAS DAUERT DA OBEN SO LANGE ?",
            },
        },
        V: {
            scene4: {
                T0000: "Addie ? ",
                T0001: "Nette Begrüßung ... mein Name ist Viktor, aber du kannst mich V nennen,für die zweite Frage ist es noch zu früh. ",
                T0002: "Das sagte ich doch bereits ich-",
                T0003: "Kommt drauf an aus welcher Sicht du dir diese Frage stellst.",
                T0004: "Addie,vertraust du mir ? ",
                T0005: "Es tut mir leid,aber die Zeitachse darf sich hier noch nicht spalten...",
                T0006: "Ich muss jetzt los,Gideon kommt zurück.Du musst mir versprechen das du dem Rätsel um die verschwundenen Zeitreisenden nicht weiter nachgehen wirst,kannst du das ?",
                T0007: "Du musst mir vertrauen",
                T0008: "Danke,dieses Mal haben wir vielleicht eine Chance ..mhm.. ja es könnte wirklich funktionieren.",
                T0009: "Dann sind wir beide verloren.",
            },
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.locations = {
        arbeitszimmer: {
            name: "arbeitszimmer",
            background: "./Images/backgrounds/arbeitszimmer.png"
        },
        gehweg: {
            name: "gehweg",
            background: "./Images/backgrounds/gehweg.jpg"
        },
        gasse1: {
            name: "gasse1",
            background: "./Images/backgrounds/gasse1.png"
        },
        gasse2: {
            name: "gasse2",
            background: "./Images/backgrounds/gasse2.jpg"
        },
        wald: {
            name: "wald",
            background: "./Images/backgrounds/wald.jpg"
        },
        mansion: {
            name: "mansion",
            background: "./Images/backgrounds/mansion.jpg"
        },
        leiche: {
            name: "leiche",
            background: "./Images/backgrounds/leiche.png"
        },
        black: {
            name: "black",
            background: "./Images/backgrounds/black.png"
        },
        white: {
            name: "white",
            background: "./Images/backgrounds/white.png"
        },
        zeitreise: {
            name: "Zeitreise",
            background: "./Images/backgrounds/zeitreise.png"
        },
        karte: {
            name: "karte",
            background: "./Images/backgrounds/karte.png"
        },
        chapter12: {
            name: "chapter12",
            background: "./Images/backgrounds/Kapitel/Kapitel12.png"
        },
        chapter11: {
            name: "chapter11",
            background: "./Images/backgrounds/Kapitel/Kapitel11.png"
        },
        chapter10: {
            name: "chapter10",
            background: "./Images/backgrounds/Kapitel/Kapitel10.png"
        },
        chapter9: {
            name: "chapter9",
            background: "./Images/backgrounds/Kapitel/Kapitel9.png"
        },
        chapter8: {
            name: "chapter8",
            background: "./Images/backgrounds/Kapitel/Kapitel8.png"
        },
        chapter7: {
            name: "chapter7",
            background: "./Images/backgrounds/Kapitel/Kapitel7.png"
        },
        chapter6: {
            name: "chapter6",
            background: "./Images/backgrounds/Kapitel/Kapitel6.png"
        },
        chapter5: {
            name: "chapter5",
            background: "./Images/backgrounds/Kapitel/Kapitel5.png"
        },
        chapter4: {
            name: "chapter4",
            background: "./Images/backgrounds/Kapitel/Kapitel4.png"
        },
        chapter3: {
            name: "chapter3",
            background: "./Images/backgrounds/Kapitel/Kapitel3.png"
        },
        chapter2: {
            name: "chapter2",
            background: "./Images/backgrounds/Kapitel/Kapitel2.png"
        },
        chapter1: {
            name: "chapter1",
            background: "./Images/backgrounds/Kapitel/Kapitel1.png"
        },
        ende1: {
            name: "Ende1",
            background: "./Images/backgrounds/Ende1.png"
        },
        ende2: {
            name: "Ende2",
            background: "./Images/backgrounds/Ende2.png"
        },
        ende3: {
            name: "Ende3",
            background: "./Images/backgrounds/Ende3.png"
        },
        ende4: {
            name: "Ende4",
            background: "./Images/backgrounds/Ende4.png"
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    // define transitions
    Template.transition = {
        swirl: {
            duration: 1.5,
            alpha: "./FreeTransitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        },
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Ende1() {
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.ende1);
        await Template.ƒS.update(5);
    }
    Template.Ende1 = Ende1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Ende2() {
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.ende2);
        await Template.ƒS.update(5);
    }
    Template.Ende2 = Ende2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Ende3() {
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.ende3);
        await Template.ƒS.update(5);
    }
    Template.Ende3 = Ende3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Ende4() {
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.ende4);
        await Template.ƒS.update(5);
    }
    Template.Ende4 = Ende4;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene10() {
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Sound.fade(Template.sound.OutsideTheme, 0.5, 0.5);
        await Template.ƒS.Location.show(Template.locations.gasse1);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.show();
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene3.T0000);
        await Template.ƒS.update(0.5);
        let firstDialogueElementOptions = {
            iSayA: "Gideon von der Karte erzählen ",
            iSayB: "Gideon nicht von der Karte erzählen",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene3.T0001);
                Template.AddPointsGideon(1);
                await Template.ƒS.update(1);
                return Template.Scene10_1();
                break;
            case firstDialogueElementOptions.iSayB:
                await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene3.T0002);
                await Template.ƒS.update(1);
                return Template.Scene10_2();
                break;
        }
    }
    Template.Scene10 = Scene10;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene10_1() {
        await Template.ƒS.Sound.fade(Template.sound.OutsideTheme, 0.5, 0.5);
        await Template.ƒS.Location.show(Template.locations.gasse1);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.show();
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.shocked, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene3_1.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene3_1.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene3_1.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.locations.karte);
        await Template.ƒS.update(5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene3_1.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.zeitreise);
        await Template.ƒS.update(5);
        await Template.ƒS.Location.show(Template.locations.chapter9);
        await Template.ƒS.update(5);
        await Template.ƒS.update(1);
        return Template.Scene9();
    }
    Template.Scene10_1 = Scene10_1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene10_2() {
        await Template.ƒS.Sound.fade(Template.sound.OutsideTheme, 0.5, 0.5);
        await Template.ƒS.Location.show(Template.locations.gasse1);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.show();
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene3_2.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene3_2.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.angry, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene3_2.T0001);
        await Template.ƒS.update(0.5);
        let firstDialogueElementOptions = {
            iSayA: "Gideon helfen",
            iSayB: "Gideon hilfe verweigern",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                Template.AddPointsGideon(1);
                await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene3_2.T0001);
                await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positionPercent(35, 100));
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene3_2.T0002);
                await Template.ƒS.update(0.5);
                break;
            case firstDialogueElementOptions.iSayB:
                await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene3_2.T0002);
                await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene3_2.T0003);
                await Template.ƒS.update(0.5);
                await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene3.T0002);
                break;
        }
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.update();
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.update();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.zeitreise);
        await Template.ƒS.update(5);
        await Template.ƒS.Location.show(Template.locations.chapter9);
        await Template.ƒS.update(5);
        await Template.ƒS.update(1);
        return Template.Scene9();
    }
    Template.Scene10_2 = Scene10_2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene11() {
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.chapter11);
        await Template.ƒS.update(5);
        await Template.ƒS.Sound.fade(Template.sound.OutsideTheme, 0.5, 0.5);
        await Template.ƒS.Location.show(Template.locations.gehweg);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.show();
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.shocked, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.happy, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.locations.gasse1);
        await Template.ƒS.update(5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0003);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0003);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Sound.fade(Template.sound.BackgroundTheme, 0, 0.5);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.locations.zeitreise);
        await Template.ƒS.update(5);
        await Template.ƒS.Sound.fade(Template.sound.MysteriousTheme, 0.5, 0.5);
        await Template.ƒS.Location.show(Template.locations.gasse2);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.show();
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0004);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0004);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0005);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0005);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.angry, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0006);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Sound.fade(Template.sound.MysteriousTheme, 0.5, 0.5);
        await Template.ƒS.Location.show(Template.locations.wald);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.show();
        Template.ƒS.Character.animate(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.fromPosToLeftOut());
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0006);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.update(0.5);
        // während er aus dem bildschirm ist
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0007);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0008);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.shocked, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0008);
        await Template.ƒS.update(0.5);
        Template.ƒS.Character.animate(Template.characters.gideon, Template.characters.gideon.pose.sad, Template.fromLeftOutToPos());
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0009);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.locations.leiche);
        await Template.ƒS.update(5);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.shocked, Template.ƒS.positionPercent(85, 100));
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.sad, Template.ƒS.positionPercent(15, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.Sound.play(Template.sound.click, 0.5, false);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.leiche);
        await Template.ƒS.update(2);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0009);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0010);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.sad, Template.ƒS.positionPercent(85, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0010);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.update(0.1);
        await Template.ƒS.update(0.1);
        await Template.ƒS.Location.show(Template.locations.wald);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.sad, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.sad, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.unknown, Template.characters.unknown.pose.mysterious, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.shocked, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.unknown);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0011);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0011);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0012);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene2.T0012);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene2.T0013);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.zeitreise);
        await Template.ƒS.update(5);
        await Template.ƒS.Location.show(Template.locations.chapter10);
        await Template.ƒS.update(5);
        await Template.ƒS.Sound.fade(Template.sound.BackgroundTheme, 0, 0.5);
        await Template.ƒS.update(1);
        return Template.Scene10();
    }
    Template.Scene11 = Scene11;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene12() {
        console.log("Intro");
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.chapter12);
        await Template.ƒS.update(5);
        document.getElementById('save').blur();
        Template.ƒS.Sound.play(Template.sound.BackgroundTheme, 0.2, true);
        await Template.ƒS.Location.show(Template.locations.arbeitszimmer);
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.show();
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0000);
        let firstDialogueElementOptions = {
            iSayA: "Gideon....was machst du noch hier ? ",
            iSayB: "Verschwinde,ich bin Müde",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                Template.AddPointsGideon(1);
                await Template.ƒS.Character.hide(Template.characters.gideon);
                await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.happy, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0001);
                await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positions.right);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene1.T0000);
                break;
            case firstDialogueElementOptions.iSayB:
                await Template.ƒS.Character.hide(Template.characters.gideon);
                await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.happy, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0002);
                await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positions.right);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene1.T0001);
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.shocked, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0003);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene1.T0003);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.happy, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0004);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.angry, Template.ƒS.positions.right);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene1.T0004);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0005);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positions.right);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene1.T0005);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene1.T0006);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0007);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.happy, Template.ƒS.positions.right);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene1.T0007);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.shocked, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0008);
        let secondDialogueElementOptions = {
            iSayA: "Woher willst du den wissen das es ein Mann war ? Vielleicht war es auch eine Frau. ",
            iSayB: "Ja du hast recht ich finde das ganze auch echt unheimlich.",
        };
        let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, "individualCSSClass");
        switch (secondDialogueElement) {
            case secondDialogueElementOptions.iSayA:
                // erste auswahl
                await Template.ƒS.Character.hide(Template.characters.gideon);
                await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.angry, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0009);
                await Template.ƒS.update(1);
                //ende hier
                break;
            case secondDialogueElementOptions.iSayB:
                Template.AddPointsGideon(1);
                // zweite auswahl
                await Template.ƒS.Character.hide(Template.characters.gideon);
                await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene1.T0010);
                //ende hier
                break;
        }
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.shocked, Template.ƒS.positions.right);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.shocked, Template.ƒS.positions.bottomcenter);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.dad, Template.text.Dad.scene1.T0000);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene1.T0008);
        await Template.ƒS.Sound.fade(Template.sound.BackgroundTheme, 0, 0.5);
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Character.hide(Template.characters.gideon);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.update(1);
        return Template.Scene11();
    }
    Template.Scene12 = Scene12;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene9() {
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.chapter9);
        await Template.ƒS.update(5);
        await Template.ƒS.Sound.fade(Template.sound.MysteriousTheme, 0.5, 0.5);
        await Template.ƒS.Location.show(Template.locations.mansion);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.show();
        await Template.ƒS.Character.show(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.normal, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene4.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene4.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene4.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Character.hide(Template.characters.addie);
        await Template.ƒS.Character.show(Template.characters.addie, Template.characters.addie.pose.shocked, Template.ƒS.positionPercent(65, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.locations.leiche);
        await Template.ƒS.update(5);
        await Template.ƒS.Location.show(Template.locations.white);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.leiche);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene4.T0003);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0003);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene4.T0004);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.gideon, Template.text.Gideon.scene4.T0005);
        await Template.ƒS.update(0.5);
        Template.ƒS.Character.animate(Template.characters.gideon, Template.characters.gideon.pose.normal, Template.fromPosToLeftOut());
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0004);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Location.show(Template.locations.mansion);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.V, Template.characters.V.pose.normal, Template.ƒS.positionPercent(35, 100));
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0000);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0005);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0001);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0006);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0002);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0007);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0003);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0008);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0004);
        await Template.ƒS.update(0.5);
        let firstDialogueElementOptions = {
            iSayA: "Ja ",
            iSayB: "Nein",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0011);
                Template.AddPointsViktor(2);
                break;
            case firstDialogueElementOptions.iSayB:
                await Template.ƒS.Speech.tell(Template.characters.addie, Template.text.Addie.scene4.T0010);
                await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0005);
                await Template.ƒS.update(0.5);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0006);
        await Template.ƒS.update(0.5);
        await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0007);
        await Template.ƒS.update(0.5);
        let secondDialogueElementOptions = {
            iSayA: "Ja.....Ich werde es versuchen  ",
            iSayB: "Nein...Tut mir leid das kann ich nicht ",
        };
        let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, "individualCSSClass");
        switch (secondDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                Template.AddPointsViktor(2);
                await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0008);
            case secondDialogueElementOptions.iSayB:
                await Template.ƒS.Speech.tell(Template.characters.V, Template.text.V.scene4.T0009);
                break;
        }
        if (Template.GetPointsViktor() > Template.GetPointsGideon()) {
            //Ending Viktor vertraut
            await Template.ƒS.update(1);
            return Template.Ende3();
        }
        if (Template.GetPointsViktor() < Template.GetPointsGideon()) {
            // Ending Gideon Vertraut
            await Template.ƒS.update(1);
            return Template.Ende2();
        }
        if (Template.GetPointsGideon() == 0 && Template.GetPointsViktor() == 0) {
            // Ending Keinem Vertraut
            await Template.ƒS.update(1);
            return Template.Ende4();
        }
        if (Template.GetPointsGideon() == 4 && Template.GetPointsViktor() == 4) {
            // Ending Beide Vertraut
            await Template.ƒS.update(1);
            return Template.Ende1();
        }
    }
    Template.Scene9 = Scene9;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map