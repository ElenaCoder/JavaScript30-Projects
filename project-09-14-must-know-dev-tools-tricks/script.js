// Project-09 14 Must Know Dev Tools Tricks
// Some data we can work with

const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'hugo', age: 8 },
];

const user = {
    name: 'Elena',
    surname: 'Golovanova',
    email: 'Elena_Golovanova@example.com',
    contact: {
        linkedin: 'https://www.linkedin.com/in/elena-golovanova/',
        github: 'https://github.com/ElenaCoder',
      },
};

function makeSmile() {
    if (this.classList.contains('smile')) {
        this.classList.remove('smile');
        this.style.backgroundColor = ' #50394c';
        this.innerHTML = 'Click here for a smile!';
    } else {
        this.classList.add('smile');
        this.innerHTML = '<span>&#128521;</span>';
        this.style.backgroundColor = '#ffef96';
    }
  }

  const clickOnMButton = document.querySelector('.smile');
  clickOnMButton.addEventListener('click', makeSmile);


// Regular
console.log('Hello, my name is Elena Golovanova.');

// Interpolated
console.log('I am a %s student!', 'software development');

// Styled
console.log(
    '%c I can use styled console log',
    'color:blue; font-weight: 900; text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);',
);

// warning!
console.warn('Attention to detail is one of my strongest traits');

// Error :|
console.error(
    'Sometimes in my code happens errors, but I know how to deal with them!'
);

// Info
console.info('I have degree in mathematics and I like coding.');

// Testing
const p = document.querySelector('p.smile');
console.assert(
    p.classList.contains('ouch'),
    'Oops, something went wrong, but no worries, we learn best from mistakes!'
);

// Grouping together
console.groupCollapsed(`%c ${"Personal Information"}`,
'color:MediumSeaGreen; font-weight: 900; text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);');
console.log(`Name: ${user.name}`);
console.log(`Surname: ${user.surname}`);
console.groupCollapsed(`%c ${"Contacts"}`,
'color: #d64161; font-weight: 900; text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);');
console.log(`Linkedin: ${user.contact.linkedin}`);
console.log(`Github: ${user.contact.github}`);
console.groupEnd();
console.groupEnd();

// timing

console.time('Fetching data from my GitHub account');
fetch('https://api.github.com/users/elenaCoder')
    .then((rowData) => rowData.json())
    .then((data) => {
        console.timeEnd('Fetching data from my GitHub account');
        console.log(data);
    });

// clearing
//console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);


// counting
console.count('project-01');
console.count('project-02');
console.count('project-02');
console.count('project-03');
console.count('project-03');
console.count('project-03');


