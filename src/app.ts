import { ConsoleLogger, LogLevel } from './components'
import { GameEngine } from './GameEngine'
import {  TestScene } from './scenes'
import { GameServices, GlobalEvents, LogService } from './services'

/**
 * Phase Engine Configuration
 */
const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Game Template',
    version: '0.0.1',
    width: 1024,
    height: 800,
    type: Phaser.AUTO,
    disableContextMenu: true,
    autoFocus: true,
    backgroundColor: '#6495ed',
    scene: [
        TestScene
    ],
    render: {

    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    }
}

/**
 * Setup Global Services
 */
 GameServices.registerService(new LogService(new ConsoleLogger(LogLevel.Debug, true, true)))
 GameServices.registerService(new GlobalEvents())
 
 //Setup GameLoad event <example>
 GameServices.getService<GlobalEvents>(GlobalEvents.serviceName).registerEventName('GAME.Load', true, true)
 GameServices.getService<GlobalEvents>(GlobalEvents.serviceName).subscribe('GAME.Load', (caller: unknown, message: unknown) => {
     GameServices.getService<LogService>(LogService.serviceName).info('Loading',`Game is loading. Get Ready! Message: ${message}`)
 })

/**
 * Start Game
 */
window.addEventListener('load', () => {
   
    const engine =  new GameEngine(gameConfig)
    engine.hasFocus
    //Call GameLoad event <example>
    GameServices.getService<GlobalEvents>(GlobalEvents.serviceName).callEvent('GAME.Load', engine, 'Trigger!', true)
})