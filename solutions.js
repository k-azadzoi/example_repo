// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left');

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
let leastFavs = sideBar.getElementsByTagName('h5')[0];
let newTitle = "Least Favs";
leastFavs.innerHTML = newTitle;

// Exercise 5): Find the first of the ads in the sidebar and hide it.
let adSlot = document.getElementsByClassName('ad-slot')[0];
adSlot.style.visibility = 'hidden';

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
let adSlot = document.getElementsByClassName('ad-slot')[0];
adSlot.style.visibility = 'visible';

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let images = document.getElementsByTagName('img')[5].setAttribute('src', 'http://placebear.com/200/300');


// Exercise 8): Find Sam's post and change its text to something incredible.
let post = document.getElementsByTagName('p')[4].innerText = "One does not simply walk into Mordor";

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let firstPost = document.getElementsByClassName('media-body')[1];
firstPost.className = firstPost.className + ' post-liked'

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
let secondPost = document.getElementsByClassName('inline-list')[2]
let shareLink = secondPost.getElementsByTagName('li')[2]
shareLink.className = shareLink.classList + ' post-shared'
