let fs=require('fs');
let path=require('path');

function treeFun(srcpath)
{
    let baseName=path.basename(srcpath);
    console.log(baseName);
    console.log("|___")
    let allFilesFolder=fs.readdirSync(srcpath);
    let allEntities="";
    for(let i=0;i<allFilesFolder.length;i++)
    {
        allEntities+="\n\t"+"|---"+allFilesFolder[i];
    }
    console.log(allEntities);
}

module.exports={
    treeFun:treeFun
}