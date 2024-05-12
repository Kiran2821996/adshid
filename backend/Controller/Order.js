const OrderModal = require('../Modal/Order');

class Order {
  async createOrder(req, res) {
    try {
        const { razorpayInfo,formData, totalPrice, totalItems, cartItems, orderStatus } = req.body;
        const order = new OrderModal({ razorpayInfo,formData, totalPrice, totalItems, cartItems , orderStatus});
        let savedOrder = await order.save();
        if (savedOrder) {
            return res.status(200).json({ message: 'Order created successfully', order: savedOrder });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  
  async getOrderData(req, res) {
    try {
        const orders = await OrderModal.find({});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }
  
  async deleteOrder(req, res) {
    try {
        const { id } = req.params;
        await OrderModal.findByIdAndDelete(id);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }
  
  async updateOrder(req, res) {
    try {
        const { id } = req.params;
        const {razorpayInfo, formData, totalPrice, totalItems, cartItems,orderStatus } = req.body;
        const updatedOrder = await OrderModal.findByIdAndUpdate(id, { razorpayInfo,formData, totalPrice, totalItems, cartItems ,orderStatus}, { new: true });
        res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }
}

const OrderController = new Order();
module.exports = OrderController;
