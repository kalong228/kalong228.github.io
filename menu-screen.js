// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior. 
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
	var choose = containerElement.querySelector('#choices');
	for(let i=0;i<FLASHCARD_DECKS.length;i++) 
	{
		let	node=document.createElement("div");
		let text=document.createTextNode(FLASHCARD_DECKS[i].title);
		node.appendChild(text);
		choose.appendChild(node);
	}
	choose = document.querySelectorAll('#choices div');
	for(let i=0;i<FLASHCARD_DECKS.length;i++) 
	{
		choose[i].addEventListener('click', this.mouseclick);
	}
  }
  
  mouseclick(event)
  {
	document.dispatchEvent(new CustomEvent('menuclick',{ 'detail': this.textContent }));
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}