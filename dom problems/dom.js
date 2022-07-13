//Create a basic HTML page with a P element and a button on it.
//Then, write a JavaScript function to set the background color of that paragraph using an 
//"onclick" event added to a button in the UI

//This is what my HTML looked like
/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Dom 1st problem</title>
  <script src="myscripts.js"></script>
</head>
<body>
  <p>
  <button onclick="this.innerHTML='Whoops!'">hi</button>
  </p>

</body>
</html>
*/
//1st solution
/*
 in my solution I grabbed the p element which contains the button element. And I stored in a variable called tag.
  I accessed the element by tag using document.getElementsByTagName()
  After the variable I used a for loop to loop through tag.length and in my code blocks i did tag index I, style method and 
  set the backgroundColor to red. While I only have one p element this method still worked.
  */
const tag = document.getElementsByTagName("p")
for(let i = 0; i < tag.length; i++) {
  tag[i].style.backgroundColor = "red"
}
//2nd solution
/*
For this one I removed the for loop and only used tag at index 0, style method and changed the background color to red.
*/
const tag = document.getElementsByTagName("p")
  tag[0].style.backgroundColor = "red"

  