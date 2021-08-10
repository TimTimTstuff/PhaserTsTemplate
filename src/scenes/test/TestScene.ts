import { BaseScene } from "../BaseScene";

export class TestScene extends BaseScene {
    public static KEY = 'test-scene'

    /**
     *
     */
    constructor() {
        super({
            key: TestScene.KEY
        });
        
    }
}