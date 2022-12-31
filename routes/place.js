import { Router } from "express";

import {
  getPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
} from "../controllers/place.js";

const placeRouter = Router();

placeRouter.get("/", getPlaces);
placeRouter.get("/:id", getPlaceById);

placeRouter.post("/", createPlace);

placeRouter.patch("/:id", updatePlace);

placeRouter.delete("/:id", deletePlace);

export default placeRouter;
