import { useState } from "react";
import Addtodo from './form'
// import { Link } from "react-router-dom";
import Header from '../header';
// import { Link } from "react-router-dom";
function Todo(props) {
    // let tod=["sangee","muru","renisha"]

    let [tod, settodos] = useState(["sangee", "muru", "renisha"])

    const del = (s) => {
        let update = tod.filter((z) => z != s)
        settodos(update)
    }


    return (

        <div>
            {props.islogin ? <h1>welcome, {props.islogin.email}</h1> : "failed"}
            <Header />
            <table className="table table-bordered" border={1}>
                <tr>
                    <th>Order</th>
                    <th>Names</th>
                    <th>Delete</th>
                </tr>
                {
                    tod.map((t, i) => (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{t}</td>
                            <td><button type="button" onClick={() => del(t)}>delete</button></td>
                        </tr>
                    ))
                }
            </table>

            <Addtodo settodos={settodos} tod={tod} />

        </div>


    )
}
export default Todo;