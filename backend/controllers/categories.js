const Categories = require('../models/Categories');

const createCategory = async (req, res) => {
  try {
    const newCategory = new Categories({
      name: req.body.name,
      description: req.body.description,
    });

    const savedCategory = await newCategory.save();
    res.json(savedCategory);
  } catch (err) {
    console.log({ message: err.message });
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Categories.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: 'Cannot find category' });
    }

    if (req.body.name != null) {
      category.name = req.body.name;
    }
    if (req.body.description != null) {
      category.description = req.body.description;
    }

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (err) {
    console.log({ message: err.message });
    return res.status(500).json({ message: 'Internal error, please try again' });
  }
};

module.exports = {
  createCategory,
  updateCategory
};
