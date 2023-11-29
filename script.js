const validate = () => {
    let mail = document.querySelector("#text");

    let regx = /^([a-zA-Z0-9\._]+)@([a-a-zA-z0-9])+.([a-z]+)(.[a-z]+)(.[a-z]+)?$/

    if(regx.text(mail)){
        alert(`you have provided a valid Email Adress`)
        return true;
    } else {
        alert(`Sorry! Incorrect Email ID`)
        return false;
    }
};

