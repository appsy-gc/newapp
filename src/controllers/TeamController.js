const express = require('express')
const { TeamModel } = require('../models/team')
const router = express.Router()  

// http://localhost:5678/team/[mongo object id]
router.get(
    '/one/:teamid', // Route path
    async (request, response) => { // Route final callback

        response.json({

        })
    }
)

// http://localhost:5678/team/all
router.get(
	"/all",  // route path 
	async (request, response) => { // route final callback 
		
		let teamData = await TeamModel.find();

		response.json({
			data: teamData
		});
	}
);

// http://localhost:5678/team/
router.post(
	"/",  // route path 
	async (request, response) => { // route final callback 
		
		let newTeam = await TeamModel.create(request.body.teamData);

		response.json({
			requestBody: request.body,
			team: newTeam
		});
	}
);

// http://localhost:5678/team/[mongo object id]
router.patch(
    '/:teamid', // Route path
    async (request, response) => { // Route final callback

        response.json({

        })
    }
)

// http://localhost:5678/team/[mongo object id]
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