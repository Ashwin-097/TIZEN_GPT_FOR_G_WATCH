document.addEventListener("DOMContentLoaded", function() {

        var loginBtn = document.getElementById("loginBtn");

        var apiKey = document.getElementById("apiKey");

        var loginStatus = document.getElementById("loginStatus");

        var sendBtn = document.getElementById("send");

        var question = document.getElementById("question");

var DEV_MODE = true;
var DEV_PASSWORD = "admin";

        loginBtn.onclick = function() {

            var key = apiKey.value.trim();

            if (key === "") {
                loginStatus.style.color = "#ff4444";
                loginStatus.innerHTML = "Enter API Key";
                return;
            }

/* Development bypass */
if (DEV_MODE && key === DEV_PASSWORD) {

    saveApiKey("DEV_BYPASS");

    loginStatus.style.color = "#10A37F";
    loginStatus.innerHTML = "Developer Login";

    loginBtn.disabled = true;

    setTimeout(function () {

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("chatPage").style.display = "block";

        loginBtn.disabled = false;

    }, 2000);

    return;
}

            loginBtn.disabled = true;
            loginStatus.style.color = "#10A37F";
            loginStatus.innerHTML = "Validating...";

            validateApiKey(
                key,

                function() {

                    saveApiKey(key);

                    loginStatus.innerHTML = "Login Successful";

                    document.getElementById("loginPage")
                        .style.display = "none";
                    document.getElementById("chatPage")
                        .style.display = "block";

                    loginBtn.disabled = false;

                },

                function(status) {

                    loginBtn.disabled = false;

                    loginStatus.style.color = "#ff4444";

                    if (status == 401) {
                        loginStatus.innerHTML = "Invalid API Key";
                    } else if (status == 429) {
                        loginStatus.innerHTML = "Too Many Requests";
                    } else if (status == -1) {
                        loginStatus.innerHTML = "Network Error";
                    } else {
                        loginStatus.innerHTML = "Error : " + status;
                    }

                }

            );

        };

    }
);