namespace Template {
    export async function Scene10(): ƒS.SceneReturn {

        await ƒS.Speech.hide();

        await ƒS.Sound.fade(sound.OutsideTheme, 0.5, 0.5, true);
        await ƒS.Location.show(locations.gasse1);
        await ƒS.update(1);
        await ƒS.Speech.show();


        await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positionPercent(35, 100))
        await ƒS.update(0.5);
        await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positionPercent(65, 100))
        await ƒS.update(0.5);


        await ƒS.Speech.tell(characters.addie, text.Addie.scene3.T0000);
        await ƒS.update(0.5);

        let firstDialogueElementOptions = {
            iSayA: "Gideon von der Karte erzählen ",
            iSayB: "Gideon nicht von der Karte erzählen",

        };
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");


        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                await ƒS.Speech.tell(characters.addie, text.Addie.scene3.T0001);
                AddPointsGideon(1);

                await ƒS.update(1);
                return Scene10_1();



                break;
            case firstDialogueElementOptions.iSayB:

                await ƒS.Speech.tell(characters.addie, text.Addie.scene3.T0002);

                await ƒS.update(1);
                return Scene10_2();

                break;

        }




    }
}
