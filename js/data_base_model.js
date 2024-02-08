const DATABASE_ROOT_URL = "http://localhost:3000";
const USERS_ENDPOINT = `${DATABASE_ROOT_URL}/users`;
const CATEGORIES_ENDPOINT = `${DATABASE_ROOT_URL}/categories`  ;
const NEWS_ENDPOINT = `${DATABASE_ROOT_URL}/news`;

class DataModelBuilder {
  constructor (userEndpoint) {
    this.endpoint = userEndpoint;
  }
  
  async getAllData () {
    const fetchURL = this.endpoint;
    const request = await fetch(fetchURL); 
    const data = await request.json()
    return data
  }

  async post (userDataSchema) {
    const fetchURL = this.endpoint;
    const headersFetch = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(userDataSchema)
    }
    const request = await fetch(fetchURL, headersFetch); 
    const data = await request.json()
    return data
  }

  async deleteByID (userID) {
    const fetchURL = `${this.endpoint}/${userID}` 
    const headersFetch = {
      method: 'DELETE'
    }
    const request = await fetch(fetchURL, headersFetch); 
    const data = await request.json()
    return data
  }
}

class UserDataMoldel extends DataModelBuilder{
  constructor () {
    super(USERS_ENDPOINT)
  }
  async post (userName, userEmail, userPassword) {
    const userSchema = {
      name: userName,
      email: userEmail,
      password: userPassword
    }
    const response = await super.post(userSchema);
    return response
  }
}

// A ramdom writer shouldn't be able to create new categories, just admins 
class CategoryDataMoldel extends DataModelBuilder{
  constructor () {
    super(CATEGORIES_ENDPOINT)
  }
  async post (userTitle, userDescription) {
    const userSchema = {
      title: userTitle,
      description: userDescription
    }
    const response = await super.post(userSchema);
    return response
  }
}

class NewsDataMoldel extends DataModelBuilder{
  constructor () {
    super(NEWS_ENDPOINT)
  }
  async post (userTitle, userContent, userCategoryID, userAutorID) {
    const userSchema = {
      title: userTitle,
      content: userContent,
      category_id: userCategoryID,
      autor_id: userAutorID
    }
    const response = await super.post(userSchema);
    return response
  }
}
// const myData = new NewsDataMoldel();
// console.log(myData.post("Two girls start in Json Acdemy", "This storie is about a family how want a better future", "pa23", "d371"))

const myData = new CategoryDataMoldel();
console.log(myData.post("Sport", "Footbal and others"))