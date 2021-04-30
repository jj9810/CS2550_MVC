
function onPageLoad() {
    document.getElementById("createBtn").onclick = onCreateBtnClicked;
    document.getElementById("cancelBtn").onclick = onCancelBtnClicked;
    document.getElementById("newBtn").onclick = onNewBtnClicked;
    document.getElementById("rerollBtn").onclick = reRoll;

    let items = modelGetAllCharacters();
    for (let i = 0; i < items.length; i++){
        addTableItem(items[i]);
    }

    clearInputForm();
}

function createTables() {
    
    let inputTable  = document.createElement("table");
    inputTable.id = "inputTable";

    let trName = document.createElement("tr");
    
    let tdNameText = document.createElement("td");
    tdNameText.innerText = "Character Name:";
    trName.appendChild(tdNameText);
    let tdNameInput = document.createElement("td");
    let tdNameInputContent = document.createElement("input");
    tdNameInputContent.type = "text";
    tdNameInputContent.name = "characterNameEdit";
    tdNameInputContent.id = "characterNameEdit";
    tdNameInput.appendChild(tdNameInputContent);
    trName.appendChild(tdNameInput);
    let tdNameError = document.createElement("td");
    tdNameError.id = "characterNameError";
    tdNameError.innerHTML = "&nbsp;";
    tdNameError.className = "error";
    trName.append(tdNameError);

    inputTable.appendChild(trName);

    for (let stat of stats){
        let trStat = document.createElement("tr");
    
        let tdStatText = document.createElement("td");
        tdStatText.innerText = stat + ':';
        trStat.appendChild(tdStatText);

        let tdStatInput = document.createElement("td");
        let tdStatInputContent = document.createElement("input");
        tdStatInputContent.type = "text";
        tdStatInputContent.className = "stat";
        tdStatInputContent.name = "stat" + stat + "Edit";
        tdStatInputContent.id = "stat" + stat + "Edit";
        tdStatInput.appendChild(tdStatInputContent);
        trStat.appendChild(tdStatInput);

        let tdStatError = document.createElement("td");
        tdStatError.id = "stat" + stat + "Error";
        tdStatError.innerHTML = "&nbsp;";
        tdStatError.className = "error";
        trStat.append(tdStatError);

        inputTable.appendChild(trStat);
    }

    let trReRoll = document.createElement("tr");
    let tdReRollLeft = document.createElement("td");
    trReRoll.appendChild(tdReRollLeft);
    let tdReRollCenter = document.createElement("td");
    trReRoll.appendChild(tdReRollCenter);
    let tdReRollRight = document.createElement("td");
    let buttonReRoll = document.createElement("button");
    buttonReRoll.type = "button";
    buttonReRoll.id = "rerollBtn";
    buttonReRoll.innerText = "Re-roll!";
    tdReRollRight.appendChild(buttonReRoll);
    trReRoll.appendChild(tdReRollRight);
    inputTable.appendChild(trReRoll);

    let trRace = document.createElement("tr");
    let tdRaceText = document.createElement("td");
    tdRaceText.innerText = "Race:";
    trRace.appendChild(tdRaceText);
    let tdRaceChoose = document.createElement("td");
    let selectRaceChoose = document.createElement("select");
    for (let race of races){
        let optionRace = document.createElement("option");
        optionRace.value = race;
        optionRace.innerText = race;
        selectRaceChoose.appendChild(optionRace);
    }
    selectRaceChoose.id = "selectRaceChoose";
    tdRaceChoose.appendChild(selectRaceChoose);
    trRace.appendChild(tdRaceChoose);
    let tdRaceError = document.createElement("td");
    tdRaceError.id = "raceError";
    tdRaceError.className = "error";
    trRace.appendChild(tdRaceError);
    inputTable.appendChild(trRace);

    let trClass = document.createElement("tr");
    let tdClassText = document.createElement("td");
    tdClassText.innerText = "Class:";
    trClass.appendChild(tdClassText);
    let tdClassChoose = document.createElement("td");
    let selectClassChoose = document.createElement("select");
    for (let classs of classes){
        let optionClass = document.createElement("option");
        optionClass.value = classs;
        optionClass.innerText = classs;
        selectClassChoose.appendChild(optionClass);
    }
    selectClassChoose.id = "selectClassChoose";
    tdClassChoose.appendChild(selectClassChoose);
    trClass.appendChild(tdClassChoose);
    let tdClassError = document.createElement("td");
    tdClassError.id = "classError";
    tdClassError.className = "error";
    trClass.appendChild(tdClassError);
    inputTable.appendChild(trClass);

    let trGender = document.createElement("tr");
    let tdGenderText = document.createElement("td");
    tdGenderText.innerText = "Gender:";
    trGender.appendChild(tdGenderText);
    let tdGenderChoose = document.createElement("td");
    let labelMale = document.createElement("label");
    let inputMale = document.createElement("input");
    inputMale.type = "radio";
    inputMale.name = "gender";
    inputMale.value = "male";
    inputMale.id = "genderMale";
    labelMale.appendChild(inputMale);
    labelMale.innerHTML += "Male";
    tdGenderChoose.appendChild(labelMale);
    let labelFemale = document.createElement("label");
    let inputFemale = document.createElement("input");
    inputFemale.type = "radio";
    inputFemale.name = "gender";
    inputFemale.value = "female";
    inputFemale.id = "genderFemale";
    labelFemale.appendChild(inputFemale);
    labelFemale.innerHTML += "Female";
    tdGenderChoose.appendChild(labelFemale);
    trGender.appendChild(tdGenderChoose);
    let tdGenderError = document.createElement("td");
    tdGenderError.id = "genderError";
    tdGenderError.className = "error";
    trGender.appendChild(tdGenderError);
    inputTable.appendChild(trGender);
    
    let trRightHanded = document.createElement("tr");
    let tdRightHandedText = document.createElement("td");
    tdRightHandedText.innerText = "Are you right-handed?";
    trRightHanded.appendChild(tdRightHandedText);
    let tdRightHandedChoose = document.createElement("td");
    let rightHandedInput = document.createElement("input");
    rightHandedInput.type = "checkbox";
    rightHandedInput.name = "isRightHanded";
    rightHandedInput.id = "isRightHanded";
    let rightHandedLabel = document.createElement("label");
    rightHandedLabel.appendChild(rightHandedInput);
    tdRightHandedChoose.appendChild(rightHandedLabel);
    trRightHanded.appendChild(tdRightHandedChoose);
    trRightHanded.appendChild(document.createElement("td"));
    inputTable.appendChild(trRightHanded);

    let trSubmit = document.createElement("tr");
    let tdCreate = document.createElement("td");
    let buttonCreate = document.createElement("button");
    buttonCreate.type = "button";
    buttonCreate.id = "createBtn";
    buttonCreate.innerText = "Create";
    tdCreate.appendChild(buttonCreate);
    let buttonUpdate = document.createElement("button");
    buttonUpdate.type = "button";
    buttonUpdate.id = "updateBtn";
    buttonUpdate.innerText = "Update";
    tdCreate.appendChild(buttonUpdate);
    trSubmit.appendChild(tdCreate);
    trSubmit.appendChild(document.createElement("td"));
    let tdCancel = document.createElement("td");
    let buttonCancel = document.createElement("button");
    buttonCancel.type = "button";
    buttonCancel.id = "cancelBtn";
    buttonCancel.innerText = "Cancel";
    tdCancel.appendChild(buttonCancel);
    trSubmit.appendChild(tdCancel);
    inputTable.appendChild(trSubmit);

    document.forms["editForm"].appendChild(inputTable);

    let characterTable = document.createElement("table");
    characterTable.id = "characterTable";
    let trHead = document.createElement("tr");
    let thName = document.createElement("th");
    thName.innerText = "Name";
    trHead.appendChild(thName);
    let thRace = document.createElement("th");
    thRace.innerText = "Race";
    trHead.appendChild(thRace);
    let thClass = document.createElement("th");
    thClass.innerText = "Class";
    trHead.appendChild(thClass);
    let thGender = document.createElement("th");
    thGender.innerText = "Gender";
    trHead.appendChild(thGender);
    let thEdit = document.createElement("th");
    thEdit.innerText = "Edit";
    trHead.appendChild(thEdit);
    let thDelete = document.createElement("th");
    thDelete.innerText = "Delete";
    trHead.appendChild(thDelete);
    characterTable.appendChild(trHead);
    document.forms["listForm"].appendChild(characterTable);
}

function onCreateBtnClicked() {
    if (!validateControls()) { 
        return;
    }

    let form = document.forms["editForm"];
    let newCharacter = modelCreateCharacter(
        form.characterNameEdit.value,
        getStats(),
        form.selectRaceChoose.value,
        form.selectClassChoose.value,
        form.genderMale.checked,
        form.isRightHanded.checked,
    );

    console.log(newCharacter);

    addTableItem(newCharacter);

    clearInputForm();
}

function onUpdateBtnClicked(id){
    if (!validateControls()) { 
        return;
    }
    let form = document.forms["editForm"];

    let character = modelUpdateCharacter(
        id,
        form.characterNameEdit.value,
        getStats(),
        form.selectRaceChoose.value,
        form.selectClassChoose.value,
        form.genderMale.checked,
        form.isRightHanded.checked,
    );

    if(!character) {
        alert("Unable to update Character ID = " + id);
        return;
    }

    let tr = document.getElementById("row" + id);
    tr.childNodes[0].innerText = character.name;
    tr.childNodes[1].innerText = character.race;
    tr.childNodes[2].innerText = character.classs;
    tr.childNodes[3].innerText = character.gender ? "Male" : "Female";

    clearInputForm();
}

function onDeleteBtnClicked(id){
    let character = modelGetCharacter(id);
    if (!character) {
        alert("Unable to find character ID = " + id);
        return;
    }

    if (!confirm("Are you sure want to delete " + character.name + "?")){
        return;
    }

    modelDeleteCharacter(id);

    let tr = document.getElementById("row" + id);
    tr.remove();
}

function reRoll(){
    for (let stat of stats){
        let element = document.getElementById("stat" + stat + "Edit");
        element.value = (Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)).toString();
    }
}

function getStats(){
    let statList = [];
    for(let stat of stats){
        let element = document.getElementById("stat" + stat + "Edit");
        statList.push(parseInt(element.value));
    }
    return statList;
}

function onNewBtnClicked() { 
    document.getElementById("formTitle").innerText = "Create New Character";

    document.getElementById("characterEditArea").style.display = "block";
    document.getElementById("characterListArea").style.display = "none";
    document.getElementById("createBtn").style.display = "block";
    document.getElementById("updateBtn").style.display = "none";

    reRoll();
}

function onCancelBtnClicked() {
    clearInputForm();
    //document.getElementById("characterEditArea").style.display = "block";
    //document.getElementById("characterListArea").style.display = "none";
}

function onEditBtnClicked(id) {
    let character = modelGetCharacter(id);
    if (!character) { 
        alert("Unable to find character ID = " + id);
    }

    document.getElementById("formTitle").innerText = "Edit Character";

    let form = document.forms["editForm"];

    form.characterNameEdit.value = character.name;
    form.statStrengthEdit.value = character.stats[0];
    form.statDexterityEdit.value = character.stats[1];
    form.statConstitutionEdit.value = character.stats[2];
    form.statIntelligenceEdit.value = character.stats[3];
    form.statWisdomEdit.value = character.stats[4];
    form.statCharismaEdit.value = character.stats[5];
    
    for (let race in form.selectRaceChoose.options) {
        let option = form.selectRaceChoose.options[race];
        if(option.value === character.race){
            option.selected = true;
        }
    }

    for (let classs in form.selectClassChoose.options) {
        let option = form.selectClassChoose.options[classs];
        if(option.value === character.classs){
            option.selected = true;
        }
    }

    if (character.gender) {
        form.gender[0].checked = true;
    } else {
        form.gender[1].checked = true;
    }

    form.isRightHanded.checked = character.rightHanded;

    document.getElementById("characterEditArea").style.display = "block";
    document.getElementById("characterListArea").style.display = "none";
    document.getElementById("createBtn").style.display = "none";

    let updateBtn = document.getElementById("updateBtn");
    updateBtn.style.display = "block";

    updateBtn.onclick = function() {
        onUpdateBtnClicked(character.id);
    }
}

function addTableItem(character){
    let table = document.getElementById("characterTable");

    let row = table.insertRow(table.rows.length);
    row.id = 'row' + character.id;

    let cell = row.insertCell(0);
    cell.innerText = character.name;

    cell = row.insertCell(1);
    cell.innerText = character.race;

    cell = row.insertCell(2);
    cell.innerText = character.classs;

    cell = row.insertCell(3);
    cell.innerText = character.gender ? "Male" : "Female";

    let editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.innerText = "Edit";
    editBtn.id = "btnEdit" + character.id;
    editBtn.onclick = function () {
        onEditBtnClicked(character.id);
    }
    cell = row.insertCell(4);
    cell.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.innerText = "Delete";
    deleteBtn.id = "btnDelete" + character.id;
    deleteBtn.onclick = function () {
        onDeleteBtnClicked(character.id);
    }
    cell = row.insertCell(5);
    cell.appendChild(deleteBtn);
}

function validateControls() { 
    let form = document.forms["editForm"];
    let isValidated = true;

    if (form.characterNameEdit.value === "") {
        document.getElementById("characterNameError").innerText = "Character name is required.";
        isValidated = false;
    }
    else{
        document.getElementById("characterNameError").innerText = "";
    }
    
    for (let stat of stats){
        if (document.getElementById("stat" + stat + "Edit").value === "") {
            document.getElementById("stat" + stat + "Error").innerText = stat + " is required.";
            isValidated = false;
        } else if (isNaN(parseInt(document.getElementById("stat" + stat + "Edit").value))){
            document.getElementById("stat" + stat + "Error").innerText = stat + " must be an integer.";
            isValidated = false;
        } else if (parseInt(document.getElementById("stat" + stat + "Edit").value) < 3 || parseInt(document.getElementById("stat" + stat + "Edit").value) > 18){
            document.getElementById("stat" + stat + "Error").innerText = stat + " must be a 3d6 roll number.";
            isValidated = false;
        }
        else{
            document.getElementById("stat" + stat + "Error").innerText = "";
        }
    }

    if(form.selectRaceChoose.selectedIndex === -1){
        document.getElementById("raceError").innerText = "Race is required.";
        isValidated = false;
    }
    else{
        document.getElementById("raceError").innerText = "";
    }

    if(form.selectClassChoose.selectedIndex === -1){
        document.getElementById("classError").innerText = "Class is required.";
        isValidated = false;
    }
    else{
        document.getElementById("classError").innerText = "";
    }


    if (!form.genderMale.checked && !form.genderFemale.checked){
        document.getElementById("genderError").innerText = "Gender not given.";
        isValidated = false;
    }
    else{
        document.getElementById("genderError").innerText = "";
    }

    return isValidated;
}

function clearInputForm() {
    document.getElementById("characterEditArea").style.display = "none";
    document.getElementById("characterListArea").style.display = "block";

    let form = document.forms["editForm"];

    form.characterNameEdit.value = "";
    document.getElementById("characterNameError").innerText = "";

    for(let stat of stats){
        document.getElementById("stat" + stat + "Edit").value = "";
        document.getElementById("stat" + stat + "Error").innerText = "";
    }

    form.selectRaceChoose.selectedIndex = -1;
    document.getElementById("raceError").innerText = "";

    form.selectClassChoose.selectedIndex = -1;
    document.getElementById("classError").innerText = "";

    form.genderMale.checked = false;
    form.genderFemale.checked = false;
    document.getElementById("genderError").innerText = "";

    form.isRightHanded.checked = false;

}