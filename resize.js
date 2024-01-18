const sharp = require("sharp");

(async () => {
  const image = await sharp("./my-image.jpg")
    .resize(500, 500, { fit: "contain" }) // fit : contain 가로 세로 비율을 강제 유지
    .withMetadata() // 원본 이미지의 메타데이터 포함
    .toFormat("jpeg", { quality: 100 }) // 포맷, 퀄리티 지정
    .toFile("resizeIMG.jpeg", (err, info) => {
      // 리사이징된 이미지를 로컬에 저장
      console.log(`리사이징 이미지 info : ${JSON.stringify(info, null, 2)}`);
    })
    .toBuffer(); // 리사이징된 이미지를 노드에서 읽을수 있게 buffer로 변환
})();
