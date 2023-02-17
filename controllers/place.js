import Place from "../models/Place.js";

/************** GET *************/
export const getPlaces = async (req, res) => {
  try {
    const places = await Place.find({});
    res.send(places);
  } catch (error) {
    res.send({
      error: true,
      message: "The is Error fi moustawa Place collectionS",
    });
  }
};

export const getPlaceById = async (req, res) => {
  try {
    const lol= req.params.id;

    const place = await Place.find({ name: lol });

    if (!place) {
      res.send({ message: "This Place don't exist" });
    }

    res.send(place);
  } catch (error) {
    res.send({ message: "The is Error fi moustawa Place collection" });
  }
};

/************** POST *************/
export const createPlace = async (req, res) => {
  try {
    const { name, status } = req.body;
    const place = await Place.create({ name, status });

    res.send({
      place,
      message: `Place created with succes, it's id : ${place._id}`,
    });
  } catch (error) {
    res.send({ message: "This place cann not be added", error });
  }
};

/** PUT */
export const updatePlace = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    const place = await Place.findOneAndUpdate(
      { name: id },
      { status },
      { new: true }
    );

    res.send({
      place,
      message: `Place with id : ${place._id} updated with succes`,
    });
  } catch (error) {
    res.send({ message: "You can't update it " });
  }
}; 

/************** DELETE *************/
export const deletePlace = async (req, res) => {
  try {
    const id = req.params.id;

    await Place.deleteOne({ _id });
  } catch (error) {
    res.send({ message: "You can't delete it for some reason qui me depasse" });
  }
};
