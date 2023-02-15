class User {
    constructor(name,age){
        this.name=name
        this.age=age;
    }
}
    printName(){
        return User.name     
    }
    printAge(){
        return User.age
    }
    

const user1 = new User('DimpSodhi',10)
let user2 = new User('AnkiRocks',20)
   user2 = new User('Supre',19)

   console.log(user1)
   console.log(user2)

   printName('user1')