namespace Template {
    export async function Ende2(): ƒS.SceneReturn {
 

    await ƒS.Speech.hide();
    await ƒS.Character.hideAll();
    await ƒS.update();

    await ƒS.Location.show(locations.ende2);
    await ƒS.update(5);



}   }