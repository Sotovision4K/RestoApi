"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let routes = (0, express_1.Router)();
routes.get('/gettest', (_req, res) => {
    res.send('oli');
});
exports.default = routes;
