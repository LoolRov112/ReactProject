import axios from "axios";
import Card from "../interfaces/Card";

const api: string = process.env.REACT_APP_API + "/cards" || "";

export function getAllCards() {
  return axios.get(api);
}
export function getSpesificCard(id: number) {
  return axios.get(`${api}/${id}`);
}
export function addCard(newCard: Card) {
  return axios.post(api, newCard);
}
export function editCard(id: number, cardToEdit: Card) {
  return axios.put(`${api}/${id}`, cardToEdit);
}
export function deleteCard(id: number) {
  return axios.delete(`${api}/${id}`);
}
export function getmyCards() {
  let userId: number = JSON.parse(
    sessionStorage.getItem("userDatas") as string
  ).userId;
  return axios.get(`${api}?userId=${userId}`);
}
