import { productinfoModel } from "../models/productModel.js";

const addProductController = (req, res) => {
  console.log(req.body);
  const product = productinfoModel({
    productimage: req.file.buffer,
    productid: req.body.productid,
    productname: req.body.productname,
    productprice: req.body.productprice
  });

      // res.json({ addProductStatus: "success" });
  
  product.save((error, result) => {
    if (result) {
      res.json({ addProductStatus: "success" });
    }

    if (error) {
      res.json({ addProductStatus: error });
    }
  });
};
export { addProductController };
