import React from "react";

function CopylightFooter() {
  return (
    <footer
      className="inset-x-0 bottom-0 bg-neutral text-neutral-content py-8 flex flex-col justify-center items-center mt-10"
      style={{ height: "150px" }}
    >
      <p className="text-center">
        Copylight 2024. comgb Co. All rights reserved.
      </p>
      <p className="text-center">
        이 사이트는 react와 spring boot를 학습하기 위해 제작된 사이트입니다.
        문제가 되는 부분이 있다면 알려주세요.{" "}
        <a
          href="mailto:elin.ye.joon@gmail.com?cc=kws022788@gmail.com, woogin2885@gmail.com&subject=컴가비 관련 사항입니다."
          className="underline text-primary"
        >
          elin.ye.joon@gmail.com
        </a>
      </p>
    </footer>
  );
}

export default CopylightFooter;
