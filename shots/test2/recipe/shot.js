'use strict';

var piscosour = require('../../..'),
    Shot = piscosour.Shot;

var shot = new Shot({
    description : "TEST 2 Brief description of shot",

    check : function(resolve){
        shot.logger.info("#magenta","check","Check all pre-requisites for the execution");
    },

    config : function(resolve, reject){
        shot.logger.info("#magenta","config","Preparing params for main execution");
        if (shot.runner.params.saludo!=="hola")
            reject("ERROR: "+JSON.stringify(shot.runner.params));
    },

    run : function(resolve, reject){
        shot.logger.info("#magenta","run","Run main execution");
        reject({keep:true, error: "TEST ERROR"});
    },

    prove : function(resolve){
        shot.logger.info("#magenta","prove","Prove that the run execution was ok");
    },

    notify : function(resolve){
        shot.logger.info("#magenta","notify","Recollect all execution information and notify");
    }

});

module.exports = shot;