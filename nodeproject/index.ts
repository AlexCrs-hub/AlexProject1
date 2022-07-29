import Express from 'express';

const app = Express();
app.use(Express.json());

const routes = require('./router/mailRouter');
app.use("/user",routes);

app.listen(3000, () => console.log("running on : http://localhost:3000"));

// app.get("/:id", (req: Express.Request, res: Express.Response) => {

//     const id = parseInt(req.params.id);
//     console.log(getByIndex(mails,id));
//     res
//         .status(200)
//         .send(getByIndex(mails,id));

// });

// app.patch("/mail/:id/:from",(req,res) => {

//     const id = parseInt(req.params.id);
//     const name = req.params.from;
//     const newM = update(id,name,mails);
//     console.log("here");

//     res
//         .status(200)
//         .send(newM)
//         .send(writeToFile(newM,fs));

// });

// app.delete("/:name",(req,res) => {
    
//     const name = req.params.name;
//     const newM = deleteByName(mails,name);

//     res
//         .send(newM)
//         .send(writeToFile(newM,fs));
    
        
// });

// app.post("/create",(req: Express.Request<{from: string, date: Date, to: string[]}>, res) => {

//     const from = req.body.from;
//     const date = new Date(req.body.date);
//     const to = req.body.to;

//     const newM = createMail(from,date,to,mails);
//     res
//         .send(newM);

// });

