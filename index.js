// Button
document.getElementById("clear").onclick = clear

// Radio
Array.from(document.getElementsByName("mapping")).forEach(el => el.addEventListener("change", onMappingChange))

// Logs
const logs = document.getElementsByClassName('log')
document.addEventListener("keydown", event => appendToLog(logs[0], event))
document.addEventListener("keypress", event => appendToLog(logs[1], event))
document.addEventListener("keyup", event => appendToLog(logs[2], event))

function onMappingChange(event) {
    // eslint-disable-next-line no-undef
    keyboardSupportManager = event.target.value === "mapped"
}

function appendToLog(logElement, event) {
    logElement.innerHTML += `${logElement.innerHTML.length > 0 ? "<br />" : ""} event.keyCode=${event.keyCode} event.key=${event.key}, event.code=${event.code}`
}

function clear() {
    Array.from(document.getElementsByClassName("textfield")).forEach(el => el.value = "")
    Array.from(logs).forEach((element) => {
        element.innerHTML = element.innerHTML.split("event")[0]
    });
}
