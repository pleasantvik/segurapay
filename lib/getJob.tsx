import CareerData from "../data/career.json";
import axios from "axios";

export const getJob = async () => {
  //   const data = await axios.get(CareerData);

  return CareerData.career;
};
