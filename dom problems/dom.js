//Create a basic HTML page with a P element and a button on it.
//Then, write a JavaScript function to set the background color of that paragraph using an 
//"onclick" event added to a button in the UI
const paragraph = document.getElementById("pg")

  function changeColor() {
    paragraph.style.backgroundColor = "red";
}

/*
I accesed the p element with the id method and stored it in a variable called paragraph. Within my changeColor function I changed the style property
and changed the background color to red. 

  