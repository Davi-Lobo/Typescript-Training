"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
     async index(req, res) {  
        const users = await _User2.default.find();

        return res.json(users);
    }

     async create(req, res) { 
        const user = await _User2.default.create(req.body);

        return res.json(user);
    }
}

exports. default = new UserController();