import express from 'express';
import ConcertsController from '../controllers/concerts.js';


const router = express.Router();

router.get('/concerts/:id', ConcertsController.getConcertsById);

export default router;