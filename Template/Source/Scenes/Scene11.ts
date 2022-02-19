namespace Template {
    export async function Scene11(): ƒS.SceneReturn {
     




        await ƒS.Speech.hide();

        await ƒS.Location.show(locations.chapter11);
        await ƒS.update(5);
        await ƒS.Sound.fade(sound.OutsideTheme, 0.5, 0.5);
        await ƒS.Location.show(locations.gehweg);
        await ƒS.update(1);
        await ƒS.Speech.show();


        await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positionPercent(35, 100))
        await ƒS.update(0.5);
        await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positionPercent(65, 100))
        await ƒS.update(0.5);


        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0000);
        await ƒS.update(0.5);
      


        await ƒS.Character.hide(characters.gideon);
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.shocked, ƒS.positionPercent(35, 100));
        await ƒS.update(1);
       
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0000);
        await ƒS.update(0.5);
       

        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0001);
        await ƒS.update(0.5);
        await ƒS.Character.hide(characters.gideon)
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positionPercent(35, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0001);
        await ƒS.update(0.5);

        await ƒS.Character.hide(characters.addie)
        await ƒS.Character.show(characters.addie, characters.addie.pose.happy, ƒS.positionPercent(65, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0002);
        await ƒS.update(0.5);


        await ƒS.Location.show(locations.gasse1);
        await ƒS.update(5);

        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0003);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0003);
        await ƒS.update(0.5);


        await ƒS.Sound.fade(sound.BackgroundTheme, 0, 0.5);

        await ƒS.Speech.hide();
        await ƒS.Character.hide(characters.gideon);
        await ƒS.Character.hide(characters.addie);
        await ƒS.update(0.5);

        await ƒS.Location.show(locations.zeitreise);
        await ƒS.update(5);

        await ƒS.Sound.fade(sound.MysteriousTheme, 0.5, 0.5);
        await ƒS.Location.show(locations.gasse2);
        await ƒS.update(1);
        await ƒS.Speech.show();

        await ƒS.Character.show(characters.gideon, characters.gideon.pose.normal, ƒS.positionPercent(35, 100))
        await ƒS.update(0.5);
        await ƒS.Character.show(characters.addie, characters.addie.pose.normal, ƒS.positionPercent(65, 100))
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0004);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0004);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0005);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0005);
        await ƒS.update(0.5);

        await ƒS.Character.hide(characters.addie)
        await ƒS.Character.show(characters.addie, characters.addie.pose.angry, ƒS.positionPercent(65, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0006);
        await ƒS.update(0.5);



        await ƒS.Sound.fade(sound.MysteriousTheme, 0.5, 0.5);
        await ƒS.Location.show(locations.wald);
        await ƒS.update(1);
        await ƒS.Speech.show();





        ƒS.Character.animate(characters.gideon, characters.gideon.pose.normal, fromPosToLeftOut());
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0006);
        await ƒS.update(0.5);

        await ƒS.Character.hide(characters.gideon)
        await ƒS.update(0.5);
        // während er aus dem bildschirm ist
        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0007);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0008);
        await ƒS.update(0.5);


        await ƒS.Character.hide(characters.addie)
        await ƒS.Character.show(characters.addie, characters.addie.pose.shocked, ƒS.positionPercent(65, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0008);
        await ƒS.update(0.5);

        ƒS.Character.animate(characters.gideon, characters.gideon.pose.sad, fromLeftOutToPos());
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0009);
        await ƒS.update(0.5);





        await ƒS.Location.show(locations.leiche);
        await ƒS.update(5);


        await ƒS.Character.hide(characters.addie);
        await ƒS.Character.hide(characters.gideon);
        await ƒS.update(0.1);
        await ƒS.Character.show(characters.addie, characters.addie.pose.shocked, ƒS.positionPercent(85, 100));
        await ƒS.Character.show(characters.gideon, characters.gideon.pose.sad, ƒS.positionPercent(15, 100));
        await ƒS.update(1);

        await ƒS.Location.show(locations.white);


        await ƒS.Sound.play(sound.click, 0.5, false);

        await ƒS.update(0.1);
        await ƒS.Location.show(locations.leiche);
        await ƒS.update(2);

        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0009);
        await ƒS.update(0.5);


        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0010);
        await ƒS.update(0.5);


        await ƒS.Character.show(characters.addie, characters.addie.pose.sad, ƒS.positionPercent(85, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0010);
        await ƒS.update(0.5);


        await ƒS.Character.hide(characters.addie);
        await ƒS.Character.hide(characters.gideon);
        await ƒS.update(0.1);

        await ƒS.update(0.1);
        await ƒS.Location.show(locations.wald);
        await ƒS.update(2);

        await ƒS.Character.show(characters.addie, characters.addie.pose.sad, ƒS.positionPercent(65, 100));
        await ƒS.update(1);

        await ƒS.Character.show(characters.gideon, characters.gideon.pose.sad, ƒS.positionPercent(35, 100));
        await ƒS.update(1);

        await ƒS.Character.show(characters.unknown, characters.unknown.pose.mysterious, ƒS.positions.bottomright);
        await ƒS.update(1);

        await ƒS.Character.show(characters.addie, characters.addie.pose.shocked, ƒS.positionPercent(65, 100));
        await ƒS.update(1);

        await ƒS.Character.hide(characters.unknown);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0011);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0011);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0012);
        await ƒS.update(0.5);
        await ƒS.Speech.tell(characters.gideon, text.Gideon.scene2.T0012);
        await ƒS.update(0.5);

        await ƒS.Speech.tell(characters.addie, text.Addie.scene2.T0013);
        await ƒS.update(0.5);

        await ƒS.Speech.hide();
        await ƒS.Character.hideAll();
        await ƒS.update(1);


        await ƒS.Location.show(locations.zeitreise);
        await ƒS.update(5);

        await ƒS.Location.show(locations.chapter10);
        await ƒS.update(5);

        await ƒS.Sound.fade(sound.BackgroundTheme, 0, 0.5);


        await ƒS.update(1);
        return Scene10();

    }
}



