import express from 'express';
import Takeaway from '../models/takeawayModel.js';

const takeawayRouter = express.Router();

takeawayRouter.get('/', async (req, res) => {
  const takeaway = await Takeaway.findOne();
  res.send(takeaway);
});

takeawayRouter.post('/', async (req, res) => {
  const takeaway = new Takeaway({
    collectionDate: req.body.collectionDate,
    pickupPoints: req.body.pickupPoints,
    otherinfo: req.body.otherinfo,
  });
  const newTakeAway = await takeaway.save();
  if (newTakeAway) {
    return res.status(201).send({ message: 'Takeaway was successfully created.', data: newTakeAway });
  }
  return res.status(500).send({ message: 'Error in creating the takeaway.' });
});

takeawayRouter.delete('/:id', async (req, res) => {
  const deletedTakeaway = await Takeaway.findById(req.params.id);
  if (deletedTakeaway) {
    await deletedTakeaway.remove();
    res.send({ message: 'Takeaway Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

export default takeawayRouter;
