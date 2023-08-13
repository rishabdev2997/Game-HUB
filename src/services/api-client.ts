import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "45fdd086de784f9aa44b30ceca24f8a9",
  },
});
