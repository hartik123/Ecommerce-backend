import mongoose from "mongoose";
import { addToCartinfoModel } from "../models/addToCartModel.js";

const addToCartController = async (req, res) => {
  console.log(req.body);
  const result = await addToCartinfoModel.findOne({
    userid: mongoose.Types.ObjectId(req.body.userid),
    productid: req.body.productid,
  });
  if (result != null) {
    const finalcount = result.count + req.body.count;
    // const item = addToCartinfoModel({
    //   userid: mongoose.Types.ObjectId(req.body.userid),
    //   productid: req.body.productid,
    //   count: finalcount,
    // });
    //
    // item.save();

    await addToCartinfoModel.updateOne(
      {
        userid: mongoose.Types.ObjectId(req.body.userid),
        productid: req.body.productid,
      },
      {
        count: finalcount,
      }
    );

    res.send({ cartStatus: "success" });
  } else {
    const item = await addToCartinfoModel({
      userid: mongoose.Types.ObjectId(req.body.userid),
      productid: req.body.productid,
      count: req.body.count,
    });
    item.save();

    res.send({ cartStatus: "success" });
  }
};

export { addToCartController };
