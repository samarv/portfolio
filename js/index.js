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

    this.Content1 = document.querySelector(`.content[data-tab="${this.navData}"]`);

    this.tabcontent = document.querySelector('.tab-content')

    console.log("tc", this.Content1)
    
    this.Content1 = new Content(this.Content1);

  };
  //Methods
  navClick() {
    this.navItem.parentNode.parentNode.classList.add('show-content');
    this.navItem.parentNode.parentNode.classList.replace('show-content','hide-content');
    this.Content1.showContent();
    this.Content1.tabLook();
  };

};
//2nd class

class Content {
  constructor(Content1) {
    this.Content1 = Content1;

  }
  //methods
  showContent() {
    console.log(this.Content1)
    this.Content1.classList.add('hide-content');
    this.Content1.classList.replace('hide-content','show-content');
  }
  tabLook() {
    this.Content1.classList.toggle('tab-look');
  }
 
}


let navs = document.querySelectorAll(".navItem");
navs = Array.from(navs).map(navItem => new Nav(navItem));


//tryin' somethin'

class CloseItem {
  constructor(close2) {
    this.close = close2;
    this.close.addEventListener("click", () => {
      this.closeClick();
    });

  };
  //Methods
  closeClick() {
    hide(this.close.parentNode);
    show(mainContent);
    remove(this.close.parentNode);
  };

};


//references
const mainContent = document.querySelector('.main-content');
console.log(mainContent);
let close3 = document.querySelectorAll('.close');
close3 = Array.from(close3).map(close => new CloseItem(close));
const tabCon = document.querySelector('.tab-content');
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


