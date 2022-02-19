namespace Template {
    export async function Ende2(): ƒS.SceneReturn {
        console.log("ending 2");

    await ƒS.Speech.hide();
    await ƒS.Character.hideAll();
    await ƒS.update();

    await ƒS.Location.show(locations.ende2);
    await ƒS.update(5);


 //Temporärer fix, dass das Novel nicht neustartet.
 let pressK: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.getKeypress(ƒ.KEYBOARD_CODE.K)]); await pressK();

}   }