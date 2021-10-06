function editUser(id) {
    let roles = window.updateUserRoles
    let arrayRoles = []
    let j = 0
    for (let i = 0; i < roles.length; i++) {
        if (roles.options[i].selected == true) {
            let ob = {nameRole: roles.options[i].value}
            arrayRoles[j++] = ob
        }
    }

    fetch('http://localhost:8080/api/users', {
        method: "PATCH",
        body: JSON.stringify({
            id: window.updateUserId.value,
            name: window.updateUserName.value,
            surname: window.updateUserSurname.value,
            age: window.updateUserAge.value,
            email: window.updateUserEmail.value,
            username: window.updateUserUsername.value,
            password: window.updateUserPassword.value,
            roles: arrayRoles
        }),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
    }).then(response => response.json()).then(status => {
        if (status === 'OK') {
            let valid_roles = ''
            arrayRoles.forEach(role => valid_roles += role.nameRole + ' ')

            //All Users
            $('#row' + id).replaceWith(`<tr id= ${"row" + id} >
                <td id="id">${id}</td>
                <td id="name">${window.updateUserName.value}</td>
                <td id="surname">${window.updateUserSurname.value}</td>
                <td id="age">${window.updateUserAge.value}</td>
                <td id="email">${window.updateUserEmail.value}</td>
                <td id="username">${window.updateUserUsername.value}</td>
                <td id="role">${valid_roles}</td>
                <td><button type="button" class="btn btn-outline-info bg-info text-white" onclick="getModalEdit(${id})">Edit</button></td>
                <td><button type="button" class="btn btn-outline-danger bg-danger text-white" onclick="getModalDelete(${id})">Delete</button></td>
                </tr>`)

            //User
            if (document.getElementById('rowUserInfo').children.namedItem('id').innerHTML === id) {
                if (!valid_roles.includes('ADMIN')) {
                    window.location.reload()
                }
            } else {
                $('#rowUserInfo').replaceWith(`<tr id= "rowUserInfo" >
                <td id="id">${id}</td>
                <td id="name">${window.updateUserName.value}</td>
                <td id="surname">${window.updateUserSurname.value}</td>
                <td id="age">${window.updateUserAge.value}</td>
                <td id="email">${window.updateUserEmail.value}</td>
                <td id="role">${valid_roles}</td>
                </tr>`)
                document.getElementById('navUserUsername').innerHTML = window.updateUserUsername.value
                document.getElementById('navUserRoles').innerHTML = valid_roles
            }
        }
    })
}