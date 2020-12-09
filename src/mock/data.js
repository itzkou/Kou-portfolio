import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Koutheir Elbehi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Koutheir',
  subtitle: 'I am a Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mei.jpg',
  paragraphOne: 'Hello there 😄',
  paragraphTwo: 'I am actively researching, designing, implementing and managing web and mobile applications. Testing and evaluating new programs. Identifying areas for modification in existing programs and subsequently developing these modifications. Writing and implementing efficient code.',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1xQ12uiQMgxPE_RkbWPd4lTRBGcTQmFge/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Uniclub',
    info: 'An event mangement application for students around campus',
    info2: '⚙️ Android SDK • MVC • Firebase • Kotlin • Lint • Retrofit • XML • Adobe XD • Material Design • Laravel ',
    url: 'https://www.behance.net/gallery/108608375/Uniclub-Trailer',
    repo: 'https://github.com/itzkou/uniclub', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'SeeKMake.jpg',
    title: 'SeekMake',
    info: 'SeekMake is The first online platform in Tunisia which allows its customers to benefit from the services of CNC machines (3D printing, milling, and laser cutting). This application is dedicated to creators all over the 3D printing community that is based in Tunis.',
    info2: '⚙️ Android SDK • MVVM • LiveData • Firebase • Kotlin • Lint • Retrofit • XML • Adobe XD • Material Design',
    url: 'https://www.behance.net/gallery/108579769/SeekMake',
    repo: 'https://github.com/itzkou/seekmake-android', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you like my work ?',
  btn: '',
  email: 'koutheir.elbehi@etudiant-isi.utm.tn',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/itzkouu',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/elbehi-koutheir/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/itzkou/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
