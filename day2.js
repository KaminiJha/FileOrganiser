let fs=require('fs');
let path=require('path');

let folders=process.argv.slice(2);
let rootFol=folders[0];
let subFol=folders.slice(1);
// console.log(rootFol);;
let currentDir=process.cwd();
let rootPath=path.join(currentDir,rootFol);
if(!fs.existsSync(rootPath))
{
    fs.mkdirSync(rootPath);//create a root folder
}
//traversing through sub folder array
console.log(rootPath)
for(let i=0;i<subFol.length;i++)
{
    let newPath=path.join(rootPath,subFol[i]);
    if(!fs.existsSync(newPath))
    {
        fs.mkdirSync(newPath);
    }
    for(let j=0;j<3;j++)
    {
        let subfolpath=path.join(newPath,`module${j+1}.md`);
        fs.writeFileSync(subfolpath,`hi i am inside${subFol[i]}content${j+1}`)
    }
    console.log(newPath)
    
}
//now creating files in ech sub folder


