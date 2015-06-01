/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.service('adminService', function($http){

    var admin = {};


    admin.getAllDoctors = function()
    {

        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors'
        });

   }

    admin.getAllPatients = function()
    {

        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients'
        });

    }


        admin.getAllHospitals = function()
        {

            return $http({

                method: "GET",
                url: 'https://ezdravstvo.herokuapp.com/rest/hospitals'
            });

        }



    admin.getAllSpecializations = function()
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/specializations'
        });

    }


    return admin;




});