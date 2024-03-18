import React, { useEffect, useState } from "react";
import { REST_API } from "./constant";

const useRestMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch(REST_API + resId);
    const json = await data.json();
    setRestInfo(json);
  };
  return restInfo;
};

export default useRestMenu;
