let gameData = {
	Electrons : 0,
	ElectronsPerClick : 1,
	ElectronGenerators : 1,
	ElectronGeneratorCost : 10
}

function ElectronClick(number) {
	gameData.Electrons += gameData.ElectronsPerClick
	document.getElementById("IdElectrons").innerHTML = gameData.Electrons 
}

function ElectronGeneratorBuy(number) {
	if (gameData.Electrons >= gameData.ElectronGeneratorCost){
		gameData.Electrons -= gameData.ElectronGeneratorCost
		gameData.ElectronGenerators += 1
		gameData.ElectronsPerClick += 1
		gameData.ElectronGeneratorCost *= (1 + 0.1 * gameData.ElectronGeneratorCost)
	    document.getElementById("IdElectronsPerClcik").innerHTML = gameData.ElectronsPerClick
		document.getElementById("IdElectronGenerators").innerHTML = gameData.ElectronGenerators
		document.getElementById("IdElectronGeneratorCost").innerHTML = gameData.ElectronGeneratorCost
	}
}

setInterval(function() {},1)