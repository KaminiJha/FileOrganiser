let fs=require('fs');
const { type } = require('os');
let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizeFn(srcpath)
{
    let subEntities=fs.readdirSync(srcpath);
    let organizePath=path.join(srcpath,'organize');
    //creating organizeFolder
    if(!fs.existsSync(organizePath))
    {
        fs.mkdirSync(organizePath);
    }
    //creating type folder inside organize folder
    for(let i=0;i<subEntities.length;i++)
    {
        let file=subEntities[i]
        let filePath=path.join(srcpath,file)
        if(fs.lstatSync(filePath).isFile())
        {
            let type=checkType(file);
            let folderPath=path.join(organizePath,type)
            if(!fs.existsSync(folderPath))
            {
                fs.mkdirSync(folderPath);
    
            }
            //copy file from src to dest
            let src=path.join(srcpath,file);
            let dest=path.join(folderPath,file);
            fs.copyFileSync(src,dest);
        }
    }

    //type check function
    function checkType(file)
    {
        for(let key in types)
        {
            for(let ext of types[key])
            {
                if(path.extname(file).split('.')[1]==ext)
                {
                    return key;
                }
            }
        }
        return 'others';
    }
}

module.exports={
    organizeFn:organizeFn
}
