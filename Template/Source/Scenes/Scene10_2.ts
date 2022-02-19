namespace Template {
    export async function Scene10_2(): ƒS.SceneReturn {


    
        await ƒS.Sound.fade(sound.OutsideTheme, 0.5, 0.5);
        await ƒS.Location.show(locations.gasse1);
        await ƒS.update(1);
        await ƒS.Speech.show();
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positionPercent(35, 100))
        await ƒS.update(0.5);
        await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positionPercent(65, 100))
        await ƒS.update(0.5);




        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene3_2.T0000);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene3_2.T0000);
        await ƒS.update(0.5);

        await ƒS.Character.hide(characters.gideon);
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.angry, ƒS.positionPercent(35, 100))
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene3_2.T0001);
        await ƒS.update(0.5);
      


        let firstDialogueElementOptions = {
            iSayA: "Gideon helfen",
            iSayB: "Gideon hilfe verweigern",

        };
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");


        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayA:
                AddPointsGideon(1);

                await ƒS.Speech.tell(characters.addie, text.Addie.scene3_2.T0001);
                await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positionPercent(35, 100))
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.gideon, text.Gideon.scene3_2.T0002);
                await ƒS.update(0.5);
                break;

              
            case firstDialogueElementOptions.iSayB:

                await ƒS.Speech.tell(characters.addie, text.Addie.scene3_2.T0002);
                await ƒS.Speech.tell(characters.gideon, text.Gideon.scene3_2.T0003);
                await ƒS.update(0.5);
                await ƒS.Speech.tell(characters.addie, text.Addie.scene3.T0002);

                break;

        }




        await ƒS.Speech.hide();
        await ƒS.Character.hide(characters.gideon);
        await ƒS.update();
        await ƒS.Character.hide(characters.addie);
        await ƒS.update();
        await ƒS.Character.hideAll();
        await ƒS.update();




        
        await ƒS.Location.show(locations.zeitreise);
        await ƒS.update(5);

        await ƒS.Location.show(locations.chapter9);
        await ƒS.update(5);
    
        await ƒS.update(1);
        return Scene9();



      
        
        



    }}
    
