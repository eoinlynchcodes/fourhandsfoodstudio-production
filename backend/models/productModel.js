import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    isTakeaway: { type: String, required: false },
    isMainCourse: { type: String, required: false },
    takeTitle: { type: String, required: false },
    takeItems: { type: String, required: false },
    name: { type: String, required: true, unique: false },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    image: { type: String, required: false },
    category: { type: String, required: false },
    description: { type: String, required: false },
    price: { type: Number, required: false },
    countInStock: { type: Number, required: false },
    rating: { type: Number, required: false },
    numReviews: { type: Number, required: false },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
