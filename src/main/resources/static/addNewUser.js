function addNewUser() {
    let roles = window.newUserForm.role;
    let arrayRoles = []
    let j = 0;
    for (let i = 0; i < roles.length; i++) {
        if (roles.options[i].selected === true) {
            let ob = {nameRole: roles.options[i].value}
            arrayRoles[j++] = ob
        }
    }

    fetch('http://localhost:8080/api/users', {
        method: 'POST',
        body: JSON.stringify({
            name: window.newUserForm.name.value,
            surname: window.newUserForm.surname.value,
            age: window.newUserForm.age.value,
            email: window.newUserForm.email.value,
            username: window.newUserForm.username.value,
            password: window.newUserForm.password.value,
            roles: arrayRoles
        }),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    })
        .then(responce => responce.json())
        .then(user => {
            let roles = ''
            user.roles.forEach(role => roles += role.nameRole + ' ')
            roles.trim()
            $('#tableAllUsers tr:last').after(`<tr id = ${"row" + user.id}>
                <td id="id">${user.id}</td>
                <td id="name">${user.name}</td>
                <td id="surname">${user.surname}</td>
                <td id="age">${user.age}</td>
                <td id="email">${user.email}</td>
                <td id="username">${user.username}</td>
                <td id="role">${roles}</td>
                <td><button type="button" class="btn btn-info" onclick="getModalEdit(${user.id})">Edit</button></td>
                <td><button type="button" class="btn btn-danger" onclick="getModalDelete(${user.id})">Delete</button></td>
                </tr>`)

            window.newUserForm.name.value = ''
            window.newUserForm.surname.value = ''
            window.newUserForm.age.value = ''
            window.newUserForm.email.value = ''
            window.newUserForm.username.value = ''
            window.newUserForm.password.value = ''
            document.getElementById('tableAllUsersButton').click()
        }).catch(function (err) {
        alert('Warning')
    })

}