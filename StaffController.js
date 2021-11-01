import { connection } from "./db.js";

class StaffController {
	create(req, res) {
		const { Login, PasswordHash, Salt } = req.body;
		try {
			connection.query(
				`INSERT INTO Staff (Login, PasswordHash, Salt) VALUES ('${Login}', '${PasswordHash}', '${Salt}')`,
				(error) => {
					if (error) res.status(500).json(error);
					console.log("Succesfully Added!");
					res.send(req.body);
				},
			);
		} catch (error) {
			console.log(error);
		}
	}
	getAll(_, res) {
		try {
			connection.query("SELECT * FROM Staff", (error, results) => {
				if (error) throw error;
				res.status(200).json(results);
			});
		} catch (error) {
			res.status(500).json(error);
		}
	}
	getOne(req, res) {
		try {
			const { id } = req.params;

			connection.query(
				`SELECT * FROM Staff WHERE StaffId = ${id}`,
				(error, results) => {
					if (error) throw error;
					res.status(200).json(results);
				},
			);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	update(req, res) {
		try {
			const { StaffId, Login, PasswordHash, Salt } = req.body;

			if (!StaffId) {
				res.status(400).json({message: "Id is required"});
			}
			connection.query(
				`UPDATE Staff SET Login='${Login}', PasswordHash='${PasswordHash}', Salt='${Salt}' WHERE StaffId = ${StaffId}`,
				(error, results) => {
					if (error) throw error;
					res.status(200).json(req.body);
				},
			);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	delete(req, res) {
		try {
			const { id } = req.params;
            if (!id) {
                res.status(400).json({message: "Id is required"})
            }
			connection.query(
				`DELETE FROM Staff WHERE StaffId=${id}`,
				(error, results) => {
					if (error) throw error;
					res.status(200).json(results);
				},
			);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default new StaffController();
