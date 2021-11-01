import StaffService from "./StaffService.js";

class StaffController {
	create(req, res) {
		try {
			StaffService.create(req.body);
			res.status(200).json(req.body);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getAll(_, res) {
		try {
			const data = await StaffService.getAll();
			res.status(200).json(data);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getOne(req, res) {
		try {
			const { id } = req.params;

			const data = await StaffService.getOne(id);
			res.status(200).json(data);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	update(req, res) {
		try {
			const staff = req.body;

			if (!staff.StaffId) {
				res.status(400).json({ message: "Id is required" });
			}

			StaffService.update(staff);

			res.status(200).json(staff)

		} catch (error) {
			res.status(500).json(error);
		}
	}
	delete(req, res) {
		try {
			const { id } = req.params;
			if (!id) {
				res.status(400).json({ message: "Id is required" });
			}
			StaffService.delete(id);
			res.status(200).json({ message: "succesfully deleted" });
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default new StaffController();
