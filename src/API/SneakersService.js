import axios from 'axios';

export default class SneakersService {
  static async getSneakers() {
    const response = await axios.get(
      'https://624474943da3ac772b1001d0.mockapi.io/items'
    );
    return response;
  }
}
