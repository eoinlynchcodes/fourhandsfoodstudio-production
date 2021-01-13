import mongoose from 'mongoose';

const takeAwaySchema = new mongoose.Schema(
  {
    collectionDate: { type: String, required: false },
    pickupPoints: { type: String, required: false },
    otherinfo: { type: String, required: false },
  },
);

const Takeaway = mongoose.model('takeaway', takeAwaySchema);

export default Takeaway;
