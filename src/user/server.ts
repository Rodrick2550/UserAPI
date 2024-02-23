import "./load-env-vars";
import express from "express";
import {router as userRouter} from "./infrastructure/rest-api/routes/user.router"
import syncConnection from "./infrastructure/mysql/connection";

const bootstrap = async () => {
    const app = express();
    await syncConnection();

    app.use(express.json());
    app.use("/users", userRouter);
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

};

bootstrap();