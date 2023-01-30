import { productinfoModel } from "../models/productModel.js";

const getProductsController = async (req, res) => {

  // console.log(req.body);
  const result = await productinfoModel.find({});
  console.log(result);
  if (result != null) {
    res.json({
      product: result,
    });
  } else {
    res.json({ loginStatus: "failure" });
  }
  
};

export { getProductsController };
