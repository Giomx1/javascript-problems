/*
Create an HTML page with a button and a P element with a link inside.

Then, write a JavaScript function to get the HREF attribute of the link when you click the button.
When you click on it, 
display it on the webpage by adding it as the text for another P element on the page.
*/


function linkDestination(){
  const youtube = document.getElementById("link").getAttribute("href")
  document.getElementById("p1").innerHTML = youtube;
}

/*
Here I return to the function I named in my index.html. In my function I grabbed id "link" from my anchor
element and used the id method to also get the href attribute. With the second line I used the id method again
to grab the p1 id from the p element and used the innerHTML property to display the text of the href attribute when clicked.
*/