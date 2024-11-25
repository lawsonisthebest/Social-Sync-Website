//appointment stuff

const otherAppType = document.querySelector(".appointmentType");
const AppointmentType = document.querySelector(".appointmentSelect");

const Email = document.querySelector(".email");
const FName = document.querySelector(".fName");
const LName = document.querySelector(".lName");
const Phone = document.querySelector(".phone");
const Company = document.querySelector(".company");
const DesiredDate = document.querySelector(".desiredDate");
const DesiredTime = document.querySelector(".desiredTime");
const About = document.querySelector(".about");
otherAppType.style = "display: none";

AppointmentType.addEventListener("change", function(){
    if(AppointmentType.value == "Other"){
        otherAppType.style = "display: flex;";
    }else{
        otherAppType.style = "display: none";
    }
});

function sendEmail(){
    var params = {
        email: Email.value,
        fName: FName.value,
        lName: LName.value,
        phone: Phone.value,
        company: Company.value,
        desiredDate: DesiredDate.value,
        desiredTime: DesiredTime.value,
        about: About.value,
        appointmentType: AppointmentType.value,
        otherType: otherAppType.value
    };

    const serviceID = "service_tewi69i";
    const templateID = "template_08c4ml5";

    emailjs.send(serviceID, templateID, params)
    .then(
        (res) =>{
            Email.value = "";
            FName.value = "";
            LName.value = "";
            Phone.value = "";
            Company.value = "";
            DesiredDate.value = "";
            DesiredTime.value = "";
            About.value = "";
            AppointmentType.value = "";
            otherAppType.value = "";
            alert("Your Appointment Has Been Sent! Thank You");
        }
    )
}