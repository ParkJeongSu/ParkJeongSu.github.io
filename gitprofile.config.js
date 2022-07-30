// gitprofile.config.js

const config = {
  github: {
    username: 'ParkJeongSu', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'jeongsu-park-b37639118',
    twitter: '',
    facebook: 'marrow.Jeongsu',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://jeongsu.tistory.com/135',
    phone: '010-4767-6182',
    email: 'pjs91_marrow@naver.com',
  },
  skills: [
    'JAVA',
    'C#',
    'javascript',
    'React.js',
    'Node.js',
    'python',
    'Oracle',
    'Git',
    'Spring boot',
    'MUI',
  ],
  experiences: [
    {
      company: 'LG CNS',
      position: 'MES 개발자',
      from: '2022.04',
      to: '현재',
    },
    {
      company: '에임시스템',
      position: 'MES 개발자',
      from: '2018.04',
      to: '2021.11',
    },
    {
      company: '티켓몬스터',
      position: '인턴',
      from: '2017.06',
      to: '2017.08',
    },
    {
      company: '대원씨앤씨',
      position: '인턴',
      from: '2016.09',
      to: '2016.11',
    },
  ],
  education: [
    {
      institution: '가톨릭대학교',
      degree: '컴퓨터정보공학부 학사',
      from: '2011',
      to: '2018',
    },
    {
      institution: '광명고등학교',
      degree: '이과',
      from: '2007',
      to: '2010',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    // id: 'G-WLLB5E14M6', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    // id: '2617601', //  Please remove this and use your own id or keep it empty
    // snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  introduce : {
    text : 
    '안녕하세요 \n'
    +
    '저는 천천히 항상 발전하기 위해 노력 하는 박정수 라고 합니다.\n'
    +
    '지금까지는 주로 java와 C# oracle 을 이용한 개발을 해왔습니다.\n'
    +
    '관심을 가지고 있는 기술은 react, spring 입니다.\n\n'


    +
    '득어망전 : 고기를 잡으면 어망을 잊는다 라는 말이 있습니다. \n'
    +
    '기술에만 너무 깊이 파고드는 것이 아닌,\n'
    +
    '내가 만들고자하는 것이 무엇이고, 무엇을 목표로 해야하는지\n'
    +
    '잊지 않는 개발자가 되겠습니다.\n\n'


    +
    '잘부탁드립니다.\n'
    +
    '감사합니다.\n'
    +
    '박정수 드림'
  },
};

export default config;
