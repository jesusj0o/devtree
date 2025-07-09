import { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug from "slug";
import User from "../models/User";
import { checkPassword, hashPassword } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {

  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error("User already exists! email cannot be duplicated.");
    res.status(409).json({ error: error.message });
    return;
  }

  const handle = slug(req.body.handle, "");
  const handleExist = await User.findOne({ handle });
  if (handleExist) {
    const error = new Error(
      "User name already exists! User name cannot be duplicated."
    );
    res.status(409).json({ error: error.message });
    return;
  }

  const user = new User(req.body);
  user.password = await hashPassword(password);
  user.handle = await handle;

  await user.save();
  res.status(201).send("User created");
};

export const login = async (req, res) => {

  const { email, password } = req.body;

  //check if user exists

  const userExists = await User.findOne({ email });
  if (!userExists) {
    const error = new Error("Email not exists!");
    res.status(404).json({ error: error.message });
    return;
  }

  //check password
  const isPasswordCorrect = await checkPassword(password, userExists.password );
   if (!isPasswordCorrect) {
  const error = new Error("Password incorrect. Have you forgotten your credentials? ");
    res.status(401).json({ error: error.message });
    return;
  }

  res.send("authenticated!")
};
