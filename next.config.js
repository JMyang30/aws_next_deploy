/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // 설정시 .next 폴더 static, server 폴더 standalone 폴더로 이동
  images: {
    // 외부이미지 로드 보안 설정
    remotePatterns: [
      {
        protocol: "https",
        hostname: "developers.kakao.com",
        port: "",
        pathname: "/assets/img/about/logos/kakaolink/**",
      },
    ],
  },
  /* // docker 환경에서 hotreload 기능 사용시 주석 제거
   webpackDevMiddleware: (config) => {
     config.watchOptions = {
       poll: 1000,
       aggregateTimeout: 300,
     };
     return config;
   },
  */
};

module.exports = nextConfig;
