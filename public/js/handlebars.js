// NavBar
const navSource = document.getElementById("nav-template").innerHTML;
const navTemplate = Handlebars.compile(navSource);
const navContext = {};
const navHtml = navTemplate(navContext);
document.getElementById("nav-container").innerHTML = navHtml;