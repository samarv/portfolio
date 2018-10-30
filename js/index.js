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

function openPage(pageName) {
  const pn = document.getElementsByClassName("landingPage");
  console.log("pn", pn)
  for (i = 0; i < pn.length; i++) {
    pn[i].style.display = "none";
  }
  const tabcontent = document.getElementsByClassName(pageName);
  console.log("tabcontent", tabcontent)
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "flex";
  }

}

// close page takes in pageName to close and opens landing page

function closePage(pageName) {
  const pn = document.getElementsByClassName("landingPage");
  console.log("pn", pn)
  for (i = 0; i < pn.length; i++) {
    pn[i].style.display = "flex";
  }
  const tabcontent = document.getElementsByClassName(pageName);
  console.log("tabcontent", tabcontent)
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

}
