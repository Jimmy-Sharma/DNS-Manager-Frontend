import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts, deleteContact } from "../redux/action";
import '../Styling/List.css'
import toast from "react-hot-toast";
import gifImage from '../assets/pleaseWait.gif'

function List() {
    const data = useSelector((store) => store.contactReducer.contacts);
    console.log(data);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllContacts());
            setLoading(false);
        };

        fetchData();
    }, [dispatch]);


    const handleDelete = (id) => {
        console.log("me", id)
        if (id) {
            dispatch(deleteContact(id)).catch((error) => {
                console.error(error);
            });
        }
        toast.success("Contact Deleted Successfully");
    }

    if (loading) {
        return (
            <div style={{width:'100%', height:'100%'}}>
                <img src={gifImage} alt="" />
            </div>
        );
    }

    return (
        <div id="ListContainer" className="ListContainer">
            <div className="NavbarContainer">
                <input
                    type="text"
                    placeholder="Search"
                />
            </div>

            <Link to={`/addcontacts`}>
                <div className="addBTNContainer">
                    <button className="addBTN">Add Contacts
                        <img src="addBTN.png" alt="" />
                    </button>
                </div>
            </Link>

            {data.map((el) => (
                <div className="userContainer">
                    <div>
                        <div className="user">
                            <img src="user.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="details">
                            <h3>{el.name ? el.name : ""}</h3>
                            <strong>+91-{el.number ? el.number : ""}</strong>
                        </div>
                    </div>
                    <div className="BtnContainer">
                        <Link to={`/editcontact/${el._id}`}>
                            <div className="editBTN">
                                <img src="edit.png" alt="" />
                            </div>
                        </Link>
                        <div className="deleteBTN" >
                            <button onClick={() => handleDelete(el._id)}>
                                <img src="bin.png" alt="" />
                            </button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default List;