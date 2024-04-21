class Experiment {
  // Group Details
  static rollNos = '102117145,102117184,102117156'
  static names = 'Pixel Pioneers(Hari, Aryan, Jayant)'

  canvasSel = '#myCanvas'

  run() {

    // Run the Steppers
    // this.runSteppers()

    // Hide Steppers
    // this.hideSteppers()
    canvasSetup(this.canvasSel)

    // Clock
    // --------------------------------------------------
    const animation = new Animation();
    animation.draw();
    // const ms = document.timeline.currentTime
    // clock.draw(ms)
    // clock.draw(ms+25000)

  }

}
