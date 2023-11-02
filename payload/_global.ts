import favicon from '../asset/favicon.ico';
import previewImage from '../asset/_knj.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME: Kim Nam Jun';
const description = '6년차 개발자 김남준 이력서';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'resume preview image _knj.jpg',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
