class human{
    constructor(){
        this.age = 19
    }
    printH(){
        console.log("Super class value: "+this.age+"\n")
    }
}
class person extends human{
    constructor(){
        super();
        this.name = "supreeth"
        this.age = 20
    }
    printName(){
        console.log("name : sai "+this.name)
    }
    printAge(){
        console.log("age : "+this.age)
    }
}
const persons1 = new human();
const persons = new person();
persons.printName()
persons.printAge()
persons1.printH()