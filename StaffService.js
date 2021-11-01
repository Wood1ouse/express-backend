import { connection } from "./db.js";

class StaffService {
	create(post) {
		connection.query(
			`INSERT INTO Staff (Login, PasswordHash, Salt) VALUES ('${post.Login}', '${post.PasswordHash}', '${post.Salt}')`,
			(error) => {
				if (error) throw error;
			},
		);
	}
	getAll() {
		return new Promise((resolve, reject) => {
			connection.query("SELECT * FROM Staff", (error, results) => {
				if (error) {
					reject("Promise rejection error");
				}
				resolve(results);
			});
		});
	}
	getOne(id) {
		return new Promise((resolve, reject) => {
			connection.query(
				`SELECT * FROM Staff WHERE StaffId = ${id}`,
				(error, results) => {
					if (error) {
						reject("Promise rejection error");
					}
					resolve(results);
				},
			);
		});
	}
	update({ StaffId, Login, PasswordHash, Salt }) {
		connection.query(
			`UPDATE Staff SET Login='${Login}', PasswordHash='${PasswordHash}', Salt='${Salt}' WHERE StaffId = ${StaffId}`,
			(error) => {
				if (error) throw error;
			},
		);
	}
	delete(id) {
		connection.query(`DELETE FROM Staff WHERE StaffId=${id}`, (error) => {
			if (error) throw error;
		});
	}
}

export default new StaffService();
