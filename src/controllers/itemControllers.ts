import type { Request, Response, NextFunction } from 'express';
import type { Item } from '../models/item.js';
import items from '../models/item.js';

export const createItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const item: Item = { id: Date.now(), name };
        items.push(item);
        res.status(201).json(item);
    } catch (error) {
        next(error);
    }
}

export const getAllItems = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ message: "All items retrived", data: items });
    } catch (error) {
        next(error);
    }
}