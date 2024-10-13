const loanService = require('../services/loan.service')

const getAll = async (req, res) => {
    try {
        const getAll = await loanService.getAll()
        res.status(200).send({ status: 200, data: getAll })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED"})
    }
}


const getByUser = async (req, res) => {
    try {
        const {userId} = req.params
        const getByUser = await loanService.getByUser(userId)
        res.status(200).send({ status: 200, data: getByUser })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED"})
        console.error("Error fetching loans by user:", error);
    }
}



// const get = async (req, res) => {
//     let id = req.params.userId
//     try {
//         const get = await loanService.get(id)
//         res.status(200).send({ status: 200, data: get })
//     } catch (error) {
//         res.status(error.status || 500).send({ status: "FAILED", data: error.message })
//     }
// }
// const getPicture = async (req, res) => {
//     let id = req.params.userId
//     try {
//         const get = await loanService.getPicture(id)
//         res.status(200).send({ status: 200, data: get })
//     } catch (error) {
//         res.status(error.status || 500).send({ status: "FAILED", data: error.message })
//     }
// }

const create = async (req, res) => { 
    console.log(req.body); 
    const { loanDate,loanRetrieve,status,userId } = req.body;
    try {
        const create = await loanService.create(loanDate,loanRetrieve,status,userId);
        res.status(200).send({ status: 200, data: create })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: error.message })
    }
}

// const update = async (req, res) => {
//     const id = req.params.userId
//     try {
//         const { name, lastName, email, password, profile_picture, role, status, phoneNumber, idCardNumber } = req.body;
//         const update = await loanService.update(id, name, lastName, email, password, profile_picture, role, status, phoneNumber, idCardNumber);
//         res.status(200).send({ status: 200, data: update })
//     } catch (error) {
//         res.status(error.status || 500).send({ status: "FAILED", data: error.message })
//     }
// }

// const destroy = async (req, res) => {
//     const id = req.params.userId

//     try {
//         const destroy = await loanService.destroy(id)
//         res.status(200).send({ status: 200, data: destroy })

//     } catch (error) {
//         res.status(error.status || 500).send({ status: "FAILED", data: error.message })
//     }
// }

module.exports = {
    getAll,
    // get,
    create,
    getByUser,
    // update,
    // destroy,
    // getPicture
}