// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);

    const screenElement = document.querySelector('#screen');
    this.screen = new MusicScreen(screenElement);
  }
  // TODO(you): Add methods as necessary.
}
