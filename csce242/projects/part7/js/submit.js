document.getElementById('submission-form').onsubmit = (event) => {
    event.preventDefault();
    
    const result = document.getElementById('submission-result');
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "WAIT";
    result.style.visibility = "visible";

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "It worked :)";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            document.getElementById('submission-form').reset();
            setTimeout(() => {
                result.style.visibility = "hidden";
            }, 3000);
        });
};