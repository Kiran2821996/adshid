import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function OrderSummary() {
    const [CDeatils, setCDeatils] = useState([]);
    const columns = [
        {
            name: "Order Id",
            selector: row => row._id,
        },
        {
            name: "Name",
            selector: row => row.formData.name,
        },
        {
            name: "Mobile",
            selector: row => row.formData.mobile,
        },
        {
            name: "Email",
            selector: row => row.formData.confirmEmail,
        },
        {
            name: "Cart Itmes",
            selector: row => row.cartItems.map((items)=>items.title),
        },
        {
            name: "Total Items",
            selector: row => row.totalItems,
        },
        {
            name: "Total Price",
            selector: row => row.totalPrice,
        },
        {
            name: "Order Status",
            selector: row => row.orderStatus,
        }
    ];

    useEffect(() => {
        getAllcontact();
    }, []);
    const getAllcontact = async () => {
        try {
            let response = await axios.get(
                "https://abhishad.onrender.com/api/order/getorders"
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
