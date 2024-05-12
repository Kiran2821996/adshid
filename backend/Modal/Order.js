const mongoose = require('mongoose');
const { type } = require('os');

const CartItemSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const OrderSchema = new mongoose.Schema({
    razorpayInfo:{
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    formData: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    },
    cartItems: {
        type: [CartItemSchema],
        required: true
    },
    orderStatus:{
        type: String,
        required:true
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
