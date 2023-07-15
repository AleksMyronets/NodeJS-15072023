const checkExtension = (fileName) => {
    const EXTENSIONS = ["js", "json", "html", "css", "txt"];
    const index = fileName.lastIndexOf('.');
    const extension = slice(index + 1);
    // const finded = EXTENSIONS.find(() => { extension });

    const result = EXTENSIONS.some(el => el === extension)

    const object = {
        extention,
        result: finded,
    }
    return object; 
};

module.exports = checkExtension;