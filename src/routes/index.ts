import { Router } from 'express';
import {getData, getPokemon, getTypePokemon, getAbilityPokemon} from '../controllers/api.controller';

const router = Router();

router.get('/', getData);

router.get('/:pokemon', getPokemon);

router.get('/:type', getTypePokemon);

router.get('/:ability', getAbilityPokemon);

export default router;