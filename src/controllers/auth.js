import bcryptjs from "bcryptjs";
import User from "../models/auth";
import jwt from "jsonwebtoken";
import { loginSchema, registerSchema } from "../schema/auth";

export const signUp = async (request, response) => {
  const { username, email, password } = request.body;
  const { error } = registerSchema.validate(request.body, {
    abortEarly: false,
  });
  if (error) {
    const errorMessage = error.details.map((message) => message.message);
    return response.json(errorMessage);
  }
  const existUser = await User.findOne({ email: email });
  if (existUser) {
    return response.json({ errorMessage: "Email da ton tai!" });
  }
  const hashedPassword = await bcryptjs.hash(password, 10);
  const user = await User({ username, email, password: hashedPassword }).save();
  response.json({ message: "DK thanh cong!", user });
};

export const signIn = async (request, response) => {
  const { email, password } = request.body;
  const { error } = loginSchema.validate(request.body, { abortEarly: false });
  if (error) {
    const errorMessage = error.details.map((message) => message.message);
    return response.json(errorMessage);
  }
  const existUser = await User.findOne({ email: email });
  if (!existUser) {
    return response.json({ errorMessage: "Email ko ton tai!" });
  }
  const isPassword = await bcryptjs.compare(password, existUser.password);
  if (!isPassword) {
    return response.json({ message: "Mat khau ko dung!" });
  }
  const token = jwt.sign({ id: existUser._id }, "123456", { expiresIn: "30s" });
  response.cookie("token", token, { httpOnly: true });
  response.json({ message: "DN thanh cong!", user: existUser, token });
};
