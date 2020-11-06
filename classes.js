//Creating a class of Person with name and age
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}

//Creating a subclass of person called student, which takes name and age but also adds extra info
class Student extends Person {
    constructor(_name, _age, _website, _phone, _city, _education, _email, _availability) {
        super(_name, _age);

        this.website = _website;
        this.phone = _phone;
        this.city = _city;
        this.education = _education;
        this.email = _email;
        this.availability = _availability;
    }
}

//Creating class of experience, with getter that takes months and turns it to years, and setter that takes years and converts to months
class Experience {
    constructor(_title, _months, _location, _description) {
        this.title = _title;
        this.months = _months;
        this.location = _location;
        this.description = _description;
    }

    get years() {
        return this.months / 12;
    }

    set monthsExperience(years) {
        this.months = (years * 12);
    }
}

//Creating class of Testimonial, data will be retrieved via user responses in form on website
class Testimonial {
    constructor(_sex, _name, _job, _text) {
        this.name = _name;
        this.job = _job;
        this.text = _text;
        this.img; 

        switch (_sex) {
            case "Male":
                this.img = "assets/img/testimonials/testimonials-male.png";
                break;
            case "Female":
                this.img = "assets/img/testimonials/testimonials-female.png"
                break;
            default:
                this.img = "assets/img/testimonials/testimonials-default.png";
                break;
        }
    }
}

//Creating class of hobby
class Hobby {
    constructor(_title, _description, _image) {
        this.title = _title;
        this.description = _description;
        this.image = _image;
    }
}


//Creating new instance of student
let lukeHaresign = new Student("Luke Haresign", 26, "www.lukeharesign.com", "012-345 67 89", "Helsingborg, Sweden", "Programmering", "luke@lukeharesign.com", "Open to Work");


//Creating an array to store the experience instances and creating new instances of the experience class
let experienceArray = [
    new Experience("Student", 18, "Komvux Helsingborg", "Studying grundläggande programmering at Komvux Helsingborg, covering HTML, CSS & JS"),
    new Experience("Student", 36, "University of Reading", "Studied a Bachelors degree in History"),
    new Experience("Scheduler", 40, "Cambrian Printers", "Scheduling work through the factory to ensure work was delivered on time"),
    new Experience("Resort Representative", 12, "TUI UK/Crystal Ski", "Looking after customers while they were on holiday with us in Crete and France")
];

//Using the setter method to correct the time spent in Komvux Helsingborg
experienceArray[0].monthsExperience = 0.5;


//Creating an array to store the experience instances and creating new instances of the hobby class
let hobbiesArray = [
    new Hobby("Squash", "Squash is an intense and fast paced racket sport. I'm a keen player, and play regularly in the Helsingborg Squash League.", "<i class=\"fas fa-running\"></i>"),
    new Hobby("Travelling", "I'm an avid traveller, having spent time backpacking in South America and Europe", "<i class=\"fas fa-plane\"></i>"),
    new Hobby("Snowboarding", "I love snowboarding, particularly off-piste on fresh powder. Nothing beats the feeling of the montain air and the crunch of snow under your feet!", "<i class=\"fas fa-snowboarding\"></i>"),
    new Hobby("Socialising", "In my free time I enjoy hanging out with friends and keeping up to date with what they're up to", "<i class=\"fas fa-user-friends\"></i>")
];

//A function that takes the hobbies array and creates a new div element within the HTML file for each array item
function pushHobbies(hobbiesArray) {
    let servCont = document.getElementById("hobbies-container");

    //Looping through each hobby
    for (let hobby of hobbiesArray) {

        //Creating various elements for visual purposes & setting contents to the info within each instance of Hobby
        let hobbyDiv = document.createElement('div');
        hobbyDiv.setAttribute("class", "col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0");

        let iconDiv = document.createElement('div');
        iconDiv.setAttribute("class", "icon-box");

        let icon = document.createElement('div');
        icon.setAttribute("class", "icon");
        icon.innerHTML = hobby.image;

        let title = document.createElement('h4');
        title.setAttribute("class", "title");
        title.innerText = hobby.title;

        let description = document.createElement('p');
        description.setAttribute("class", "description");
        description.innerText = hobby.description;

        //Appending to HTML DOM
        servCont.append(hobbyDiv);
        hobbyDiv.append(iconDiv);
        iconDiv.append(icon);
        iconDiv.append(title);
        iconDiv.append(description);
    }
}

//A function that takes the experience array and creates a new div element within the HTML file for each array item
function pushExperience(experienceArray) {
    let expCont = document.getElementById("experience-container");
    let expCol = document.getElementById("experience-column");
    let index = 0;

    //Looping through each hobby
    for (let experience of experienceArray) {

        //If statement that creates a new column once we reach the third item in the array for visual purposes
        if (index === 2) {
            let newCol = document.createElement('div');
            newCol.setAttribute("class", "col-lg-6");
            newCol.setAttribute("id", "experience-column2");

            let header = document.createElement('h3');
            header.setAttribute("class", "resume-title");
            header.innerText = "Work Experience";

            newCol.append(header);
            expCont.append(newCol);

            expCol = newCol;
        }



        //Creating various elements for visual purposes & setting contents to the info within each instance of Experience
        let experienceDiv = document.createElement('div');
        experienceDiv.setAttribute("class", "resume-item");

        let title = document.createElement('h4');
        title.innerText = experience.title;

        let months = document.createElement('h5');
        months.innerText = "Months of experience: " + experience.months;

        let location = document.createElement('p');
        location.innerHTML = "<em>" + experience.location + "</em>";

        let description = document.createElement('p');
        description.innerText = experience.description;

        //Appending to HTML DOM
        expCol.append(experienceDiv);
        experienceDiv.append(title);
        experienceDiv.append(months);
        experienceDiv.append(location);
        experienceDiv.append(description);

        index++;
    }
}

//A function that takes the student class and updates elements within the HTML file
function pushStudent(student) {
    document.getElementById("person-name").innerText = " " + student.name;
    document.getElementById("person-website").innerText = " " + student.website;
    document.getElementById("person-phone").innerText = " " + student.phone;
    document.getElementById("person-city").innerText = " " + student.city;
    document.getElementById("person-age").innerText = " " + student.age;
    document.getElementById("person-education").innerText = " " + student.education;
    document.getElementById("person-email").innerText = " " + student.email;
    document.getElementById("person-availability").innerText = " " + student.availability;
}

//Function that retrieves user input and creates a testimonial for it
function createTestimonial() {

    let sex;
    let name = document.getElementById("name").value;
    let job = document.getElementById("job-title").value;
    let text = document.getElementById("testimonial").value;

    if (document.getElementById('male').checked) {
        sex = "Male";
    } else if (document.getElementById('female').checked) {
        sex = "Female";
    }

    let testimonial = new Testimonial(sex, name, job, text);

    //Calls displayTestimonial function for displaying input in DOM
    displayTestimonial(testimonial);
}


function displayTestimonial(testimonial) {

    //Getting testimonial image and setting the src attribute value
    let testImage = document.getElementById("test-img");
    testImage.setAttribute("src", testimonial.img);
    
    //Getting elements and setting them with input info
    nameElement = document.getElementById("test-name");
    nameElement.innerText = testimonial.name;

    document.getElementById("testimonial-job").innerText = testimonial.job;
    document.getElementById("testimonial-text").innerText = testimonial.text;
    
    console.log(document.getElementById("test-img"));
    console.log(document.getElementById("test-name"));
    console.log(document.getElementById("testimonial-job"));
    console.log(document.getElementById("testimonial-text"));
  
}

//Calling function to push hobbies to DOM
pushHobbies(hobbiesArray);
pushExperience(experienceArray);
pushStudent(lukeHaresign);




