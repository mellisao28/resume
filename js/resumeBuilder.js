'use strict';
/* ======= Model ======= */
var model = {
    bio: {
        "name": "Mellisa Octaviani",
        "role": "B2B IT Analyst and Developer",
        "contacts": {
            "mobile": "408767xxxx",
            "email": "mellisa.octaviani@gmail.com",
            "github": "mellisao28",
            "twitter": "mellisa@twitter.com",
            "location": "Chandler,AZ,US"
        },
        welcomeMessage: "Senior webMethods Analyst and Developer",
        skills: ["webMethods 6.1,6.5,7.1,9.6", "AI (Application Integrator) Translator", "Tibco BusinessWorks", "Oracle JDeveloper", "Java", "C", "Python", "Scala", "Java Script", "JSON", "XML", "EDI/RosettaNet", "CSS"],
        bioPic: "images/mellisa-pic.jpg"
    }
};

var work = {
    "jobs": [{
        "position": "Senior Business Systems Analyst",
        "employer": "XILINX ASIA PACIFIC ",
        "location": "Singapore",
        "years": "12/2011 to 2/2015",
        "description": "Handle B2B/EDI projects for new engagement, implement new B2B and A2A integration, apply enhancement and fixes, and deliver documents that cover project full cycle for Asia Pacific region. Work closely with various parties: internal users, internal ERP team, DBA, System Administrators, engineering team as well as external partners. "
    }, {
        "position": "Information Systems Analyst",
        "employer": "STATSCHIPPAC PTE LTD",
        "location": "Singapore",
        "years": "3/2011 to 12/2011",
        "description": "Designed and developed B2B process interface for STATSChipPAC using webMethods 7.1 adhering to RosettaNet framework standard for semiconductor (Assembly and Testing) industry. Delivered various business reports using Oracle Discoverer. "
    }, {
        "position": "IT Engineer",
        "employer": "IFORCE CONSULTING, PTE LTD",
        "location": "Singapore",
        "years": "7/2007 to 2/2011",
        "description": "Designed and developed B2B process interface for Chartered Semiconductor using WebMethods 6.5 adhering to RosettaNet framework standard for semiconductor industry (Wafer fabrication). I have mostly covered understanding in essential PIPs for semiconductor industry. The area includes understanding in PIPs related to my client's customers, sub-contractors, as well as engineering data. "
    }, {
        "position": "IT Consultant",
        "employer": "PT IFORCE CONSULTING",
        "location": "Singapore",
        "years": "11/2005 to 7/2007",
        "description": "Involved in various projects at iForce clients ranging from telco industry to financial leasing company."
    }]
};

var projects = {
    "projects": [{
        "title": "MES Phase 1",
        "dates": "February 2014-May 2014",
        "description": "Performed integration of B2B application and backend MES application using SOA JDeveloper, Oracle Enterprise Management, and Oracle WebLogic Server.",
        "image": ["images/mes.jpg"]
    }, {
        "title": "B2B upgrade project",
        "dates": "July 2014-Feb 2015",
        "description": "Led and mentored junior developers in doing B2B upgrade project to migrate worldwide company's B2B transmission from webMethods 6.5 to latest webMethods 9.6 version from Solaris to Linux VMWare.",
        "image": ["images/webmethods.jpg"]
    }, {
        "title": "Various B2B projects",
        "dates": "2007-2015",
        "description": "Analyze, design, and test various B2B projects.",
        "image": ""
    }]
};

var education = {
    "schools": [{
        "name": "Deakin University",
        "date": "2005",
        "location": "Melbourne, Australia",
        "degree": "Bachelor of Computing",
        "major": ["Computer Science", "Software Development"],
        "url": "www.deakin.edu.au"
    }, {
        "name": "Informatics Computer School",
        "date": "2003",
        "location": "Surabaya, Indonesia",
        "degree": "Advanced Diploma of Computer Studies",
        "major": ["Computer Science"],
        "url": "www.informatics.edu.sg"
    }],
    "onLineCourses": [{
        "title": "Machine Learning",
        "school": "Coursera in collaboration with Associate Professor Andrew Ng from Stanford University",
        "dates": "July 2012",
        "url": "https://www.coursera.org/course/ml"

    }, {
        "title": "An Introduction to Interactive Programming in Python",
        "school": "Coursera in collaboration with Rice University",
        "dates": "December 2012",
        "url": "https://www.coursera.org/course/interactivepython"

    }, {
        "title": "Functional Programming Principles in Scala",
        "school": "Coursera in collaboration with Professor Martin Odersky from Ecole polytechnique federale de Lausanne",
        "dates": "November 2012",
        "url": "https://www.coursera.org/course/interactivepython"

    }, {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "March 2015",
        "url": "https://www.udacity.com/course/ud304"

    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": "March 2015",
        "url": "https://www.udacity.com/course/ud893"

    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": "March 2015",
        "url": "https://www.udacity.com/course/ud882"

    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "March 2015",
        "url": "https://www.udacity.com/course/ud804"

    }, {
        "title": "Intro to JQuery",
        "school": "Udacity",
        "dates": "July 2015",
        "url": "https://www.udacity.com/course/ud245"

    }, {
        "title": "Object Oriented JavaScript",
        "school": "Udacity",
        "dates": "July 2015",
        "url": "https://www.udacity.com/course/ud015"

    }, {
        "title": "HTML5 Canvas",
        "school": "Udacity",
        "dates": "July 2015",
        "url": "https://www.udacity.com/course/ud292"

    }, {
        "title": "Website Performance Optimization",
        "school": "Udacity",
        "dates": "July 2015",
        "url": "https://www.udacity.com/course/ud884"

    }, {
        "title": "Intro to AJAX",
        "school": "Udacity",
        "dates": "July 2015",
        "url": "https://www.udacity.com/course/ud110"

    }, {
        "title": "JavaScript Design Patterns",
        "school": "Udacity",
        "dates": "August 2015",
        "url": "https://www.udacity.com/course/ud989"

    }, {
        "title": "JavaScript Testing",
        "school": "Udacity",
        "dates": "August 2015",
        "url": "https://www.udacity.com/course/ud549"

    }]
};

model.bio.display = function() {
    var formattedName = HTMLheaderName.replace('%data%', model.bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', model.bio.role);
    var formattedMobile = HTMLmobile.replace('%data%', model.bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', model.bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', model.bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', model.bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', model.bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace('%data%', model.bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', model.bio.welcomeMessage);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedLocation);
    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedTwitter);
    $('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMsg);

    if (model.bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (var skill = 0; skill < model.bio.skills.length; skill++) {
            var formattedSkills = HTMLskills.replace('%data%', model.bio.skills[skill]);
            $('#skills').append(formattedSkills);
        }
    }
};

model.bio.display();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $('#workExperience').append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedWorkPosition = HTMLworkTitle.replace('%data%', work.jobs[job].position);
        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].years);
        var formattedWorkLoc = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        var formattedWorkDesc = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('.work-entry:last').append(formattedWorkEmployer + formattedWorkPosition);
        $('.work-entry:last').append(formattedWorkDates);
        $('.work-entry:last').append(formattedWorkLoc);
        $('.work-entry:last').append(formattedWorkDesc);
    }
};

work.display();

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $('#projects').append(HTMLprojectStart);
        var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        var formattedProjDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        var formattedProjDesc = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        $('.project-entry:last').append(formattedProjTitle);
        $('.project-entry:last').append(formattedProjDates);
        $('.project-entry:last').append(formattedProjDesc);
        for (var image = 0; image < projects.projects[project].image.length; image++) {
            var formattedProjImg = HTMLprojectImage.replace('%data%', projects.projects[project].image);
            $('.project-entry:last').append(formattedProjImg);
        }
    }
};

projects.display();

education.display = function() {
    $('#education').append(HTMLschoolStart);
    for (var school = 0; school < education.schools.length; school++) {
        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].date);
        var formattedSchoolLoc = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);

        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedSchoolLoc);
        $('.education-entry:last').append(formattedSchoolMajor);
    }
    $('#education').append(HTMLonlineClasses);
    for (var course = 0; course < education.onLineCourses.length; course++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onLineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onLineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onLineCourses[course].dates);
        var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onLineCourses[course].url);
        $('.eduonline-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
        $('.eduonline-entry:last').append(formattedOnlineDates);
        $('.eduonline-entry:last').append(formattedOnlineURL);
    }
};

education.display();

function inName(name) {
    name = name.trim().split(" ");
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();

    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);
