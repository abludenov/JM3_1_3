getAuthorizedUserInfo()

function getAuthorizedUserInfo() {
    fetch('http://localhost:8080/api/getAuthorizedUserInfo')
        .then(response => response.json())
        .then(user => {
            // Navbar
            document.getElementById('navUserUsername').innerHTML = user.username;
            let roles = ''
            user.roles.forEach(role => roles += role.nameRole + ' ')
            document.getElementById('navUserRoles').innerHTML = roles;
            // Work space
            if (roles.includes('ADMIN')) {
                let workSpace =
                    `<div class="row vh-100">

                        <!--Left-->
                        <div class="col-md-2 bg-white">
                            <ul id="tab_list" class="nav nav-pills flex-column mt-3">
                                <li class="nav-item">
                                    <a id="admin_tab" class="nav-item nav-link active" data-toggle="tab"
                                       href="#admin_panel">Admin</a>
                                </li>
                                <li class="nav-item">
                                    <a id="user_tab" class="nav-item nav-link" data-toggle="tab"
                                       href="#user_panel">User</a>
                                </li>
                            </ul>
                        </div>

                        <!--Right-->
                        <div class="tab-content col-md-10 bg-light">

                            <!--Admin panel-->
                            <div id="admin_panel" class="tab-pane fade show active">
                                <div class="h1 mt-3">Admin panel</div>
                            

                                <!--Navigate button-->
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a id="tableAllUsersButton" class="nav-link active" data-toggle="tab"
                                           href="#tableAllUsers">Users table</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#newUser">New user</a>
                                    </li>
                                </ul>

                                <!--Navigate block-->
                                <div class="tab-content">

                                    <!--Users table-->
                                    <div id="tableAllUsers" class="tab-pane fade show active">
                                        <div class="col-md bg-light border">
                                            <h4 class="mt-2 mb-3">All users</h4>
                                        </div>

                                        <div class="col-md bg-white border">
                                            <table id="tableAllUsers" class="table table-striped mt-4">
                                                <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Surname</th>
                                                    <th>Age</th>
                                                    <th>Email</th>
                                                    <th>Username</th>
                                                    <th>Role</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                                </thead>
                                                <tbody id="admin_info"/>
                                            </table>
                                        </div>
                                    </div>

                                    <!--New user-->
                                    <div id="newUser" class="tab-pane fade">
                                        <div class="col-md bg-light border">
                                            <h4 class=" mt-2 mb-3">Add new user</h4>
                                        </div>

                                        <div class="bg-white">
                                            <form id="newUserForm">
                                                <div class="container_fluid">
                                                    <div class="row justify-content-center">
                                                        <div class="col col-sm-5 text-center">
                                                            <br>
                                                                <label for="name"><b>Name</b></label>
                                                                <input type="text" class="form-control" id="name"/>
                                                                <br>

                                                                <label for="surname"><b>Surname</b></label>
                                                                <input type="text" class="form-control" id="surname"/>
                                                                <br>

                                                                <label for="age"><b>Age</b></label>
                                                                <input type="text" class="form-control" id="age"/>
                                                                <br>

                                                                <label for="email"><b>Email</b></label>
                                                                <input type="email" class="form-control" id="email"/>
                                                                <br>

                                                                <label for="username"><b>Username</b></label>
                                                                <input type="text" class="form-control" id="username"/>
                                                                <br>

                                                                <label for="password"><b>Password</b></label>
                                                                <input type="password" class="form-control" id="password"/>
                                                                <br>

                                                                <div class="form-group">
                                                                    <label><b>Select Role</b></label>
                                                                    <select multiple size="2" aria-multiselectable="true" class="form-control" id="role">
                                                                        <option value="ROLE_USER" selected>USER</option>
                                                                        <option value="ROLE_ADMIN">ADMIN</option>
                                                                    </select>
                                                                </div>
                                                                <br>

                                                                <p class="btn btn-outline-success bg-success text-white" onclick="addNewUser()">Add new user</p>
                                                                <br>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--User panel-->
                            <div id="user_panel" class="tab-pane fade">
                                <div class="h1 mt-3">User information page</div>
                                <div class="col-md bg-light border">
                                    <h4 class=" mt-2 mb-3">About user</h4>
                                </div>

                                <div class="col-md bg-white border">
                                    <table class="table table-striped mt-4">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Surname</th>
                                            <th>Age</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                        </tr>
                                        </thead>
                                        <tbody id="user_info"></tbody>
                                    </table>
                                </div>
                            </div>
                            
                        </div>
                    </div>`
                document.getElementById('workSpace').innerHTML = workSpace;
            } else {
                let workSpace =
                    `<div class="row vh-100">

                            <!--Left-->
                            <div class="col-md-2 bg-white">
                                <ul id="tab_list" class="nav nav pils flex-column mt-3">
                                    <li class="nav_item">
                                        <a id="user_tab" class="nav-item nav-link active" data-toggle="tab"
                                           href="#user_panel">User</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <!--Right-->
                            <div class="col-md-10 bg-light">

                                <!--User panel-->
                                <div id="user_panel" class="container-fluid">
                                    <div class="h1 mt-3">User information page</div>
                                    <div class="col-md bg-light border">
                                        <h4 class=" mt-2 mb-3">About user</h4>
                                    </div>

                                    <div class="col-md bg-white border">
                                        <table class="table table-striped mt-4">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Surname</th>
                                                <th>Age</th>
                                                <th>Email</th>
                                                <th>Role</th>
                                            </tr>
                                            </thead>
                                            <tbody id="user_info"></tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>
                        </div>`
                document.getElementById('workSpace').innerHTML = workSpace
            }

            //User info
            let tableUserInfo = document.getElementById('user_info')
            tableUserInfo.innerHTML = ''
            let row = tableUserInfo.insertRow()
            row.setAttribute('id', 'rowUserInfo')

            let userInfoId = row.insertCell()
            userInfoId.setAttribute('id', 'id')
            userInfoId.innerHTML = user.id

            let userInfoName = row.insertCell()
            userInfoName.setAttribute('id', 'name')
            userInfoName.innerHTML = user.name

            let UserInfoSurname = row.insertCell()
            UserInfoSurname.setAttribute('id', 'surname')
            UserInfoSurname.innerHTML = user.surname

            let UserInfoAge = row.insertCell()
            UserInfoAge.setAttribute('id', 'age')
            UserInfoAge.innerHTML = user.age

            let UserInfoEmail = row.insertCell()
            UserInfoEmail.setAttribute('id', 'email')
            UserInfoEmail.innerHTML = user.email

            let UserInfoRoles = row.insertCell()
            UserInfoRoles.setAttribute('id', 'roles')
            UserInfoRoles.innerHTML = roles

            //admin_info
            if (roles.includes('ADMIN')) {
                let tableBodyAdminInfo = document.getElementById('admin_info')
                tableBodyAdminInfo.innerHTML = ''

                fetch('http://localhost:8080/api/users')
                    .then(response => response.json())
                    .then(users => users.forEach(user => {
                            let row = tableBodyAdminInfo.insertRow()
                            row.setAttribute('id', 'row' + user.id)

                            let AdminInfoId = row.insertCell()
                            AdminInfoId.setAttribute('id', 'id')
                            AdminInfoId.innerHTML = user.id

                            let AdminInfoName = row.insertCell()
                            AdminInfoName.setAttribute('id', 'name')
                            AdminInfoName.innerHTML = user.name

                            let AdminInfoSurname = row.insertCell()
                            AdminInfoSurname.setAttribute('id', 'surname')
                            AdminInfoSurname.innerHTML = user.surname

                            let AdminInfoAge = row.insertCell()
                            AdminInfoAge.setAttribute('id', 'age')
                            AdminInfoAge.innerHTML = user.age

                            let AdminInfoEmail = row.insertCell()
                            AdminInfoEmail.setAttribute('id', 'email')
                            AdminInfoEmail.innerHTML = user.email

                            let AdminInfoUsername = row.insertCell()
                            AdminInfoUsername.setAttribute('id', 'username')
                            AdminInfoUsername.innerHTML = user.username

                            let AdminInfoRoles = row.insertCell()
                            AdminInfoRoles.setAttribute("id", "role");
                            let roles = ''
                            user.roles.forEach(role => roles += role.nameRole + ' ')
                            roles.trim()
                            AdminInfoRoles.innerHTML = roles

                            let AdminInfoEdit = row.insertCell(7)
                            AdminInfoEdit.innerHTML = `<button type="button" class="btn btn-outline-info bg-info text-white" onclick="getModalEdit(${user.id})">Edit</button>`

                            let AdminInfoDelete = row.insertCell(8)
                            AdminInfoDelete.innerHTML = `<button type="button" class="btn btn-outline-danger bg-danger text-white" onclick="getModalDelete(${user.id})">Delete</button>`
                        })
                    )
            }
        })
}







