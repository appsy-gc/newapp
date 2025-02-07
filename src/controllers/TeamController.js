const express = require('express')
const router = express.Router()  

// http://localhost:56789/team/[mongo object id]
router.get(
    '/one/:teamid', // Route path
    async (request, response) => { // Route final callback

        response.json({

        })
    }
)

// http://localhost:56789/team/all
router.get(
    '/all/:teamid', // Route path
    async (request, response) => { // Route final callback

        response.json({

        })
    }
)

// http://localhost:56789/team/
router.post(
    '/', // Route path
    async (request, response) => { // Route final callback

        response.json({

        })
    }
)

// http://localhost:56789/team/[mongo object id]
router.patch(
    '/:teamid', // Route path
    async (request, response) => { // Route final callback

        response.json({

        })
    }
)

// http://localhost:56789/team/[mongo object id]
router.delete(
    '/:teamid', // Route path
    async (request, response) => { // Route final callback

        response.json({

        })
    }
)



module.exports = {
    TeamRouter: router
}