export class Mail {
    
    private _from: string;
    private _date: Date;
    private _to: string[];

    constructor(from: string, date: Date, to: string[]){
        this._from = from;
        this._date = date;
        this._to = to;
    }
    
    public get from(){
        return this._from;
    }

    public get date(){
        return this._date;
    }

    public get to(){
        return this._to;
    }

    public set from(from: string){
        this._from = from;
    }

    public set date(date: Date){
        this._date = date;
    }

    public set to(to: string[]){
        this._to = to;
    }
}

export function getByIndex(mails: Mail[], index: number){
    return mails.find(item => mails.indexOf(item) === index);
}

export function getByName(mails: Mail[], name:string){
    return mails.filter(elem => elem.from.includes(name));
}

export function deleteByName(mails: Mail[], name:string){

    let index = mails.findIndex(m => m.from === name);

    if(index === -1){
        throw new Error("error");
    }else{

        console.log(mails.length);
        mails.splice(index,1);
        console.log(mails.length);
    }
    return mails;
}

export function createMail(from: string, date: Date, to: string[], mails: Mail[]){

    let mail = new Mail(from,date,to);
    mails.push(mail);
    
    return mails;
}

export function update(index: number, name: string, mails: Mail[]){

    const newMails = mails.map(obj => {
        if(mails.indexOf(obj) === index){

            return {from: name, date: obj.date, to: obj.to};

        }
        return obj;
    });

    return newMails as Mail[];
}

export function writeToFile(mails: Mail[], fs: any){

    fs.writeFile("./ganttDiagramData.json", JSON.stringify(mails), () => {
        console.log("aight");
    });
    
}