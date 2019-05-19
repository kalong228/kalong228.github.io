// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class ResultsScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
	this.tomenu = containerElement.querySelector('.to-menu');
    this.tomenu.addEventListener('click',this.to_Menu);
    this.continue = containerElement.querySelector('.continue');
    this.continue.addEventListener('click',this.continues);
  }

  show(numberCorrect, numberWrong) {
    this.containerElement.classList.remove('inactive');
	console.log(numberCorrect + "fff" + numberWrong);
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
  
  to_Menu(event)
  {
	  document.dispatchEvent(new CustomEvent('back_to_menu'));
  }
  
  continues(event)
  {
	  document.dispatchEvent(new CustomEvent('restart'));
  }
}
