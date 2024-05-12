import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ContactDetails() {
    const [CDeatils, setCDeatils] = useState([]);
    const columns = [
        {
            name: "Name",
            selector: row => row.name,
        },
        {
            name: "Email",
            selector: row => row.email,
        },
        {
            name: "Phone Number",
            selector: row => row.phone,
        },
        {
            name: "Message",
            selector: row => row.message,
        },

    ];

    useEffect(() => {
        getAllcontact();
    }, []);
    const getAllcontact = async () => {
        try {
            let response = await axios.get(
                "http://localhost:8000/api/contact/getdata"
            );
            if (response.status === 200) {
                setCDeatils(response.data);
            }
        } catch (error) {
            console.error("error", error);
        }
    };

    return (
        <>
            <DataTable
                columns={columns}
                data={CDeatils}
                pagination={CDeatils.length > 9 ? true : false}
            />
        </>
    );
}
