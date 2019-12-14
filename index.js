const config = require('./config.json');



module.exports = function drophistory(mod) {
let enabled = config.toggle;

mod.command.add("drophistory", {
$default() {
enabled = !enabled
mod.command.message(`Drophistory is ${enabled ? '<font color="#00FF00">Enabled</font>' : '<font color="#FF0000">Disabled</font>'}.`)}})
mod.hook('S_SPAWN_DROPITEM', 8, (event) => {
if(!enabled) return;
if(event.item === 369)
mod.command.message('<font color="#b8db1d">Diamant</font>')
//Special Stuff
else if(event.item === 209124)
mod.command.message('<font color="#ffaa00">Arkarp-Siegel</font>')
else if(event.item === 209123)
mod.command.message('<font color="#ffaa00">Arkarptrupp-Identifizierungsmarke</font>')
else if(event.item === 209127)
mod.command.message('<font color="#ffaa00">Arkarp-Eroberungsemblem</font>')
else if(event.item === 98678)
mod.command.message('<font color="#b8db1d">Magisches Dunkelsplitterrüstungs-Rohmaterial</font>')
else if(event.item === 98677)
mod.command.message('<font color="#b8db1d">Magisches Dunkelsplitterwaffen-Rohmaterial</font>')
else if(event.item === 98656)
mod.command.message('<font color="#ffaa00">replace</font>')
else if(event.item === 88831)
mod.command.message('<font color="#ffd500">replace</font>')
else if(event.item === 88827)
mod.command.message('<font color="#660679">replace</font>')
else if(event.item === 88828)
mod.command.message('<font color="#cc00cc">replace</font>')
else if(event.item === 88829)
mod.command.message('<font color="#00bfe6">replace</font>')
else if(event.item === 88830)
mod.command.message('<font color="#99e600">replace</font>')
else if(event.item === 88836)
mod.command.message('<font color="#ffd500">replace</font>')
else if(event.item === 88832)
mod.command.message('<font color="#660679">replace</font>')
else if(event.item === 88833)
mod.command.message('<font color="#cc00cc">replace</font>')
else if(event.item === 88834)
mod.command.message('<font color="#00bfe6">replace</font>')
else if(event.item === 88835)
mod.command.message('<font color="#99e600">replace</font>')
else if(event.item === 88841)
mod.command.message('<font color="#732659">replace</font>')
else if(event.item === 88842)
mod.command.message('<font color="#732659">replace</font>')
else if(event.item === 98671)
mod.command.message('<font color="#b8db1d">Reines Edelsteinschmetterlings-Staub</font>')
else if(event.item === 98672)
mod.command.message('<font color="#b8db1d">Reiner Edelsteinschmetterlings-Brunnen</font>')
else if(event.item === 98674)
mod.command.message('<font color="#b8db1d">Gereinigtes Ornamentstück eines heiligen Biests</font>')
else if(event.item === 98673)
mod.command.message('<font color="#b8db1d">Gereinigtes Ringfragment eines heiligen Biests</font>')
else if(event.item === 206855)
mod.command.message('<font color="#ff8000">Linke Hälfte von Wilsons Schatzkarte</font>')
else if(event.item === 206856)
mod.command.message('<font color="#ff8000">Rechte Hälfte von Wilsons Schatzkarte</font>')
//Warrior Waffe
else if(event.item === 89509)
mod.command.message('<font color="#dcfc49">Destruktions-Zwillingsschwerter(Non Stat)</font>')
else if(event.item === 89510)
mod.command.message('<font color="#dcfc49">Destruktions-Zwillingsschwerter(1 Stat)</font>')
else if(event.item === 89511)
mod.command.message('<font color="#dcfc49">Destruktions-Zwillingsschwerter(2 Stats)</font>')
else if(event.item === 89512)
mod.command.message('<font color="#dcfc49">Destruktions-Zwillingsschwerter(3 Stats)</font>')
else if(event.item === 89513)
mod.command.message('<font color="#dcfc49">Eklipsen-Zwillingsschwerter(Non Stat)</font>')
else if(event.item === 89514)
mod.command.message('<font color="#dcfc49">Eklipsen-Zwillingsschwerter(1 Stat)</font>')
else if(event.item === 89515)
mod.command.message('<font color="#dcfc49">Eklipsen-Zwillingsschwerter(2 Stats)</font>')
else if(event.item === 89516)
mod.command.message('<font color="#dcfc49">Eklipsen-Zwillingsschwerter(3 Stats)</font>')
//Lancer Waffe
else if(event.item === 89517)
mod.command.message('<font color="#dcfc49">Destruktions-Lanze(Non Stat)</font>')
else if(event.item === 89518)
mod.command.message('<font color="#dcfc49">Destruktions-Lanze(1 Stat)</font>')
else if(event.item === 89519)
mod.command.message('<font color="#dcfc49">Destruktions-Lanze(2 Stats)</font>')
else if(event.item === 89520)
mod.command.message('<font color="#dcfc49">Destruktions-Lanze(3 Stats)</font>')
else if(event.item === 89521)
mod.command.message('<font color="#dcfc49">Eklipsen-Lanze(Non Stat)</font>')
else if(event.item === 89522)
mod.command.message('<font color="#dcfc49">Eklipsen-Lanze(1 Stat)</font>')
else if(event.item === 89523)
mod.command.message('<font color="#dcfc49">Eklipsen-Lanze(2 Stats)</font>')
else if(event.item === 89524)
mod.command.message('<font color="#dcfc49">Eklipsen-Lanze(3 Stats)</font>')
//Greatsword
else if(event.item === 89525)
mod.command.message('<font color="#732659">Destruktions-Großschwert(Non Stat)</font>')
else if(event.item === 89526)
mod.command.message('<font color="#732659">Destruktions-Großschwert(1 Stat)</font>')
else if(event.item === 89527)
mod.command.message('<font color="#732659">Destruktions-Großschwert(2 Stats)</font>')
else if(event.item === 89528)
mod.command.message('<font color="#732659">Destruktions-Großschwert(3 Stats)</font>')
else if(event.item === 89529)
mod.command.message('<font color="#732659">Eklipsen-Großschwert(Non Stat)</font>')
else if(event.item === 89530)
mod.command.message('<font color="#732659">Eklipsen-Großschwert(1 Stat)</font>')
else if(event.item === 89531)
mod.command.message('<font color="#732659">Eklipsen-Großschwert(2 Stats)</font>')
else if(event.item === 89532)
mod.command.message('<font color="#732659">Eklipsen-Großschwert(3 Stats)</font>')
//Axt
else if(event.item === 89533)
mod.command.message('<font color="#ffd500">Destruktions-Axt(Non Stat)</font>')
else if(event.item === 89534)
mod.command.message('<font color="#ffd500">Destruktions-Axt(1 Stat)</font>')
else if(event.item === 89535)
mod.command.message('<font color="#ffd500">Destruktions-Axt(2 Stats)</font>')
else if(event.item === 89536)
mod.command.message('<font color="#ffd500">Destruktions-Axt(3 Stats)</font>')
else if(event.item === 89537)
mod.command.message('<font color="#ffd500">Eklipsen-Axt(Non Stats)</font>')
else if(event.item === 89538)
mod.command.message('<font color="#ffd500">Eklipsen-Axt(1 Stat)</font>')
else if(event.item === 89539)
mod.command.message('<font color="#ffd500">Eklipsen-Axt(2 Stats)</font>')
else if(event.item === 89540)
mod.command.message('<font color="#ffd500">Eklipsen-Axt(3 Stats)</font>')
//Disc
else if(event.item === 89541)
mod.command.message('<font color="#732659">Destruktions-Scheibe(Non Stat)</font>')
else if(event.item === 89542)
mod.command.message('<font color="#732659">Destruktions-Scheibe(1 Stat)</font>')
else if(event.item === 89543)
mod.command.message('<font color="#732659">Destruktions-Scheibe(2 Stats)</font>')
else if(event.item === 89544)
mod.command.message('<font color="#732659">Destruktions-Scheibe(3 Stats)</font>')
else if(event.item === 89545)
mod.command.message('<font color="#732659">Eklipsen-Scheibe(Non Stat)</font>')
else if(event.item === 89546)
mod.command.message('<font color="#732659">Eklipsen-Scheibe(1 Stat)</font>')
else if(event.item === 89547)
mod.command.message('<font color="#732659">Eklipsen-Scheibe(2 Stats)</font>')
else if(event.item === 89548)
mod.command.message('<font color="#732659">Eklipsen-Scheibe(3 Stats)</font>')
//Bow
else if(event.item === 89549)
mod.command.message('<font color="#732659">Destruktions-Bogen(Non Stat)</font>')
else if(event.item === 89550)
mod.command.message('<font color="#732659">Destruktions-Bogen(1 Stat)</font>')
else if(event.item === 89551)
mod.command.message('<font color="#732659">Destruktions-Bogen(2 Stats)</font>')
else if(event.item === 89552)
mod.command.message('<font color="#732659">Destruktions-Bogen(3 Stats)</font>')
else if(event.item === 89553)
mod.command.message('<font color="#732659">Eklipsen-Bogen(Non Stat)</font>')
else if(event.item === 89554)
mod.command.message('<font color="#732659">Eklipsen-Bogen(1 Stat)</font>')
else if(event.item === 89555)
mod.command.message('<font color="#732659">Eklipsen-Bogen(2 Stats)</font>')
else if(event.item === 89556)
mod.command.message('<font color="#732659">Eklipsen-Bogen(3 Stats)</font>')
//Staff
else if(event.item === 89557)
mod.command.message('<font color="#732659">Destruktions-Stab(Non Stat)</font>')
else if(event.item === 89558)
mod.command.message('<font color="#732659">Destruktions-Stab(1 Stat)</font>')
else if(event.item === 89559)
mod.command.message('<font color="#732659">Destruktions-Stab(2 Stats)</font>')
else if(event.item === 89560)
mod.command.message('<font color="#732659">Destruktions-Stab(3 Stats)</font>')
else if(event.item === 89561)
mod.command.message('<font color="#732659">Eklipsen-Stab(Non Stat)</font>')
else if(event.item === 89562)
mod.command.message('<font color="#732659">Eklipsen-Stab(1 Stat)</font>')
else if(event.item === 89563)
mod.command.message('<font color="#732659">Eklipsen-Stab(2 Stats)</font>')
else if(event.item === 89564)
mod.command.message('<font color="#732659">Eklipsen-Stab(3 Stats)</font>')
//Zepter
else if(event.item === 89565)
mod.command.message('<font color="#cc00cc">Destruktions-Zepter(Non Stat)</font>')
else if(event.item === 89566)
mod.command.message('<font color="#cc00cc">Destruktions-Zepter(1 Stat)</font>')
else if(event.item === 89567)
mod.command.message('<font color="#cc00cc">Destruktions-Zepter(2 Stats)</font>')
else if(event.item === 89568)
mod.command.message('<font color="#cc00cc">Destruktions-Zepter(3 Stats)</font>')
else if(event.item === 89569)
mod.command.message('<font color="#cc00cc">Eklipsen-Zepter(Non Stat)</font>')
else if(event.item === 89570)
mod.command.message('<font color="#cc00cc">Eklipsen-Zepter(1 Stat)</font>')
else if(event.item === 89571)
mod.command.message('<font color="#cc00cc">Eklipsen-Zepter(2 Stats)</font>')
else if(event.item === 89572)
mod.command.message('<font color="#cc00cc">Eklipsen-Zepter(3 Stats)</font>')
//Kettenklingen
else if(event.item === 89573)
mod.command.message('<font color="#00bfe6">Destruktions-Kettenklingen(Non Stat)</font>')
else if(event.item === 89574)
mod.command.message('<font color="#00bfe6">Destruktions-Kettenklingen(1 Stat)</font>')
else if(event.item === 89575)
mod.command.message('<font color="#00bfe6">Destruktions-Kettenklingen(2 Stats)</font>')
else if(event.item === 89576)
mod.command.message('<font color="#00bfe6">Destruktions-Kettenklingen(3 Stats)</font>')
else if(event.item === 89577)
mod.command.message('<font color="#00bfe6">Eklipsen-Kettenklingen(Non Stat)</font>')
else if(event.item === 89578)
mod.command.message('<font color="#00bfe6">Eklipsen-Kettenklingen(1 Stat)</font>')
else if(event.item === 89579)
mod.command.message('<font color="#00bfe6">Eklipsen-Kettenklingen(2 Stats)</font>')
else if(event.item === 89580)
mod.command.message('<font color="#00bfe6">Eklipsen-Kettenklingen(3 Stats)</font>')
//Kanone
else if(event.item === 89581)
mod.command.message('<font color="#00bfe6">Destruktions-Arkanone(Non Stat)</font>')
else if(event.item === 89582)
mod.command.message('<font color="#00bfe6">Destruktions-Arkanone(1 Stat)</font>')
else if(event.item === 89583)
mod.command.message('<font color="#00bfe6">Destruktions-Arkanone(2 Stats)</font>')
else if(event.item === 89584)
mod.command.message('<font color="#00bfe6">Destruktions-Arkanone(3 Stats)</font>')
else if(event.item === 89585)
mod.command.message('<font color="#00bfe6">Eklipsen-Arkanone(Non Stat)</font>')
else if(event.item === 89586)
mod.command.message('<font color="#00bfe6">Eklipsen-Arkanone(1 Stat)</font>')
else if(event.item === 89587)
mod.command.message('<font color="#00bfe6">Eklipsen-Arkanone(2 Stats)</font>')
else if(event.item === 89588)
mod.command.message('<font color="#00bfe6">Eklipsen-Arkanone(3 Stats)</font>')
//Powerfist
else if(event.item === 89589)
mod.command.message('<font color="#00bfe6">Destruktions-Stahlfäuste(Non Stat)</font>')
else if(event.item === 89590)
mod.command.message('<font color="#00bfe6">Destruktions-Stahlfäuste(1 Stat)</font>')
else if(event.item === 89591)
mod.command.message('<font color="#00bfe6">Destruktions-Stahlfäuste(2 Stats)</font>')
else if(event.item === 89592)
mod.command.message('<font color="#00bfe6">Destruktions-Stahlfäuste(3 Stats)</font>')
else if(event.item === 89593)
mod.command.message('<font color="#00bfe6">Eklipsen-Stahlfäuste(Non Stat)</font>')
else if(event.item === 89594)
mod.command.message('<font color="#00bfe6">Eklipsen-Stahlfäuste(1 Stat)</font>')
else if(event.item === 89595)
mod.command.message('<font color="#00bfe6">Eklipsen-Stahlfäuste(2 Stats)</font>')
else if(event.item === 89596)
mod.command.message('<font color="#00bfe6">Eklipsen-Stahlfäuste(3 Stats)</font>')
//Shuriken
else if(event.item === 89597)
mod.command.message('<font color="#00bfe6">Destruktions-Wurfstern(Non Stat)</font>')
else if(event.item === 89598)
mod.command.message('<font color="#00bfe6">Destruktions-Wurfstern(1 Stat)</font>')
else if(event.item === 89599)
mod.command.message('<font color="#00bfe6">Destruktions-Wurfstern(2 Stats)</font>')
else if(event.item === 89600)
mod.command.message('<font color="#00bfe6">Destruktions-Wurfstern(3 Stats)</font>')
else if(event.item === 89601)
mod.command.message('<font color="#00bfe6">Eklipsen-Wurfstern(Non Stat)</font>')
else if(event.item === 89602)
mod.command.message('<font color="#00bfe6">Eklipsen-Wurfstern(1 Stat)</font>')
else if(event.item === 89603)
mod.command.message('<font color="#00bfe6">Eklipsen-Wurfstern(2 Stats)</font>')
else if(event.item === 89604)
mod.command.message('<font color="#00bfe6">Eklipsen-Wurfstern(3 Stats)</font>')
//Gleve
else if(event.item === 89605)
mod.command.message('<font color="#00bfe6">Destruktions-Mondgleve(Non Stat)</font>')
else if(event.item === 89606)
mod.command.message('<font color="#00bfe6">Destruktions-Mondgleve(1 Stat)</font>')
else if(event.item === 89607)
mod.command.message('<font color="#00bfe6">Destruktions-Mondgleve(2 Stats)</font>')
else if(event.item === 89608)
mod.command.message('<font color="#00bfe6">Destruktions-Mondgleve(3 Stats)</font>')
else if(event.item === 89609)
mod.command.message('<font color="#00bfe6">Eklipsen-Mondgleve(Non Stat)</font>')
else if(event.item === 89610)
mod.command.message('<font color="#00bfe6">Eklipsen-Mondgleve(1 Stat)</font>')
else if(event.item === 89611)
mod.command.message('<font color="#00bfe6">Eklipsen-Mondgleve(2 Stats)</font>')
else if(event.item === 89612)
mod.command.message('<font color="#00bfe6">Eklipsen-Mondgleve(3 Stats)</font>')
//Kettenpanzer
else if(event.item === 89613)
mod.command.message('<font color="#00bfe6">Destruktions-Kettenpanzer(Non Stat)</font>')
else if(event.item === 89614)
mod.command.message('<font color="#00bfe6">Destruktions-Kettenpanzer(1 Stat)</font>')
else if(event.item === 89615)
mod.command.message('<font color="#00bfe6">Destruktions-Kettenpanzer(2 Stats)</font>')
else if(event.item === 89616)
mod.command.message('<font color="#00bfe6">Destruktions-Kettenpanzer(3 Stats)</font>')
else if(event.item === 89617)
mod.command.message('<font color="#00bfe6">Eklipsen-Kettenpanzer(Non Stat)</font>')
else if(event.item === 89618)
mod.command.message('<font color="#00bfe6">Eklipsen-Kettenpanzer(1 Stat)</font>')
else if(event.item === 89619)
mod.command.message('<font color="#00bfe6">Eklipsen-Kettenpanzer(2 Stats)</font>')
else if(event.item === 89620)
mod.command.message('<font color="#00bfe6">Eklipsen-Kettenpanzer(3 Stats)</font>')
//harnisch
else if(event.item === 89621)
mod.command.message('<font color="#00bfe6">Destruktions-Harnisch(Non Stat)</font>')
else if(event.item === 89622)
mod.command.message('<font color="#00bfe6">Destruktions-Harnisch(1 Stat)</font>')
else if(event.item === 89623)
mod.command.message('<font color="#00bfe6">Destruktions-Harnisch(2 Stats)</font>')
else if(event.item === 89624)
mod.command.message('<font color="#00bfe6">Destruktions-Harnisch(3 Stats)</font>')
else if(event.item === 89625)
mod.command.message('<font color="#00bfe6">Eklipsen-Harnisch(Non Stat)</font>')
else if(event.item === 89626)
mod.command.message('<font color="#00bfe6">Eklipsen-Harnisch(1 Stat)</font>')
else if(event.item === 89627)
mod.command.message('<font color="#00bfe6">Eklipsen-Harnisch(2 Stats)</font>')
else if(event.item === 89628)
mod.command.message('<font color="#00bfe6">Eklipsen-Harnisch(3 Stats)</font>')
//Gewand
else if(event.item === 89629)
mod.command.message('<font color="#00bfe6">Destruktions-Gewand(Non Stat)</font>')
else if(event.item === 89630)
mod.command.message('<font color="#00bfe6">Destruktions-Gewand(1 Stat)</font>')
else if(event.item === 89631)
mod.command.message('<font color="#00bfe6">Destruktions-Gewand(2 Stats)</font>')
else if(event.item === 89632)
mod.command.message('<font color="#00bfe6">Destruktions-Gewand(3 Stats)</font>')
else if(event.item === 89633)
mod.command.message('<font color="#00bfe6">Eklipsen-Gewand(Non Stat)</font>')
else if(event.item === 89634)
mod.command.message('<font color="#00bfe6">Eklipsen-Gewand(1 Stat)</font>')
else if(event.item === 89635)
mod.command.message('<font color="#00bfe6">Eklipsen-Gewand(2 Stats)</font>')
else if(event.item === 89636)
mod.command.message('<font color="#00bfe6">Eklipsen-Gewand(3 Stats)</font>')
//Panzerhandschuhe
else if(event.item === 89637)
mod.command.message('<font color="#00bfe6">Destruktions-Panzerhandschuhe(Non Stat)</font>')
else if(event.item === 89638)
mod.command.message('<font color="#00bfe6">Destruktions-Panzerhandschuhe(1 Stat)</font>')
else if(event.item === 89639)
mod.command.message('<font color="#00bfe6">Destruktions-Panzerhandschuhe(2 Stats)</font>')
else if(event.item === 89640)
mod.command.message('<font color="#00bfe6">Destruktions-Panzerhandschuhe(3 Stats)</font>')
else if(event.item === 89641)
mod.command.message('<font color="#00bfe6">Eklipsen-Panzerhandschuhe(Non Stat)</font>')
else if(event.item === 89642)
mod.command.message('<font color="#00bfe6">Eklipsen-Panzerhandschuhe(1 Stat)</font>')
else if(event.item === 89643)
mod.command.message('<font color="#00bfe6">Eklipsen-Panzerhandschuhe(2 Stats)</font>')
else if(event.item === 89644)
mod.command.message('<font color="#00bfe6">Eklipsen-Panzerhandschuhe(3 Stats)</font>')
//Handschutz
else if(event.item === 89645)
mod.command.message('<font color="#00bfe6">Destruktions-Handschutz(Non Stat)</font>')
else if(event.item === 89646)
mod.command.message('<font color="#00bfe6">Destruktions-Handschutz(1 Stat)</font>')
else if(event.item === 89647)
mod.command.message('<font color="#00bfe6">Destruktions-Handschutz(2 Stats)</font>')
else if(event.item === 89648)
mod.command.message('<font color="#00bfe6">Destruktions-Handschutz(3 Stats)</font>')
else if(event.item === 89649)
mod.command.message('<font color="#00bfe6">Eklipsen-Handschutz(Non Stat)</font>')
else if(event.item === 89650)
mod.command.message('<font color="#00bfe6">Eklipsen-Handschutz(1 Stat)</font>')
else if(event.item === 89651)
mod.command.message('<font color="#00bfe6">Eklipsen-Handschutz(2 Stats)</font>')
else if(event.item === 89652)
mod.command.message('<font color="#00bfe6">Eklipsen-Handschutz(3 Stats)</font>')
//Handschuhe
else if(event.item === 89653)
mod.command.message('<font color="#00bfe6">Destruktions-Handschuhe(Non Stat)</font>')
else if(event.item === 89654)
mod.command.message('<font color="#00bfe6">Destruktions-Handschuhe(1 Stat)</font>')
else if(event.item === 89655)
mod.command.message('<font color="#00bfe6">Destruktions-Handschuhe(2 Stats)</font>')
else if(event.item === 89656)
mod.command.message('<font color="#00bfe6">Destruktions-Handschuhe(3 Stats)</font>')
else if(event.item === 89657)
mod.command.message('<font color="#00bfe6">Eklipsen-Handschuhe(Non Stat)</font>')
else if(event.item === 89658)
mod.command.message('<font color="#00bfe6">Eklipsen-Handschuhe(1 Stat)</font>')
else if(event.item === 89659)
mod.command.message('<font color="#00bfe6">Eklipsen-Handschuhe(2 Stats)</font>')
else if(event.item === 89660)
mod.command.message('<font color="#00bfe6">Eklipsen-Handschuhe(3 Stats)</font>')
//Eisenstiefel
else if(event.item === 89661)
mod.command.message('<font color="#00bfe6">Destruktions-Eisenstiefel(Non Stat)</font>')
else if(event.item === 89662)
mod.command.message('<font color="#00bfe6">Destruktions-Eisenstiefel(1 Stat)</font>')
else if(event.item === 89663)
mod.command.message('<font color="#00bfe6">Destruktions-Eisenstiefel(2 Stats)</font>')
else if(event.item === 89664)
mod.command.message('<font color="#00bfe6">Destruktions-Eisenstiefel(3 Stats)</font>')
else if(event.item === 89665)
mod.command.message('<font color="#00bfe6">Eklipsen-Eisenstiefel(Non Stat)</font>')
else if(event.item === 89666)
mod.command.message('<font color="#00bfe6">Eklipsen-Eisenstiefel(1 Stat)</font>')
else if(event.item === 89667)
mod.command.message('<font color="#00bfe6">Eklipsen-Eisenstiefel(2 Stats)</font>')
else if(event.item === 89668)
mod.command.message('<font color="#00bfe6">Eklipsen-Eisenstiefel(3 Stats)</font>')
//Lederstiefel
else if(event.item === 89669)
mod.command.message('<font color="#00bfe6">Destruktions-Lederstiefel(Non Stat)</font>')
else if(event.item === 89670)
mod.command.message('<font color="#00bfe6">Destruktions-Lederstiefel(1 Stat)</font>')
else if(event.item === 89671)
mod.command.message('<font color="#00bfe6">Destruktions-Lederstiefel(2 Stats)</font>')
else if(event.item === 89672)
mod.command.message('<font color="#00bfe6">Destruktions-Lederstiefel(3 Stats)</font>')
else if(event.item === 89673)
mod.command.message('<font color="#00bfe6">Eklipsen-Lederstiefel(Non Stat)</font>')
else if(event.item === 89674)
mod.command.message('<font color="#00bfe6">Eklipsen-Lederstiefel(1 Stat)</font>')
else if(event.item === 89675)
mod.command.message('<font color="#00bfe6">Eklipsen-Lederstiefel(2 Stats)</font>')
else if(event.item === 89676)
mod.command.message('<font color="#00bfe6">Eklipsen-Lederstiefel(3 Stats)</font>')
//Schuhe
else if(event.item === 89677)
mod.command.message('<font color="#00bfe6">Destruktions-Schuhe(Non Stat)</font>')
else if(event.item === 89678)
mod.command.message('<font color="#00bfe6">Destruktions-Schuhe(1 Stat)</font>')
else if(event.item === 89679)
mod.command.message('<font color="#00bfe6">Destruktions-Schuhe(2 Stats)</font>')
else if(event.item === 89680)
mod.command.message('<font color="#00bfe6">Destruktions-Schuhe(3 Stats)</font>')
else if(event.item === 89681)
mod.command.message('<font color="#00bfe6">Destruktions-Schuhe(Non Stat)</font>')
else if(event.item === 89682)
mod.command.message('<font color="#00bfe6">Destruktions-Schuhe(1 Stat)</font>')
else if(event.item === 89683)
mod.command.message('<font color="#00bfe6">Destruktions-Schuhe(2 Stats)</font>')
else if(event.item === 89684)
mod.command.message('<font color="#00bfe6">Destruktions-Schuhe(3 Stats)</font>')

})
}

