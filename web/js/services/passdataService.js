iktProekt.service('passdataService', function ($http, enums) {


    var passdata = {} ;

    var __selectedAppointmentState = false;
    var __selectedAppointment = {};


    passdata.setSelectedAppointmentState = function(state)
    {
        __selectedAppointmentState = state;
        console.log("Selected Appointment State form service: SET ", state);

    }
    passdata.getSelectedAppointmentState = function()
    {
        console.log("Selected Appointment State form service: GET ", __selectedAppointmentState);
       return __selectedAppointmentState;
    }

    passdata.setSelectedAppointment = function(appointment)
    {
        __selectedAppointment = appointment;
        console.log("Selected Appointment  form service: SET ", appointment);

    }
    passdata.getSelectedAppointment= function()
    {
        console.log("Selected Appointment  form service: GET ", __selectedAppointment);
        return __selectedAppointment;
    }

     return  passdata;
});