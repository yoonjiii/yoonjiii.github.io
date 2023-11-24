// gitprofile.config.js

const config = {
  profile: {
    name: 'Yoon Ji', // Add the name here
    bio: 'Software Engineer | Open Source Enthusiast | PHP | Node.js | React', // Add the bio here
  },
  github: {
    username: 'yoonjiii', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'yoonjiii',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'yoonjian@g.skku.edu',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'Python',
    'Java',
    'Kotlin',
    'JavaScript',
    'Node.js',
    'PostgreSQL',
    'Git',
    'HTTP',
    'CSS',
  ],
  experiences: [
    {
      company: 'Lululab',
      position: 'Intern',
      from: 'April 2022',
      to: 'December 2022',
      companyLink: 'https://www.lulu-lab.com/',
    },
    {
      company: 'Codime',
      position: 'Intern',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://codime.io/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Sungkyunkwan University',
      degree: 'Bachelor of Software',
      from: '2020',
      to: '~',
      coursework: 'Data Structure, Algorithm, Problem Solving, System Program, Introduction to Computer Architecture, Computer Networks',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'OCR을 이용한 화장품 성분정보 제공 서비스 개발',
      description:
        'OCR을 이용한 화장품 성분DB 수집 시스템 구축.',
      imageUrl: 'https://github.com/yoonjiii/yoonjiii.github.io/blob/b94825fcd8eac2ffc563098fcd52bcdb02e7e61c/files/project_img1.png',
      link: 'https://github.com/yoonjiii/yoonjiii.github.io/blob/b94825fcd8eac2ffc563098fcd52bcdb02e7e61c/files/2022%20%EC%82%B0%ED%95%99%ED%98%91%EB%A0%A5%EA%B3%BC%EC%A0%9C%20%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C_%EB%A3%B0%EB%A3%A8%EB%9E%A9.pdf',
    },
    {
      title: 'Stable diffusion을 활용한 패션 잡화 이미지 생성 모델 개발',
      description:
        '루이까또즈 브랜드의 패션 잡화 이미지를 학습하여 프롬프트로 상품명을 입력했을 때 여러 각도의 잡화 이미지를 생성하는 모델',
      imageUrl: 'https://github.com/yoonjiii/yoonjiii.github.io/blob/4fc47a8e5b357d6093831ef0562008f184ec9e8f/files/project_img2.png',
      link: 'https://github.com/yoonjiii/yoonjiii.github.io/blob/4fc47a8e5b357d6093831ef0562008f184ec9e8f/files/%ED%95%98%EA%B3%84%EC%A7%91%EC%A4%91%EA%B7%BC%EB%AC%B4%20-%EC%BD%94%EB%94%94%EB%AF%B8.pdf',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
