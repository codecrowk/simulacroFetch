import { NewsDataMoldel } from "./data_base_model.js";
import { DateModel } from "./utilities.js";
const NewsData = new NewsDataMoldel()

/*---------- NEWS CONTROLER ----------*/
const NewsControler = {
  init () {
    NewsViews.init()
    this.appendNews()
  },

  async appendNews () {
    const newsData = await NewsData.getAllData();
    for (const element of newsData) {
      const {title, content, image, creation_date} = element;
      const newCard = NewsViews.newCardCreator(image, title, content, creation_date);
      NewsViews.newsContainer.appendChild(newCard);
    }
  }
}
/*---------- NEWS VIEWS ----------*/
const NewsViews = {
  init () {
    this.newsContainer = document.getElementById('news_container');
    console.log(this.newsContainer)
  },

  newCardCreator (userImageURL, userTitle, userContent, userPublicationDate) {
    //----- Create containers
    const cardMainContainer = document.createElement("div");
    cardMainContainer.classList.add("card", "mb-3");
    cardMainContainer.style.maxWidth = "540px";

    const cardRowContainer = document.createElement("div");
    cardRowContainer.classList.add("row", "g-0");
    // Create img
    const cardImageContainer = document.createElement("div");
    cardImageContainer.classList.add("col-md-4");

    const cardImageItem = document.createElement("img");
    cardImageItem.classList.add("img-fluid", "rounded-start");
    cardImageItem.setAttribute("src", userImageURL);
    cardImageItem.setAttribute("alt", "...");
    // Add content of the card
    const cardContentContainer = document.createElement("div");
    cardContentContainer.classList.add("col-md-8");
    
    const cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = userTitle;

    const cardContent = document.createElement("p");
    cardContent.classList.add("card-text");
    cardContent.innerText = userContent;

    const cardDateContainer = document.createElement("p");
    cardDateContainer.classList.add("card-text");

    const cardDate = document.createElement("small");
    cardDate.classList.add("text-body-secondary");
    cardDate.innerText = userPublicationDate;

    //----- Join elements
    // Body
    cardDateContainer.appendChild(cardDate);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardContent);
    cardBody.appendChild(cardDateContainer);
    cardContentContainer.appendChild(cardBody);
    // Img
    cardImageContainer.appendChild(cardImageItem);
    // Root containers
    cardRowContainer.appendChild(cardImageContainer);
    cardRowContainer.appendChild(cardContentContainer);
    cardMainContainer.appendChild(cardRowContainer);
    return cardMainContainer;
  }
}
const newData = {
  title: "kitori game relase",
  description: "Kitori is a new game it arrives at 2023, is just coool game, should play",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgv3.fotor.com%2Fimages%2Fcover-photo-image%2Fa-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg&f=1&nofb=1&ipt=11826af420a8a9f8fcc47ddb54cd78713e3fc5583d827ecf921e0cb433d9cd82&ipo=images",
  category: "231A",
  creator: "2Afe"
}
// NewsData.post(newData.title, newData.description, newData.image, newData.category, newData.creator)
NewsControler.init()