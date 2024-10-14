import Product from "../models/product";
import { prdSchema } from "./../schema/product";

export const getAllProduct = async (request, response) => {
  try {
    const data = await Product.find();
    response.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getOneProduct = async (request, response) => {
  try {
    const data = await Product.findById(request.params.id);
    response.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (request, response) => {
  try {
    const { error } = prdSchema.validate(request.body, { abortEarly: false });
    if (error) {
      const errorMessage = error.details.map((message) => message.message);
      response.json(errorMessage);
    }
    const data = await Product(request.body).save();
    response.json({ data, message: "Them thanh cong!" });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (request, response) => {
  try {
    const { error } = prdSchema.validate(request.body, { abortEarly: false });
    if (error) {
      const errorMessage = error.details.map((message) => message.message);
      response.json(errorMessage);
    }
    const data = await Product.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.json({ data, message: "Cap nhat thanh cong!" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (request, response) => {
  try {
    const data = await Product.findByIdAndDelete(request.params.id);
    response.json({ data, message: "Xoa thanh cong!" });
  } catch (error) {
    console.log(error);
  }
};
