/**
 * Created by Bojana on 5/25/2015.
 */
iktProekt.service('mainService', function($http, $cookies){

    var service = {};
    var userToken = $cookies['usertoken'];

    service.getAllDoctors = function()
    {

        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors',
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });

   }
    service.getAllPatients = function()
    {

        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients',
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });

    }
    service.getAllHospitals = function()
    {

        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/hospitals',
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });

    }

    service.getDoctorById = function(doctorId)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors/'+doctorId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }
    service.getPacientById = function(pacientId)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients/'+pacientId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }


    service.getHospitalById = function(hospitalId)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/hospitals/'+hospitalId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }
    service.getMedicationById = function(medicationId)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/medications/'+medicationId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }

    service.getSpecializationById = function(specializationId)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/specializations/'+specializationId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }


        service.getAllHospitals = function()
        {

            return $http({

                method: "GET",
                url: 'https://ezdravstvo.herokuapp.com/rest/hospitals',
                headers : {'Content-Type': 'application/json; charset=UTF-8',
                    'X-Auth-Token' : userToken
                }
            });

        }



    service.getAllSpecializations = function()
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/specializations',
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });

    }
    service.getAllMedications = function()
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/medications',
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });

    }


    service.addPatient = function(patient)
    {
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients',
            data: patient,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });

    }


    service.addPrescription = function(prescription)
    {
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/prescriptions',
            data: prescription,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }

    service.changeDoctor = function(data)
    {
     console.log("Change Doctor request POST " );
        console.log(data);
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/requests',
            data: data,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });

    }

    service.addDoctor= function(doctor)
    {
        console.log(doctor);
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors',
            data: doctor,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });

    }
    service.updateDoctor = function(doctor)
    {
        console.log(doctor);
        console.log(userToken);
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors',
            data: doctor,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }


    service.addHospital =function(hospital)
    {
        console.log("Hospital", hospital);
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/hospitals',
            data: hospital,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }
    service.addMedication = function(medication)
    {
        console.log("medications", medication);
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/medications',
            data: medication,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }


    service.addSpecialization = function(specialization)
    {
        console.log("medications", specialization);
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/specializations',
            data: specialization,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }
        });
    }

    service.deleteSpecialization = function(specializationId)
    {

        return $http({
            method: "DELETE",
            url: 'https://ezdravstvo.herokuapp.com/rest/specializations/'+specializationId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }

        });
    }

    service.deleteDoctor = function(doctorId)
    {

        return $http({
            method: "DELETE",
            url: 'https://ezdravstvo.herokuapp.com/rest/doctors/'+doctorId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }

        });
    }

    service.deletePacient = function(pacientId)
    {

        return $http({
            method: "DELETE",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients/'+pacientId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }

        });
    }

    service.deleteHospital = function(hospitalId)
    {
        return $http({
            method: "DELETE",
            url: 'https://ezdravstvo.herokuapp.com/rest/hospitals/'+hospitalId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }

        });
    }

    service.deleteMedication = function(medicationId)
    {
        return $http({
            method: "DELETE",
            url: 'https://ezdravstvo.herokuapp.com/rest/medications/'+medicationId,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }

        });
    }

   service.getAllRequests = function()
   {
       return $http({
           method: "GET",
           url: 'https://ezdravstvo.herokuapp.com/rest/requests',
           headers : {'Content-Type': 'application/json; charset=UTF-8',
               'X-Auth-Token' : userToken
           }

       });
   }

    service.postRequest = function(data)
    {
        console.log('POST take request for doctor change');
        console.log(data);
        return $http({
            method: "POST",
            url: 'https://ezdravstvo.herokuapp.com/rest/requests',
            data: data,
            headers : {'Content-Type': 'application/json; charset=UTF-8',
                'X-Auth-Token' : userToken
            }

        });
    }

    service.getAllPacientsForDoctor = function (doctorId) {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/patients/byDoctor',
            headers: {
                'X-Auth-Token': userToken
            }
        });
    }



    service.getAllAppointmentsForDoctor = function(doctorId)
    {

        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/bookings/byDoctor',
            headers: {
                'X-Auth-Token': userToken
            }
        });
    }

    service.getAllPerscriptionsForDiagnose  = function(diagnosisId)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/prescriptions/byDiagnose/'+diagnosisId,
            headers: {
                'X-Auth-Token': userToken
            }
        });
    }

    service.getAllPacientRefferals = function(pacient)
    {
        return $http({

            method: "GET",
            url: 'https://ezdravstvo.herokuapp.com/rest/diagnoses/byPatient',
            headers: {
                'X-Auth-Token': userToken
            }
        });
    }

    service.getAllPrescriptionsForDiagnosis = function(diagnosis)
    {

            return $http({

                method: "GET",
                url: 'https://ezdravstvo.herokuapp.com/rest/prescriptions/byDiagnose/'+diagnosis.id,
                headers: {
                    'X-Auth-Token': userToken
                }
            });
    }


    return service;
});