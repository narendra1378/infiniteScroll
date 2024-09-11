import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Box from "./Component/Box1";

function App() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 10 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    setTimeout(() => {
      setDataSource(dataSource.concat(Array.from({ length: 20 })));
    }, 500);
  };
  return (
    <div className="App">
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
      >
        {dataSource.map((item, index) => {
          // <div style={style}>Thus is div #{index + 1}InfiniteScroll</div>
          return <Box />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
