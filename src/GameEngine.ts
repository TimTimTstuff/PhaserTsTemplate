import Phaser from 'phaser';

export class GameEngine extends Phaser.Game {
    /**
     *
     */
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }

    public startScene(sceneName: string): void {
        this.scene.start(sceneName);
    }
}