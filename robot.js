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
        this.speed = -15;
        const TICK = this.game.clockTick;
        this.x += this.speed * this.game.clockTick;
        if (this.x <= -100) {
            this.x += 900;
        }
        
        //if (this.game.left) {
        //    this.state = this.GO;
        //    this.x += 5 * this.game.clockTick;
        //} else {
        //    this.state = this.STOP;
        //}
        
    };
        
    draw(ctx) {
        
        
        this.roboAnim[this.state].drawFrame(1, this.game.ctx, this.x, this.y);
        
    };
};
