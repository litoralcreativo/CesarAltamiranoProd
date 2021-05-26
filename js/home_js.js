const ScrollFuncs = (e) => {
  let scroll = window.pageYOffset;

  const background = document.querySelector(".page-container");
  background.style.backgroundPositionY = -(scroll * 0.04) + "px";

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

  let third_project = document
    .getElementById("third-project")
    .getElementsByClassName("project-info")[0];

  let fourth_project = document
    .getElementById("fourth-project")
    .getElementsByClassName("project-info")[0];

  first_project.innerHTML = "";
  third_project.innerHTML = "";
  fourth_project.innerHTML = "";

  const cachitas = projects.filter(
    (element) => element.artist == "Cachitas Now"
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
};
