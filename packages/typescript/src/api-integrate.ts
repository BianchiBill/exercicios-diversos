import axios from 'axios'

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    }
  },
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

export const getUserData = async (): Promise<object> => {
  const request = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users`)
  const userData: IUser = request.data

  return userData

}


