import SubCategory from "../Models/SubCategory.js";

async function createSubcategory(req, res) {
  try {
    let result = await SubCategory.create(req.body);
    res.status(201).send({ sucess: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getAllSubcategory(req, res) {
    try {
      let result = await SubCategory.find().populate('categoryFK');
      res.status(200).send( result);
    } catch (error) {
      res.status(400).send(error.message);
    }
}
  
async function getSubcategory(req, res) {
    try {
      let result = await SubCategory.findById(req.params.id);
      res.status(201).send({ sucess: true, result });
    } catch (error) {
      res.status(400).send(error.message);
    }
}
  
async function updateSubcategory(req, res) {
    try {
        let result = await SubCategory.findByIdAndUpdate({_id:req.params.id},req.body);
      res.status(201).send({ sucess: true, result });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async function deleteSubcategory(req, res) {
    try {
      let result = await SubCategory.deleteOne({_id:req.params.id});
      res.status(200).send({ sucess: true, result });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  
  
  export {createSubcategory,getAllSubcategory,getSubcategory,updateSubcategory,deleteSubcategory}