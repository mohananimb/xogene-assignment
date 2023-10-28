/* eslint-disable no-useless-catch */
import { useState } from "react";
import { useApi } from "../../config/api";
import { useNavigate } from "react-router-dom";

export const useDrugsSearch = () => {
  const [drugs, setDrugs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");

  const [inputVal, setInputVal] = useState("");
  const { api, apiEndpoints } = useApi();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await api().get(apiEndpoints.getDrugs + "?name=" + inputVal);
      if (data.status == 200) {
        if (data.data.drugGroup?.conceptGroup) {
          setDrugs(data.data.drugGroup?.conceptGroup);
          setSuggestions([]);
          setError("");
        } else {
          setDrugs([]);
          getSpellingSuggestion();
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const getSpellingSuggestion = async () => {
    try {
      const result = await api().get(`${apiEndpoints.spellingSuggestion}?name=${inputVal}`);
      if (result.status == 200) {
        if (result.data.suggestionGroup?.suggestionList?.suggestion) {
          setSuggestions(result.data.suggestionGroup?.suggestionList?.suggestion);
          setError("");
        } else {
          setSuggestions([]);
          setError("Nothing Could be found for that terrm.");
        }
      }
    } catch (error) {
      throw error;
    }
  };

  return { drugs, inputVal, handleChange, handleSubmit, suggestions, error, navigate };
};
