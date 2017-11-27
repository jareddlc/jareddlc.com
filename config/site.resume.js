let config = module.exports = {};

config.title = 'Resume';
config.pdf = false,
config.schema = {
  basics: {
    name: 'Jared De La Cruz',
    label: 'Software Engineer',
    picture: '',
    email: 'jared@jareddlc.com',
    phone: '(408) 644-3838',
    website: 'http://jareddlc.com',
    summary: '',
    location: {
      address: '1880 Midfield ave apt #2',
      postalCode: 'CA 95122',
      city: 'San Jose',
      countryCode: 'US',
      region: 'California'
    },
    profiles: [{
      network: 'LinkedIn',
      username: 'jareddlc',
      url: 'https://www.linkedin.com/in/jareddlc'
    }]
  },
  work: [{
    company: 'Axway',
    location: 'Santa Clara, CA',
    position: 'Software Engineer',
    website: '',
    startDate: '2016-02-02',
    endDate: 'present',
    summary: '',
    highlights: [
      'Maintained and updated core cloud services',
      'Updated and delivered core cloud services to run on premise',
      'Contributed to the tooling and continuous integration projects',
      'Guided and mentored interns'
    ],
    pdf: true
  }, {
    company: 'Yodlr',
    location: 'Menlo Park, CA',
    position: 'Co-Founder/Software Engineer',
    website: '',
    startDate: '2014-11-02',
    endDate: '2016-11-02',
    summary: '',
    highlights: [
      'Developed and maintained the AngularJS application',
      'Managed and deployed micro services to CoreOS',
      'Designed and developed core application services',
      'Developed an integration test suite',
      'Created an automated new hire onboarding setup',
      'Guided and mentored engineers'
    ],
    pdf: true
  }, {
    company: 'ASTi Labs',
    location: 'Menlo Park, CA',
    position: 'Software Engineer',
    website: '',
    startDate: '2013-06-02',
    endDate: '2014-11-02',
    summary: '',
    highlights: [
      'Developed the application status page using a d3.js library',
      'Created Ansible playbooks to bootstrap virtual machines',
      'Developed an open source node.js client sdk',
      'Developed a job queue using RabbitMQ'
    ],
    pdf: true
  }, {
    company: 'Networksound (Internship)',
    location: 'Santa Clara, CA',
    position: 'Software Engineer',
    website: '',
    startDate: '2013-02-02',
    endDate: '2013-03-02',
    summary: '',
    highlights: [
      'Updated Android Mambamix application from Android 2.1 to support Android 4.0',
      'Implemented threaded UDP protocol into Android application',
      'Fixed XML layout issues'
    ],
    pdf: true
  }, {
    company: 'Remote Defense',
    location: 'Fremont, CA',
    position: 'Web Developer',
    website: '',
    startDate: '2012-07-02',
    endDate: '2012-09-02',
    summary: '',
    highlights: [
      'Migrated WordPress website into a GoDaddy hosting',
      'Developed website and database',
    ],
    pdf: false
  }, {
    company: 'Irdeto',
    location: 'Santa Clara, CA',
    position: 'Product Operations Analyst',
    website: '',
    startDate: '2011-09-02',
    endDate: '2012-11-02',
    summary: '',
    highlights: [
      'Provide client protection of intellectual property via content acquisition, verification, and confiscation',
      'Developed a fiddler2 plugin to scrape websites using regular expressions'
    ],
    pdf: false
  }, {
    company: 'Fantasy Hip Hop (Internship)',
    location: 'Santa Clara, CA',
    position: 'Engineering Intern',
    website: '',
    startDate: '2011-06-02',
    endDate: '2011-06-02',
    summary: '',
    highlights: [
      'Developed 3D demo video game in the Blitzmax language'
    ],
    pdf: false
  }, {
    company: 'Cogswell College',
    location: 'Sunnyvale, CA',
    position: 'Student Worker',
    website: '',
    startDate: '2011-01-02',
    endDate: '2012-02-02',
    summary: '',
    highlights: [
      'Data entry and campus tours'
    ],
    pdf: false
  }, {
    company: 'Aeriagames',
    location: 'Santa Clara, CA',
    position: 'Game Master',
    website: '',
    startDate: '2010-05-02',
    endDate: '2010-11-02',
    summary: '',
    highlights: [
      'Customer service, community, and event management',
      'Trained employees remotely',
      'Collaborated with producer on sales and promotions'
    ],
    pdf: false
  }, {
    company: 'Gala-Net',
    location: 'Sunnyvale, CA',
    position: 'Game Master',
    website: '',
    startDate: '2009-12-02',
    endDate: '2010-02-02',
    summary: '',
    highlights: [
      'Launched and localized of flagship game and gpotato.com website in the Spanish Market',
      'Coordinated projects with developers overseas and internal departmentss'
    ],
    pdf: false
  }, {
    company: 'BayTSP',
    location: 'Los Gatos, CA',
    position: 'Product Operations Analyst',
    website: '',
    startDate: '2008-12-02',
    endDate: '2009-12-02',
    summary: '',
    highlights: [
      'Provided client protection of intellectual property via content acquisition, verification, and confiscation'
    ],
    pdf: false
  }],
  volunteer: [{
    organization: 'BayNode',
    position: 'Volunteer',
    website: 'https://www.meetup.com/BayNode/',
    startDate: '2013-06-02',
    endDate: '2016-11-02',
    summary: '',
    highlights: [
      'Node.js mentor'
    ]
  }],
  education: [{
    institution: 'Cogswell Polytechnical College',
    area: 'Software Engineering',
    studyType: 'B.S.',
    startDate: '2011-01-02',
    endDate: '2013-01-02',
    gpa: '',
    courses: [],
    location: 'Sunnyvale, CA',
    award: 'Cum Laude'
  }, {
    institution: 'San Jose State University',
    area: 'Philosophy, Minor in Radio, Television & Film',
    studyType: 'B.A.',
    startDate: '2006-01-02',
    endDate: '2009-01-02',
    gpa: '',
    courses: [],
    location: 'San Jose, CA'
  }],
  awards: [{
    title: 'Award',
    date: '2013-01-02',
    awarder: 'Cogswell Polytechnical College',
    summary: 'Honors: Cum Laude'
  }],
  publications: [],
  skills: [{
    name: 'Programming languages',
    level: '',
    keywords: [
      'C',
      'C++',
      'HTML/CSS',
      'Go',
      'Java',
      'JavaScript',
      'Node.js',
      'PHP',
      'Python'
    ]
  }, {
    name: 'Databases',
    level: '',
    keywords: [
      'MongoDB',
      'MySQL',
      'RabbitMQ',
      'Redis'
    ]
  }, {
    name: 'Software',
    level: '',
    keywords: [
      'Ansible',
      'Arduino',
      'Docker',
      'Git',
      'KiCad',
      'Nginx'
    ]
  }, {
    name: 'Operating Systems',
    level: '',
    keywords: [
      'Linux',
      'MacOS',
      'Windows'
    ]
  }],
  languages: [{
    name: 'English',
    level: 'Native speaker'
  },
  {
    name: 'Spanish',
    level: 'Native speaker'
  }],
  interests: [],
  references: []
};
