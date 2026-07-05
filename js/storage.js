/* storage.js */

function saveApiKey(key) {
    try {
        localStorage.setItem("OPENAI_API_KEY", key);
    } catch (e) {
        console.log(e);
    }
}

function getApiKey() {
    try {
        return localStorage.getItem("OPENAI_API_KEY");
    } catch (e) {
        return "";
    }
}

function clearApiKey() {
    try {
        localStorage.removeItem("OPENAI_API_KEY");
    } catch (e) {
    }
}