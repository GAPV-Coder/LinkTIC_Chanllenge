"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_controller_1 = require("../controllers/api.controller");
const router = (0, express_1.Router)();
router.get('/', api_controller_1.getData);
router.get('/:pokemon', api_controller_1.getPokemon);
router.get('/:type', api_controller_1.getTypePokemon);
router.get('/:ability', api_controller_1.getAbilityPokemon);
exports.default = router;