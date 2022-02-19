namespace Template {
    export async function Scene9(): ƒS.SceneReturn {


        await ƒS.Speech.hide();

        await ƒS.Location.show(locations.chapter9);
        await ƒS.update(5);
        await ƒS.Sound.fade(sound.OutsideTheme, 0, 0.5,);
        await ƒS.Sound.fade(sound.MysteriousTheme, 0.5, 0.5,true);
        await ƒS.Location.show(locations.mansion);
        await ƒS.update(1);
        await ƒS.Speech.show();


        await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positionPercent(35, 100))
        await ƒS.update(0.5);
        await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positionPercent(65, 100))
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene4.T0000);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0000);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene4.T0001);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0001);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene4.T0002);
        await ƒS.update(0.5);

        await ƒS.Character.hide(characters.addie);
        await ƒS.Character.show(characters.addie, characters.addie.pose.shocked, ƒS.positionPercent(65, 100))
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0002);
        await ƒS.update(0.5);

        await ƒS.Location.show(locations.leiche);
        await ƒS.update(5);
        await ƒS.Location.show(locations.white);
        await ƒS.update(1);

        await ƒS.Location.show(locations.leiche);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene4.T0003);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0003);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene4.T0004);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene4.T0005);
        await ƒS.update(0.5);

        ƒS.Character.animate(characters.gideon, characters.gideon.pose.normal, fromPosToLeftOut());
        await ƒS.update(1);


        await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0004);
        await ƒS.update(0.5);

        await ƒS.Location.show(locations.mansion);
        await ƒS.update(1);

        await ƒS.Character.show(characters.V, characters.V.pose.normal, ƒS.positionPercent(35, 100))
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.V, text.V.scene4.T0000);
        await ƒS.update(0.5)

        await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0005);

        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.V, text.V.scene4.T0001);
        await ƒS.update(0.5)
        await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0006);

        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.V, text.V.scene4.T0002);
        await ƒS.update(0.5)

        await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0007);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.V, text.V.scene4.T0003);
        await ƒS.update(0.5)

        await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0008);
        await ƒS.update(0.5);


        await ƒS.Speech.tell(characters.V, text.V.scene4.T0004);
        await ƒS.update(0.5)


        let firstDialogueElementOptions = {
            iSayA: "Ja ",
            iSayB: "Nein",

        };
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");


        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0011);
                AddPointsViktor(2);

                break;

            case firstDialogueElementOptions.iSayB:

                await ƒS.Speech.tell(characters.addie, text.Addie.scene4.T0010);
                await ƒS.Speech.tell(characters.V, text.V.scene4.T0005);
                await ƒS.update(0.5)

                break;

        }


        await ƒS.Speech.tell(characters.V, text.V.scene4.T0006);
        await ƒS.update(0.5)
        await ƒS.Speech.tell(characters.V, text.V.scene4.T0007);
        await ƒS.update(0.5)


        let secondDialogueElementOptions = {
            iSayA: "Ja.....Ich werde es versuchen  ",
            iSayB: "Nein...Tut mir leid das kann ich nicht ",

        };
        let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueElementOptions, "individualCSSClass");


        switch (secondDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                AddPointsViktor(2);
                await ƒS.Speech.tell(characters.V, text.V.scene4.T0008);



            case secondDialogueElementOptions.iSayB:

                await ƒS.Speech.tell(characters.V, text.V.scene4.T0009);

                break;

        }






        if (GetPointsViktor() > GetPointsGideon()) {
            //Ending Viktor vertraut
            await ƒS.update(1);
            return Ende3();
        }

     else   if (GetPointsViktor() < GetPointsGideon()) {
            // Ending Gideon Vertraut
            await ƒS.update(1);
            return Ende2();
        }



    else    if (GetPointsGideon() == 0 && GetPointsViktor() == 0) {
            // Ending Keinem Vertraut
            await ƒS.update(1);
            return Ende4();
        }
    



  else  if (GetPointsGideon() == 4 && GetPointsViktor() == 4) {
        // Ending Beide Vertraut
        await ƒS.update(1);
        return Ende1();
    }
    else{
              
               await ƒS.update(1);
               return Ende1(); 
    }







}}