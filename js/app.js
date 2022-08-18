//  Define Global Variables
let main = document.querySelector("main");
let nav = document.querySelector("nav ul");
let topBtn = document.querySelector("#top");

// build main section class using OOP 
// make method by ES6 
class Sections {
  static count = 0;
  constructor(id, header) {
    this.i = id,
      this.h = header,
      Sections.count++;
    this.addingSectionToPage = () => {
      main.innerHTML += `
    <section id="${this.i}"  >
      <div class="landing__container">
        <h2>${this.h}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>`;

    };
  }
}
// end of class


// build sections from main class
let section1 = new Sections("section1", "Section 1");
section1.addingSectionToPage();

let section2 = new Sections("section2", "Section 2");
section2.addingSectionToPage();

let section3 = new Sections("section3", "Section 3");
section3.addingSectionToPage();

let section4 = new Sections("section4", "Section 4");
section4.addingSectionToPage();
//end building sections .



// build the nav
function buildingNav() {
  for (i = Sections.count; i > 0; i--) {
    li = document.createElement('li');
    link = document.createElement('a');
    link.classList.add("menu__link");
    link.setAttribute("data-nav", `section${i}`);
    content = document.createTextNode(`Section ${i}`);
    link.appendChild(content);
    li.appendChild(link);
    nav.appendChild(li);
  }

}

// call nav function 
buildingNav();
// end nav buliding


// define of section
let section = document.querySelectorAll("section");

// Scroll smoothly to section on link click
nav.addEventListener('click', (e) => {
  let eId = e.target.getAttribute("data-nav");
  if (e.target.classList.contains("menu__link")) {
    let selected = [...section].filter(ele => ele.id == eId);
    selected[0].scrollIntoView({ behavior: "smooth" });
  }
});


// add active class to link and section
function activeSecAndLink() {
  observer = new IntersectionObserver(
    function addactive(entries) {
      entries.forEach((entry) => {
        let activelink = document.querySelector(`[data-nav=${entry.target.id}]`);
        if (entry.isIntersecting) {
          entry.target.classList.add("sec-active");
          activelink.classList.add("active");
        } else {
          activelink.classList.remove("active");
          entry.target.classList.remove("sec-active");
        }
      });
    }
    , { threshold: .55 });
  section.forEach(e => {
    observer.observe(e);
  });
}

// call active function
activeSecAndLink();

// end of adding active class to section and link


// making button to go to up 
topBtn.style.cssText = `display:none;`;
onscroll = () => {
  if (scrollY >= 400) {
    topBtn.style.cssText = `display:block;
    display: flex;
  justify-content: center;
  align-items: center;`;

  } else {
    topBtn.style.cssText = `display:none;`;
  }
};
topBtn.onclick = () => {
  scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
// 