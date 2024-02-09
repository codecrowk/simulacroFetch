import { NewsDataMoldel } from "./data_base_model.js";
import { newsDBToAdminViews } from "./objectsFormat.js";
const NewsModel = new NewsDataMoldel()
/*---------- ADMINISTRATOR NEW CONTROLER ----------*/
const AdministratorNewsControler = {
  init () {
    AdministratorNewsViews.init()
    this.addUserNews()
  },

  async addUserNews () {
    const currentNews = await NewsModel.getAllData();
    for (const element of currentNews) {
      const elementFormat = newsDBToAdminViews(element)
      const elementHTML = AdministratorNewsViews.addNewToTable(elementFormat);
      AdministratorNewsViews.newsTable.appendChild(elementHTML);
    }
  },

  async createNew () {
    const {nameNotice, urlImage, idCategory, contentNotice} = this.getFormValues()
    const req = await NewsModel.post(nameNotice, contentNotice, urlImage, idCategory, "dfer")
    return req
  }, 

  getFormValues () {
    const formHTML = AdministratorNewsViews.newsFormHTML;
    const formValues = {};
    for (const item of formHTML.elements) {
      // Check if valid key
      if (item.id == "") continue;
      const elementKey = item.id;
      const elementValue = item.value;
      formValues[elementKey] = elementValue;
    }
    return formValues
  }
}
/*---------- ADMINISTRATOR NEW VIEWS ----------*/
const AdministratorNewsViews = {
  init () {
    this.newsFormHTML = document.getElementById("news_form");
    this.newsTable = document.getElementById("news-tbody");
    this.newsFormHTML.addEventListener('submit', (e) => {
      e.preventDefault()
      AdministratorNewsControler.createNew()
    })
  },

  addNewToTable (userTableInfo) {
    const {image_url, title, content, publication_date, autor, category} = userTableInfo;
    //----- Create element
    const rowElement = document.createElement("tr");

    const imageSquare = document.createElement("td");
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", image_url);
    imageElement.setAttribute("alt", "photo");
    imageElement.classList.add("rounded-circle");
    imageElement.style.height = "50px";
    imageElement.style.width = "50px";

    const titleSquare = document.createElement("td");
    titleSquare.innerText = title;

    const contentSquare = document.createElement("td");
    contentSquare.innerText = content;

    const publicationSquare = document.createElement("td");
    publicationSquare.innerText = publication_date;

    const autorSquare = document.createElement("td");
    autorSquare.innerText = autor;
    
    const categorySquare = document.createElement("td");
    categorySquare.innerText = category;

    const buttonsContainer = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-primary");
    editButton.innerText = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.innerText = "Detele";
    //----- Join elements
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);
    // img
    imageSquare.appendChild(imageElement);
    // row
    rowElement.appendChild(imageSquare); 
    rowElement.appendChild(titleSquare); 
    rowElement.appendChild(contentSquare); 
    rowElement.appendChild(publicationSquare); 
    rowElement.appendChild(autorSquare); 
    rowElement.appendChild(categorySquare); 
    rowElement.appendChild(buttonsContainer); 
    return rowElement
  }
}

AdministratorNewsControler.init()