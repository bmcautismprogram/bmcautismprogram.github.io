
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function mainmenu(){
    window.location.assign("index.html");
}

function doctorsoffice(){
    window.location.assign("settings.html");
}

function aboutapp(){
    window.location.assign("aboutapp.html");
}

function aboutbmcautism(){
    window.location.assign("aboutbmcautism.html");
}

//Writes settings.html form values to str, which is appended to end of URL
function begin(){
    var str="";
	str = str + "&start="+start[start.selectedIndex].value;
	str = str + "&building="+building[building.selectedIndex].value;
	str = str + "&department="+department[department.selectedIndex].value;
	window.location.assign("gettingtoBMC.html?pos=0"+str);
}

function settings(){
    window.location.assign("settings.html");
}

function resume(pos, start, building, department){
    window.location.assign("gettingtoBMC.html?"+"pos="+pos+"&start="+start+"&building="+building+"&department="+department);
}

function previous(pos, start, building, department){
    var p=0;
    
    if (pos===0){
        window.location.assign("settings.html");
    }
    
    else{
        if ((department==="y1" || department==="p0") && (pos===11)){
            p=5;
        }
        
        else if ((department==="y1" || department==="p0") && (pos===12)){
            p=7;
        }
        
        else if ((department==="y1" || department==="p0") && (pos===13)){
            p=7;
        }
    
        else{
            if (pos===1){p=0;}
            else if (pos%2===0){p=pos-1;}
            else{p=pos-2;}
        }
    
        window.location.assign("gettingtoBMC.html?"+"pos="+p+"&start="+start+"&building="+building+"&department="+department);
    }
}

function restart(start, building, department){
    window.location.assign("gettingtoBMC.html?"+"pos=0"+"&start="+start+"&building="+building+"&department="+department);
}

function medicalprocedures(){
    window.location.assign("medicalprocedures.html");
}

function bloodpressure(){
    window.location.assign("bloodpressure.html?pos=0");
}

function shot(){
    window.location.assign("shot.html?pos=0");
}

function blooddraw(){
    window.location.assign("blooddraw.html?pos=0");
}

function resume1(pos, story){
    window.location.assign(story+"pos="+pos);
}

function previous1(pos, story){
    var p=0;
    
    if (pos===0){
        window.location.assign("medicalprocedures.html");
    }
    
    else{
        if (pos===1){p=0;}
        else if (pos%2===0){p=pos-1;}
        else{p=pos-2;}
    
        window.location.assign(story+"pos="+p);
    }
}

function restart1(story){
    window.location.assign(story+"pos=0");
}

function heightandweight(){
    window.location.assign("heightandweight.html?pos=0");
}

function configureDropDownLists(building,department) {
    var doctorsoffice = ['Psychiatry Research Center'];
    var dowling = ['Behavioral Health', 'Child Psychiatry'];
    var familymedicine = ['Family Medicine'];
    var menino = ['Radiology'];
    var moakley = ['Audiology', 'Blood Draw Station', 'Hematology', 'Gastroenterology', 'Oncology', 'Otolaryngology'];
    var preston = ['Blood Draw Station','Cardiovascular Center', 'Center for Endocrinology, Diabetes, Nutrition & Weight Management', 'Physical/Occupational Therapy', 'Renal Medicine', 'TB Clinic'];
    var shapiro = ['Adult Primary Care', 'Blood Collection Station', 'Dermatology', 'Neurology', 'Pediatric Neurology'];
    var yawkey = ['Adolescent Medicine', 'Blood Draw Station', 'Dentistry', 'Family Medicine', 'Ophthalmology', 'Pediatric Primary Care', 'Pediatric Dentistry', 'Pediatric Specialty'];

    switch (building.value) {
        case "doctorsoffice":
            department.options.length = 0;
            for (i = 0; i < doctorsoffice.length; i++) {
                createOption(department, doctorsoffice[i], "do"+i);
            }
            break;
            
        case "dowling":
            department.options.length = 0;
            for (i = 0; i < dowling.length; i++) {
            	createOption(department, dowling[i], "d"+i);
            }
            break;

        case "familymedicine":
            department.options.length = 0;
            for (i = 0; i < familymedicine.length; i++) {
                createOption(department, familymedicine[i], "f"+i);
            }
            break;
            
        case "menino":
            department.options.length = 0;
            for (i = 0; i < menino.length; i++) {
                createOption(department, menino[i], "m"+i);
            }
            break;

        case "moakley":
            department.options.length = 0;
            for (i = 0; i < moakley.length; i++) {
                createOption(department, moakley[i], "mo"+i);
            }
            break;
            
        case "preston":
            department.options.length = 0;
            for (i = 0; i < preston.length; i++) {
                createOption(department, preston[i], "p"+i);
            }
            break;
        
        case "shapiro":
            department.options.length = 0;
            for (i = 0; i < shapiro.length; i++) {
                createOption(department, shapiro[i], "s"+i);
            }
            break;
        
        case "yawkey":
            department.options.length = 0;
            for (i = 0; i < yawkey.length; i++) {
                createOption(department, yawkey[i], "y"+i);
            }
            break;
            
        default:
            department.options.length = 0;
            break;
        }
}

    function createOption(department, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        department.options.add(opt);
    }
    
    function physicalexam(){
        window.location.assign("physicalexam.html?pos=0");
    }
    
    function dentist(){
        window.location.assign("dentist.html?pos=0");
    }
    
    function map(){
        window.location.assign("map.html");
    }
