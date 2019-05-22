var azure = require('azure-storage');
var fs = require('fs');


var fileService = azure.createFileService('safevault', 'FVRq9jdWI4XXbE6EZ/FAypP5M6KxcVpwTwKT1LrNwS7Ei42NicH4UWDuNkF8bd9MLDMvWNVlr5pv+LufuJN+Ug==');


async function uploadFile(filePath , fileName ,fileHash , ethereumAddress) {
    try{
        await  fileService.createShareIfNotExists('taskshare', function(error, result, response) {
            if (!error) {
                // if result = true, share was created.
                // if result = false, share already existed.
            }
        });

        await fileService.createDirectoryIfNotExists('taskshare', ethereumAddress, function(error, result, response) {
            if (!error) {
                // if result.created = true, share was created.
                // if result.created = false, share already existed.
            }
        });


        await fileService.createFileFromLocalFile('taskshare', 'taskdirectory', 'image', 'test.png', function(error, result, response) {
            if (!error) {
                // file uploaded
            }
        });


    }catch (e) {

    }
};


async function test() {

    fileService.listFilesAndDirectoriesSegmented('taskshare','taskdirectory',null , function(error,result,reponse) {
        console.log(result.entries.files)
    })






}


