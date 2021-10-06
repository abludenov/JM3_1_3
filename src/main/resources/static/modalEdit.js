function getModalEdit(id) {
    let user = document.getElementById('row' + id).children
    let roles = user.namedItem('role').innerHTML
    let valid_roles = ''

    if (roles.includes('ADMIN')) {
        valid_roles += '<option value=\"ROLE_ADMIN\" selected>ADMIN</option>'
    } else {
        valid_roles += '<option value=\"ROLE_ADMIN\">ADMIN</option>'
    }

    if (roles.includes('USER')) {
        valid_roles += '<option value=\"ROLE_USER\" selected>USER</option>'
    } else {
        valid_roles += '<option value=\"ROLE_USER\">USER</option>'
    }

    let modal = document.getElementById("modalWindow");
    modal.innerHTML =
        `<div class="modal fade" id="modalEdit" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Delete user</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container_fluid">
                            <div class="row justify-content-center">
                                <div class="col col-sm-6 text-center">

                                    <label for="updateUserId" class="font-weight-bold">ID</label>
                                    <input type="text" name="id" value="${user.namedItem("id").innerHTML}" class="form-control" id="updateUserId" disabled>
                                    <br>

                                    <label for="updateUserName" class="font-weight-bold">Name</label>
                                    <input type="text" name="name" value="${user.namedItem("name").innerHTML}" class="form-control" id="updateUserName">
                                    <br>

                                    <label for="updateUserSurname" class="font-weight-bold">Surname</label>
                                    <input type="text" name="surname" value="${user.namedItem("surname").innerHTML}" class="form-control" id="updateUserSurname">
                                    <br>

                                    <label for="updateUserAge" class="font-weight-bold">Age</label>
                                    <input type="text" name="age" value="${user.namedItem("age").innerHTML}" class="form-control" id="updateUserAge">
                                    <br>

                                    <label for="updateUserEmail" class="font-weight-bold">Email</label>
                                    <input type="text" name="email" value="${user.namedItem("email").innerHTML}" class="form-control" id="updateUserEmail">
                                    <br>

                                    <label for="updateUserUsername" class="font-weight-bold">Username</label>
                                    <input type="text" name="username" value="${user.namedItem("username").innerHTML}" class="form-control" id="updateUserUsername">
                                    <br>

                                    <label for="updateUserPassword" class="font-weight-bold">Password</label>
                                    <input type="text" name="password" class="form-control" id="updateUserPassword">
                                    <br>

                                    <label class="font-weight-bold">Role</label>
                                    <select multiple size="2" aria-multiselectable="true" class="form-control" name="role" id="updateUserRoles">
                                        ${valid_roles}
                                    </select>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-outline-info bg-info text-white" data-dismiss="modal" onclick="editUser(${id})">Update</button>
                    </div>
                </div>
            </div>
        </div>`;
    $("#modalEdit").modal();
}

