// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class Flashcard {
  constructor(containerElement, frontText, backText) {
    this.containerElement = containerElement;
	this.dragStart = false;
	this.originX = null;
    this.originY = null;
    this.offsetX = 0;
    this.offsetY = 0;
    this.deltaX = 0;
    this.deltaY = 0;

    this._flipCard = this._flipCard.bind(this);
	this._createFlashcardDOM = this._createFlashcardDOM.bind(this);
	this.onDragStart = this.onDragStart.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);

    this.flashcardElement = this._createFlashcardDOM(frontText, backText);
    this.containerElement.append(this.flashcardElement);

    this.flashcardElement.addEventListener('pointerup', this._flipCard);
	this.flashcardElement.addEventListener('pointerdown', this.onDragStart);
	this.flashcardElement.addEventListener('pointermove', this.onDragMove);
	this.flashcardElement.addEventListener('pointerup', this.onDragEnd);
  }
  
  onDragStart(event)
  {
	this.originX = event.clientX;
	this.originY = event.clientY;
	this.dragStart = true;
	event.currentTarget.setPointerCapture(event.pointerId);
  }
  
  onDragMove(event)
  {
	if (!this.dragStart){
		return;
	}
	event.preventDefault();
	this.deltaX = event.clientX - this.originX;
    this.deltaY = event.clientY - this.originY;
    const translateX = this.offsetX + this.deltaX;
    const translateY = this.offsetY + this.deltaY;
    event.currentTarget.style.transform = 'translate(' +translateX + 'px, ' + translateY + 'px) rotate(' + translateX * 0.2 + 'deg)';
	const select = document.querySelector('body');
	if(this.deltaX > 150||this.deltaX < -150)
	{
		select.style.backgroundColor='#97b7b7';
	}
	else
	{
		select.style.backgroundColor='#d0e6df';  
	}
  }
  
  onDragEnd(event)
  {
	this.dragStart = false;
	this.offsetX += event.clientX - this.originX;
	this.offsetY += event.clientY - this.originY;
	
	if (this.deltaX > 150) 
	{
		document.dispatchEvent(new CustomEvent('right'));
    }
    if (this.deltaX < -150) 
	{
		document.dispatchEvent(new CustomEvent('left'));
    }
	else
	{
		this.originX = null;
		this.originY = null;
		this.offsetX = 0;
		this.offsetY = 0;
		this.deltaX = 0;
		this.deltaY = 0;
		this.flashcardElement.style.cssText = 	"transition-duration:0.6s";
    }
	var select=document.querySelector('body');
	select.style.backgroundColor='#d0e6df';	
  }

  // Creates the DOM object representing a flashcard with the given
  // |frontText| and |backText| strings to display on the front and
  // back of the card. Returns a reference to root of this DOM
  // snippet. Does not attach this to the page.
  //
  // More specifically, this creates the following HTML snippet in JS
  // as a DOM object:
  // <div class="flashcard-box show-word">
  //   <div class="flashcard word">frontText</div>
  //   <div class="flashcard definition">backText</div>
  // </div>
  // and returns a reference to the root of that snippet, i.e. the
  // <div class="flashcard-box">
  _createFlashcardDOM(frontText, backText) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('flashcard-box');
    cardContainer.classList.add('show-word');

    const wordSide = document.createElement('div');
    wordSide.classList.add('flashcard');
    wordSide.classList.add('word');
    wordSide.textContent = frontText;

    const definitionSide = document.createElement('div');
    definitionSide.classList.add('flashcard');
    definitionSide.classList.add('definition');
    definitionSide.textContent= backText;

    cardContainer.appendChild(wordSide);
    cardContainer.appendChild(definitionSide);
    return cardContainer;
  }

  _flipCard(event) {
    this.flashcardElement.classList.toggle('show-word');
  }
}
