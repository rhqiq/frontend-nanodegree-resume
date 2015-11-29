/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Reza Haghighi",
    "role": "Lead PHP Developer",
    "contacts": {
        "email": "reza.haghighi@gmail.com",
        "cellPhone": "650-686-7741",
        "github" : "rhqiq",
        "twitter" : "@rhqiq",
        "location" : "Sunnyvale, CA"
    },
    "bioPic": "images/me.jpg",
    "welcomeMessage": "Welcome Here!",
    "skills": ["PHP", "MySQL", "Javascript", "jQuery"]
}



var work = {
    "jobs": [{
        "employer" : "Arna",
        "title" : "Lead PHP Developer",
        "dates" : "2013-2015",
        "location" : "Mountain View, CA",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" +
        " the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and" +
        " scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into" +
        " electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of" +
        " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus" +
        " PageMaker including versions of Lorem Ipsum."
    }, {
        "employer" : "Fanap",
        "title" : "Senior PHP Developer",
        "dates" : "2010-2013",
        "location" : "San jose, CA",
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" +
        " the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and" +
        " scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into" +
        " electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of" +
        " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus" +
        " PageMaker including versions of Lorem Ipsum."
    }]
};

var education = {
    "schools": [{
        "name": "Arak University",
        "location": "San jose, CA",
        "degree": "BS.",
        "majors": ["Computer Engineering"],
        "date": 2004,
        "url": "www.example.com"
    }, {
        "name": "Kousar",
        "location": "Santa Clara, CA",
        "degree": "High School Diploma",
        "majors": ["Math"],
        "date": 1998,
        "url": "www.example.com"
    }],
    "onlineCourses": [{
        "title" : "MongoDB for Java Developers",
        "school" : "MongoDB University",
        "date" : "2015",
        "url" : "www.sample.com"
    }]

};

var projects = {
    "projects": [{
        "title" : "eFanap",
        "dates" : "2011-2014",
        "description" :  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" +
        " the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and" +
        " scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into" +
        " electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of" +
        " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus" +
        " PageMaker including versions of Lorem Ipsum.",
        "images" : ["http://lorempixel.com/400/200/technics/3", "http://lorempixel.com/400/200/technics/4"]
    }, {
        "title" : "90tv.ir",
        "dates" : "2014-2015",
        "description" :  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" +
        " the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and" +
        " scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into" +
        " electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of" +
        " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus" +
        " PageMaker including versions of Lorem Ipsum.",
        "images" : ["http://lorempixel.com/400/200/technics/1/", "http://lorempixel.com/400/200/technics/2"]
    }]
};


var displayBio = function(){

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").prepend(formattedBioPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }




};

displayBio();

var displayContact = function(){
    var formattedBioCellPhone = HTMLmobile.replace("%data%", bio.contacts.cellPhone);
    var formattedBioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedBioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBioTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    $("#topContacts, #footerContacts").append(formattedBioCellPhone);
    $("#topContacts, #footerContacts").append(formattedBioEmail);
    $("#topContacts, #footerContacts").append(formattedBioGithub);
    $("#topContacts, #footerContacts").append(formattedBioTwitter);
};

displayContact();



var displayWork = function(){
    for (var job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates );
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location );
        var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description );
        var workContent = formattedWorkEmployer + formattedWorkTitle + formattedWorkDate + formattedWorkLocation + formattedWorkDesc;
        $(".work-entry:last").append(workContent);
    }
};

displayWork();


function inName(name) {
    var name = bio.name;
    name = name.trim().split(' ');
    var intlName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase() + ' ' + name[1].toUpperCase();
    $("#name").html(intlName);
}

$("#main").append(internationalizeButton);

projects.display = function () {
    for (var project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        var projContent = formattedProjectTitle + formattedProjectDates +  formattedProjectDesc;
        for (pImage in projects.projects[project].images){
            var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[pImage]);
            projContent = projContent + formattedProjectImg;
        }
        $(".project-entry:last").append(projContent);

    }
}

projects.display();

$("#mapDiv").append(googleMap);