namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("Intro");


    let text = {
      Addie: {
        T0000: "Ich hab mein Kopf nur kurz hingelegt um meine auszuruhen..ich schwö-",
        T0001: "Warte was ? Oh man wieviel Uhr ist es ? Bin ich etwa schonwieder eingenickt"
      },
      Gideon: {
        T0000: "Hallo....hallo ?",
        T0001: "Was ich noch hier mache ? Es ist 6 Uhr am Morgen! lass mich raten du bist hier wieder eingeschlafen.",
        T0002: "Würde ich ja gerne aber du schläfst auf meinen Notizen!",
        T0003: "Würde ich ja gerne aber du schläfst auf meinen Notizen!",
      },
    }


      await ƒS.Location.show(locations.arbeitszimmer);
      await ƒS.update(1);
      await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal,ƒS.positions.bottomcenter);
      await ƒS.update(1);
     await ƒS.Speech.tell(characters.gideon, text.Gideon.T0000);


     let firstDialogueElementOptions = {
      iSayA: "Gideon....was machst du noch hier ? ",
      iSayB: "Verschwind ich bin noch müde",
      
    };

 
    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");


 switch(firstDialogueElement) {
      case firstDialogueElementOptions.iSayA:
        await ƒS.Character.hide(characters.gideon)
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.happy, ƒS.positions.bottomcenter);
        await ƒS.update(1);
      await ƒS.Speech.tell(characters.gideon, text.Gideon.T0001);
      await ƒS.Character.animate(characters.gideon, characters.gideon.pose.happy, fromCenterToLeft())
      await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positions.right);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.addie, text.Addie.T0000);
     
     
     
      break;
      case firstDialogueElementOptions.iSayB:
        await ƒS.Character.hide(characters.gideon)
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.happy, ƒS.positions.center);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.T0002);
        await ƒS.Character.animate(characters.gideon, characters.gideon.pose.happy, fromCenterToLeft())
        await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positions.right);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.addie, text.Addie.T0001);
      
      break;
      
    }

    await ƒS.Speech.tell(characters.gideon, text.Gideon.T0003);

 }

}

