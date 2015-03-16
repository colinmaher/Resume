
var bio = {
    "name": "Colin Maher",
    "role": "Web Developer",
    "contacts": {
        "email": "colinmaher77@yahoo.com",
        "mobile": "925-878-8130",
        "github": "example",
        "twitter": "@example",
        "location": "Lafayette, CA"
    },
    "skills": ["HTML", " CSS", " Javascript"],
    "welcomeMessage": "This is my message",
    "bioPic": "http://i.imgur.com/2YgWYHV.jpg?1",
    "display": function () {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);

        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);

        var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPicture);

        //Skills
        $("#header").append(HTMLskillsStart);
        for (skills in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills]);
            $("#skillsH3").append(formattedSkills);
        }
    }
};
var education = {
    "schools": [
        {"name": "Diablo Valley College",
            "years": "2015",
            "location": "Pleasant Hill, CA",
            "major": "Computer Science"}

    ],
    "onlineClasses": [
        {"title": "Front-End Web-Development Nanodegree",
            "school": "Udacity",
            "years": "2015",
            "url": "https://www.udacity.com/course/nd001"}
    ],
    "display": function () {
        for (schools in education.schools) {
            $("#education").append(HTMLschoolStart);
            
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schools].name);
            $(".education-entry").append(formattedSchoolName);
            var formattedSchoolYears = HTMLschoolDates.replace("%data%", education.schools[schools].years);
            $(".education-entry").append(formattedSchoolYears);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
            $(".education-entry").append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
            $(".education-entry").append(formattedSchoolMajor);

        }
        for (i in education.onlineClasses) {

            $("#education").append(HTMLonlineClasses);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].title);
            $("h3:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school);
            $("a:last").append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[i].years);
            $("h3:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[i].url);
            $("h3:last").append(formattedURL);
        }

    }
};
var work = {
    "jobs": [
        {
            employer: "Springfield Nuclear Power Plant",
            title: "Nuclear Safety Inspector",
            years: "1987-2015",
            city: "Springfield, OR",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "
        },
        {
            employer: "Panucci's Pizza",
            title: "Delivery Boy",
            years: "1997-2000",
            city: "Brooklyn, NY",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "
        }
    ],
    "display": function () {
        for (items in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[items].employer);
            var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[items].title);
            var formattedEmployerTitle = formattedEmployer + formattedPosition;
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[items].city);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[items].years);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[items].description);
            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
var projects = {
    "projects": [
        {
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            title: "Webpage Mockup",
            date: "January 2015",
            images: "http://i.imgur.com/giC5xik.png?2"
        },
        {
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            title: "Resume",
            date: "March 2015",
            images: "http://i.imgur.com/QlqIlv8.png?1"
        }
    ],
    "display": function () {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $(".project-entry:last").append(formattedImage);
        }
    }
};
$("#mapDiv").append(googleMap);
