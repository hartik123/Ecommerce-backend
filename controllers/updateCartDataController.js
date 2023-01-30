import { addToCartinfoModel } from "../models/addToCartModel.js";

const updateCartDataController = async (req, res) => {
    console.log(req.body)
  const result = await addToCartinfoModel.updateOne(
    { userid: req.body.userid, productid: req.body.productid },
    { count: req.body.count }
  );
//   console.log("Updated Cart successfully");
  console.log(result)
  res.send("Done");
};

export { updateCartDataController };
