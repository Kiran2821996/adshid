import React from 'react';
import { Modal, Button, Table, Row, Col } from 'react-bootstrap';

const OrderDetailsModal = ({ show, handleClose, orderData }) => {
  if (!orderData || Object.keys(orderData).length === 0) return null;

  const { cartItems, formData, orderStatus, razorpayInfo, totalItems, totalPrice } = orderData;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Order Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <h5>Customer Information</h5>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Confirm Email:</strong> {formData.confirmEmail}</p>
            <p><strong>Mobile:</strong> {formData.mobile}</p>
          </Col>
          <Col md={6}>
            <h5>Order Information</h5>
            <p><strong>Order Status:</strong> {orderStatus}</p>
            <p><strong>Total Items:</strong> {totalItems}</p>
            <p><strong>Total Price:</strong> {totalPrice}</p>
          </Col>
        </Row>
<hr />
        <h5>Razorpay Information</h5>
        <p><strong>Message:</strong> {razorpayInfo.msg}</p>
        <p><strong>Order ID:</strong> {razorpayInfo.orderId}</p>
        <p><strong>Payment ID:</strong> {razorpayInfo.paymentId}</p>
<hr />
        <h5>Cart Items</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetailsModal;
