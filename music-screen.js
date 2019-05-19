// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;

    this.url = "";
    this.songName = "";

    this.isPlaying = 0;
    this._onKick = this._onKick.bind(this);


    const button = document.querySelector('#button');
    button.style.zIndex="500";
    this.onClick = this.onClick.bind(this);


    let img = document.createElement("img");
    img.setAttribute("id", "playButton");
    img.src = "./images/play.png"
    button.append(img);
    img.style.width = "60px";
    img.style.height = "60px";
    img.addEventListener('click', this.onClick);

  }

  show() {
    console.log("mu");
    this.audioPlayer = new AudioPlayer();
    this.containerElement.classList.remove('inactive');
    let choice=document.querySelectorAll('option');
    let gif=document.querySelector('input');
    var music;
    for(var i of choice)
        if(i.selected)
            music=i;
    console.log(gif.value);
    this.url=music.value;
    this.songName=music.textContent;
    this.GIF = new GifDisplay(gif.value);
    
  //  this.Buutton = new PlayButton(this.url,this.songName);
    console.log(music.value);
    console.log(music.textContent);
    console.log(event);
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

  onClick(event) {
    if (this.isPlaying == 0) {
      console.log("hi");
      this.audioPlayer.setSong(this.url);
      console.log("+++"+this.url);
      this.audioPlayer.setKickCallback(this._onKick);
      this.audioPlayer.play();
      this.isPlaying = 1;
      let button = document.querySelector('#playButton');
      button.setAttribute("src","./images/pause.png");
    }
    else{
      this.audioPlayer.pause();
      this.isPlaying = 0;
      let button = document.querySelector('#playButton');
      button.setAttribute("src","./images/play.png");
    }
  }
  _onKick() {
    console.log('kick!');
    this.GIF.change();
    console.log('kick2');
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
