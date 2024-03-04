import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addContact } from "../redux/action";
import '../Styling/AddNewContact.css'
import toast from "react-hot-toast";

function AddNewContact() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState();


    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };
    const handleContactChange = (e) => {
        setNewNumber(e.target.value);
    };

    const handleAddContact = () => {
        console.log(newName, newNumber)
        let newContact = { name: newName, number: newNumber }
        dispatch(addContact(newContact));
        toast.success("New Contact to DB Successfully");
        setTimeout(() => {
            navigate(`/`);
        }, 2000);

    };


    return (
        <div className="AddNewContactContainer">
            <div className="AddNewContactMainContainer">
                <div className="heading">
                    <h2>Add Contact</h2>
                    <Link to={`/`}>
                        <button id="cancelBTNDiv">
                            <img id="cancelBTN" src="cancel.png" alt="cancelBTN" />
                        </button>
                    </Link>
                </div>
                <div className="inputbox">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="inputbox">
                    <label>Contact Number:</label>
                    <input
                        type="number"
                        value={newNumber}
                        onChange={handleContactChange}
                    />
                </div>
                <div className="addBTNContainer">
                    <button onClick={handleAddContact} className="addBTN">Add Contacts
                        <img src="addBTN.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNewContact;