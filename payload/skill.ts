import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'Express.js',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Spring',
      level: 3,
    },
    {
      title: 'SpringBoot',
      level: 2,
    },
    {
      title: 'Apache',
      level: 2,
    },
    {
      title: 'MyBatis',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'Oracle',
      level: 3,
    },
    {
      title: 'MSSQL',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Android',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 3,
    },
    {
      title: 'javascript',
      level: 3,
    },
    {
      title: 'JQuery',
      level: 3,
    },
    {
      title: 'JSRender',
      level: 2,
    },
    {
      title: 'Framework7',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'Svn',
    },
    {
      title: 'JIRA',
    },
    {
      title: 'Trello',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'STS',
    },
    {
      title: 'VSCode',
    },
    {
      title: 'Android Studio',
    },
    {
      title: 'Xcode',
    },
    {
      title: 'SQL Developer',
    },
    {
      title: 'DBeaver',
    },
    {
      title: 'Sourcetree',
    },
    {
      title: 'Fork',
    },
    {
      title: 'FileZilla',
    },
    {
      title: 'PuTTy',
    },
    {
      title: 'iTerm2',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
