import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addDomain } from "../redux/action";
import '../Styling/AddNewDomain.css'
import toast from "react-hot-toast";

function AddNewDomain() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [newDomainName, setNewDomainName] = useState();


    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };
    const handleDomainChange = (e) => {
        setNewDomainName(e.target.value);
    };

    const handleAddDomain = () => {
        console.log(newName, newDomainName)
        let newDomain = { name: newName, domainName: newDomainName }
        dispatch(addDomain(newDomain));
        toast.success("New Domain to DB Successfully");
        setTimeout(() => {
            navigate(`/`);
        }, 2000);

    };


    return (
        <div className="AddNewDomainContainer">
            <div className="AddNewDomainMainContainer">
                <div className="heading">
                    <h2>Add Domain</h2>
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
                    <label>Domain:</label>
                    <input
                        type="text"
                        value={newDomainName}
                        onChange={handleDomainChange}
                    />
                </div>
                <div className="addBTNContainer">
                    <button onClick={handleAddDomain} className="addBTN">Add Domains
                        <img src="addBTN.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNewDomain;