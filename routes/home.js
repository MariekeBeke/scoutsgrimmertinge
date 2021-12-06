var express = require('express');
var router = express.Router();


var lid_controller = require('../controllers/lidController');
var leiding_controller = require('../controllers/leidingController');
var nieuwtjes_controller = require('../controllers/nieuwtjesController');



// Home
router.get('/', nieuwtjes_controller.nieuwtjes_list);

router.get('/home', nieuwtjes_controller.nieuwtjes_list);



// werking
router.get('/takkenwerking', (req, res, next) => {
    const data = {
        titel: "Takkenwerking",
        description: "Werking",
    }
    res.render('werking/takkenwerking', data)
})

router.get('/inschrijven', lid_controller.lid_create_get);

router.post('/inschrijven', lid_controller.lid_create_post);

router.get('/inschrijven_bevestiging', (req,res) => {
    const data = {
        titel: "Inschrijven",
        description: "Werking",
    }
    res.render('werking/inschrijven_bevestiging', data)
});

router.get('/uniform', (req, res, next) => {
    const data = {
        titel: "Uniform",
        description: "Werking",
    }
    res.render('werking/uniform', data)
})

router.get('/oudercomite', (req, res, next) => {
    const data = {
        titel: "Oudercomité",
        description: "Werking",
    }
    res.render('werking/oudercomite', data)
})








// programmaboekje

// programmaboekje kapoenen
router.get('/programma_kapoenen', (req, res, next) => {
    const data = {
        titel: "Programma kapoenen",
        description: "Programmaboekje",
    }
    res.render('programmaboekje/programma_kapoenen', data)
})

/*
btn.addEventListener("click", function () {
    renderPUG();
});

function renderPUG(data) {
    var html
    kapContainer.insertAdjacentHTML('beforeend', )
}

 */

// programmaboekje kabouters
router.get('/programma_kabouters', (req, res, next) => {
    const data = {
        titel: "Programma kabouters",
        description: "Programmaboekje",
    }
    res.render('programmaboekje/programma_kabouters', data)
})

// programmaboekje jonggidsen
router.get('/programma_jonggidsen', (req, res, next) => {
    const data = {
        titel: "Programma jonggidsen",
        description: "Programmaboekje",
    }
    res.render('programmaboekje/programma_jonggidsen', data)
})

// programmaboekje gidsen
router.get('/programma_gidsen', (req, res, next) => {
    const data = {
        titel: "Programma gidsen",
        description: "Programmaboekje",
    }
    res.render('programmaboekje/programma_gidsen', data)
})




// Verhuur
router.get('/verhuur', (req, res, next) => {
    const data = {
        titel: "Verhuur",
        description: "Onze geliefde lokalen",
    }
    res.render('verhuur/verhuur', data)
})






// Contact
router.get('/groepsleiding', leiding_controller.groepsleiding_list);

router.get('/kapoenenleiding', leiding_controller.kapoenenleiding_list);

router.get('/kabouterleiding', leiding_controller.kabouterleiding_list);

router.get('/jonggidsenleiding', leiding_controller.jonggidsenleiding_list);

router.get('/gidsenleiding', leiding_controller.gidsenleiding_list);


// Inloggen
/*
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});*/
// https://github.com/dcode-youtube/login-signup-form
// https://morioh.com/p/1fe39da28a65
// https://www.w3schools.com/howto/howto_css_login_form.asp

module.exports = router