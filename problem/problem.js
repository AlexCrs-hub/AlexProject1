function check(objs){
    
    let objsN = [];

    objs.forEach(obj => {

        if(obj.date != null && obj.to.length != 0){
            objsN.push(obj);
        }

    })
    return objsN;
}

function getMonths(objs){
    let months = [];

    for(let key in objs){

        let d = new Date(objs[key].date);
        let month = d.toLocaleString("default", {month: "long"});

        months.push(month);
    }

    let uniqueMs = new Set(months);

    return uniqueMs;
}

function fill(days){
    let arr = [];

    for(let i = 1; i <= days; i++){
        arr.push(i);
    }

    return arr;
}

function fillMonth(objs, currentMonth, nrDays, names){

    let timeStamp = [];

    names.forEach( elem => {

        let currentObjs = objs.filter( obj => obj.from === elem);
        let time = "";

        currentObjs = currentObjs.filter( obj => new Date(obj.date).toLocaleString("default",{month:"long"}) === currentMonth);

        let mailDays = [];

        currentObjs.forEach(curr => {

            mailDays.push(new Date(curr.date).getDate());

        });

        let mD = new Set(mailDays);

        nrDays.forEach(day => {

            if(mD.has(day)){
                time += "==";
            }
            else{
                time += "--";
            }
        });

        let value = {person: elem, times: time};
        timeStamp.push(value);
    })
    
    return timeStamp;
}

function prettyPrint(objs, months){

    const month = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
    
    months.forEach(element => {
        let days = new Date(2019,month.indexOf(element) + 1,0).getDate();
        let nrDays = fill(days);
        console.log(element + " " + nrDays.toString());
        
        let names = [];
        objs.forEach( (obj) => {
            names.push(obj.from);
        })

        names = names.sort();
        let namesUnique = new Set(names);
        let timeStamp = fillMonth(objs, element,nrDays,namesUnique);
        timeStamp.forEach(stamp => {
            console.log(stamp.person + "   " + stamp.times);
        })
    });

}



let objs = require("./ganttDiagramData"); 
objs = check(objs);

let months = getMonths(objs);

prettyPrint(objs,months);
