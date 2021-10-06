function getModalDelete(id) {
    let user = document.getElementById('row' + id).children
    let roles = user.namedItem('role').innerHTML
    let valid_roles = ''
    let valid_size = 0

    if (roles.includes('ADMIN')) {
        valid_roles += '<option>ADMIN</option>'
        valid_size++
    }

    if (roles.includes('USER')) {
        valid_roles += '<option>USER</option>'
        valid_size++
    }

    let modal = document.getElementById('modalWindow')
    modal.innerHTML =
        `<div class="modal fade" id="modalDelete" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" xmlns="http://www.w3.org/1999/html">
            <div class="modal-dialog">
                <div class="modal-content ">
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
                                
                                    <label for="removableId"><b>ID</b></label>
                                    <input name="id" type="text" class="form-control" id="removableId" value="${user.namedItem("id").innerHTML}" readonly="true"/>
                                    <br>
                                    
                                    <label for="removableName"><b>Name</b></label>
                                    <input name="name" type="text" class="form-control" id="removableName" value="${user.namedItem("name").innerHTML}" disabled/>
                                    <br>
                                    
                                    <label for="removableSurname"><b>Surname</b></label>
                                    <input name="surname" type="text" class="form-control" id="removableSurname" value="${user.namedItem("surname").innerHTML}" disabled/>
                                    <br>
                                    
                                    <label for="removableAge"><b>Age</b></label>
                                    <input name="age" type="text" class="form-control" id="removableAge" value="${user.namedItem("age").innerHTML}" disabled/>
                                    <br>
                                    
                                    <label for="removableEmail"><b>Email</b></label>
                                    <input name="email" type="text" class="form-control" id="removableEmail" value="${user.namedItem("email").innerHTML}" disabled/>
                                    <br>
                                    
                                    <label for="removableRole" class="font-weight-bold">Role</label>
                                    <select class="form-control" multiple size="${valid_size}" id="removableRole" disabled>
                                        ${valid_roles}
                                    </select>
                                    <br>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-danger" data-dismiss="modal" onclick="deleteUser(${id})">Delete</button>
                    </div>
                </div>`
    $("#modalDelete").modal();
}