import express from 'express';
import LocationsController from '../controllers/locations.js';


const router = express.Router();

router.get('/', LocationsController.getLocations);
router.get('/:id', LocationsController.getConcertsByLocation);

export default router;