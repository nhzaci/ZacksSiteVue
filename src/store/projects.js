export default {
  state: {
    data: [
      {
        id: 1,
        title: 'ClickClack',
        subtitle: 'Minimalist Typing Test Site',
        link: 'https://nhzaci.github.io/ClickClack/',
        description: 'A minimalist typing speed test website made with Vue.js and Nuxt.js with styling of elements done in Tailwind CSS. Makes use of cookies to store a user\'s previous attempts and averages their speed and accuracy over time.',
        show: false,
        allImg: ['ClickClack/ClickClack.png', 'ClickClack/completed.png', 'ClickClack/help.png'],
        imgUrl: 'ClickClack/ClickClack.png',
        tags: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS', 'JavaScript', 'Cookies']
      },
      {
        id: 2,
        title: 'ZacksSiteVue',
        fullTitle: 'Zack\'s Vue Site',
        subtitle: 'Minimalist Personal Website',
        link: 'https://github.com/nhzaci/ZacksSiteVue',
        description: 'A beautiful personal website with material design styling, made with Vue CLI 3 with styling from the UI pack Vuetify.js.',
        show: false,
        allImg: ['ZacksSiteVue.png'],
        imgUrl: 'ZacksSiteVue.png',
        tags: ['Vue.js', 'Vuetify.js', 'HTML5', 'CSS', 'JavaScript', 'Vuex']
      },
      {
        id: 3,
        title: 'FinancialSense',
        subtitle: 'Financial Tracking Site',
        link: 'https://github.com/nhzaci/FinancialSense',
        description: 'A beautiful financial tracker built with Nuxt.js and Vuetify.js for styling. The home dashboard provides quick data and summarised insights to users and there is a tracking page to see more data and connects to an Express.js back end to get data on each user\'s balance and transactional data.',
        imgUrl: 'FinancialSense/HomePage.png',
        allImg: ['FinancialSense/HomePage.png', 'FinancialSense/TrackPage.png', 'FinancialSense/AddTransaction.png', 'FinancialSense/EditTransaction.png', 'FinancialSense/NavDrawer.png', 'FinancialSense/AppBarIcons.png'],
        show: false,
        tags: ['Nuxt.js', 'Vue.js', 'Vuetify.js', 'Vuex', 'HTML5', 'CSS', 'JavaScript', 'Cookies']
      },
      {
        id: 4,
        title: 'FSExpress',
        fullTitle: 'Financial Sense Express',
        subtitle: 'Back-end RESTful API for FS',
        link: 'https://github.com/nhzaci/FinancialSenseExpress',
        description: 'Back-end API with full documentation for FinancialSense front-end financial tracking site. Database used is MongoDB with the mongoose package for queries to the database, set up on MongoDB Atlas.',
        imgUrl: 'express.png',
        allImg: ['express.png'],
        tags: ['Express.js', 'Node.js', 'REST', 'Mongoose', 'MongoDB', 'MongoDB Atlas'],
        show: false
      },
      {
        id: 5,
        title: 'WhereCanEat',
        subtitle: 'Food Platform for Hackathon',
        link: 'https://github.com/nhzaci/WhereCanEat',
        description: 'A standard food platform site created with Nuxt.js on the front end with styling done in Tailwind CSS for custom component styling. The website was created in slightly under a day with a back-end Express.js server that transmits data from front end and get real-time results for food delivery from FoodPanda.',
        imgUrl: 'WhereCanEat.png',
        allImg: ['WhereCanEat.png'],
        tags: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS', 'JavaScript'],
        show: false
      },
      {
        id: 6,
        title: 'ZacksBlog',
        subtitle: 'Personal Blog Template',
        link: 'https://github.com/nhzaci/ZacksBlogTemplate',
        description: 'A beautiful blog template made in Nuxt.js for SEO options and TailwindCSS for styling. A clean material design is used with custom built components with Tailwind CSS, allowing for a very clean user interface.',
        imgUrl: 'ZacksBlogTemplate.png',
        allImg: ['ZacksBlogTemplate.png'],
        tags: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS', 'JavaScript'],
        show: false
      },
      {
        id: 7,
        title: 'ZBDjango',
        subtitle: 'Back-end API for ZB',
        link: 'https://github.com/nhzaci/DjangoFrameworkForBlog',
        description: 'Back-end RESTful API for ZacksBlog, created with SQLite as the database on the back end.',
        imgUrl: 'django.png',
        allImg: ['django.png'],
        tags: ['Django', 'Python', 'REST', 'SQLite'],
        show: false
      },
      {
        id: 8,
        title: 'Authentication',
        subtitle: 'MEVN Stack Auth App',
        link: 'https://github.com/nhzaci/ExpressAuthentication',
        description: 'Front-end Vue.js skeleton site with back-end RESTful API created to learn the ropes regarding authentication APIs, database used is a local MongoDB server.',
        imgUrl: 'passport.png',
        allImg: ['passport.png'],
        tags: ['Vue.js', 'Bootstrap', 'Express.js', 'Node.js', 'Passport.js', 'REST', 'MongoDB', 'MongoDB Atlas'],
        show: false
      }
    ]
  }
};