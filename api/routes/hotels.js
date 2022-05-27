import express from 'express';
//We are importing the Hotel mode we have just created
import Hotel from '../models/Hotel.js';
import { createHotel } from '../controllers/hotel.js';

const router = express.Router();

//CREATE
router.post('/', createHotel);
//UPDATE
//DELETE
//GET
//GET ALL

export default router;
