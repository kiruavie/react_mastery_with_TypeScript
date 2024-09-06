import { IUser } from "../models/IUser";

export class UserSerivce {
    private static users:IUser[] = [
        { id: 1, name: "vazquez", age: 13 },
      { id: 2, name: "kilua", age: 13 },
      { id: 3, name: "vazquez", age: 13 },
    ]

    public static getAllUsers(){
        return this.users;
    }
}