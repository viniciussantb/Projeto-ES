export class FeedService {
  static async rides() {
    fetch('http://localhost:8080/rides', {
      method: 'GET',
      headers: { 'content-type' : 'application/json' }
    }).then(response => {
      return response;
    }).catch(error => console.log(error));
  }
}