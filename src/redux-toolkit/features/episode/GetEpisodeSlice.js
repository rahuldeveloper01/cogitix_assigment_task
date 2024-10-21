import { createAsyncThunk } from "@reduxjs/toolkit";
import PageIndex from "../../../components/PageIndex";
import { API } from "../../../config/API";
import DataService from "../../../config/DataService";


export const getEpisodeList = createAsyncThunk("/getEpisodeList", async () => {
  try {
    const response = await DataService.get(API.Episode.GET_EPISODE_LIST);
console.log(response,"response");

    return response?.data;
  } catch (error) {
    PageIndex.toast.error(error?.response?.data?.message);
  }
});


