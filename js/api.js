function validateApiKey(apiKey, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://api.openai.com/v1/responses", true);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + apiKey);

    xhr.onreadystatechange = function () {

        if (xhr.readyState !== 4)
            return;

        console.log(xhr.status);
        console.log(xhr.responseText);

        if (xhr.status === 200) {
            success();
        } else {
            failure(xhr.status);
        }
    };

    xhr.onerror = function () {
        failure(-1);
    };

    xhr.send(JSON.stringify({
        model: "gpt-4.1-mini",
        input: "Reply with OK"
    }));
}