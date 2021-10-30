let hp_bar = document.getElementById('hp_bar');
let name = document.getElementById('name');
let moneys = document.getElementById('money');

cef.emit("game:nameplayer");
cef.emit("game:hud:setComponentVisible", "interface", false);

cef.emit("game:data:pollPlayerStats", true, 50);

cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
    hp_bar.value = hp;
    hp_bar.max = max_hp;
    moneys.innerHTML = money;
});
cef.on("game:name", (resp) => { //ДАННЫЙ ПУНКТ ЯВЛЯЕТСЯ САМОПИСНЫМ !!! 
    name.innerHTML = resp;
}); 