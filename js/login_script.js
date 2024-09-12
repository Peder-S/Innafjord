const fs = require('fs');

groupid = document.getElementById="groupid";
groupkey = document.getElementById="groupkey";
/*
groupid = document.getElementById("groupid");
groupkey = document.getElementById("groupkey");*/

const jsonfile = {
    "groupid": groupid,
    "groupkey": groupkey
};

const data = JSON.stringify(jsonfile);

fs.writeFile('credits.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
