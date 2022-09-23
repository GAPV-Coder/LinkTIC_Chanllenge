"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbilityPokemon = exports.getTypePokemon = exports.getPokemon = exports.getData = void 0;
const api_service_1 = require("../services/api.service");
const getData = (req, res) => {
    const data = api_service_1.APIservice.get();
    if (!data) {
        res.status(404).json({ ok: false, data: null });
    }
    res.status(200).json({ ok: true, data });
};
exports.getData = getData;
const getPokemon = (req, res) => {
    const { pokemon } = req.params;
    const data = api_service_1.APIservice.getPokemon(pokemon);
    if (!data) {
        res.status(404).json({ ok: false, data: null });
    }
    res.status(200).json({ ok: true, data });
};
exports.getPokemon = getPokemon;
const getTypePokemon = (req, res) => {
    const { type } = req.params;
    const data = api_service_1.APIservice.getTypePokemon(type);
    if (!data) {
        res.status(404).json({ ok: false, data: null });
    }
    res.status(200).json({ ok: true, data });
};
exports.getTypePokemon = getTypePokemon;
const getAbilityPokemon = (req, res) => {
    const { ability } = req.params;
    const data = api_service_1.APIservice.getAbilityPokemon(ability);
    if (!data) {
        res.status(404).json({ ok: false, data: null });
    }
    res.status(200).json({ ok: true, data });
};
exports.getAbilityPokemon = getAbilityPokemon;
