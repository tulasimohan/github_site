const links = [
    { name: "CV", href: "https://tulasimohan.github.io/tulasi_cv.pdf", img: "achievement-2-svgrepo-com.svg" },
    { name: "contact", href: "https://tulasimohan.github.io/contact", img: "contact-details-svgrepo-com.svg" },
    { name: "home", href: "https://tulasimohan.github.io/", img: "home-svgrepo-com.svg" },
    { name: "publications", href: "https://tulasimohan.github.io/publications", img: "papers-lines-svgrepo-com.svg" },
    { name: "teaching", href: "https://tulasimohan.github.io/teaching", img: "teach-learn-tell-student-svgrepo-com.svg" }
  ];
  const search_bar = `<form>
      <input type='search' id='search-bar' placeholder='Search...'>
      <button type='submit'> <img src='search-svgrepo-com.svg' class = 'search_icon'></button>
    </form>`;
  const nav_bottom = `<nav>
      <a href="tulasi_cv.pdf"> CV </a> |
      <a href="contact.html">Contact</a> |
      <a href="index.html"> Home </a> |
      <a href="publications.html">Publications</a>|
      <a href="teaching.html">Teaching </a> 
    </nav>`;
const social_media = `<div class="container">
    <a href="https://twitter.com/tulasimohan">
      <img src="twitter.svg" class="icon">
    </a>
    <a href="https://dblp.org/pid/231/1775.html">
      <img src="dblp_logo.png" class="icon">
    </a>
    <a href="https://cstheory.stackexchange.com/users/9155/tulasi">
      <img src="theoryCSstackexchange.png" class="icon">
    </a>
    <a href="https://github.com/tulasimohan">
      <img src="githublogo.png" class="icon">
    </a>              
  </div> `;

  const content = `  <h1> Welcome to my homepage </h1>
  <p>Hi, I am Tulasi. I am a theoretical computer scientist, with a focus on complexity theory. My research interests include the design and analysis of efficient algorithms for solving computational problems, as well as the study of the fundamental limits of computation. I am also interested in the application of theoretical computer science to other fields such as cryptography and machine learning.</p>
  <p style = "color:maroon">Warning: This site is under construction. Here is my <a href= "https://sites.google.com/view/tulasimohanmolli/home"> current Webpage.</a>  </p>`;

function generateTemplate(page_name, content) {
let template = search_bar;
template += `<div class ="container" `
for (let i = 0; i < links.length; i++) {
if (links[i].name === page_name) {
template += `<a href="${links[i].href}">
<img src="${links[i].img}" class="main_icon">
</a>`;
} else {
template += `<a href="${links[i].href}">
<img src="${links[i].img}" class="icon">
</a>`;
}
}

template += `
${content}
${nav_bottom}
${social_media}
</div>`;

return template;
}

const root = document.querySelector("#root");
root.innerHTML = generateTemplate("home", content);
