// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
var query = document.getElementById('query-input');
var err = document.getElementById('error');
var sele = document.getElementById('song-selector');
var theme = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
class MenuScreen {
  
  constructor(Element) {
    this.Element = Element;

    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
      .then(Reply)
      .then(DateOn);
    
    query.value = theme[Math.floor(Math.random()*10)];

    this.goBtn = document.getElementById("go");
    this.goBtn = addEventListener('submit',this.Onclick);
  }
  Onclick(event){
    event.preventDefault();
    url = "https://api.giphy.com/v1/gifs/search?q="+ query.value +"&api_key=VZ7FFJUrfrJrkWSEGvKsVtBp6wNRiyxZ";
    app.screen.gif.fetch_gif(url);
  }
  show(){
    this.Element.classList.remove('inactive');
  }
  hide() {
    this.Element.classList.add('inactive');
  }
}
