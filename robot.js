class Robot {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y });
        
        this.STOP = 0;
        this.GO = 1;
        
        this.state = 1;
        
        this.loadAnimations(spritesheet);
        
    };

    loadAnimations(spritesheet) {
        //idle = 0, move = 1
        this.roboAnim = [];
        
        this.roboAnim[0] = new Animator(spritesheet, 0.5, 0, 125, 164, 6, 10, 1, false, true);
        
        this.roboAnim[1] = new Animator(spritesheet, 0.82, 167, 125, 166, 11, 10, 0, false, true);
        
    };

    update() {
        this.speed = -1500;
        const TICK = this.game.clockTick;
        this.x += 5 * this.game.clockTick;
        if (this.x == 1) {
            this.x += 600;
        }
        
        //if (this.game.left) {
        //    this.state = this.GO;
        //    this.x += 5 * this.game.clockTick;
        //} else {
        //    this.state = this.STOP;
        //}
        
    };
        
    draw(ctx) {
        
        
        this.roboAnim[this.state].drawFrame(1, this.game.ctx, 600-this.x, this.y);
        
    };
};
