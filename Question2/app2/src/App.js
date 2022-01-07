import axios from "axios";
import { useEffect, useState } from "react";


export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [message, setmessage] = useState("");
  const [list, setList] = useState([]);
  const handlemessageChange = (e) => {
    setmessage(e.targetValue);
  };

  const addmessage = async () => {
    if (message == "") {
      alert("Validation Fails");
      return;
    }

    const url = "http://localhost:4000/addmessage";
    const data = {
      message: message,
    };

    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

  };

  const getUser1 = async () => {
    const url = "http://localhost:4000/users";
    const result = await.axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  const getUser = async () => {
    const url = "http://localhost:4000/users";
    const result = await fetch(url);

    const list = await result.json();
    const newList = [...list];
    setList(newList);
  };

  useEffect(() => getUser(), []);
  return (
    <div>
      <h2 className="bg-dark text-light p-3">MessageBox</h2>
      <div>
        <input className="form-control form-control-lg mb-1" type="text" name="" id="" value={message} onChange={handlemessagechange} placeholder="Enter Message" />
      </div>
      <div>
        <input className="btn btn-secondary w-100" type="button" name="" value="send" onClick={addmessage} />
      </div>
      <h3 className="bg-dark text-light mt-1 p-3">Message List</h3>
      {
        list.map((item.index)=>(
      <div key={index} className="alert alert-secondary fs-4">{item.message}</div>
      ))
      }
    </div>
  );
}