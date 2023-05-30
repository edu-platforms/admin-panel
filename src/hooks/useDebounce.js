import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function useDebounce(action) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const onSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(action(search));
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [action, search, dispatch]);

  return { onSearch };
}
