var byline = document.getElementById('byline');  	// Find the H2
bylineText = byline.innerHTML;										// Get the content of the H2
bylineArr = bylineText.split('');									// Split content into array
byline.innerHTML = '';														// Empty current content

var span;					// Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){									// Loop for every letter
  span = document.createElement("span");					// Create a <span> element
  letter = document.createTextNode(bylineArr[i]);	// Create the letter
  if(bylineArr[i] == ' ') {												// If the letter is a space...
    byline.appendChild(letter);					// ...Add the space without a span
  } else {
		span.appendChild(letter);						// Add the letter to the span
  	byline.appendChild(span); 					// Add the span to the h2
  }
}

//Making pages

class Nav {
  constructor(nav) {
    this.navItem = nav;
    this.navItem.addEventListener("click", () => {
      this.navClick();
    });
    this.navData = this.navItem.dataset.tab;
    this.content1 = document.querySelector(`.content[data-tab="${this.navData}"]`);
    this.tabcontent = document.querySelector('.tab-content')
    this.content1 = new Content(this.content1);

  };
  //Methods
  navClick() {
    this.navItem.parentNode.parentNode.classList.add('show-content');
    this.navItem.parentNode.parentNode.classList.replace('show-content','hide-content');
    this.content1.showContent();
    this.content1.tabLook();
    TweenMax.from(".content", 0.5 ,{opacity: 0, scale:0,ease:Back.easeOut});
  };

};
//2nd class

class Content {
  constructor(content1) {
    this.content1 = content1;

  }
  //methods
  showContent() {
    console.log(this.content1)
    this.content1.classList.add('hide-content');
    this.content1.classList.replace('hide-content','show-content');
  }
  tabLook() {
    this.content1.classList.toggle('tab-look');
  }
 
}


let navs = document.querySelectorAll(".navItem");
navs = Array.from(navs).map(navItem => new Nav(navItem));


//done somethin'

class CloseItem {
  constructor(close2) {
    this.close = close2;
    this.close.addEventListener("click", () => {
      this.closeClick();
    });
    this.close.addEventListener("click", () => {
      this.closeClick();
    });
    this.close.addEventListener("mouseenter", () => {                           //LOOK AT THIS AGAIN
      this.closeHover();
    });
    this.close.addEventListener("mouseleave", () => {
      this.closeHoverOff();
    });

  };
  //Methods
  closeClick() {
    hide(this.close.parentNode);
    show(mainContent);
    remove(this.close.parentNode);
  };
  closeHover() {
    this.close.classList.add(".close-hover")
  };
  closeHoverOff() {
    this.close.classList.remove(".close-hover")
  };

};


//references
const mainContent = document.querySelector('.main-content');
console.log(mainContent);
let close3 = document.querySelectorAll('.close');
close3 = Array.from(close3).map(close => new CloseItem(close));
// const con = document.querySelector('.content');
// console.log(con)

// close.addEventListener("click", () => {
//   hide(con);
//   show(mainContent);
//   remove(con);
//   console.log('it works yeah');
// });
// close.addEventListener('mouseover', () => {

// })

function hide(classRefer) {
  classRefer.classList.replace('show-content','hide-content');
};

function remove(classRef) {
  classRef.classList.remove('tab-look');
}
function show(className) {
   className.classList.replace('hide-content','show-content');
  };


TweenMax.from(".navItem", 1.3 ,{opacity: 0, scale:0,ease:Power4.easeOut,delay:6});