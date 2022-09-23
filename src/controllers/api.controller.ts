import {Request, Response} from 'express';
import {APIservice} from '../services/api.service';

export const getData = (req: Request, res: Response) => {
    const data = APIservice.get();

    if(!data) {
        res.status(404).json({ok: false, data: null});
    } 
    res.status(200).json({ok: true, data});
};

export const getPokemon = (req: Request, res: Response) => {
    const {pokemon} = req.params;
    const data = APIservice.getPokemon(pokemon);

    if(!data) {
        res.status(404).json({ok: false, data: null});
    } 
    res.status(200).json({ok: true, data});
};

export const getTypePokemon = (req: Request, res: Response) => {
    const {type} = req.params;
    const data = APIservice.getTypePokemon(type);

    if(!data) {
        res.status(404).json({ok: false, data: null});
    } 
    res.status(200).json({ok: true, data});
};

export const getAbilityPokemon = (req: Request, res: Response) => {
    const {ability} = req.params;
    const data = APIservice.getAbilityPokemon(ability);

    if(!data) {
        res.status(404).json({ok: false, data: null});
    } 
    res.status(200).json({ok: true, data});
};

