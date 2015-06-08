iktProekt.service('roleService', function ($http, enums) {


    var adminRole = [enums.Roles.ROLE_ADMIN];
    var doctorRole = [enums.Roles.ROLE_DOCTOR];
    var patientRole = [enums.Roles.ROLE_PATIENT];

    return {

        getRoleforName: function (roleName) {
            switch (roleName) {
                case "ROLE_ADMIN":
                    return enums.Roles.ROLE_ADMIN;
                case "ROLE_DOCTOR":
                    return enums.Roles.ROLE_DOCTOR;
                case "ROLE_PATIENT":
                    return enums.Roles.ROLE_PATIENT;
            }

        },

        validateRoleAdmin: function (currentUser) {
            return currentUser.hasOwnProperty('role')  ? _.contains(adminRole, currentUser.role) : false;
        },

        validateRoleDoctor: function (currentUser) {
            return currentUser.hasOwnProperty('role')  ? _.contains(doctorRole, currentUser.role) : false;
        },

        validateRolePatient: function (currentUser) {
            console.log("sdfsdf : " + currentUser.role);
            return currentUser.hasOwnProperty('role')  ? _.contains(patientRole, currentUser.role) : false;
        }
    };
});