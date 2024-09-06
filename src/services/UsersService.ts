export class UsersService {
    private static URL:string = "https://jsonplaceholder.typicode.com"

    public static getAllUsers = () => {
        const UserURL:string = `${URL}/users`
        return axios.get(UserURL)
    }
}