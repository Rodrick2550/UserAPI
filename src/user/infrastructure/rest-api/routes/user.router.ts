import express from "express";
import {userController} from "../../../shared/infraestructure/dependencies"

export const router = express.Router();

router.post(
    "/",
    userController.registerUser.bind(userController)
);

router.post(
    "/activate/:activationCode",
    userController.activateUser.bind(userController)
);

router.post(
    "/login",
    userController.authenticateUser.bind(userController)
);