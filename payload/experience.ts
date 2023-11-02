import { IExperience } from '../component/experience/IExperience';

/**
 * endedAt 부분을 삭제하면, 재직중으로 표시가 가능
 */
const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '플리퍼코퍼레이션',
      position: '개발팀 개발팀장 / 프론트 개발자',
      startedAt: '2021-10',
      endedAt: '2023-07',
      descriptions: [
        'Hitbim / 앱 빌더 서비스 스타트업 (10명, 개발팀 4~6명)',
        '프로젝트 PM 역할 및 개발',
        '앱 빌더 서비스 프로세스 설계 및 개발',
        '앱 빌더 Android 플러그인 개발',
        '리워드 앱 애니멀즈 서비스 풀스택 개발 (앱 다운로드 수 5천회 이상 증가)',
        '디저트 배달 앱 서비스 풀스택 개발 (교보생명 사내밴처 1등 달성)',
        '앱 빌더 서비스 : https://developer.hitbim.com/',
      ],
      skillKeywords: ['Node.js', 'Express.js', 'Android', 'iOS', 'MySQL', 'AWS'],
    },
    {
      title: '이트라이브',
      position: '스마트테크놀로지 대리 / 백엔드 개발자',
      startedAt: '2020-08',
      endedAt: '2021-10',
      descriptions: [
        '웹 에이전시 (132명, 개발팀 10명) ',
        '고객사 웹 사이트 유지보수 및 운영 업무 수행 (바슈롬, 건담인포, 키덜트하비라운지, LG 화학)',
        '고객사 웹 사이트 PL 역할 및 개발 (롯데 리조트 트래브러리)',
        '클라이언트의 요구에 부합하는 사용성 개선 및 신규 비즈니스 로직 구현',
      ],
      skillKeywords: [
        'Java',
        'Spring',
        'Spring Boot',
        'Oracle',
        'Javascript',
        'JQuery',
        'Thymeleaf',
        'JSP',
        'AWS',
      ],
    },
    {
      title: '마블로터스',
      position: '개발팀 사원 / 백엔드 개발자',
      startedAt: '2017-10',
      endedAt: '2020-04',
      descriptions: [
        'SI (9명, 개발팀 5명) ',
        '고객사 웹 사이트 유지보수 및 운영 업무 수행 (MS 저축은행)',
        '구축 프로젝트 참여 및 개발',
        '강북삼성병원 온라인 근로계약 서비스 삼성 SDS 보안 검사 0건 달성',
      ],
      skillKeywords: [
        'Java',
        'Spring',
        'Spring Boot',
        'Oracle',
        'MSSQL',
        'Javascript',
        'JQuery',
        'JSP',
      ],
    },
  ],
};

export default experience;
