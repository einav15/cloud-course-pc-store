const express = require("express");
const ComputerModel = require("../models/ComputerModel")

const router = new express.Router();

router.post("/new", async (req, res) => {
    try {
        const computer = await ComputerModel.create(req.body);
        res.send(computer);
    } catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message
        });
    }
});

router.get("/get", async (req, res) => {
    try {
        const computers = await ComputerModel.findAll();

        if (!computers) {
            return res.status(404).send({
                status: 404,
                message: "No messages",
            });
        }

        res.send(computers);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get("/get/filter", async (req, res) => {
    try {
        const computers = await ComputerModel.findAll({ where: req.body});
        if (!computers) {
            return res.status(404).send({
                status: 404,
                message: "No messages",
            });
        }

        res.send(computers);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;