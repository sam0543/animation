var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./idlemovecombospritesheet.png");
ASSET_MANAGER.queueDownload("./background.png");


ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');
	

	gameEngine.init(ctx);
	gameEngine.start();

	gameEngine.addEntity(new Robot(gameEngine, 0, 0, ASSET_MANAGER.getAsset("./idlemovecombospritesheet.png")));
	gameEngine.addEntity(new Background(gameEngine, 0, 0, ASSET_MANAGER.getAsset("./background.png")));
	
	
});
