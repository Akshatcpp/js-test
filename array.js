let toystype = ["car","bike","teddy","ball"]
console.log(...toystype)
console.log(toystype[2])
console.log("new array starts ")
 toystype.push("badminton")
console.log(toystype)
//const data = toystype.pop();
//console.log(data)
let index = toystype.indexOf("ball")
console.log(index)

// splice command
if (index!==3)
{
    toystype.splice(0,2,"bat")
    console.log(toystype)
}
else{
    console.log("going good")
}
let newtoy =[...toystype,"panda"]
console.log(newtoy)

// OBJECT CREATION
console.log("OBJECT NEW NEW")

let newtoystype = {
    name:"soft toy",
   othertoys:["rc cars","soft toys","robots"],
    category:{
        rc:["cars","bike","truck"],
        normaltoys:["snakeladder","chess"]
    }
    };
    console.log(newtoystype.othertoys)
    console.log(newtoystype.category.rc)