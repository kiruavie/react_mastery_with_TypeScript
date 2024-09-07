import axios from "axios"

export class UsersService {
    private static URL:string = "https://jsonplaceholder.typicode.com"

    public static getAllUsers = () => {
        const UserURL:string = `${this.URL}/usessrs`
        return axios.get(UserURL)
    }
}