import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  return [keyword, onKeywordChangeHandler];
};

export default useSearch;
