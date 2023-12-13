let hand = 0
let Current = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.stringPlayable("C5 B A G - - - - ", 808), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ScreenDown, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        if (Current != 1) {
            basic.showLeds(`
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1791, 2450, 255, 0, 307, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        }
        Current = 1
    } else if (hand == 2) {
        if (Current != 2) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . # # # .
                # # . # #
                # . . . #
                `)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1791, 2450, 255, 0, 307, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        }
        Current = 2
    } else {
        if (Current != 3) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1949, 255, 255, 100, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        }
        Current = 3
    }
})
