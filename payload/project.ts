import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'AnimalZ 리워드 앱 서비스 구축 및 운영',
      startedAt: '2022-10',
      endedAt: '2023-03',
      where: '플리퍼코퍼레이션',
      descriptions: [
        { content: 'SNS앱에서 리워드 앱으로 서비스 구축' },
        {
          content: 'PM역할 및 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: '앱 다운로드 수 5천회 이상 증가' },
          ],
        },
        {
          content: '리워드 앱 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Google Admob 보상형, 네이티브, 배너, 전면 광고 기능 개발' },
            {
              content:
                'Google Firebase(Dynamic Links) 연락처, 카카오톡, 페이스북, 이메일 초대 기능 개발',
            },
            { content: 'Kakao, Google Android SDK 소셜 로그인 개발' },
            {
              content:
                'node-cron를 사용하여 스케줄러 구현, 매일 밤 12시 사용자 게시글, 좋아요, 팔로워에 점수에 따른 랭킹 최신화',
            },
            {
              content:
                '다우기술 모바일 쿠폰 서비스를 사용하여 쿠폰 시스템 개발, 쿠폰 발급, 쿠폰 취소',
            },
            { content: '네이버 클라우드 SMS API를 활용하여 SMS 발송 기능 개발' },
            { content: '클라이언트에 Needs에 맞는 앱 페이지 퍼블리싱' },
            {
              content:
                'Framework7를 활용한 SPA 관리자 페이지 설계/퍼블리싱/개발 진행 (메뉴: 배너, 쿠폰, 게시물, 회원, 포인트, 신고, 푸시 발송 관리)',
            },
          ],
        },
        {
          content: 'Google Play Store',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'https://play.google.com/store/apps/details?id=com.hitbim.AnimalZ' },
          ],
        },
      ],
    },
    {
      title: '딸기로픽 디저트 배달 앱 서비스 구축',
      startedAt: '2022-05',
      endedAt: '2022-09',
      where: '플리퍼코퍼레이션',
      descriptions: [
        { content: '교보생명 사내벤처 딸기로픽팀 디저트 배달 앱 서비스 구축' },
        {
          content: 'PM역할 및 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: '교보생명 사내벤처 1등 달성으로 팀 분사 및 태스크포스장 임명' },
          ],
        },
        {
          content: 'AWS(EC2), Node.js, Express, Android(Java), MySQL 환경에서의 개발 경험',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'BootPay를 활용한 결제 기능 개발(상품 결제, 상품 취소' },
            { content: 'Kakao, Google Android SDK를 활용한 소셜 로그인 개발' },
            { content: 'Kakao, Google Android SDK 소셜 로그인 개발' },
            {
              content:
                '메인 페이지, 상품 조회 페이지, 결제 페이지, 아파트 페이지, 마이 페이지 화면 개발',
            },
            {
              content:
                'Framework7를 활용한 SPA 관리자 페이지 퍼블리싱 및 개발 진행 (메뉴: 상품, 리뷰, 그룹, 회원, 주문, 쿠폰 관리)',
            },
          ],
        },
        {
          content: 'Google Play Store',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'https://play.google.com/store/apps/details?id=com.hitbim.Strawberry' },
          ],
        },
        {
          content: 'App Store',
          weight: 'MEDIUM',
          descriptions: [{ content: 'https://apps.apple.com/ng/app/딸기로픽/id1637026958' }],
        },
      ],
    },
    {
      title: '교원에듀 빨간펜 웹 사이트 구축',
      startedAt: '2021-03',
      endedAt: '2021-07',
      where: '이트라이브',
      descriptions: [
        {
          content: '교원에듀 빨간펜 사이트 구축',
          weight: 'MEDIUM',
          descriptions: [{ content: '기여도: 100%' }],
        },
        {
          content: '프론트엔드, 백엔드 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '메인 페이지, 빨간펜은?, 독서, 고객지원, 우리아이 진단 페이지 개발' },
            { content: '메인페이지, 공지사항, 공통 팝업 관리자 페이지 개발' },
          ],
        },
      ],
    },
    {
      title: 'LG 에너지솔루션 웹 사이트 초기 세팅 구축',
      startedAt: '2021-03',
      endedAt: '2021-03',
      where: '이트라이브',
      descriptions: [
        {
          content:
            'LG에너지 솔루션 프로젝트 환경 구축이 가능한 개발자의 부재로, LG 화학 사이트 기반의 프로젝트 초기 세팅 진행',
          weight: 'MEDIUM',
          descriptions: [{ content: '기여도: 100%' }],
        },
        {
          content: '프로젝트 초기 세팅 진행',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'LG CNS 네트워크 담당자와의 커뮤니케이션을 통한 테스트/운영 서버 배포' },
            { content: '문의하기 화면 개발 및 이메일 발송 API 개발' },
          ],
        },
        {
          content: 'LG 에너지 솔루션',
          weight: 'MEDIUM',
          descriptions: [{ content: 'https://www.lgensol.com/kr/index' }],
        },
      ],
    },
    {
      title: 'LG화학 웹 사이트 운영 업무 수행',
      startedAt: '2020-08',
      endedAt: '2021-03',
      where: '이트라이브',
      descriptions: [
        {
          content: '고객사 웹 사이트 유지보수 및 운영 업무 수행',
          weight: 'MEDIUM',
          descriptions: [{ content: '기여도: 100%' }],
        },
        {
          content: '사용자 및 관리자 페이지 운영 업무 수행',
          weight: 'MEDIUM',
          descriptions: [
            { content: '사회공헌(비전 및 전략과제, 운영 현황) 화면 신규 개발' },
            { content: '관리자 페이지에 생활 속 LG 화학 복사 기능 신규 개발' },
            { content: '국문, 영문, 일어, 중국어, 폴란드어, 독일어 다국어 문구 변경' },
            { content: '생명과학 등급 별 위해성 팝업(FO/BO) 수정' },
          ],
        },
        {
          content: 'LG화학',
          weight: 'MEDIUM',
          descriptions: [{ content: 'https://www.lgchem.com/main/index' }],
        },
      ],
    },
    {
      title: '키덜트하비라운지 웹 사이트 운영 업무 수행',
      startedAt: '2020-08',
      endedAt: '2021-03',
      where: '이트라이브',
      descriptions: [
        {
          content: '고객사 웹 사이트 유지보수 및 운영 업무 수행',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: '매년 보안 취약성 오류 수정' },
            { content: 'Jenkins를 활용한 배포 진행' },
            {
              content:
                '신규 유입 사용자가 없어 서비스 종료(AWS EC2, RDS, Route53, Amazon VPC, S3 서비스 종료/프로젝트/DB 백업)',
            },
          ],
        },
      ],
    },
    {
      title: '건담인포 웹 사이트 운영 업무 수행',
      startedAt: '2020-08',
      endedAt: '2021-03',
      where: '이트라이브',
      descriptions: [
        {
          content: '사용자 및 관리자 페이지 운영 업무 수행',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: '테스트/운영 서버 배포' },
            { content: '문구 수정, 팝업 교체, 이미지 교체, 오류 수정, 이벤트 관리 개발 및 운영' },
            { content: '매년 보안 취약성 오류 수정' },
            { content: 'GPC 참가 이벤트 화면 신규 개발' },
          ],
        },
        {
          content: '건담인포',
          weight: 'MEDIUM',
          descriptions: [{ content: 'https://kr.gundam.info/' }],
        },
      ],
    },
    {
      title: '바슈롬 웹 사이트 운영 업무 수행',
      startedAt: '2020-08',
      endedAt: '2021-03',
      where: '이트라이브',
      descriptions: [
        {
          content: '사용자, 관리자, 안경원 웹 사이트 운영 업무 진행',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: '적립금, 할인 쿠폰, 쿠폰 사용 내역의 환원, 주문취소, 쿠폰 내역 삭제' },
            { content: '신규 이벤트 추가 개발 (레이셀 2+1 적립금)' },
            { content: '모바일 배너 화면 오류 수정' },
            { content: ' 매년 보안 취약성 오류 수정' },
          ],
        },
        {
          content: '바슈롬',
          weight: 'MEDIUM',
          descriptions: [{ content: 'http://www.bausch.co.kr/' }],
        },
      ],
    },
    {
      title: '강북삼성병원 CIMCARE 건강검진 서비스 구축',
      startedAt: '2019-08',
      endedAt: '2020-04',
      where: '마블로터스',
      descriptions: [
        {
          content: '건강검진 결과 발송 서비스 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: 'Java, Spring, jQuery를 활용한 프론트엔드, 백엔드 개발' },
            { content: '건강검진 리포트 결과 화면 이메일 발송' },
            { content: '전자계약 솔루션 Eform을 활용하여 건강검진 리포트 결과 화면 구축' },
            { content: '건강검진 문항관리 관리자 페이지 개발' },
          ],
        },
      ],
    },
    {
      title: '강북삼성병원 온라인 근로계약 서비스 구축',
      startedAt: '2019-03',
      endedAt: '2019-07',
      where: '마블로터스',
      descriptions: [
        {
          content: '강북삼성병원 내부 의료진 온라인 근로계약 서비스 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: '강북삼성병원 내부 의료진 온라인 근로계약 서비스 구축' },
            {
              content:
                '정규직/계약직 온라인 근로계약 프로세스 설계(DB 설계, 프로세스 설계, 관리자 화면 기획 및 설계)',
            },
            { content: '전자계약 솔루션 eForm을 활용한 근로계약서 리포트 화면 개발' },
            { content: '휴대폰 및 I-PIN 본인인증 개발' },
            { content: '사용자 및 관리자 화면 개발' },
          ],
        },
      ],
    },
    {
      title: '위콩 앱 서비스 구축',
      startedAt: '2019-01',
      endedAt: '2019-03',
      where: '마블로터스',
      descriptions: [
        {
          content: '스타트업 앱 신규 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 30%' },
            { content: 'Spring Boot, JPA 를 활용한 게시판 개발 (CRUD)' },
            { content: 'Android Webview를 활용한 카메라, 앨범 CROP 기능 개발' },
          ],
        },
        {
          content: '위콩',
          weight: 'MEDIUM',
          descriptions: [{ content: 'http://www.weecong.com/' }],
        },
      ],
    },
    {
      title: '강북삼성병원 건강포털 웹 사이트 구축',
      startedAt: '2019-01',
      endedAt: '2019-03',
      where: '마블로터스',
      descriptions: [
        {
          content: '종합건진센터/예방건진센터/연구소 웹 사이트 통합 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 70%' },
            { content: 'Java, Spring, jQuery를 활용한 프론트엔드, 백엔드 개발' },
            { content: '사용자 및 관리자 페이지 게시판 개발 (CRUD)' },
            { content: '휴대폰 및 I-PIN 본인인증 개발' },
            { content: '회원정보 수정 기능 개발' },
          ],
        },
        {
          content: '건강포털',
          weight: 'MEDIUM',
          descriptions: [{ content: 'https://health.kbsmc.co.kr/jsp/main.jsp' }],
        },
      ],
    },
    {
      title: '강북삼성병원 S-CARE 웹 사이트 리뉴얼 구축',
      startedAt: '2018-07',
      endedAt: '2018-12',
      where: '마블로터스',
      descriptions: [
        {
          content: '강북삼성병원 모바일 웹 페이지 S-CARE 리뉴얼 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: 'Java, Spring, jQuery를 활용한 프론트엔드, 백엔드 개발' },
            { content: 'Samsung Pass 솔루션을 활용한 생체 로그인 개발(홍채, 지문, 얼굴인식)' },
            { content: '강북삼성병원 내원 사용자 주차 등록 페이지 개발' },
            { content: '휴대폰 및 I-PIN 본인인증 개발' },
            { content: '관리자 페이지 게시판 개발 (CRUD)' },
          ],
        },
        {
          content: 'S-CARE',
          weight: 'MEDIUM',
          descriptions: [{ content: 'https://m.kbsmc.co.kr/index.view' }],
        },
      ],
    },
    {
      title: '강북삼성병원 채용 웹 사이트 구축',
      startedAt: '2018-02',
      endedAt: '2018-06',
      where: '마블로터스',
      descriptions: [
        {
          content: 'SI 프로젝트 개발 참여',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 30%' },
            { content: 'jQuery를 활용한 프론트엔드 개발' },
            { content: '채용 페이지 화면 개발' },
          ],
        },
        {
          content: '채용사이트',
          weight: 'MEDIUM',
          descriptions: [{ content: 'http://recruit.kbsmc.co.kr/jsp/main.jsp' }],
        },
      ],
    },
    {
      title: '(사)한국소비자교육지원센터 웹 사이트 구축',
      startedAt: '2018-02',
      endedAt: '2018-03',
      where: '마블로터스',
      descriptions: [
        {
          content: 'SI 프로젝트 개발 참여',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            {
              content:
                'Wordpress 언어를 활용하여 웹 사이트 전체 개발 (메인/센터소개/소비자교육/소비자정보/알림마당)',
            },
          ],
        },
        {
          content: '(사)한국소비자교육지원센터',
          weight: 'MEDIUM',
          descriptions: [{ content: 'https://www.koince.org/' }],
        },
      ],
    },
    {
      title: '약진통상 디자인 리뉴얼 웹 사이트 구축',
      startedAt: '2018-06',
      endedAt: '2018-09',
      where: '마블로터스',
      descriptions: [
        {
          content: 'SI 프로젝트 개발 참여',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: '약진통상 웹 사이트 신규 퍼블리싱 적용' },
            { content: '테스트 및 운영 서버 배포' },
          ],
        },
        {
          content: '약진통상',
          weight: 'MEDIUM',
          descriptions: [{ content: 'http://www.yakjin.com/' }],
        },
      ],
    },
    {
      title: '메가박스(MEGABOX-운영백서) 추가 개발',
      startedAt: '2018-01',
      endedAt: '2018-07',
      where: '마블로터스',
      descriptions: [
        {
          content: '내부 직원 교육 앱 서비스 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: 'Java, Spring, Android Webivew 환경에서의 개발 경험' },
            { content: '카메라 및 앨범 파일 업로드 기능 개발' },
            { content: '카메라 및 앨범 CROP 기능 개발' },
            { content: '관리자 페이지 페이징 기능 개발' },
          ],
        },
      ],
    },
    {
      title: '강북삼성병원 S-EMR 앱 구축',
      startedAt: '2017-10',
      endedAt: '2017-12',
      where: '마블로터스',
      descriptions: [
        {
          content: '강북삼성병원 내부 의료진 앱 서비스 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 30%' },
            { content: 'jQuery를 활용한 프론트엔드 개발' },
            { content: '입원 및 외래 화면 개발 (환자들의 현재 상태의 정보를 제공하는 화면 개발)' },
          ],
        },
        {
          content: 'S-EMR',
          weight: 'MEDIUM',
          descriptions: [{ content: 'http://marblelotus.com/portfolio-items/semr/' }],
        },
      ],
    },
    {
      title: 'MS저축은행 운영 업무',
      startedAt: '2017-10',
      endedAt: '2020-04',
      where: '마블로터스',
      descriptions: [
        {
          content: '고객사 웹 사이트 유지보수 및 운영 업무 수행',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기여도: 100%' },
            { content: '클라이언트와 커뮤니케이션을 통한 개발 진행' },
            { content: '사용자 및 관리자 페이지 운영 업무 수행' },
            { content: '여신 거래 내역 화면 수정 및 추가 개발' },
            { content: '매년 공인인증서 및 initech 라이센스 재발급' },
            { content: '매년 보안검사를 통한 보안 수정사항 개발' },
          ],
        },
      ],
    },
  ],
};

export default project;
