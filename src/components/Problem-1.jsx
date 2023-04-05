import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [localStorageItems, setLocalItems] = useState([]);
  const [items, setItems] = useState([]);
  const obj = {
    name: name,
    status: status,
  };
  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("items"));
    console.log(localStorageItems);
    if (localStorageItems) {
      setLocalItems(localStorageItems);
    }
  }, []);

  const handleClick = (val) => {
    setShow(val);
  };
  const handleSubmit = (event) => {
    // event.preventDefault();
    const oldData = JSON.parse(localStorage.getItem("items"));
    localStorage.setItem("items", JSON.stringify([...oldData, obj]));
  };

  useEffect(() => {
    if (show == "active") {
      let newItems = localStorageItems.filter((item) => item.status == show);
      setItems(newItems);
    } else if (show == "completed") {
      let newItems = localStorageItems.filter((item) => item.status == show);
      setItems(newItems);
    } else {
      setItems(localStorageItems);
    }
  }, [localStorageItems, show]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {items?.map((item) => (
              <tbody>
                <td>{item.name}</td>
                <td>{item.status}</td>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
