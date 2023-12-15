<<<<<<< HEAD
let RelationShip = Object.freeze({
    parent : 0 ,
    child : 1,
    sibling : 2
})
=======
let Relationship = Object.freeze({
    parent : 0,
    child : 1,
    siblings : 2
});

class Person{
    constructor(name){
        this.name = name;
    }
}

// LOW level module

class Relationships{
    constructor(){
        this.data = [];
    }

    addParentChild(parent,child){
        this.data.push({
            from : parent,
            type: Relationship.parent,
            to:child
        });
    }
}

// High level module
class Research{
    constructor(relationships){
        // find all children of JOHN
        let relations = relationships.data;
        for(let rel of relations.filter(r=> 
            r.from.name === 'John' && 
            r.type === Relationship.parent)){
                console.log(`John has a child name ${rel.to.name}`)
            }
    }
}

let parent = new Person('John');
let child1 = new Person('Chris');
let child2 = new Person('Matt');

let rels = new Relationships();
rels.addParentChild(parent,child1);
rels.addParentChild(parent,child2);

new Research(rels)
>>>>>>> 0dcd56190e368b6360aae7e1577d8c8cbf8401b9

