let config = module.exports = {};

config.title = 'Projects';
config.projects = [
  {
    name: 'Tessract',
    github: 'https://github.com/SolderByte/tessract',
    githubUrl: 'https://github.com/SolderByte/tessract',
    img: 'file/tessract.jpg',
    video: 'file/tessract.mp4',
    description: 'Bluetooth notification device. This device will pair with your phone and will light up whenever a notification is received. It can be customized for each app and supports full RGB.',
    tags: [
      {
        name: 'KiCAD',
        cssColor: 'color-kicad'
      },
      {
        name: 'FlatCAM',
        cssColor: 'color-flatcam'
      },
      {
        name: 'LinuxCNC',
        cssColor: 'color-linuxcnc'
      },
      {
        name: 'Arduino',
        cssColor: 'color-arduino'
      },
      {
        name: 'Android',
        cssColor: 'color-android'
      },
      {
        name: 'Java',
        cssColor: 'color-java'
      }
    ]
  },
  {
    name: 'Gut',
    github: 'https://github.com/jareddlc/gut',
    githubUrl: 'https://github.com/jareddlc/gut',
    img: 'file/gut.jpg',
    video: 'file/gut.mp4',
    description: 'Collection of plugins that simplifies development workflow. It has a support for plugins, selectable menus, colors, storage, and more. The goal is to allow any developer to easily add plugins to simplify their workflow.',
    tags: [
      {
        name: 'Shell',
        cssColor: 'color-shell'
      }
    ]
  },
  {
    name: 'OpenFit',
    github: 'https://github.com/jareddlc/openfit',
    githubUrl: 'https://github.com/jareddlc/openfit',
    img: 'file/openfit.jpg',
    video: 'file/openfit.mp4',
    description: 'Open source alternative to the Samsung Gear Fit Manager. Samsung dropped support for the Gear Fit 1 year after its release, and I created this application that allows non-samsung phones to use and control the Samsung Gear Fit.',
    tags: [
      {
        name: 'Android',
        cssColor: 'color-android'
      },
      {
        name: 'Java',
        cssColor: 'color-java'
      }
    ]
  },
  {
    name: 'CoreGi',
    github: 'https://github.com/yodlr/coregi',
    githubUrl: 'https://github.com/yodlr/coregi',
    img: 'file/coregi.jpg',
    video: 'file/coregi.mp4',
    description: 'WebUI for monitoring CoreOS clusters including fleet and etcd. CoreGI was created to be as simple as possible and deploying CoreGI is as easy as running a docker container. CoreGI can also be installed into a CoreOS cluster using a CoreOS service file.',
    tags: [
      {
        name: 'Node.js',
        cssColor: 'color-nodejs'
      },
      {
        name: 'AngularJS',
        cssColor: 'color-angularjs'
      },
      {
        name: 'Bootstrap',
        cssColor: 'color-bootstrap'
      },
      {
        name: 'Docker',
        cssColor: 'color-docker'
      }
    ]
  },
  {
    name: 'Binary Clock (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/binary-clock',
    img: 'file/binary-clock.jpg',
    video: 'file/binary-clock.mp4',
    description: 'This is my first hardware project. After learning how to use the arduino, I decided to try to make my own binary clock. I designed the clock, wrote the firmware, created the schematics and board layout, and etched the PCB.',
    tags: [
      {
        name: 'Arduino',
        cssColor: 'color-arduino'
      }
    ]
  },
  {
    name: 'Cogswell Now (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/cogswell-now',
    img: 'file/cogswell-now.jpg',
    video: 'file/cogswell-now.mp4',
    description: 'This project was a final for a one of my courses. The application consists of Front-End and Back-End development. The website is social network for students of Cogswell college. It features a blog, forums, and upcoming events.',
    tags: [
      {
        name: 'Node.js',
        cssColor: 'color-nodejs'
      },
      {
        name: 'MongoDB',
        cssColor: 'color-mongodb'
      },
      {
        name: 'Bootstrap',
        cssColor: 'color-bootstrap  '
      }
    ]
  },
  {
    name: 'Cogswell Registrar (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/cogswell-registrar',
    img: 'file/cogswell-registrar.jpg',
    video: 'file/cogswell-registrar.mp4',
    description: 'This application was written in a project class to help the college registrar office process student audits. The application requires the student audit which is exported from the CRM system, and a list of courses along with the course requirements. It will generate a list of courses the student is able to take.',
    tags: [
      {
        name: 'C++',
        cssColor: 'color-cplusplus'
      },
      {
        name: 'SQLite',
        cssColor: 'color-sqlite'
      }
    ]
  },
  {
    name: 'Lint (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/lint',
    img: 'file/lint.jpg',
    video: 'file/lint.mp4',
    description: 'My first node.js project. This application extends basic CRUD operations on a MySQL database. It allows the user to interact with the MySQL database via the web UI to create new databases, tables, columns, and rows.',
    tags: [
      {
        name: 'Node.js',
        cssColor: 'color-nodejs'
      },
      {
        name: 'MySQL',
        cssColor: 'color-mysql'
      }
    ]
  },
  {
    name: 'Midi Controller (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/midi-controller',
    img: 'file/midi-controller.jpg',
    video: 'file/midi-controller.mp4',
    description: 'This project I used an arduino to make a MIDI controller. However since the arduino did not support emulating a MIDI device, I used a MIDI to USB converter. The arduino emulates a MIDI device by using the same baud rate.',
    tags: [
      {
        name: 'Arduino',
        cssColor: 'color-arduino'
      }
    ]
  },
  {
    name: 'Mobile Maze (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/mobile-maze',
    img: 'file/mobile-maze.jpg',
    video: 'file/mobile-maze.mp4',
    description: 'This application began with the purpose of getting familiar with the Unity game engine. I made use of the prebuilt controller elements and focused in random spawn locations.',
    tags: [
      {
        name: 'Unity',
        cssColor: 'color-unity'
      }
    ]
  },
  {
    name: 'Mobile Sidescroller (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/mobile-sidescroller',
    img: 'file/mobile-sidescroller.jpg',
    video: 'file/mobile-sidescroller.mp4',
    description: 'This application began with the purpose to investigate programming in more detail in the Unity game engine. I wanted to create custom UI elements and custom code that allowed me to control the player from those elements, rather than using the prebuilt control scripts. It allows the player to move the character forward, backward, and allows the character to jump.',
    tags: [
      {
        name: 'Unity',
        cssColor: 'color-unity'
      }
    ]
  },
  {
    name: 'Game and Server (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/network-game',
    img: 'file/network-game.jpg',
    video: 'file/network-game.mp4',
    description: 'This application consists of a game server and game client. The server written in C++ and Windows Forms, while the client uses C++ and the SDL library for the graphics, input, and network. The game allows for two clients to connect to a server and exchange data such that each client can display both players.',
    tags: [
      {
        name: 'C++',
        cssColor: 'color-cplusplus'
      },
      {
        name: 'SDL',
        cssColor: 'color-sdl'
      }
    ]
  },
  {
    name: 'Quadratic Plotter (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/quadratic-plotter',
    img: 'file/quadratic.jpg',
    video: 'file/quadratic.mp4',
    description: 'This application was created for an assignment to create a complex calculator using java classes. The application should take two quadratic equations and perform addition, subtraction, multiplication, and division. However, as a challenge from the professor, I decided to add a UI and graph the equation utilizing the awt and swing libraries.',
    tags: [
      {
        name: 'Java',
        cssColor: 'color-java'
      }
    ]
  },
  {
    name: 'Subtract Game (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/subtract-game',
    img: 'file/subtract-game.jpg',
    video: 'file/subtract-game.mp4',
    description: 'This application was written for my C++ course in which we utilized Windows forms. The game consists of the player choosing a starting number and taking 1-3 numbers per turn. The player who takes the last number loses.',
    tags: [
      {
        name: 'C++',
        cssColor: 'color-cplusplus'
      }
    ]
  },
  {
    name: 'Torrent Cleaner (student project)',
    github: 'https://github.com/jareddlc/student-projects',
    githubUrl: 'https://github.com/jareddlc/student-projects/tree/master/torrent-cleaner',
    img: 'file/torrent-cleaner.jpg',
    video: 'file/torrent-cleaner.mp4',
    description: 'This application takes a directory of torrent files and prepare them for ingestion in a custom torrent tracking system. The system did not allow for duplicates torrent files or torrent files with UDP protocols.',
    tags: [
      {
        name: 'Python',
        cssColor: 'color-python'
      }
    ]
  }
];
