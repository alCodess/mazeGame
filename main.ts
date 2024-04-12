namespace SpriteKind {
    export const npc1 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc1, function (sprite, otherSprite) {
    game.showLongText(" The winged one you say ive heard about them thay are ## i cant tell you it seem go to the other level ", DialogLayout.Bottom)
    story.showPlayerChoices("On to the next level  ", "")
    pause(2000)
})
tiles.setCurrentTilemap(tilemap`level4`)
let devin = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . f f f f f f . . . 
    . . . f f f f f f f f f . 
    . . f f f c f f f f f f . 
    . f f f c f f f c f f f f 
    f f c c f f f c c f f c f 
    f f f f f e f f f f c c f 
    . f f f e e f f f f f f f 
    . . f f e e f b f e e f f 
    . . f f 4 4 f 1 e 4 e f . 
    . . . f 4 4 4 e e f f f . 
    . . . f f e e 4 4 e f . . 
    . . . f 7 7 e 4 4 e f . . 
    . . f f 6 6 f e e f f f . 
    . . f f f f f f f f f f . 
    . . . f f f . . . f f . . 
    `, SpriteKind.Player)
tiles.placeOnTile(devin, tiles.getTileLocation(0, 0))
controller.moveSprite(devin)
scene.cameraFollowSprite(devin)
let npc1 = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.npc1)
tiles.placeOnTile(npc1, tiles.getTileLocation(13, 15))
