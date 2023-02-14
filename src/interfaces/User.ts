import Card from "./Card";

export default interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  businessMan?: boolean;
}
