const API_URL = "https://innafjord.azurewebsites.net/api/"
const getHeaders = () => ({
    GroupId: "The Big Blue",
    GroupKey: "DhGmHnRYukWIgrdD9cueWA==",
});

async function logGroupState() {
    var groupState = await getGroupState()
    console.log("groupstate: ", + groupState.money)
    console.log("waterlevel:", + groupState.waterLevel)
    console.log("group name:", + groupState.groupName)
    console.log("env cost:", + groupState.environmentCost)
}
window.onload = logGroupState() && fillTables()



/*--------------------------LOG---------------------LOG--------------------------------------------*/

async function logPublicfunc(){
    var influx = await getWaterinflux()
    console.log("groupstate: ", + waterinflux)
}

async function logPublic() {
    var waterinflux = await logPublicfunc()
    console.log(influx)
}



/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

async function getGroupState() {
    var request = await fetch(`${API_URL}/GroupState`, {headers: getHeaders()})
    var groupState = request.json()
    return groupState
}

async function getWaterinflux() {
    var request = await fetch(`${API_URL}/waterinflux`)
    var influx = request.json()
    return influx
}

async function getPowerprice() {
    var request = await fetch(`${API_URL}/powerprice`)
    var powerprice = request.json()
    return powerprice
}



/*---------------------------TABLES-------------------------------------------*/


async function fillTables() {
    //group state
    var groupstate = await getGroupState()
    document.getElementById("waterlevel").innerHTML = groupstate.waterLevel;
    document.getElementById("envcost").innerHTML = groupstate.environmentCost

    //change powerprice
    var powerprice = await getPowerprice()
    var waterinflux = await getWaterinflux()
    document.getElementById("tablepowerprice").innerHTML = powerprice;
    document.getElementById("tablewaterinflux").innerHTML = waterinflux;
}