let args=process.argv.slice(2);
let command=args[0]
let path=args[1]
let helpObj=require('./commands/help.js');
let organizeObj=require('./commands/organize.js');;
let treeObj=require('./commands/tree.js');

switch(command)
{
    case "help":
        console.log(helpObj);
        break;
    case "organize":
        organizeObj.organizeFn(path);
        break;
    case "tree":
        treeObj.treeFun(path);
        break;
    default:
        console.log("Invalid command")
        break;           
}