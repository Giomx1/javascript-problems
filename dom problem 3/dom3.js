function myFunction() {
  const gymOptions = document.getElementById("mySelect");
  const numOfOptions = document.getElementById("mySelect").length
 
  let txt = "";
  for (let i = 0; i < gymOptions.length; i++) {
    txt = txt + gymOptions.options[i].text + "- "
  }
      document.getElementById("p1").innerHTML = txt;
}
/*
Here I return to the function I named in my index.html. 
1. First I used the id method to grab "mySelect" out of 
the select element and stored it in a variable called gymOptions.
2. for the variable numOfOptions the .length property returned to me how many items were in my select element
3. I then move on to the selection options collection. First I declare an empty string. To have a starting point.
Then I loop through all options in the drop-down list.  
Going back to the txt variable. I want the txt to equal the output of the text of each option using index i we grab all the options.
plus adding a string containing -. 
4. Finally using the id method we grab p1 out of the p element and we use innerHTML to display what is stored in the txt variable.
*/