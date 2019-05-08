// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields

class App {
  constructor() {
	this.correct=0;
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);
	this.mouseonclick = this.mouseonclick.bind(this);
    document.addEventListener('menuclick', this.mouseonclick);
    this.chosen = "";
    this.menu.show();

    const mainElement = document.querySelector('#main');
    this.flashcards = new FlashcardScreen(mainElement);
	
	this.result = this.result.bind(this);
    document.addEventListener('result_open', this.result);

    const resultElement = document.querySelector('#results');
    this.results = new ResultsScreen(resultElement);
	
	this.backtomenu = this.backtomenu.bind(this);
    document.addEventListener('back_to_menu', this.backtomenu);

    this.restart=this.restart.bind(this);
    document.addEventListener('restart', this.restart);
	
  }
	mouseonclick(event)
	{
		console.log(event.detail);
		this.choosedeck = event.detail;
		this.flashcards.show(this.choosedeck);
		this.menu.hide();

	}
	
	result(event)
	{
		console.log(event.detail);
		this.correct = event.detail;
		this.menu.hide();
		this.flashcards.hide();
		this.results.show();
	}
	
	backtomenu(event)
	{
		javascript: history.go(0)
	}
	
	restart(event)
	{
		console.log('start');
		if(this.correct==100)
			javascript: history.go(0)
		else
		{
			this.flashcards.show("redo");
			this.results.hide();
		}
	}

    // Uncomment this pair of lines to see the "flashcard" screen:
	//this.menu.hide();
    //this.flashcards.show();

    // Uncomment this pair of lines to see the "results" screen:
    // this.menu.hide();
    // this.results.show();
  
}
