import { useState } from 'react';
import TabButton from "./TabButton";
import ModelButton from "./ModelButton";

export default function Specials() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };
    return (
        <div className="specials">
            <div>
                <h1>AI 체험 프로그램</h1>
            </div>
            <div className="tab">
                <div className="tab-bar-container">
                    <TabButton
                        isActive={selectedTab === 0}
                        onClick={() => handleTabClick(0)}
                    >
                        비지도학습
                    </TabButton>
                    <TabButton
                        isActive={selectedTab === 1}
                        onClick={() => handleTabClick(1)}>
                        지도학습
                    </TabButton>
                    <TabButton
                        isActive={selectedTab === 2}
                        onClick={() => handleTabClick(2)}>
                        강화학습
                    </TabButton>
                    <TabButton
                        isActive={selectedTab === 3}
                        onClick={() => handleTabClick(3)}>
                        개념학습
                    </TabButton>
                </div>
                <div className="button-container">
                    {selectedTab === 0 && (
                        <>
                            <ModelButton to="/famous">나와 유사한 유명인 찾기</ModelButton>
                            <ModelButton to="/about">사진 명화풍 만들기</ModelButton>
                            <ModelButton to="/about">키워드로 작문 하기</ModelButton>
                        </>
                    )}
                    {selectedTab === 1 && (
                        <>
                            <ModelButton to="/about">감기환자 분류</ModelButton>
                            <ModelButton to="/about">성별 나이 분류</ModelButton>
                            <ModelButton to="/about">텍스트 감정분석 하기</ModelButton>
                        </>
                    )}
                    {selectedTab === 2 && (
                        <>
                            <ModelButton to="/about">Flappy Bird</ModelButton>
                        </>
                    )}
                    {selectedTab === 3 && (
                        <>
                            <ModelButton to="/about">단어 맞추기</ModelButton>
                            <ModelButton to="/about">공유자전거 수요 예측</ModelButton>
                        </>
                    )}
                </div>
            </div>

        </div>

    );
}