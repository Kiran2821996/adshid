import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderDetailsModal from "./OrderDetailSummary";

export default function OrderSummary() {
    const [CDeatils, setCDeatils] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [viewOrderSummary,setViewOrderSummary] = useState([]);
    const [show, setShow] = useState(false);

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
            name: "Cart Items",
            selector: row => row.cartItems.map((items) => items.title),
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
            sortable: true, // Allow sorting on this column
        },
        {
            name: "Action",
            cell: row => (
                <div>
                    <button className="me-3" onClick={() => viewOrder(row)}>View</button>
                    <button onClick={() => editOrderStatus(row)}>Edit</button>
                </div>
            ),
            ignoreRowClick: true,
            allowoverflow: true,
            button: "true",
        }
    ];

    useEffect(() => {
        getAllOrders();
    }, []);

    const getAllOrders = async () => {
        try {
            let response = await axios.get("https://abhishad.onrender.com/api/order/getorders");
            if (response.status === 200) {
                setCDeatils(response.data);
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => {
        console.log("kkf");
        setShow(true);
    };

    const viewOrder = (order) => {
        // Implement logic to display order details in a dialog box
        setViewOrderSummary(order);
        handleShow();
        console.log("View Order:", order);
    };

   

    const editOrderStatus = async (order) => {
        try {
            const newStatus = order.orderStatus === "PENDING" ? "COMPLETED" : "PENDING";
            const updatedOrder = { ...order, orderStatus: newStatus };
            let response = await axios.put(`https://abhishad.onrender.com/api/order/updateorder/${order._id}`, updatedOrder);
            if (response.status === 200) {
                getAllOrders();
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const sortedData = CDeatils.sort((a, b) => {
        if (a.orderStatus === "COMPLETED" && b.orderStatus === "PENDING") return 1;
        if (a.orderStatus === "PENDING" && b.orderStatus === "COMPLETED") return -1;
        return 0;
    });

    const filteredData = sortedData.filter((order) => {
        const searchData = `${order._id} ${order.formData.name} ${order.formData.mobile} ${order.formData.confirmEmail} ${order.totalItems} ${order.totalPrice} ${order.orderStatus}`.toLowerCase();
        return searchData.includes(searchQuery.toLowerCase());
    });

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <DataTable
                columns={columns}
                data={filteredData}
                pagination={filteredData.length > 9 ? true : false}
            />
            <OrderDetailsModal show={show} handleClose={handleClose} orderData={viewOrderSummary} />
        </>
    );
}
