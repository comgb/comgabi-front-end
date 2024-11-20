import React from "react";

function FloatingBox() {
  return (
    <div className="bg-neutral p-4 rounded-lg items-center flex flex-col">
      {/* Header */}
      <div className="bg-base-200 text-center py-3 rounded-lg text-xl font-semibold mb-4 text-gray-700 w-full">
        AI 상품 설명
      </div>

      {/* Category Buttons */}
      <div className="flex flex-row justify-center mb-4 w-full">
        <div className="btn rounded-md text-md text-nowrap" style={{width: "32%", marginRight: "1.5%"}}>
          가정용
        </div>
        <div className="btn rounded-md text-md text-nowrap" style={{width: "32%",}}>
          업무용
        </div>
        <div className="btn rounded-md text-md text-nowrap" style={{width: "32%", marginLeft: "1.5%"}}>
          게임용
        </div>
      </div>

      {/* Description Box */}
      <div className="bg-base-100 p-4 rounded-lg text-gray-800 mb-4 text-sm">
        <p>
          - 적합성: 가정용으로 충분히 적합합니다. 램 8GB와 SSD 500GB는 일상적인
          웹서핑, 영상 시청, 가벼운 소프트웨어 실행 등 기본적인 작업에 충분한
          성능을 제공합니다.
        </p>
        <p>
          - 장점: 빠른 SSD는 시스템 부팅과 파일 열기에 빠른 속도를 제공하여
          쾌적한 사용자 경험을 줄 것입니다.
        </p>
        <p>
          - 결론: 가정용으로 적합하며, 가격 대비 성능이 충분히 좋은 편입니다.
        </p>
      </div>

      {/* Recommendation Box */}
      <div className="bg-base-100 p-4 rounded-lg text-gray-800 text-sm">
        <p className="font-semibold">추천</p>
        <p>
          이 컴퓨터는 1,000,000원의 가격으로 가정용과 업무용, 그리고 중간 수준의
          게임용으로 모두 훌륭한 선택입니다. 다만, 더욱 쾌적이나 고사양 게임에서
          뛰어난 성능을 기대한다면 램을 16GB로 업그레이드하는 것을 권장합니다.
        </p>
        {/* 여기에 추가적인 추천 내용을 입력하여 추천 박스를 더 크게 만들 수 있습니다. */}
      </div>
    </div>
  );
}

export default FloatingBox;
