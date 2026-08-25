const form = document.getElementById("theform");

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let user = document.getElementById("uname");
        let mail = document.getElementById("email");
        let field = document.getElementById("field");
        let experience = document.getElementsByName("experience");
        let extrainfo = document.getElementById("extrainfo")

        for (let index = 0; index < experience.length; index++) {
            const element = experience[index];
            if (element.checked === true) {
                experience = element
            }
        }

        console.log(experience)

        const tiedot = [user.value, mail.value, field.value, experience.value, extrainfo.value]

        alert(`Kiitos lähettämisestä! \nTiedot: ${String(tiedot)}`);

    })
}