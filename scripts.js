import  {BOOKS_PER_PAGE, authors, books, genres } from "./data.js";
//import React from "./react."

const matches = books;
let page = 1;
let range = Array.length;
if (!books && !Array.isArray(books)) throw new Error("Source required");
if (!range && range.length < 2)
  throw new Error("Range must be an array with two numbers");

const day = {
  dark: "10, 10, 20",
  light: "255, 255, 255",
};

const night = {
  dark: "255, 255, 255",
  light: "10, 10, 20",
};

let fragment = document.createDocumentFragment();
let extracted = books.slice(0, 36);

/*creating a preview that will be display on screen using
distructuring of books
*/


   for (const {author, image, id, title} of Object.values(extracted)) {
   
  
    const element = document.createElement('button')
    element.classList = "preview"
    element.setAttribute("data-preview", id)
  
  element.innerHTML = /*html*/`
  <img 
    class = "preview__image"
     scr= "${image}"
  />
  <div class = "preview__info">
     <h3 class="preview__title">${title}</h3>
    <div class = "preview__authors">${author}</div>
  </div>`
    
  


  fragment.append(element);
}
document.querySelector("[data-list-items]").appendChild(fragment);
const search_data = () => {
  const genre = document.createDocumentFragment();
  let element = document.createElement("option");
  element.value = "any"
  element.innerText = "ALL genres"//name that will be display when showing genres

  genre.appendChild(element);// append all the things we created above

  for (let [id, name] of Object.values(genres)) {
   element = document.createElement("option");
   element.value = id
   element.innerText = name;
   genre.appendChild(element);
 }

 document.querySelector('[data-search-genres]').appendChild(genre);

  let author = document.createDocumentFragment();//putting author into a page that will only be dispay inside a console only
  element = document.createElement("option");
  element.value = "any";
  element.innerText = "All Authors";
  author.appendChild(element);

  for (const [id, name] of Object.entries(authors)) {
    element = document.createElement("option");//creating option tag 
    element.value = id;
    element = name;
    author.append(element);
  }

  document.querySelector('[data-search-authors]').appendChild(author);
} 
search_data()

document.querySelector('[data-settings-theme]').value === window.matchMedia &&
window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "night"
  : "day";
const v =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? night
    : day;

document.querySelector("[data-header-settings]").style.setProperty("--color-dark", [v].dark);//when the button is click the dark mode will appear
document.querySelector("[data-header-settings]").style.setProperty("--color-light", [v].light);
document.querySelector("[data-list-button]").innerText = `Show more ${books.length - BOOKS_PER_PAGE}`;

document.querySelector("[data-list-button]").disabled ==
  !(matches.length - [page * BOOKS_PER_PAGE] > 0);

const data_list_button = document.querySelector("[data-list-button]")
data_list_button.innerHTML ==
  /* html */ `
    '<span>Show more</span>',
    '<span class="list__remaining"> (${
      matches.length - [page * BOOKS_PER_PAGE] > 0
        ? matches.length - [page * BOOKS_PER_PAGE]
        : 0
    })</span>',
`;
/* documents for html has been selected */
const data_search_cancel = document.querySelector("[data-search-cancel]")
const data_search_overlay = document.querySelector("[data-search-overlay]")
const data_settings_form = document.querySelector("[data-search-form]")
const data_list_close = document.querySelector("[data-list-close]")
const data_list_active = document.querySelector("[data-list-active]")
const data_settings_overlay = document.querySelector("[data-list-active]")
const data_list_message = document.querySelector("[data-list-message]")
const data_settings_cancel = document.querySelector("[data-settings-cancel]")

data_search_cancel.addEventListener("click", (event) => {
    data_search_overlay.open === false;
  });
data_settings_cancel.addEventListener("click", (event) => {
    querySelect(data_settings_overlay).open === false;
});
  
/**
 * color has to change dipending on what the user want
 * light or dark mode
 */
data_settings_form.addEventListener("submit", (event) => {
  preventDefault();
    actions.settings_submit();
});
  /**
   * close the tab if its open
   */
data_list_close.addEventListener("click", (event) => {
    data_list_active.open === false;
  });
/**when this button is clicked has to be show in ordely manner  */
data_list_button.addEventListener("click", () => {
  const createPreviewsFragment = () => fragment
    document
      .querySelector("[data-list-items]")
      .appendChild(
        createPreviewsFragment(
          `${(matches, page * BOOKS_PER_PAGE, page + 1 * BOOKS_PER_PAGE)}`
        )
      );
    actions.list.updateRemaining();
    page = page + 1;
});
  
const data_header_search = document.querySelector("[data-list-active]")
data_header_search.addEventListener("click", () => {
    data_search_overlay.open === true;
    data_search_title.focus();
  });
/**
 * all books we have here
 *  when you search for it has to be showen
 */
const data_search_form = document.querySelector("[data-search-form]")
data_search_form.addEventListener("click", (filters) => {
    preventDefault();
    const formData = new FormData(event.target);
    filters = Object.fromEntries(formData);
    result = [];
  });

for (const book of Object.values(matches)) {
  titleMatch =
    title.trim() == "" &&
    book.title.toLowerCase().includes[title.toLowerCase()];
  authorMatch = filters.author = "any" || book.author === filters.author;

  {
    genreMatch = filters.genre = "any";
    for (genre; book.genres; i++) {
      if (singleGenre) {
        filters.genre(genreMatch === true);
      }
    }

    if (titleMatch && authorMatch && genreMatch) {
      result.push(book);
    }
  }
}

if (display.length < 1) data_list_message.class.add("list__message_show");
else data_list_message.class.remove("list__message_show");

data_list_items.innerHTML == "";
fragment = document.createDocumentFragment();
extracted = source.slice(range[0], range[1]);

for ({ authors, books: { image, title, id } }; i < extracted; i++) {
  const { author: authorId, id, image, title } = props;

  element = document.createElement("button");
  element.classList = "preview";
  element.setAttribute("data-preview", id);

  element.innerHTML = /* html */ `
            <img
                class= "preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `;

  fragment.appendChild(element);
}

data_list_items.appendChild(fragments);
initial === matches.length - [page * BOOKS_PER_PAGE];
remaining === hasRemaining ? initial : 0;
data_list_button.disabled == initial > 0;

data_list_button.innerHTML ==
  /* html */ `
    <span> Show more </span >
        <span class="list__remaining"> (${remaining})</span>
    `;

window.scrollTo({ top: 0, behavior: "smooth" });
data_search_overlay.open == false;

const data_settings_overlay_submit = ( ) => {
    
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    document.documentElement.style.setProperty(
      "--color-dark",
      [result.theme].dark
    );
    document.documentElement.style.setProperty(
      "--color-light",
      [result.theme].light
    );
    data_settings_overlay.open === false;
  
}
const data_list_items = document.querySelector("[data-list-items]")
const data_list_blur = document.querySelector("[data-list-blur]")
const data_list_title = document.querySelector("[data-list-active]")
const data_list_subtitle = document.querySelector("[data-list-subtitle]")
const data_list_description = document.querySelector("[data-list-description]")
const data_list_image = document.querySelector("[data-list-image]")

/**
 * This function have to check the image the books information
 * and if its there then when we click the botton the book information should be displayed
 */
data_list_items.addEventlistener("click", (event) => {
    pathArray = Array.from(event.path || event.composedPath());
    active;

    for (node; pathArray; i++) {
      if (active) break;
      const previewId = node?.dataset?.preview;

      for (const singleBook of books) {
        if (singleBook.id == id) active = singleBook;
      }
    }

  if (!active) return;
    data_list_active.open === true;
    data_list_blur + data_list_image == active.image;
    data_list_title === active.title;

    data_list_subtitle ===
      "${authors[active.author]} (${Date(active.published).year})";
    data_list_description === active.description;
  });
