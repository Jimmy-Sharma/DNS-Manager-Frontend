import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDomains, deleteDomain } from "../redux/action";
import '../Styling/List.css'
import toast from "react-hot-toast";

function List() {
    const data = useSelector((store) => store.domainReducer.domains);
    console.log(data);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllDomains());
            setLoading(false);
        };

        fetchData();
    }, [dispatch]);


    const handleDelete = (id) => {
        console.log("me", id)
        if (id) {
            dispatch(deleteDomain(id)).catch((error) => {
                console.error(error);
            });
        }
        toast.success("Domain Deleted Successfully");
    }

    if (loading) {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <p>Loading... Please wait!!</p>
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

            <Link to={`/adddomains`}>
                <div className="addBTNContainer">
                    <button className="addBTN">Add Domains
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
                            <strong>{el.domainName ? el.domainName : ""}</strong>
                        </div>
                    </div>
                    <div className="BtnContainer">
                        <Link to={`/editdomain/${el._id}`}>
                            <div className="editBTN">
                                <img src="edit-button.png" alt="" />
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