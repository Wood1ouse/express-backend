import express from "express";
import router from "./router.js";
import { connection } from "./db.js";
import StaffController from './StaffController.js';

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
	console.log(req.query);
	res.status(200).json("SERVER IS UP");
});

const initApp = () => {
	try {
		connection.connect();
		// StaffController.getAll()
		app.listen(PORT, () => console.log(`server started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

initApp();
