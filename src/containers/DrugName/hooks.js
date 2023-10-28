/* eslint-disable no-useless-catch */
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useApi } from "../../config/api";

export const useDrugName = () => {
  const { state } = useLocation();
  const { api, apiEndpoints } = useApi();

  const [ndc, setNdc] = useState([]);

  const getData = useCallback(
    async (val) => {
      try {
        const data = await api().get(`${apiEndpoints.rxcui(val)}`);
        if (data.status === 200) {
          if (data.data.ndcGroup?.ndcList?.ndc) {
            setNdc(data.data.ndcGroup?.ndcList?.ndc);
          }
        }
      } catch (error) {
        throw error;
      }
    },
    [api, apiEndpoints]
  );

  useEffect(() => {
    console.log(state);
    if (state?.rxcui) {
      getData(state?.rxcui);
    }
  }, [state?.rxcui]);

  return { ndc, state };
};
