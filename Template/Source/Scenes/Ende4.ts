namespace Template {
    export async function Ende4(): ƒS.SceneReturn {
 

    await ƒS.Speech.hide();
    await ƒS.Character.hideAll();
    await ƒS.update();

    await ƒS.Location.show(locations.ende4);
    await ƒS.update(5);



}   }