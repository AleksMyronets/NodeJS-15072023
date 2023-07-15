const checkExtension = (fileName) => {
  const EXTENSIONS = ["js", "json", "html", "css", "txt"];

  const fileParts = fileName.split(".");
  if (fileParts.length > 1) {
    const extension = fileParts[fileParts.length - 1];
    if (EXTENSIONS.includes(extension)) {
      return true;
    }
  }

  return false;
};

