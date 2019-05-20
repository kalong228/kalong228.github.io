// NOTE: You may, but do not have to, modify this file, such as to create other
// classes or to call methods on `App`. You may not add any global state
// variables.
const app = new App();
var songURL = new Array(10);
function Reply (res){
    return res.text();
}
function DateOn(text){
    var urls = text.split('\n');
    let j = 0;
    for(i=0;i<6;i++){
        let opt = document.createElement('option');
        opt.text = urls[i*5 + 3].split(':')[1].split('"')[1];
        sele.add(opt);
        songURL[i] = urls[i*5 + 2].split(' ')[5].split('"')[1];
    }
}


