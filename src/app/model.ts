export interface User {
  id:number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
export interface Vacuum{
  active:number;
  id:number;
  user_id:number;
  name:string;
  discharge_counter:number;
  status:string;
}
