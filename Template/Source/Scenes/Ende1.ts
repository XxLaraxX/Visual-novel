namespace Template {
    export async function Ende1(): ƒS.SceneReturn {
 

    await ƒS.Speech.hide();
    await ƒS.Character.hideAll();
    await ƒS.update();

    await ƒS.Location.show(locations.ende1);
    await ƒS.update(5);

console.log("ending 1");
    //Temporärer fix, dass das Novel nicht neustartet.
    let pressK: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.getKeypress(ƒ.KEYBOARD_CODE.K)]); await pressK();

}   }
