import { useState } from "react";
import Addtodo from './form'
import { Link } from "react-router-dom";
import Header from '../header';
import axios from "axios";
function Users() {


    let [Name, setname] = useState(["divya", "muru", "renisha"])

    const del = (s) => {
        let update = Name.filter((z) => z != s)
        setname(update)
    }
    const click = () => {
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

            }


        })
            .then(function (response) {
                console.log(response)
            });

    }

    return (
        <div>
            <Header />
            <table className="table table-bordered" border={1}>
                <tr>
                    <th>Order</th>
                    <th>Names</th>
                    <th>Delete</th>
                </tr>
                {
                    Name.map((t, i) => (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{t}</td>
                            <td><button type="button" onClick={() => del(t)}>delete</button></td>
                        </tr>
                    ))
                }
            </table>
            <Addtodo settodos={setname} tod={Name} />
            <button onClick={() => click()}>data</button>



        </div>


    )
}
export default Users;