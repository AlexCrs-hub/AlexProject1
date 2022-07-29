import Express from 'express';

const app = Express();
app.use(Express.json());

const routes = require('./router/mailRouter');
app.use("/user",routes);

app.listen(3000, () => console.log("running on : http://localhost:3000"));



