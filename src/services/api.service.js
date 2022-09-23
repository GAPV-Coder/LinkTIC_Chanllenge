"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIservice = void 0;
const axios_1 = __importDefault(require("axios"));
class APIservice {
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield axios_1.default.get('https://pokeapi.co/api/v2/pokemon');
            return result ? result : null;
        });
    }
    static getPokemon(pokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield axios_1.default.get('https://pokeapi.co/api/v2/pokemon' + '/' + pokemon);
            return result ? result : null;
        });
    }
    static getTypePokemon(typePokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield axios_1.default.get('https://pokeapi.co/api/v2/type' + '/' + typePokemon);
            return result ? result : null;
        });
    }
    static getAbilityPokemon(abilityPokemon) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield axios_1.default.get('https://pokeapi.co/api/v2/ability' + '/' + abilityPokemon);
            return result ? result : null;
        });
    }
}
exports.APIservice = APIservice;
