class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    function onJsonReady(json) {
      //   console.log(json);
      const albums = json;
      const themeList = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
      const SongList = albums;
      const select = document.querySelector('#song-selector');
      const input = document.querySelector('#query-input');
      var random = getRandomInt(themeList.length);

      input.setAttribute("value", themeList[random]);

      for (let i of Object.keys(SongList)) {
        console.log(i);
        select.append(new Option(SongList[i].title, SongList[i].songUrl));
      }
    }

    function onResponse(response) {
      return response.json();
    }
    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
    //fetch("https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10")
      .then(onResponse)
      .then(onJsonReady);
  }
 

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


