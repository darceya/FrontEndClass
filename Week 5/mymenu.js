/* My thoughts - 
    Patients and Medical Records
        Patient could include: firstName, lastName, age, medicalCondition
        Medical Records could include doctorVisit, bill, medication

    Cars and Racetracks
        Cars could include: name, type, color, avgspeed
        Racetrack could include: location, avgtemp, difficulty

    Planet and Spacecraft


    OutdoorActivity and Location
        Outdoor Activity could include: name, difficulty, 
        Location could include: name, avgtemp, terrain type


/* Thinking type of MedicalRecord could be a selection 
like Initial Appt, Follow Up, Diagnostic, Lab, Presription


Not sure if I can use this, but adding it here:

class Appointments {
    constructor() {
        this.appointmenttype = this.appointmenttype
    }
}

let patientlist = [];

*/ 

class Patients {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.MedicalRecords = []; 
    }

    describe() {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old patient.`
    }

    addMedicalRecord(record) {
        this.MedicalRecord.push(record);
    }
}

class MedicalRecords {
    constructor(date, type) {
        this.date = date;
        this.type = type; 
    }

    describe() {
        return `${patient.firstName} has a medical record dated ${this.date}.`
    }
}

let patient1 = new Patients("Jim", "Bug", 60); 
console.log(patient1.describe()); 


class Menu {
    constructor() {
        this.patientList = [];
        this.selectedpatient = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
          switch (selection) {
            case `1`:
                this.createPatient();
                break;
            case `2`:
                this.displayPatient();
                break;
            case `3`:
                this.createMedicalRecord();
                break;
            case `4`:
                this.deleteMedicalRecord();
                break;
            default:
                alert(`Invalide option. Please choose a valid option or close system.`);
          }  
          selection = this.showMainMenuOptions(); 
        }

        alert(`Thank you for using this medical system. Hope to see you again soon.`);
    }

    showMainMenuOptions() {
        return prompt(` Healthcare System Main Menu:
            0) Exit
            1) Create Patient
            2) View Patient
            3) Create Medical Record
            4) Delete Medical Record
        `); 
    }

    displayPatient() {
        let patientString = ``; 
        for (let i = 0; i < this.patientList.length; i++) {
            patientString += i + `) ` + this.patientList[i].firstName + this.patientList[i].lastName + `\n`;
        }
        alert(patientString);
    }

    createPatient() {
        let firstName = prompt(`Enter patient's first name:`);
        let lastName = prompt(`Enter patient's last name:`); 
        this.patientList.push(new Patients(firstName, lastName)); 
    }

    viewPatient() {
        let index = prompt(`Enter the last name of the patient you wish to view:`);
        if (index > -1 && index < this.patientList.length) {
            this.selectedpatient = this.patientList[index];
            let description = `Patient Name: ` + ${this.selectedpatient.lastName} + '\n';
            
            for (let i = 0; i < this.selectedpatient.patientList.length; i++) { 
                description += i + ') ' + this.selectedpatient.patientList[i].lastName = ' - ' +this.selectedpatient.MedicalRecord + '\n'; 

            }

            
        }
    }

}