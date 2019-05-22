var sha256File = require('sha256-file');



async function generateHash(filePath) {
  try {
    return await sha256File(filePath);
  }catch (e) {
    console.log(e);
  }
}

async function () {
  
}
