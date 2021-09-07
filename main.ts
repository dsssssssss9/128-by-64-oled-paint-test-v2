// Dispplay 16*16 pixel frog icon at X across & Y down
// 
function Kermit (x: number, y: number) {
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix16x16(`
        . # # # # . . . . . . # # # # .
        # . . . . # # # # # # . . . . #
        # . # # . # . . . . # . # # . #
        # . . . . # . . . . # . . . . #
        . # # # # . . . . . . # # # # .
        # . . . . . . . . . . . . . . #
        # . # # # # # # # # # # # # . #
        # . . . . . . . . . . . . . . #
        . # # # # # # # # # # # # # # .
        . # # . . . . . . . . . . # # .
        # . # . . . . . . . . . . # . #
        # . . . # . # . . # . # . . . #
        . # . . # . # . . # . # . . # .
        # . . . # . # # # # . # . . . #
        # # # # . . # . . # . . # # # #
        . . . # # # . . . . # # # . . .
        `), x, y)
    kitronik_VIEW128x64.refresh()
}
input.onButtonPressed(Button.A, function () {
    kitronik_VIEW128x64.clear()
    // Display all built-in Icons 1 by 1 at standard ( very small ) size in middle of screen 
    for (let index = 0; index <= list2.length - 1; index++) {
        kitronik_VIEW128x64.writeImageOLED(list2[index], 63, 31)
        kitronik_VIEW128x64.refresh()
        basic.pause(100)
        kitronik_VIEW128x64.clear()
    }
    basic.pause(500)
    kitronik_VIEW128x64.clear()
    // Display all Built in Icons 1 by 1 in middle of screen
    for (let index = 0; index <= list2.length - 1; index++) {
        kitronik_VIEW128x64.writeImageDouble(list2[index], 31, 15)
        kitronik_VIEW128x64.refresh()
        basic.pause(100)
        kitronik_VIEW128x64.clear()
    }
})
// Print into message using built in font
function Intro () {
    let Delay = 0
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.refresh()
    basic.pause(Delay)
    kitronik_VIEW128x64.show(kitronik_VIEW128x64.OLEDstring("Welcome Frank!"), 1)
    kitronik_VIEW128x64.refresh()
    basic.pause(Delay)
    kitronik_VIEW128x64.refresh()
    kitronik_VIEW128x64.show(kitronik_VIEW128x64.OLEDstring("This will demo paint Blocks"), 3)
    kitronik_VIEW128x64.refresh()
    basic.pause(Delay)
    kitronik_VIEW128x64.show(kitronik_VIEW128x64.OLEDstring("Press A to display in-built icons"), 5)
    kitronik_VIEW128x64.refresh()
    basic.pause(Delay)
    kitronik_VIEW128x64.show(kitronik_VIEW128x64.OLEDstring("Press B to display Custome Shapes"), 7)
    kitronik_VIEW128x64.refresh()
    basic.pause(Delay)
}
// Display custon 8*8 icons 
// Use both standard size & double size
// 
input.onButtonPressed(Button.B, function () {
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix8x8(`
        . . # . . # . .
        . # # # # # # .
        # # # # # # # #
        # # . # # . # #
        . # # # # # # .
        . # . . . . # .
        # . # # # # . #
        # . . . . . . #
        `), 0, 0)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix8x8(`
        # . # . . # . #
        . # . # # . # .
        . . # . . # . .
        . . # # # # . .
        . # # # # # # .
        # # . # # . # #
        # # # # # # # #
        . # # . . # # .
        `), 16, 0)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix8x8(`
        . . . # # . . .
        . . # # # # . .
        . # # # # # # .
        # # . # # . # #
        # # # # # # # #
        . . # # # # . .
        . # # # # # # .
        # . # . . # . #
        `), 32, 0)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . . # . . # . .
        . # # # # # # .
        # # # # # # # #
        # # . # # . # #
        . # # # # # # .
        . # . . . . # .
        # . # # # # . #
        # . . . . . . #
        `), 0, 8)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        # . # . . # . #
        . # . # # . # .
        . . # . . # . .
        . . # # # # . .
        . # # # # # # .
        # # . # # . # #
        # # # # # # # #
        . # # . . # # .
        `), 16, 8)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . . . # # . . .
        . . # # # # . .
        . # # # # # # .
        # # . # # . # #
        # # # # # # # #
        . . # # # # . .
        . # # # # # # .
        # . # . . # . #
        `), 32, 8)
    kitronik_VIEW128x64.refresh()
    basic.pause(2000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . # # # # # # #
        . # . . . . . .
        . # . . . . . .
        . # # # # # # .
        . # . . . . . .
        . # . . . . . .
        . # . . . . . .
        . # . . . . . .
        `), 0, 24)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . # # # # # # .
        . # . . . . . #
        . # . . . . . #
        . # . . . . # .
        . # # # # # # .
        . # . . . # . .
        . # . . . . # .
        . # . . . . . #
        `), 8, 24)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . . . . # . . .
        . . . # . # . .
        . . # . . . # .
        . # . . . . . #
        . # . . . . . #
        . # # # # # # #
        . # . . . . . #
        . # . . . . . #
        `), 16, 24)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . # . . . . . #
        . # # . . . . #
        . # # # . . . #
        . # . # # . . #
        . # . . # # . #
        . # . . . # # #
        . # . . . . # #
        . # . . . . . #
        `), 24, 24)
    kitronik_VIEW128x64.refresh()
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix8x8(`
        . # . . . . . #
        . # . . . . # .
        . # . . . # . .
        . # . . # . . .
        . # . # # . . .
        . # # . . # . .
        . # . . . . # .
        . # . . . . . #
        `), 32, 24)
    kitronik_VIEW128x64.refresh()
})
// Display 4 16*16 custom Frog icons one in each corner of the screen
// Display double sized 16*16 custom Frog icon in centre of screen 
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    kitronik_VIEW128x64.clear()
    Kermit(0, 0)
    Kermit(112, 0)
    Kermit(0, 48)
    Kermit(112, 48)
    basic.pause(1000)
    kitronik_VIEW128x64.writeImageDouble(kitronik_VIEW128x64.matrix16x16(`
        . # # # # . . . . . . # # # # .
        # . . . . # # # # # # . . . . #
        # . # # . # . . . . # . # # . #
        # . . . . # . . . . # . . . . #
        . # # # # . . . . . . # # # # .
        # . . . . . . . . . . . . . . #
        # . # # # # # # # # # # # # . #
        # . . . . . . . . . . . . . . #
        . # # # # # # # # # # # # # # .
        . # # . . . . . . . . . . # # .
        # . # . . . . . . . . . . # . #
        # . . . # . # . . # . # . . . #
        . # . . # . # . . # . # . . # .
        # . . . # . # # # # . # . . . #
        # # # # . . # . . # . . # # # #
        . . . # # # . . . . # # # . . .
        `), 23, 11)
    kitronik_VIEW128x64.refresh()
})
let list2: Image[] = []
// Display briew introduction text
// 
// 5*5 built in font so hard to read
// 
Intro()
// Set up list of all built in Micro:Bit Icons
list2 = [
kitronik_VIEW128x64.iImage(IconNames.Heart),
images.iconImage(IconNames.SmallHeart),
kitronik_VIEW128x64.iImage(IconNames.Yes),
images.iconImage(IconNames.No),
kitronik_VIEW128x64.iImage(IconNames.Happy),
images.iconImage(IconNames.Sad),
kitronik_VIEW128x64.iImage(IconNames.Confused),
images.iconImage(IconNames.Angry),
kitronik_VIEW128x64.iImage(IconNames.Silly),
images.iconImage(IconNames.Surprised),
images.iconImage(IconNames.Silly),
images.iconImage(IconNames.Fabulous),
images.iconImage(IconNames.Meh),
images.iconImage(IconNames.TShirt),
images.iconImage(IconNames.Rollerskate),
images.iconImage(IconNames.Duck),
images.iconImage(IconNames.House),
images.iconImage(IconNames.Tortoise),
images.iconImage(IconNames.Butterfly),
images.iconImage(IconNames.StickFigure),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.StickFigure),
images.iconImage(IconNames.Ghost),
images.iconImage(IconNames.Sword),
images.iconImage(IconNames.Giraffe),
images.iconImage(IconNames.Skull),
images.iconImage(IconNames.Umbrella),
images.iconImage(IconNames.Snake),
images.iconImage(IconNames.Rabbit),
images.iconImage(IconNames.Cow),
images.iconImage(IconNames.QuarterNote),
images.iconImage(IconNames.EigthNote),
images.iconImage(IconNames.Pitchfork),
images.iconImage(IconNames.Target),
images.iconImage(IconNames.Triangle),
images.iconImage(IconNames.LeftTriangle),
images.iconImage(IconNames.Chessboard),
images.iconImage(IconNames.Diamond),
images.iconImage(IconNames.SmallDiamond),
images.iconImage(IconNames.Scissors),
images.iconImage(IconNames.SmallSquare),
images.iconImage(IconNames.Square)
]
