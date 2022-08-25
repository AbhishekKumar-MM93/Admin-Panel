import Category from "../Models/Category.js";

async function createCategory(req, res) {
  try {
    let result = await Category.create(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function gteAllcategory(req, res) {
    try {
      let result = await Category.find();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
}
  
async function getCategory(req, res) {
    try {
      let result = await Category.findById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
}
async function updateCategory(req, res) {
    try {
        let result = await Category.findByIdAndUpdate({_id: req.params.id},req.body);
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
}
  
async function deleteCategory(req, res) {
    try {
        let result = await Category.deleteOne({ _id: req.params.id });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
}
  
export { createCategory, gteAllcategory, getCategory, updateCategory, deleteCategory }
