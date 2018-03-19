function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return String(password).length >= 6;
}

function validatePasswordMatch(password, passwordConfirm) {
    return password === passwordConfirm;
}


function validateUsername(username) {
    return String(username).length >= 6;
}


module.exports = {validateEmail, validatePassword, validateUsername, validatePasswordMatch};