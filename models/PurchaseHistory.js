const mongoose = require('mongoose');

const purchaseHistorySchema = new mongoose.Schema({
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    purchaseDate: { type: Date, default: null },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    netAmount:{type:Number,required:true}
});

module.exports = mongoose.model('PurchaseHistory', purchaseHistorySchema);
