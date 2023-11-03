import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '중앙 HTA',
      subTitle: '6개월 과정 웹 프로그래밍',
      startedAt: '2016-04',
      endedAt: '2016-10',
    },
    {
      title: '아주자동차대학',
      subTitle: '자동차계열 / 자퇴',
      startedAt: '2013-03',
      endedAt: '2013-06',
    },
    {
      title: '포천고등학교',
      subTitle: '이과계열 / 졸업',
      startedAt: '2010-03',
      endedAt: '2013-02',
    },
  ],
};

export default education;
