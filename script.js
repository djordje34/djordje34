var ex=document.getElementsByClassName("close")[0];
var m=document.getElementById("myModal");

var TitleDesc={ 
    "Movie Recommender":["Content based recommender system made for recommending movies. Multiple criteria available. Grade system implemented.","Python"], 
    "Facial Recognition":["Capture faces and eyes of a person on device camera, on quit(Q), compare all the captured faces and save only unique ones.","Python"], 
    "E-mail Fetcher":["Academic E-mail Fetcher, including login form. Search through all recent(max 7 days old) e-mails and fetch only the ones that contain *predefined* keywords in its body, address or title.", "Python"],
    "Wordle":["Wordle game implemented as a GUI Python app. Contains only the words that could be the solution, contrary to the original Wordle.","Python"],
    "Personally Optimized Organizational Program":["This simple digital assistant contains:<br>Use online functions<br>Use offline functions<br>User Interface with Voice directed commands to compute requests<br>This software is used with voice commands which application listens to and notices certain keywords such as:<br>Note - Listens to user input, opens Calendar window and prompts user to select date for making a note 2.Open Visual studio code<br>Open Calculator<br>Open Command Prompt<br>Open Discord<br>Wikipedia - Listens to user input and searches for it on Wikipedia<br>Youtube - Listens to user input and opens the first result on Youtube<br>Google - Listens to user input and opens the first link associated with the search<br>Joke - Returns a simple joke<br>Weather - Finds the current weather based on your IP address and returns it. This demands Open Weather API key-set it in the .env file.","Python"],
    "Associations":["Python GUI quiz, inspired by the game Asocijacije from the popular Serbian TV show Slagalica. Contains data in the manual folder.","Python"],
    "Cinema Managing Software":["Python GUI Application for managing cinema activities. Contains three types of users:Administrator CRUD operations over employees, customers and available theaters, Employee CRUD operations over movies, Customer Read and make theater reservations for a chosen movie at the chosen time. Contains diagrams in github repository.","Python"],
    "Age and Gender Detector":["Detection of age and gender on a given uploaded image, of all faces that are recognized in it. Contains GUI.","Python"],
    "Kaggle Titanic":["Determining who survived the Titanic disaster using Logistic regression model. Logistic regression solution, 0.76794/1.00 score.","Python"],
    "Pharmacy Database":["Pharmacy Database made with MySQL Workbench. Contains SQL code for creation of database, tables, and inserts. In github repository exists .pdf file which represents documentation of this project.","SQL"],
    "Crossroads":["Terminal Dungeon game written in Java. Random item, enemy systems implemented. 2D matrix map with NPC blacksmiths, collectors. Town mechanics.","Java"],
    "Nordeus Job Fair 2021.":["Proposed solution to Coding Challenge by Nordeus. Mainly statistics.","Java"],
    "Google Foobar":["Proposed solution to Foobar Coding Challenge by Google. Currently at level 4. Not all solutions contained in the repository.","Java"],
    "Job Listing Website":["Dinamic website, which lists available jobs suited to your custom search. Login/Register/Manipulate your account/Search/Apply/Comment & Rate Companies/Add Jobs/etc... This project was made for all employers and future employees, allowing both to take their profiles public and be listed on this website for cooperation with the other.","HTML, CSS, Javascript, PHP, SQL, Bootstrap"],
    "Analog Clock":["Customizable analog clock made using ASM. Writing pixels directly to screen, using UNIX time, show current time.","Assembly"]
};  

function modal(el){
    var m=document.getElementById("myModal");
    m.style.display="block";

    head=document.getElementById("projTitle");
    head.textContent=el
    tail=document.getElementById("projLang");
    body=document.getElementById("projDesc")
    whichOne=TitleDesc[el]
    tail.textContent=whichOne[1]
    body.textContent=whichOne[0]
    console.log(tail)
}

window.onclick = function(event) {
    var m=document.getElementById("myModal");
  if (event.target == m) {
    m.style.display = "none";
  }
}

