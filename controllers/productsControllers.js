import cloudinary from "../Config/cloudConfig.js";
import Products from "../Models/Products.js";

async function createProduct(req, res) {
  console.log(req.file.path);

  let image = await cloudinary.uploader.upload(req.file.path);
  let fileUrl = image.secure_url;
  //   console.log(req.file);
  try {
    let result = await Products.create({ ...req.body, image: fileUrl });
    res.status(201).send({ sucess: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getAllproduct(req, res) {
  try {
    let total = await Products.find().count();

    let result = await Products.find().populate({
      path: "subCategoryFK",
      populate: "categoryFK",
    });
    res.status(200).send({ total, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getProduct(req, res) {
  try {
    let result = await Products.findById(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateProduct(req, res) {
  let image = await cloudinary.uploader.upload(req.file.path);
  let fileUrl = image.secure_url;
  try {
    let result = await Products.findByIdAndUpdate(req.params.id, {
      ...req.body,
      image: fileUrl,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteProduct(req, res) {
  try {
    let result = await Products.deleteOne({ _id: req.params.id });
    res.status(200).send({ sucess: "Product Deleted", result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export {
  createProduct,
  getAllproduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
