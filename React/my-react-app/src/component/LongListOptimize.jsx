import React, { useState, useEffect, useRef } from "react";

const height = 40; //列表的每个item的高度为40
const bufferSize = 5; //缓冲区域，实现无缝滚动的效果

function A(props) {
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  const container = useRef(null);
  const actionData = useRef({
    startIndex: 0,
    endIndex: 0,
    visibleCount: 20 + bufferSize,
    data: new Array(1000).fill("test"), //初始化1000条数据做测试
  });

  //计算 startIndex 和  endIndex 并设置上下边距
  const updateBoundary = (scrollTop) => {
    const { data, visibleCount } = actionData.current;
    const dataLength = data.length;
    const startIndex = Math.min(
      Math.floor(scrollTop / height),
      dataLength - visibleCount
    );
    const endIndex = startIndex + visibleCount;
    actionData.current.startIndex = startIndex;
    actionData.current.endIndex = endIndex;
    setStartOffset(startIndex * height);
    setEndOffset((dataLength - endIndex) * height);
  };

  // 通过 startIndex, endIndex 截取真实的数据做渲染
  const updateVisibleData = () => {
    const { startIndex, endIndex, data } = actionData.current;
    setVisibleData(data.slice(startIndex, endIndex));
  };

  const handleScroll = () => {
    const scrollTop = container.current.scrollTop;
    updateBoundary(scrollTop);
    updateVisibleData();
  };

  // 初始化
  useEffect(() => {
    const { visibleCount, startIndex } = actionData.current;
    actionData.current.endIndex = visibleCount + startIndex;
    updateVisibleData();
  }, []);

  return (
    <div
      className="virtual-list-container"
      style={{
        width: "100%",
        height: "100vh",
        overflow: "scroll",
        backgroundColor: "pink",
      }}
      onScroll={handleScroll}
      ref={container}
    >
      <div
        className="virtual-list-wrap"
        style={{
          width: "100%",
          paddingTop: `${startOffset}px`,
          paddingBottom: `${endOffset}px`,
        }}
      >
        {visibleData.map((item, index) => (
          <div
            className="virtual-list-item"
            style={{
              height: "40px",
              lineHeight: "40px",
              borderBottom: "1px solid black",
            }}
            key={index}
          >
            {item}----{index + actionData.current.startIndex}
          </div>
        ))}
      </div>
    </div>
  );
}
export default A;
