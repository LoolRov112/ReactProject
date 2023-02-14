import axios from "axios";
import Card from "../interfaces/Card";
import User from "../interfaces/User";

const api: string = process.env.REACT_APP_API + "/users" || "";
export function getUsers() {
  return axios.get(api);
}

export function checkUser(userToCheck: User) {
  return axios.get(
    `${api}?email=${userToCheck.email}&password=${userToCheck.password}`
  );
}
export function addUser(newUser: User) {
  return axios.post(api, newUser);
}


// export async function addCardToUser(userId: number, cardId: number) {
//   try {
//     let userRes = await axios.get(api + "/" + userId);
//     let cards: number[] = userRes.data.cards;
//     cards.push(cardId);
//     axios.patch(api + "/" + userId, { cards });
//   } catch (error) {
//     console.log(error);
//   }
// }
