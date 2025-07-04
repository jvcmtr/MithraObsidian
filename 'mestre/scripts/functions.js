
// EXPOSING FUNCTIONS ______________________________________________________________________________
window.getData = getData;
window.setData = setData;
window.test = TEST;

window.updateProp = updateProp;

window.createBtn = function(dv, title, callback){
    let btn = dv.el("button", title, { cls: "my-column-small" });
    btn.onclick = () => {
        callback()
    };
    console.log(this.app)
    return btn;
}



// CONSTANTS ______________________________________________________________________________
const DATAHOLDER_SUFIX = "-dataHolder"




// EXPOSED FUNCTIONS ______________________________________________________________________________
function getData(dataId, requester = null, doc = document) {
    
    let div = getDataHolder(requester, doc)
    const dataString = div.getAttribute("data");

    if (!dataString) {
        console.error("No 'data' attribute found on the div");
        return null;
    }

    try {
        const dataObj = JSON.parse(dataString);
        return dataObj[dataId];
    } catch (e) {
        console.error("Failed to parse JSON data:", e);
        return null;
    }
}

function setData(requester = null, dataId, value, doc = document) {
    
    let div = getDataHolder(requester, doc)

    // Parse existing data or initialize as empty object
    let dataObj = {};
    const existingData = div.getAttribute("data");
    if (existingData) {
        try {
            dataObj = JSON.parse(existingData);
        } catch (e) {
            console.error("Failed to parse existing JSON data:", e);
        }
    }

    // Set the new value
    dataObj[dataId] = value;

    // Update the div's data attribute
    div.setAttribute("data", JSON.stringify(dataObj));
}

function TEST() {
    console.log("\n======================================================")
    console.log("\tTEST SUCCEDED")
    console.log("\n======================================================")

    return "TEST SUCCESS";
}



// INTERNAL FUNCTIONS ______________________________________________________________________________
function getRequesterFile(){
    return app.workspace.getActiveFile().path;
}

function getMetaEdit(){
    return app.plugins.plugins["metaedit"].api;
}

function updateProp(prop, value, filepath = null){
    getMetaEdit().update(prop, value, filepath || getRequesterFile());
}

function getProp(prop, filepath = null){
    getMetaEdit().getPropertyValue(prop, value, filepath || getRequesterFile());
}

// dataholder should be a div like this:
//  <div id="PATH/TO/FILE-dataHolder" style="display:none;" data='{json string}'></div>
// where PATH/TO/FILE is the path to the file that generated this data 
function getDataHolder(requester = null,  doc = document){
    const id = requester?  
    getRequesterFile() + DATAHOLDER_SUFIX 
    : requester + DATAHOLDER_SUFIX ;
    
    let div = doc.getElementById(id);
    
    // Create the div if it doesn't exist
    if (!div) {
        div = doc.createElement("div");
        div.id = id;
        div.style.display = "none";
        div.setAttribute("data", "{}"); // Default to empty data
        doc.body.appendChild(div);
        console.warn(`Created missing data holder div with id '${id}'`);
    }
    
    return div;
}