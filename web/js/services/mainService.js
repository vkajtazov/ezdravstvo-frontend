/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.service('mainService', function($http){

    var service = {};


    service.getAllDoctors = function()
    {

        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors'
        });

   }
    service.getAllPatients = function()
    {

        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients'
        });

    }
    service.getAllHospitals = function()
    {

        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/hospitals'
        });

    }

    service.getDoctorById = function(doctorId)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors/'+doctorId
        });
    }
    service.getPacientById = function(pacientId)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients/'+pacientId
        });
    }


    service.getHospitalById = function(hospitalId)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/hospitals/'+hospitalId
        });
    }



        service.getAllHospitals = function()
        {

            return $http({

                method: "GET",
                url: 'https://ezdravstvo.herokuapp.com/rest/hospitals'
            });

        }



    service.getAllSpecializations = function()
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/specializations'
        });

    }

    service.addPatient = function(patient)
    {
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients',
            data: patient
        });

    }

    service.addDoctor= function(doctor)
    {
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors',
            data: doctor
        });

    }

    service.addHospital =function(hospital)
    {
        console.log("Hospital", hospital);
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/hospitals',
            data: hospital
        });
    }


    service.deleteDoctor = function(doctorId)
    {

        return $http({
            method: "DELETE",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors/'+doctorId

        });
    }

    service.deletePacient = function(pacientId)
    {

        return $http({
            method: "DELETE",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients/'+pacientId

        });
    }

    service.deleteHospital = function(hospitalId)
    {
        return $http({
            method: "DELETE",
            url: 'https://ezdravstvo.herokuapp.com/rest/hospitals/'+hospitalId

        });
    }

    return service;




});