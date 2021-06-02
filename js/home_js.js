const ScrollFuncs = (e) => {
  let scroll = window.pageYOffset;

  const background = document.querySelector(".page-container");
  const paralax_2_down = document.getElementsByClassName("pllx_2_down");
  const goupbtn = document.getElementById("goup_btn");

  if (goupbtn) {
    if (scroll > visualViewport.height) {
      goupbtn.style.opacity = "1";
      goupbtn.style.transform = "translateX(0px)";
    } else {
      goupbtn.style.opacity = "0";
      goupbtn.style.transform = "translateX(150px)";
    }
  }
  let bgPosY = parseFloat(background.style.backgroundPositionY.split("px")[0]);
  if (scroll * 0.4 < visualViewport.height) {
    background.style.backgroundPositionY = -(scroll * 0.04) + "px";
  }

  Array.from(paralax_2_down).forEach(
    (item) => (item.style.top = 50 + scroll * 0.02 + "vh")
  );

  /* NAVBAR SHRINK */
  const nbb = document.getElementById("navbar-brand");
  if (scroll > 10) {
    nbb.className = "navbar-brand hidden";
  } else {
    nbb.className = "navbar-brand";
  }
};

window.addEventListener("scroll", function (e) {
  ScrollFuncs(e);
});

const ScrollToElement = (element) => {
  element.scrollIntoView({
    behavior: "smooth",
  });
};

const ToogleProject = (index) => {
  let element;

  switch (index) {
    case 1:
      element = document.getElementById("first-project");
      break;
    case 2:
      element = document.getElementById("second-project");
      break;
    case 3:
      element = document.getElementById("third-project");
      break;
    case 4:
      element = document.getElementById("fourth-project");
      break;
  }

  if (element) {
    ScrollToElement(element);
  }
};

const AddProjects = () => {
  let first_project = document
    .getElementById("first-project")
    .getElementsByClassName("project-info")[0];

  let second_project = document
    .getElementById("second-project")
    .getElementsByClassName("project-info")[0];

  let third_project = document
    .getElementById("third-project")
    .getElementsByClassName("project-info")[0];

  let fourth_project = document
    .getElementById("fourth-project")
    .getElementsByClassName("project-info")[0];

  first_project.innerHTML = "";
  second_project.innerHTML = "";
  third_project.innerHTML = "";
  fourth_project.innerHTML = "";

  const cachitas = projects.filter(
    (element) => element.artist == "Cachitas Now"
  );
  const aguasucia = projects.filter(
    (element) => element.artist == "Agua Sucia y los Mareados"
  );
  const elkaiser = projects.filter((element) => element.artist == "El Kaiser");
  const chichica = projects.filter((element) => element.artist == "Chichica");

  for (let i = 0; i < cachitas.length; i++) {
    const work = cachitas[i];
    const work_element = `<div class="work">
      <img
        class="work-art"
        src="${work.artwork}"
        alt=""
      />
      <div class="work-details">
        <iframe src="${work.spotify}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <h3 class="work-title">Title: <strong>${work.name}</strong></h3>
        <p class="work-description"><strong>Descripción: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam non cumque animi assumenda voluptate facilis maiores, qui, recusandae, reiciendis illum voluptatibus architecto. Facilis unde facere quas voluptas delectus incidunt.</strong></p>
      
        </div>
    </div>`;
    first_project.insertAdjacentHTML("beforeend", work_element);
  }

  for (let i = 0; i < chichica.length; i++) {
    const work = chichica[i];
    const work_element = `<div class="work">
      <img
        class="work-art"
        src="${work.artwork}"
        alt=""
      />
      <div class="work-details">
        <iframe src="${work.spotify}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <h3 class="work-title">Title: <strong>${work.name}</strong></h3>
        <p class="work-description"><strong>Descripción: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam non cumque animi assumenda voluptate facilis maiores, qui, recusandae, reiciendis illum voluptatibus architecto. Facilis unde facere quas voluptas delectus incidunt.</strong></p>
      </div>
    </div>`;
    third_project.insertAdjacentHTML("beforeend", work_element);
  }

  for (let i = 0; i < elkaiser.length; i++) {
    const work = elkaiser[i];
    const work_element = `<div class="work">
      <img
        class="work-art"
        src="${work.artwork}"
        alt=""
      />
      <div class="work-details">
        ${
          work.spotify
            ? `<iframe
              src="${work.spotify}"
              width="100%"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>`
            : ""
        }
        <h3 class="work-title">Title: <strong>${work.name}</strong></h3>
        <p class="work-description"><strong>Descripción: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam non cumque animi assumenda voluptate facilis maiores, qui, recusandae, reiciendis illum voluptatibus architecto. Facilis unde facere quas voluptas delectus incidunt.</strong></p>
      </div>
    </div>`;
    fourth_project.insertAdjacentHTML("beforeend", work_element);
  }

  for (let i = 0; i < aguasucia.length; i++) {
    const work = aguasucia[i];
    const work_element = `<div class="work">
      <img
        class="work-art"
        src="${work.artwork}"
        alt=""
      />
      <div class="work-details">
        ${
          work.spotify
            ? `<iframe
              src="${work.spotify}"
              width="100%"
              height="80"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>`
            : ""
        }
        <h3 class="work-title">Title: <strong>${work.name}</strong></h3>
        <p class="work-description"><strong>Descripción: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nam non cumque animi assumenda voluptate facilis maiores, qui, recusandae, reiciendis illum voluptatibus architecto. Facilis unde facere quas voluptas delectus incidunt.</strong></p>
      </div>
    </div>`;
    second_project.insertAdjacentHTML("beforeend", work_element);
  }
};

let overLink = false;

const showHoverImg = (index, event) => {
  const img = document.getElementById("hover_img");
  let src = "media/chesar_outside.jpg";
  switch (index) {
    case 1:
      src = "media/chichica-light.png";
      break;
    case 2:
      src = "media/elkaiser-light.png";
      break;
    case 3:
      src = "media/cachitasnow-light.png";
      break;
  }
  overLink = true;
  img.style.backgroundImage = `url(${src})`;
  img.style.opacity = "1";
  if (overLink) {
    const img = document.getElementById("hover_img");
    const x = event.clientX;
    const y = event.clientY;
    const height = img.offsetWidth;
    const width = img.offsetWidth;
    img.style.left = x - width / 2 + "px";
    img.style.top = y + 30 + "px";
  }
};

const hideHoverImg = (center = false) => {
  overLink = false;
  const img = document.getElementById("hover_img");
  img.style.opacity = "0";
  if (center) {
    const x = window.pageYOffset;
    const y = window.pageYOffset;
    const width = img.offsetWidth;
    img.style.top = y + 30 + "px";
    img.style.left = x - width / 2 + "px";
  }
};
