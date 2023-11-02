import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    `
      6년차 개발자로서 백엔드 및 프론트엔드 개발 업무를 수행하며 다수의 구축 및 운영 프로젝트에서 웹 및 앱을 개발한 경험이 있습니다. 
      주로 Java, Spring, Android, Node.js, Oracle, MySQL 등의 기술을 활용하여 서비스를 설계, 개발 및 배포했습니다. 
      스타트업에서 근무하면서 PM(Project Manager) 역할을 맡아 개발 체계를 구축하고, 솔루션을 활용하여 1억 원의 매출을 기여한 경험이 있습니다.
    `,
    `
      20개 이상의 구축 및 운영 프로젝트를 다양한 팀원과 협력하여 개발하면서, 커뮤니케이션 능력과 메모 능력이 개발자에게 가장 필요한 역량이라고 생각합니다. 
      고객의 요구사항, 팀원 간의 이해 차이, 그리고 개발자들의 작업 결과물의 이해 차이로 인해 결과가 다르게 나타나고 프로젝트 일정 지연 및 비용 증가 등의 문제가 발생할 수 있습니다. 
      이러한 이유로 항상 커뮤니케이션과 메모를 중요시하며, 개발과정에서 실수를 방지하기 위해 노력하였습니다.
    `,
    `
      저는 앞으로 다양한 기술적 경험을 쌓아, 여러 개발자들에게 기술적인 경험을 공유하며 같이 성장할 수 있는 시니어 개발자가 되는 것이 목표입니다.
    `,
  ],
  sign: 'KNJ',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
