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
const myData = new UserDataMoldel();
console.log(myData.post("jose Alvarez", "jose123@gmail.com", "123456789"))