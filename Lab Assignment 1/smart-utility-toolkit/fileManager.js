const fs = require("fs");

const fileName = "test.txt";

console.log("Starting File Manager");

console.log("Creating file...");

fs.writeFile(fileName, "Hello Node.js", (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("File created successfully.");


    console.log("Reading file...");

    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("File content:", data);


        console.log("Updating file...");

        fs.appendFile(fileName, "\nLearning FS Module", (err) => {

            if (err) {
                console.log("Error updating file:", err);
                return;
            }

            console.log("File updated successfully.");


            fs.readFile(fileName, "utf8", (err, updatedData) => {

                if (err) {
                    console.log("Error reading updated file:", err);
                    return;
                }

                console.log("Updated content:");
                console.log(updatedData);


                console.log("Deleting file...");

                fs.unlink(fileName, (err) => {

                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("File deleted successfully.");
                    console.log("File Manager Finished");
                });
            });
        });
    });
});