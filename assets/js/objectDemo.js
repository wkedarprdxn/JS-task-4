// Create an object movie with the following properties :
//  a. Name, release-date, actor name, Producer Name 
//  b. Create 10 instances of the object.
//  c. List all the information in the list structure
//  d. Create a search field which will give the result of search operation with name,actor name
function Movie(Name, release_date, Actor, Producer) {
    this.Name = Name;
    this.release_date = release_date;
    this.Actor = Actor;
    this.Producer = Producer;
}

let movie1 = new Movie('Abhay', "7th Feb 2019", "Kunal Kemmu", "B.P.Singh");
let movie2 = new Movie('Harley Quinn: Birds of Prey', "29th Jan 2020", "Margot Robbie", "Sue Kroll");
let movie3 = new Movie('Mission Mangal', "15 August 2019", "Akshay Kumar", "Fox Star Studios");
let movie4 = new Movie('Venom', "5 October 2018", "Tom Hardy", "Ruben Fleischer");
let movie5 = new Movie('Ford v Ferrari', "30 August 2019", "Matt Damon", "James Mangold");
let movie6 = new Movie('Extraction', "24 April 2020", "Chris Hemsworth", "Chris Hemsworth");
let movie7 = new Movie('Fast & Furious Presents: Hobbs & Shaw', "13 July 2019", "Dwayne Johnson", "Jason Statham");
let movie8 = new Movie('Joker', "2th October 2019", "Joaquin Phoenix", "Todd Phillips");
let movie9 = new Movie('The Nun', "7th September 2018", "Taissa Farmiga", "James Wan");
let movie10 = new Movie('Terminator Dark Fate', "23 October 2019", "Arnold Schwarz", "James Cameron");

var array = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];

let params = new URLSearchParams(location.search);
data = params.get('data');

function search() {
    for (var i = 0; i < array.length; i++) {
        if (array[i].Name === data) {
            let arr = array[i];
            var table = document.getElementById('tbl').getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = array[i].Name;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = array[i].release_date;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = array[i].Actor;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = array[i].Producer;
        }
    }
}
setInterval(search, 100);