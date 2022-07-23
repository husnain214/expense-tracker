const nameField = document.getElementById("name")
const typeField = document.getElementById("type")
const dateField = document.getElementById("date")
const amountField = document.getElementById("amount")
const form = document.getElementById("form")
const table = document.getElementById("table")

let users = []

form.addEventListener ("submit", (e) => {
    users.push ({
        name: nameField.value,
        type: typeField.value,
        date: dateField.value,
        amount: amountField.value
    })

    nameField.value = ""
    typeField.value = ""
    dateField.value = ""
    amountField.value = ""

    e.preventDefault ()
    
    renderRows ()
})

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
        let elId = parseInt(event.target.id)
        console.log (users)
        users.splice(elId, 1)

        renderRows()
    }
})

function renderRows () {
    let content = `<tr>
                        <th>Serial No.</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>`

    for (let i = 0; i < users.length; i++) {
        content += `<tr>
                        <td>${i + 1}</td>
                        <td>${users[i].name}</td>
                        <td>${users[i].date}</td>
                        <td>${users[i].type}</td>
                        <td>${users[i].amount}</td>
                        <td>
                            <button class = "deleteBtn" id = "${i}" type="button">
                                <img src="./icons/delete.svg" alt="delete button">
                            </button>
                        </td>
                    </tr>`
    }

    table.innerHTML = content
}