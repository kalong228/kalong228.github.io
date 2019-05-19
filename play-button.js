class PlayButton {
  constructor(input1, input2) {
  }
  show() {
    this.containerElement.classList.remove('inactive');
  }
  hide() {
    this.containerElement.classList.add('inactive');
  }
}
