class Robot {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y });
        
        this.loadAnimations(spritesheet);
    };

    loadAnimations(spritesheet) {
      
        // idle animation
        this.idleAnim = [];
        this.idleFrames = 5;

        this.idleAnim[0] = [];
        this.idleAnim[1] = [];
        this.idleAnim[2] = [];
        this.idleAnim[3] = [];
        this.idleAnim[4] = [];
        this.idleAnim[5] = [];

        this.idleAnim[0][0] = new Animator(spritesheet, 1329, 0, 125, 164, 1, 0.33, 1, false, true);
        this.idleAnim[1][0] = new Animator(spritesheet, 126, 1346, 125, 163, 1, 0.33, 1, false, true);
        this.idleAnim[2][0] = new Animator(spritesheet, 1329, 165, 125, 164, 1, 0.33, 1, false, true);
        this.idleAnim[3][0] = new Animator(spritesheet, 976, 1177, 125, 165, 1, 0.33, 1, false, true);
        this.idleAnim[4][0] = new Animator(spritesheet, 1329, 330, 125, 164, 1, 0.33, 1, false, true);
        this.idleAnim[5][0] = new Animator(spritesheet, 252, 1346, 125, 163, 1, 0.33, 1, false, true);
        
        //move
        this.moveAnim = [];
        this.moveFrames = 10;

        this.moveAnim[0] = [];
        this.moveAnim[1] = [];
        this.moveAnim[2] = [];
        this.moveAnim[3] = [];
        this.moveAnim[4] = [];
        this.moveAnim[5] = [];
        this.moveAnim[6] = [];
        this.moveAnim[7] = [];
        this.moveAnim[8] = [];
        this.moveAnim[9] = [];
        this.moveAnim[10] = [];


        this.moveAnim[0][0] = new Animator(spritesheet, 850, 1177, 125, 166, 1, 0.33, 1, false, true);
        this.moveAnim[1][0] = new Animator(spritesheet, 537, 1177, 125, 167, 1, 0.33, 1, false, true);
        this.moveAnim[2][0] = new Animator(spritesheet, 1329, 660, 125, 164, 1, 0.33, 1, false, true);
        this.moveAnim[3][0] = new Animator(spritesheet, 1329, 825, 125, 164, 1, 0.33, 1, false, true);
        this.moveAnim[4][0] = new Animator(spritesheet, 1329, 990, 125, 164, 1, 0.33, 1, false, true);
        this.moveAnim[5][0] = new Animator(spritesheet, 411, 1177, 125, 168, 1, 0.33, 1, false, true);
        this.moveAnim[6][0] = new Animator(spritesheet, 1091, 691, 125, 169, 1, 0.33, 1, false, true);
        this.moveAnim[7][0] = new Animator(spritesheet, 1329, 1155, 125, 164, 1, 0.33, 1, false, true);
        this.moveAnim[8][0] = new Animator(spritesheet, 378, 1346, 125, 163, 1, 0.33, 1, false, true);
        this.moveAnim[9][0] = new Animator(spritesheet, 0, 1346, 125, 164, 1, 0.33, 1, false, true);
        this.moveAnim[10][0] = new Animator(spritesheet, 1102, 1177, 125, 165, 1, 0.33, 1, false, true);
      
        //attack 1
        this.atk1Anim = [];
        this.atk1Frames = 23;

        this.atk1Anim[0] = [];
        this.atk1Anim[1] = [];
        this.atk1Anim[2] = [];
        this.atk1Anim[3] = [];
        this.atk1Anim[4] = [];
        this.atk1Anim[5] = [];
        this.atk1Anim[6] = [];
        this.atk1Anim[7] = [];
        this.atk1Anim[8] = [];
        this.atk1Anim[9] = [];
        this.atk1Anim[10] = [];
        this.atk1Anim[11] = [];
        this.atk1Anim[12] = [];
        this.atk1Anim[13] = [];
        this.atk1Anim[14] = [];
        this.atk1Anim[15] = [];
        this.atk1Anim[16] = [];
        this.atk1Anim[17] = [];
        this.atk1Anim[18] = [];
        this.atk1Anim[19] = [];
        this.atk1Anim[20] = [];
        this.atk1Anim[21] = [];
        this.atk1Anim[22] = [];
        this.atk1Anim[23] = [];

        this.atk1Anim[0][0] = new Animator(spritesheet, 761, 1346, 130, 162, 1, 0.33, 1, false, true);
        this.atk1Anim[1][0] = new Animator(spritesheet, 964, 1511, 130, 161, 1, 0.33, 1, false, true);
        this.atk1Anim[2][0] = new Animator(spritesheet, 263, 1177, 147, 168, 1, 0.33, 1, false, true);
        this.atk1Anim[3][0] = new Animator(spritesheet, 1091, 174, 177, 172, 1, 0.33, 1, false, true);
        this.atk1Anim[4][0] = new Animator(spritesheet, 1091, 519, 173, 171, 1, 0.33, 1, false, true);
        this.atk1Anim[5][0] = new Animator(spritesheet, 1140, 1830, 162, 150, 1, 0.33, 1, false, true);
        this.atk1Anim[6][0] = new Animator(spritesheet, 503, 1981, 172, 146, 1, 0.33, 1, false, true);
        this.atk1Anim[7][0] = new Animator(spritesheet, 1246, 1981, 181, 145, 1, 0.33, 1, false, true);
        this.atk1Anim[8][0] = new Animator(spritesheet, 1893, 725, 190, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[9][0] = new Animator(spritesheet, 1893, 580, 193, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[10][0] = new Animator(spritesheet, 1893, 435, 194, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[11][0] = new Animator(spritesheet, 1893, 0, 229, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[12][0] = new Animator(spritesheet, 676, 1981, 190, 145, 1, 0.33, 1, false, true);
        this.atk1Anim[13][0] = new Animator(spritesheet, 1606, 1981, 231, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[14][0] = new Animator(spritesheet, 1893, 870, 190, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[15][0] = new Animator(spritesheet, 1893, 145, 229, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[16][0] = new Animator(spritesheet, 867, 1981, 190, 145, 1, 0.33, 1, false, true);
        this.atk1Anim[17][0] = new Animator(spritesheet, 1091, 1026, 231, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[18][0] = new Animator(spritesheet, 1893, 1015, 190, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[19][0] = new Animator(spritesheet, 1893, 290, 229, 144, 1, 0.33, 1, false, true);
        this.atk1Anim[20][0] = new Animator(spritesheet, 1058, 1981, 187, 145, 1, 0.33, 1, false, true);
        this.atk1Anim[21][0] = new Animator(spritesheet, 1428, 1981, 177, 145, 1, 0.33, 1, false, true);
        this.atk1Anim[22][0] = new Animator(spritesheet, 974, 1830, 165, 150, 1, 0.33, 1, false, true);
        this.atk1Anim[23][0] = new Animator(spritesheet, 1455, 161, 146, 160, 1, 0.33, 1, false, true);
        
        //attack 2
        this.atk2Anim = [];
        this.atk2Frames = 19;

        this.atk2Anim[0] = [];
        this.atk2Anim[1] = [];
        this.atk2Anim[2] = [];
        this.atk2Anim[3] = [];
        this.atk2Anim[4] = [];
        this.atk2Anim[5] = [];
        this.atk2Anim[6] = [];
        this.atk2Anim[7] = [];
        this.atk2Anim[8] = [];
        this.atk2Anim[9] = [];
        this.atk2Anim[10] = [];
        this.atk2Anim[11] = [];
        this.atk2Anim[12] = [];
        this.atk2Anim[13] = [];
        this.atk2Anim[14] = [];
        this.atk2Anim[15] = [];
        this.atk2Anim[16] = [];
        this.atk2Anim[17] = [];
        this.atk2Anim[18] = [];
        this.atk2Anim[19] = [];

        this.atk2Anim[0][0] = new Animator(spritesheet, 1329, 495, 125, 164, 1, 0.33, 1, false, true);
        this.atk2Anim[1][0] = new Animator(spritesheet, 1325, 1346, 129, 159, 1, 0.33, 1, false, true);
        this.atk2Anim[2][0] = new Animator(spritesheet, 0, 1673, 145, 156, 1, 0.33, 1, false, true);
        this.atk2Anim[3][0] = new Animator(spritesheet, 1455, 1437, 153, 156, 1, 0.33, 1, false, true);
        this.atk2Anim[4][0] = new Animator(spritesheet, 1455, 1280, 159, 156, 1, 0.33, 1, false, true);
        this.atk2Anim[5][0] = new Animator(spritesheet, 0, 997, 247, 179, 1, 0.33, 1, false, true);
        this.atk2Anim[6][0] = new Animator(spritesheet, 860, 1673, 284, 152, 1, 0.33, 1, false, true);
        this.atk2Anim[7][0] = new Animator(spritesheet, 313, 1673, 546, 152, 1, 0.33, 1, false, true);
        this.atk2Anim[8][0] = new Animator(spritesheet, 0, 414, 612, 197, 1, 0.33, 1, false, true);
        this.atk2Anim[9][0] = new Animator(spritesheet, 613, 0, 281, 194, 1, 0.33, 1, false, true);
        this.atk2Anim[10][0] = new Animator(spritesheet, 331, 612, 268, 196, 1, 0.33, 1, false, true);
        this.atk2Anim[11][0] = new Animator(spritesheet, 0, 809, 265, 187, 1, 0.33, 1, false, true);
        this.atk2Anim[12][0] = new Animator(spritesheet, 663, 1177, 186, 166, 1, 0.33, 1, false, true);
        this.atk2Anim[13][0] = new Animator(spritesheet, 1729, 0, 163, 151, 144, 1, 0.33, 1, false, true);
        this.atk2Anim[14][0] = new Animator(spritesheet, 1371, 1673, 195, 151, 1, 0.33, 1, false, true);
        this.atk2Anim[15][0] = new Animator(spritesheet, 1303, 1830, 430, 149, 1, 0.33, 1, false, true);
        this.atk2Anim[16][0] = new Animator(spritesheet, 498, 1830, 475, 150, 1, 0.33, 1, false, true);
        this.atk2Anim[17][0] = new Animator(spritesheet, 0, 1830, 497, 150, 1, 0.33, 1, false, true);
        this.atk2Anim[18][0] = new Animator(spritesheet, 1145, 1673, 225, 152, 1, 0.33, 1, false, true);
        this.atk2Anim[19][0] = new Animator(spritesheet, 1455, 322, 146, 160, 1, 0.33, 1, false, true);
        
        //attack 3
        this.atk3Anim = [];
        this.atk3Frames = 17;

        this.atk3Anim[0] = [];
        this.atk3Anim[1] = [];
        this.atk3Anim[2] = [];
        this.atk3Anim[3] = [];
        this.atk3Anim[4] = [];
        this.atk3Anim[5] = [];
        this.atk3Anim[6] = [];
        this.atk3Anim[7] = [];
        this.atk3Anim[8] = [];
        this.atk3Anim[9] = [];
        this.atk3Anim[10] = [];
        this.atk3Anim[11] = [];
        this.atk3Anim[12] = [];
        this.atk3Anim[13] = [];
        this.atk3Anim[14] = [];
        this.atk3Anim[15] = [];
        this.atk3Anim[16] = [];
        this.atk3Anim[17] = [];


        this.atk3Anim[0][0] = new Animator(spritesheet, 892, 1346, 130, 162, 1, 0.33, 1, false, true);
        this.atk3Anim[1][0] = new Animator(spritesheet, 1095, 1511, 130, 161, 1, 0.33, 1, false, true);
        this.atk3Anim[2][0] = new Animator(spritesheet, 895, 717, 147, 174, 1, 0.33, 1, false, true);
        this.atk3Anim[3][0] = new Animator(spritesheet, 516, 809, 177, 185, 1, 0.33, 1, false, true);
        this.atk3Anim[4][0] = new Animator(spritesheet, 315,201, 173, 190, 1, 0.33, 1, false, true);
        this.atk3Anim[5][0] = new Animator(spritesheet, 895, 366, 162, 175, 1, 0.33, 1, false, true);
        this.atk3Anim[6][0] = new Animator(spritesheet, 1226, 1511, 163, 160, 1, 0.33, 1, false, true);
        this.atk3Anim[7][0] = new Animator(spritesheet, 146, 1673, 166, 153, 1, 0.33, 1, false, true);
        this.atk3Anim[8][0] = new Animator(spritesheet, 1567, 1673, 160, 134, 1, 0.33, 1, false, true);
        this.atk3Anim[9][0] = new Animator(spritesheet, 1729, 286, 160, 130, 1, 0.33, 1, false, true);
        this.atk3Anim[10][0] = new Animator(spritesheet, 1729, 152, 160, 133, 1, 0.33, 1, false, true);
        this.atk3Anim[11][0] = new Animator(spritesheet, 1893, 1160, 202, 141, 1, 0.33, 1, false, true);
        this.atk3Anim[12][0] = new Animator(spritesheet, 256, 1981, 246, 149, 1, 0.33, 1, false, true);
        this.atk3Anim[13][0] = new Animator(spritesheet, 1455, 0, 273, 160, 1, 0.33, 1, false, true);
        this.atk3Anim[14][0] = new Animator(spritesheet, 0, 1177, 262, 168, 1, 0.33, 1, false, true);
        this.atk3Anim[15][0] = new Animator(spritesheet, 1091, 0, 237, 173, 1, 0.33, 1, false, true);
        this.atk3Anim[16][0] = new Animator(spritesheet, 1893, 1302, 222, 140, 1, 0.33, 1, false, true);
        this.atk3Anim[17][0] = new Animator(spritesheet, 1455, 483, 145, 160, 1, 0.33, 1, false, true);
        
        //death
        this.dieAnim = [];
        this.dieFrames = 19;

        this.dieAnim[0] = [];
        this.dieAnim[1] = [];
        this.dieAnim[2] = [];
        this.dieAnim[3] = [];
        this.dieAnim[4] = [];
        this.dieAnim[5] = [];
        this.dieAnim[6] = [];
        this.dieAnim[7] = [];
        this.dieAnim[8] = [];
        this.dieAnim[9] = [];
        this.dieAnim[10] = [];
        this.dieAnim[11] = [];
        this.dieAnim[12] = [];
        this.dieAnim[13] = [];
        this.dieAnim[14] = [];
        this.dieAnim[15] = [];
        this.dieAnim[16] = [];
        this.dieAnim[17] = [];
        this.dieAnim[18] = [];
        this.dieAnim[19] = [];

        this.dieAnim[0][0] = new Animator(spritesheet, 438, 997, 189, 178, 1, 0.33, 1, false, true);
        this.dieAnim[1][0] = new Animator(spritesheet, 1455, 1122, 161, 157, 1, 0.33, 1, false, true);
        this.dieAnim[2][0] = new Animator(spritesheet, 1455, 964, 170, 157, 1, 0.33, 1, false, true);
        this.dieAnim[3][0] = new Animator(spritesheet, 1455, 644, 177, 159, 1, 0.33, 1, false, true);
        this.dieAnim[4][0] = new Animator(spritesheet, 782, 1511, 181, 161, 1, 0.33, 1, false, true);
        this.dieAnim[5][0] = new Animator(spritesheet, 248, 997, 189, 179, 1, 0.33, 1, false, true);
        this.dieAnim[6][0] = new Animator(spritesheet, 694, 809, 167, 184, 1, 0.33, 1, false, true);
        this.dieAnim[7][0] = new Animator(spritesheet, 1091, 347, 229, 171, 1, 0.33, 1, false, true);
        this.dieAnim[8][0] = new Animator(spritesheet, 0, 1981, 255, 149, 1, 0.33, 1, false, true);
        this.dieAnim[9][0] = new Animator(spritesheet, 504, 1346, 256, 162, 1, 0.33, 1, false, true);
        this.dieAnim[10][0] = new Animator(spritesheet, 0, 1511, 286, 161, 1, 0.33, 1, false, true);
        this.dieAnim[11][0] = new Animator(spritesheet, 1023, 1346, 301, 161, 1, 0.33, 1, false, true);
        this.dieAnim[12][0] = new Animator(spritesheet, 895, 542, 182, 174, 1, 0.33, 1, false, true);
        this.dieAnim[13][0] = new Animator(spritesheet, 895, 0, 195, 182, 1, 0.33, 1, false, true);
        this.dieAnim[14][0] = new Animator(spritesheet, 613, 582, 201, 192, 1, 0.33, 1, false, true);
        this.dieAnim[15][0] = new Animator(spritesheet, 613, 195, 190, 193, 1, 0.33, 1, false, true);
        this.dieAnim[16][0] = new Animator(spritesheet, 315, 0, 174, 200, 1, 0.33, 1, false, true);
        this.dieAnim[17][0] = new Animator(spritesheet, 153, 0, 161, 208, 1, 0.33, 1, false, true);
        this.dieAnim[18][0] = new Animator(spritesheet, 0, 0, 152, 210, 1, 0.33, 1, false, true);
        this.dieAnim[19][0] = new Animator(spritesheet, 1734, 1830, 100, 114, 1, 0.33, 1, false, true);
        
        //damage
        this.dmgAnim = [];
        this.dmgFrames = 1;
        
        this.dmgAnim[0] = [];
        
        this.dmgAnim[0][0] = new Animator(spritesheet, 628, 997, 189, 178, 1, 0.33, 1, false, false);
        
        //regen
        this.regenAnim = [];
        this.regenFrames = 9;

        this.regenAnim[0] = [];
        this.regenAnim[1] = [];
        this.regenAnim[2] = [];
        this.regenAnim[3] = [];
        this.regenAnim[4] = [];
        this.regenAnim[5] = [];
        this.regenAnim[6] = [];
        this.regenAnim[7] = [];
        this.regenAnim[8] = [];
        this.regenAnim[9] = [];


        this.regenAnim[0][0] = new Animator(spritesheet, 895, 183, 145, 182, 1, 0.33, 1, false, true);
        this.regenAnim[1][0] = new Animator(spritesheet, 818, 997, 149, 178, 1, 0.33, 1, false, true);
        this.regenAnim[2][0] = new Animator(spritesheet, 535, 1511, 246, 161, 1, 0.33, 1, false, true);
        this.regenAnim[3][0] = new Animator(spritesheet, 287, 1511, 247, 161, 1, 0.33, 1, false, true);
        this.regenAnim[4][0] = new Animator(spritesheet, 266, 809, 249, 187, 1, 0.33, 1, false, true);
        this.regenAnim[5][0] = new Animator(spritesheet, 613, 389, 251, 192, 1, 0.33, 1, false, true);
        this.regenAnim[6][0] = new Animator(spritesheet, 0, 211, 271, 202, 1, 0.33, 1, false, true);
        this.regenAnim[7][0] = new Animator(spritesheet, 0, 612, 330, 196, 1, 0.33, 1, false, true);
        this.regenAnim[8][0] = new Animator(spritesheet, 1455, 804, 129, 159, 1, 0.33, 1, false, true);
        this.regenAnim[9][0] = new Animator(spritesheet, 1091, 861, 125, 164, 1, 0.33, 1, false, true);

    };

    update() {
        // update velocity
        // update position


    };

    draw(ctx) {
        
        
        this.idleAnim[0][0].drawFrame(this.game.clockTick, this.game.ctx, 100, 100);
        for (i=0; i<5; i++){
            this.idleAnim[x][0].drawFrame(this.game.clockTick, this.game.ctx, 25, 25);
        }
        
        
        //unedited from mario
        //this.idleAnim[0][0].drawFrame(this.game.clockTick, this.game.ctx, this.x, this.y + 300, 2);
        //this.idleAnim[1][0].drawFrame(this.game.clockTick, this.game.ctx, this.x + 100, this.y + 300, 2);
        //this.idleAnim[2][0].drawFrame(this.game.clockTick, this.game.ctx, this.x + 200, this.y + 300, 2);

        
    };
};
