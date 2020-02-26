const envs = require('dotenv').config();
let environments;
if(envs){
  environments = Object.keys(envs.parsed)
    .reduce((acum, env)=>{
      return acum = {...acum, [env]:envs.parsed[env]};
    },{});
}

environments = {...environments, ["NODE_ENV"]:process.env.NODE_ENV, ["COMPONENTS_PATH"]:process.env.COMPONENTS_PATH};
module.exports = environments;
