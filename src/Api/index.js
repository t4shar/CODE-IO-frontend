import axios from "axios";
var qs = require("qs");

export const compileCode =  async (data)=>{
    var data = qs.stringify(data);
    var config = {
        method: "post",
        url: "https://codex-api.herokuapp.com/",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };
      
      return await axios(config)
        
}