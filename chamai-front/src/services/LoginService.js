export class LoginService {
  static async login(data) {
    fetch('http://localhost:8080/login', {
      method : "POST",
      headers : {
          "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    }).then((res) => {
      return res;
      }).catch(err => console.log(err));
  }
}