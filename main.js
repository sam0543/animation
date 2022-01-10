var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./00robotspritesheet.png");


ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	gameEngine.addEntity(new Robot(gameEngine, 50, 50, ASSET_MANAGER.getAsset("./00robotspritesheet.png")));

	gameEngine.start();
});
