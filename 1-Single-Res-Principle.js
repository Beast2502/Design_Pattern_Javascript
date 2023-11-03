// Single Responsibilty Principle

const fs = require('fs');
class Journal{

    constructor(){
        this.entries = {};
    }

    addEntry(text){
        let c = ++Journal.count;
        let entry = `${c} : ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index){
        delete this.entries[index];
    }

    toString(){
        return Object.values(this.entries).join('\n')
    }
}

class PersistenceManager {
    preprocess(journal){

    }

    saveToFile(journal , filename){
        fs.writeFileSync(filename,journal.toString());
    }
}

Journal.count = 0;


let j = new Journal();
j.addEntry('I am happy today');
j.addEntry('This the Second')
console.log(j.toString())
console.log(j)


let p = new PersistenceManager();
let filename = "./journal.txt";
p.saveToFile(j,filename)

// Seperation of concenrn


