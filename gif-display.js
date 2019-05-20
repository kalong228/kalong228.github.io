// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
var url;
var scr = document.getElementById('screen');
var bkground = document.getElementById('background');
class GifDisplay {
  constructor(Element) {
    this.urls_gif = [];
    this.Element = Element;
    this.DateOn_gif = this.DateOn_gif.bind(this);
    this.change = this.change.bind(this);
    this.currentIndex = 0;
    this.changeIndex = 0;
  }
  fetch_gif (u){
    fetch(u)
      .then(this.Reply_gif)
      .then(this.DateOn_gif);
  }
  Reply_gif (res){
    return res.json();
  }
  DateOn_gif(json){
    for (const result of json.data) {
        this.urls_gif.push(result.images.downsized.url);
    }
    if(this.urls_gif.length < 2){
      err.classList.remove('inactive');
    }
    else{
      app.menu.hide();
      app.screen.show();
      this.currentIndex = Math.floor(Math.random()*this.urls_gif.length);
      scr.style.backgroundImage= "url(" + this.urls_gif[this.currentIndex] + ")";
      this.next_gif();
    }
  }
  next_gif(){
    this.changeIndex =  Math.floor(Math.random()*this.urls_gif.length);
    while(this.changeIndex == this.currentIndex){
        this.changeIndex =  Math.floor(Math.random()*this.urls_gif.length);
    }
    if(scr.style.zIndex == 2)
      bkground.style.backgroundImage= "url(" + this.urls_gif[this.changeIndex] + ")";
    else{
      scr.style.backgroundImage= "url(" + this.urls_gif[this.changeIndex] + ")";
    }
  }
  change(){
    if(scr.style.zIndex == 2){
      bkground.style.zIndex = "2";  
      scr.style.zIndex = "1";  
    }
    else{
      scr.style.zIndex = "2";   
      bkground.style.zIndex = "1";  
    }
    this.currentIndex = this.changeIndex;
    this.next_gif();
  } 
}