import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alertActions";
import { getWeather, setLoading } from "../store/actions/weatherActions";

interface SearchProps {
  title: string;
}

const Search = ({ title }: SearchProps) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState<string>("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return dispatch(setAlert("City is required"));
    }
    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };
  return (
    <>
      <h1>{title}</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='city'
          placeholder='Enter city name'
          value={city}
          onChange={changeHandler}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default Search;
