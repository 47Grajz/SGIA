const toolService = require('../services/tool.service');

const getAll = async (req, res) => {
    try {
        const getAll = await toolService.getAll()
        res.status(200).send({ status: 200, data: getAll })
    } catch (error) {
        res.satus(error.status || 500).send({ status:"FAILED"})
    }
}

const getLoanTools = async (req, res) => {
    try {
        const getLoanTools = await toolService.getLoanTools()
        res.status(200).send({ status: 200, data: getLoanTools })
    } catch (error) {
        res.satus(error.status || 500).send({ status:"FAILED"})
    }
}

const create = async (req, res) => { 
    console.log(req.body); 
    const { storageId, name, amount, category, brand } = req.body;
    try {
        const create = await userServices.create( storageId, name, amount, category, brand );
        res.status(200).send({ status: 200, data: create })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

module.exports = {
    getAll,
    create,
    getLoanTools
}