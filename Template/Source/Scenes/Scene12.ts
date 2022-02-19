namespace Template {
  export async function Scene12(): ƒS.SceneReturn {









    console.log("Intro");
    await ƒS.Speech.hide();

    await ƒS.Location.show(locations.chapter12);
    await ƒS.update(5);




    document.getElementById('save').blur();
    ƒS.Sound.play(sound.BackgroundTheme, 0.2, true);


    await ƒS.Location.show(locations.arbeitszimmer);
    await ƒS.update(3);
    await ƒS.Speech.show();

    await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0000);


    let firstDialogueElementOptions = {
      iSayA: "Gideon....was machst du noch hier ? ",
      iSayB: "Verschwinde,ich bin Müde",

    };



    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");


    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iSayA:

        AddPointsGideon(1);



        await ƒS.Character.hide(characters.gideon)
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0001);
        await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positions.right);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene1.T0000);



        break;
      case firstDialogueElementOptions.iSayB:
        await ƒS.Character.hide(characters.gideon)
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0002);
        await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positions.right);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene1.T0001);


        break;

    }


    await ƒS.Character.hide(characters.gideon)
    await ƒS.Character.show(characters.gideon, characters.gideon.pose.shocked, ƒS.positions.bottomcenter);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0003);

    await ƒS.Speech.tell(characters.addie, text.Addie.scene1.T0003);

    await ƒS.Character.hide(characters.gideon)
    await ƒS.Character.show(characters.gideon, characters.gideon.pose.happy, ƒS.positions.bottomcenter);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0004);
    await ƒS.Character.hide(characters.addie)
    await ƒS.Character.show(characters.addie, characters.addie.pose.angry, ƒS.positions.right);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.addie, text.Addie.scene1.T0004);


    await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0005);

    await ƒS.Character.hide(characters.addie)
    await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positions.right);
    await ƒS.update(1);


    await ƒS.Speech.tell(characters.addie, text.Addie.scene1.T0005);

    await ƒS.Character.hide(characters.gideon)
    await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0006);
    await ƒS.Speech.tell(characters.addie, text.Addie.scene1.T0006);


    await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0007);


    await ƒS.Character.hide(characters.addie)
    await ƒS.Character.show(characters.addie, characters.addie.pose.happy, ƒS.positions.right);
    await ƒS.update(1);


    await ƒS.Speech.tell(characters.addie, text.Addie.scene1.T0007);

    await ƒS.Character.hide(characters.gideon)
    await ƒS.Character.show(characters.gideon, characters.gideon.pose.shocked, ƒS.positions.bottomcenter);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0008);





    let secondDialogueElementOptions = {
      iSayA: "Woher willst du den wissen das es ein Mann war ? Vielleicht war es auch eine Frau. ",
      iSayB: "Ja du hast recht ich finde das ganze auch echt unheimlich.",

    };

    let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueElementOptions, "individualCSSClass");


    switch (secondDialogueElement) {
      case secondDialogueElementOptions.iSayA:
        // erste auswahl

        await ƒS.Character.hide(characters.gideon)
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.angry, ƒS.positions.bottomcenter)
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0009);
        await ƒS.update(1);



        //ende hier
        break
      case secondDialogueElementOptions.iSayB:
        AddPointsGideon(1);

        // zweite auswahl
        await ƒS.Character.hide(characters.gideon)
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positions.bottomcenter)
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene1.T0010);




        //ende hier
        break;

    }



    await ƒS.Character.hide(characters.addie)
    await ƒS.Character.show(characters.addie, characters.addie.pose.shocked, ƒS.positions.right);
    await ƒS.update(1);
    await ƒS.Character.hide(characters.gideon)
    await ƒS.Character.show(characters.gideon, characters.gideon.pose.shocked, ƒS.positions.bottomcenter)
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.dad, text.Dad.scene1.T0000);
    await ƒS.Speech.tell(characters.addie, text.Addie.scene1.T0008);



    await ƒS.Sound.fade(sound.BackgroundTheme, 0, 0.5);

    await ƒS.Speech.hide();
    await ƒS.Character.hide(characters.gideon);
    await ƒS.Character.hide(characters.addie);

    await ƒS.update(1);
    return Scene11();








  }

}

