import React, { useState } from "react";
import useFetch from "./useFetch";

const Indexfetch = () => {
  const [fetch, setFetch] = useState(false);

  const onClickHandle = () => {
    setFetch(true);
  };

  const { data, loading, error } = useFetch(
    fetch ? "https://dummyjson.com/products" : null,
    {}
  );

//   console.log(data?.products, loading, error);

  return (
    <div>
      <button onClick={onClickHandle}>Get Data</button>
      <h1>Use Fetch Hook</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && data.products && data.products.length > 0 &&
        data.products.map((item) => <h3 key={item.id}>{item.title}</h3>)
      }
    </div>
  );
};

export default Indexfetch;
