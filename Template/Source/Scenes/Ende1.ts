namespace Template {
    export async function Ende1(): ƒS.SceneReturn {
 

    await ƒS.Speech.hide();
    await ƒS.Character.hideAll();
    await ƒS.update();

    await ƒS.Location.show(locations.ende1);
    await ƒS.update(5);



}   }
