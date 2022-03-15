const fs = require("fs"); //fs module
const path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath) {
    if (srcPath == undefined) {
      //The process.cwd() method returns the current working directory of the Node.js process.
        //console.log(srcPath); //undefined
        srcPath = process.cwd();
        // console.log("source path is ",srcPath);
    }
    // Join all arguments together and normalize the resulting path.
    //  Arguments must be strings. In v0.8, non-string arguments were silently ignored.
    //  In v0.10 and up, an exception is thrown.
    let organizedFiles = path.join(srcPath, "organized_files");//organised-folder hoga 
    // console.log("organized files folder path is ", organizedFiles);
    if (fs.existsSync(organizedFiles) == false) { //organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do 
        fs.mkdirSync(organizedFiles);
    }
    else console.log('folder already exists');
    
}

organize();