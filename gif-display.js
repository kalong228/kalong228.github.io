// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(input1) {
    this.data = null;
    this.url = "https://api.giphy.com/v1/gifs/search?";
    this.message = "q=" + input1 + "&api_key=gm2ZMlRhxG54KrlmuhJ8J4O2SREJW4G7&limit=25&rating=g";
    this.url = this.url + this.message;
    this.len = 1;
    this.zindex = 1;
    this.getGIF = this.getGIF.bind(this);
    this.album = null;
    this.random = 0;
    this.getGIF();

  }
  async getGIF() {
    await fetch(this.url)
      .then(onResponse => {
        return onResponse.json();
      })
      .then(json => {
        if (json.data.length < 2) {
          alert("img less than 2 ");
          javascript: history.go(0)
        }
        //  this.album=json;
        this.random = getRandomInt(json.data.length);
        this.album = json;

        console.log(json.data.length);
        const gif = document.querySelector('#gif');

        let img = document.createElement("img");
        img.setAttribute("id", "img1");
        img.style.zIndex = "1";
        img.style.position = "absolute";
        img.src = json.data[this.random].images.downsized.url;


        let img2 = document.createElement("img");
        img2.setAttribute("id", "img2");
        this.random = getRandomInt(json.data.length);
        if (this.random == json.data.length-1)
          this.random = 0;
        else
          this.random++;
        img2.src = json.data[this.random].images.downsized.url;
        img2.style.position = "absolute";
        img2.style.zIndex = "2";

        gif.append(img);
        gif.append(img2);

      });
  }
  change() {
    if (this.zindex == 1) {
      console.log("111")
      let img = document.querySelector('#img1');
      img.style.zIndex = "2";
      let img2 = document.querySelector('#img2');
      img2.style.zIndex = "1";
      if (this.random == this.album.data.length)
        this.random = 0;
      else
        this.random++;

      img1.src = this.album.data[this.random].images.downsized.url;
      this.zindex = 0;
    }
    else {
      console.log("222")
      let img = document.querySelector('#img1');
      img.style.zIndex = "1";
      let img2 = document.querySelector('#img2');
      img2.style.zIndex = "2";
      if (this.random == this.album.data.length-1)
        this.random = 0;
      else
        this.random++;
      img2.src = this.album.data[this.random].images.downsized.url;
      this.zindex = 1;
    }
  }
}
