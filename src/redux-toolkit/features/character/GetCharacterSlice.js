import { createAsyncThunk } from "@reduxjs/toolkit";
import PageIndex from "../../../components/PageIndex";
import { API } from "../../../config/API";
import DataService from "../../../config/DataService";

export const getCharacterList = createAsyncThunk(
  "/getCharacterList",
  async () => {
    try {
      const response = await DataService.get(API.Character.GET_CHARACTER_LIST);
      console.log(response, "get-single-response-->");

      return response?.data;
    } catch (error) {
      PageIndex.toast.error(error?.response?.data?.message);
    }
  }
);

export const getCharacterListById = createAsyncThunk(
  "/getCharacterListById",
  async (id) => {
    try {
      const response = await DataService.get(
        `${API.Character.GET_CHARACTER_LIST}/${id}`
      );
      console.log(response, "get-characterlist");

      return response?.data;
    } catch (error) {
      PageIndex.toast.error(error?.response?.data?.message);
    }
  }
);
