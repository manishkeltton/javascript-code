import { useState } from "react";
import "./App.css";

let count = 0;
let storage = [{ username: "", id: count }];

function App() {
  const [values, setValues] = useState({
    username: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const [store, setStore] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onsubmit = (e) => {
    count++;
    e.preventDefault();
    console.log(store);
    storage = [...storage, { username: values.username, id: count }];
    console.log(storage);
    setStore(storage);
    setIsSubmit(true);
    console.log(values.username);
    setValues({ username: "" });
  };

  const deletes = (id) => {
    console.log("id =>", id);
    const filterVal = (stored) => {
      if (stored.id != id) {
        console.log("stored id =>", stored.id);
        return true;
      }
    };
    const st = store.filter(filterVal);
    console.log("store =>", st);
    setStore(st);
    // for (let i = 0; i < store.length; i++) {
    //   if (store[i].id == id) {
    //     delete store[i];
    //   }
    // }
  };
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div>
        <form onSubmit={onsubmit}>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul>
        {isSubmit &&
          store.map((stores) => {
            return ( 
              <div>{stores.username != "" &&
                <li>
                   <h1>{stores.username != "" ? stores.username : null}</h1>
                   <h1 onClick={() => deletes(stores.id)}> {stores.username != "" ? "Delete" : null}</h1>
                </li>}
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
