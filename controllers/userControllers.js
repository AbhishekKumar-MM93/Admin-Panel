import User from "../Models/UserModel.js";
import Cloudinary from "../Config/cloudConfig.js";

async function createUser(req, res) {
  let image = await Cloudinary.uploader.upload(req.file.path); // to upload image or user profile image
  let fileUrl = image.secure_url;
  try {
    let result = await User.create({ ...req.body, image: fileUrl });
    res.status(201).send({ sucess: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAllUser(req, res) {
  try {
    let total = await User.find().count();

    let result = await User.find();
    res.status(200).send({ total, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getUser(req, res) {
  try {
    let result = await User.findById(req.params.id);
    res.status(200).send({ result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateUser(req, res) {
  let image = await Cloudinary.uploader.upload(req.file.path);
  let fileUrl = image.secure_url;
  try {
    let result = await User.findByIdAndUpdate(req.params.id, {
      ...req.body,
      image: fileUrl,
    });
    res.status(201).send({ Sucess: "User Updated", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    let result = await User.deleteOne({ _id: req.params.id });
    res.status(200).send({ sucess: "User Deleted", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { createUser, getAllUser, getUser, updateUser, deleteUser };
