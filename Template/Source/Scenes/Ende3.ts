namespace Template {
    export async function Ende3(): ƒS.SceneReturn {
 

    await ƒS.Speech.hide();
    await ƒS.Character.hideAll();
    await ƒS.update();

    await ƒS.Location.show(locations.ende3);
    await ƒS.update(5);



}   }