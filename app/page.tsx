import { Button } from "@/components/ui/button";
import Image from "next/image";

import Cat from "./public/cat-8361048.jpg";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section className="mb-10">
        <h1>ENV 연결 : {process.env.FILETEST_ENV}</h1>
        <h1>Docker build</h1>
        <h1>Docker Compose Build</h1>
        <h1>tailwind config</h1>
        <h1>postcss config</h1>
        <h1>shadcn library</h1>
        <h1>next standalone</h1>
      </section>
      <section>
        <h1>
          sharp 적용 - 이미지최적화, 외부 이미지 로드시 빌드타임에 이미지
          접근불가, width height 필수, blur 이미지 생성안되므로 placeholder
          사용시 base64 인코딩 데이터 직접 설정
        </h1>
        <Image
          width={1000}
          layout="responsive"
          src={Cat}
          alt="고양이"
          placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        />
        <Button>shad</Button>
      </section>
    </main>
  );
}
