let RelationShip = Object.freeze({
    parent : 0 ,
    child : 1,
    sibling : 2
})

class Person{
    constructor(name){
        this.name = name; 
    }
}

// LOW LEVEL MODULE
class RelationShipBrowser{

    constructor(){
        if(this.constructor.name === 'RelationshipBrowser'){
            throw new Error('RelationshipBrowser is abstract!');
        }
    }
}
class RelationShips extends RelationShipBrowser{
    constructor(){
        super();
        this.data = [];
    }

    addParentAndChild(parent , child){
        this.data.push({
            from : parent,
            type : RelationShip.parent,
            to : child
        })
    }

    findAllChildrenOf(name){
        return this.data.filter(r=>
            r.from.name === name &&
            r.type === RelationShip.parent).map(r=> r.to);
    }
}

// High - level module

class Research {

    // abstract classes / interfaces
    // constructor(relationships){
    //     // find all children of John

    //     let relations = relationships.data;
    //     for(let rel of relations.filter(r=>
    //         r.from.name === 'John' &&
    //         r.type === RelationShip.parent)){
    //             console.log(`John has a child named ${rel.to.name}`)
    //         }

    // }

    constructor(browser){
        for(let p of browser.findAllChildrenOf('John')){
            console.log(`John has a child called ${p.name}`)
        }
    }
}

let parent = new Person('John');
let child1 = new Person('Chris');
let child2 = new Person('Matt');


let rels = new RelationShips();
rels.addParentAndChild(parent,child1);
rels.addParentAndChild(parent,child2);



new Research(rels);

