import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getContactById, updateContact } from "../redux/action";
import '../Styling/EditContact.css'
import toast from "react-hot-toast";
import cancelpng from '../assets/cancel.png'
import editpng from '../assets/edit-button.png'

function EditContact() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [editedContact, setEditedContact] = useState(null);
    const dispatch = useDispatch();

    const contactFromRedux = useSelector((state) => state.contactReducer.selectedContact);

    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState();

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };
    const handleContactChange = (e) => {
        setNewNumber(e.target.value);
    };


    useEffect(() => {
        if (id) {
            if (!editedContact || editedContact.id !== id) {
                dispatch(getContactById(id)).catch((error) => {
                    console.error(error);
                });
            }
        }
    }, [dispatch, id, editedContact]);

    useEffect(() => {
        setEditedContact(contactFromRedux);
    }, [id]);

    const handleUpdateContact = () => {
        console.log(newName, newNumber)
        let updatedContact = { name: newName, number: newNumber }
        dispatch(updateContact(id, updatedContact));
        toast.success("Contact Updated Successfully");
        navigate(`/`);
    };

    return (
        <div className="AddNewContactContainerE">
            <div className="AddNewContactMainContainerE">
                <div className="headingE">
                    <h2>Edit Contact</h2>
                    <Link to={`/`}>
                        <button id="cancelBTNDivE">
                            <img id="cancelBTNE" src={cancelpng} alt="" />
                        </button>
                    </Link>
                </div>
                <div className="inputboxE">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="inputboxE">
                    <label>Contact Number:</label>
                    <input
                        type="number"
                        value={newNumber}
                        onChange={handleContactChange}
                    />
                </div>
                <div className="addBTNContainerE">
                    <button onClick={handleUpdateContact} className="addBTNE">Edit Contacts
                        <img src={editpng} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditContact;