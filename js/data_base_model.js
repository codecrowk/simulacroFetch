const DATABASE_ROOT_URL = "http://localhost:3000";
const USERS_ENDPOINT = `${DATABASE_ROOT_URL}/users`;
const CATEGORIES_ENDPOINT = `${DATABASE_ROOT_URL}/users`  ;
const NEWS_ENDPOINT = `${DATABASE_ROOT_URL}/users`;

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

const myData = new DataModelBuilder(USERS_ENDPOINT);
console.log(myData.getAllData())