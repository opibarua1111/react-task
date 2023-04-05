import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const Problem2 = () => {
  const [allContactShow, setAllContacts] = useState(false);
  const [usContactShow, setUsContacts] = useState(false);
  const [usShow, setUs] = useState(false);
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    if (usShow) {
      console.log("hit");
      const dataFetch = async () => {
        const data = await (
          await fetch(
            `https://contact.mediusware.com/api/country-contacts/United%20States/`
          )
        ).json();

        setCountrys(data.results);
      };

      dataFetch();
    } else {
      const dataFetch = async () => {
        const data = await (
          await fetch(`https://contact.mediusware.com/api/contacts/`)
        ).json();

        setCountrys(data.results);
      };

      dataFetch();
    }
  }, [usShow]);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => {
              setAllContacts(true), setUs(false);
            }}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => {
              setUsContacts(true), setUs(true);
            }}
          >
            US Contacts
          </button>
        </div>
        <Modal
          size="lg"
          show={allContactShow}
          onHide={() => setAllContacts(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">Modal A</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Contracts</th>
                </tr>
              </thead>
              {countrys?.map((country) => (
                <tbody>
                  <td>{country.country.name}</td>
                  <td>{country.phone}</td>
                </tbody>
              ))}
            </table>

            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => {
                setAllContacts(true), setUsContacts(false), setUs(false);
              }}
              style={{ color: "#46139f", borderColor: "#46139f" }}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => {
                setUsContacts(true), setAllContacts(false), setUs(true);
              }}
              style={{
                color: "#ff7f50",
                borderColor: "#ff7f50",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              US Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => {
                setUsContacts(false), setAllContacts(false);
              }}
              style={{ color: "#461395", borderColor: "#461395" }}
            >
              Close
            </button>
          </Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={usContactShow}
          onHide={() => setUsContacts(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Modal B</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Contracts</th>
                </tr>
              </thead>
              {countrys?.map((country) => (
                <tbody>
                  <td>{country.country.name}</td>
                  <td>{country.phone}</td>
                </tbody>
              ))}
            </table>
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => {
                setAllContacts(true), setUsContacts(false), setUs(false);
              }}
              style={{ color: "#46139f", borderColor: "#46139f" }}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => {
                setUsContacts(true), setAllContacts(false), setUs(false);
              }}
              style={{
                color: "#ff7f50",
                borderColor: "#ff7f50",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              US Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => {
                setUsContacts(false), setAllContacts(false);
              }}
              style={{ color: "#461395", borderColor: "#461395" }}
            >
              Close
            </button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Problem2;
