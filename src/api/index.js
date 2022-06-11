import axios from "axios";
// import { useEffect, useState } from "react";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error);
  }
};
// export const fetchData = async () => {
//   try {
//     let res = await fetch(url);
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
