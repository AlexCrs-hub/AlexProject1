import {Mail, getByIndex, getByName, deleteByName, createMail, update, writeToFile} from "../mail";
import Express from 'express';
let mails: Mail[] = require("../ganttDiagramData.json");
const fs = require('fs');

module.exports = {
    get : (req: Express.Request, res: Express.Response) => {

        const id = parseInt(req.params.id);

        res
            .status(200)
            .send(getByIndex(mails,id));
    
    },

    patch : (req: Express.Request, res: Express.Response) => {

        const id = parseInt(req.body.id);
        const name = req.body.from;
        const newM = update(id,name,mails);

        res
            .status(200)
            .send(newM)
            .send(writeToFile(newM,fs));

    },

    delete : (req: Express.Request, res: Express.Response) => {

        const name = req.params.name;
        const newM = deleteByName(mails,name);

        res
            .send(newM)
            .send(writeToFile(newM,fs));

    },

    post : (req: Express.Request<{from: string, date: Date, to: string[]}>, res: Express.Response) => {

        const from = req.body.from;
        const date = new Date(req.body.date);
        const to = req.body.to;

        const newM = createMail(from,date,to,mails);
        res
            .send(newM);

    }

}