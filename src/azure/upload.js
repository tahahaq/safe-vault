var azure = require('azure-storage');
var fs = require('fs');


var fileService = azure.createFileService('safevault', 'FVRq9jdWI4XXbE6EZ/FAypP5M6KxcVpwTwKT1LrNwS7Ei42NicH4UWDuNkF8bd9MLDMvWNVlr5pv+LufuJN+Ug==');


test();
async function test() {

    await  fileService.createShareIfNotExists('taskshare', function(error, result, response) {
        if (!error) {
            // if result = true, share was created.
            // if result = false, share already existed.
        }
    });

    await fileService.createDirectoryIfNotExists('taskshare', 'taskdirectory', function(error, result, response) {
        if (!error) {
            // if result.created = true, share was created.
            // if result.created = false, share already existed.
        }
    });



    await fileService.createFileFromLocalFile('taskshare', 'taskdirectory', 'taskfile', 'README.txt', function(error, result, response) {
        if (!error) {
            // file uploaded
        }
    });


    await  fileService.getFileToStream('taskshare', 'taskdirectory', 'taskfile', fs.createWriteStream('output.md'), function(error, result, response) {
        if (!error) {
            // file retrieved
        }
    });

}


