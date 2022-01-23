class Robot {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y });
        
        this.loadAnimations(spritesheet);
        
    };

    loadAnimations(spritesheet) {

        this.idleAnim = [];
        
        this.idleAnim[0] = [];
        
        this.idleAnim[0][0] = new Animator(spritesheet, 1, 1, 125, 164, 6, 10, 1, false, true);
        
        this.moveAnim = [];
        
        this.moveAnim[0] = [];
        
        this.moveAnim[0][0] = new Animator(spritesheet, 1, 167, 125, 166, 11, 10, 1, false, true);
        
    };

    update() {
        this.x += 80 * this.game.clockTick;
        if (this x > 1368) { this.x = 0;}
    };

    draw(ctx) {
                
        //this.idleAnim[0][0].drawFrame(this.game.clockTick, this.game.ctx, x+100, x+100, 1);
        this.moveAnim[0][0].drawFrame(this.game.clockTick, this.game.ctx, x+100, x+300, 1);
        
        
    };
};
