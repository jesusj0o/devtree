import { Router } from "express";
import { body } from "express-validator";
import { createAccount } from "./handlers";

const router = Router();

//Create user account route
router.post(
  "/auth/register",
  body("handle")
    .notEmpty()
    .withMessage("Username cannot be empty"),
  body("name")
    .notEmpty()
    .withMessage("Name cannot be empty"),
   body("email")
    .isEmail()
    .withMessage("email must contain @ to be valid"),
   body("password")
    .isLength({min: 8})
    .withMessage("Password must contain at least 8 characters"),
  createAccount
);

export default router;
