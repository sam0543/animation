var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./idlemovecombospritesheet.png");


ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	gameEngine.addEntity(new Robot(gameEngine, 0, 0, ASSET_MANAGER.getAsset("./idlemovecombospritesheet.png")));

	gameEngine.start();
});
