import axios from "axios";

import { IP_ADRESS} from '@env';

export const api = axios.create({
  baseURL: `http://${IP_ADRESS}:3333` || "http://localhost:3333",
  timeout: 700,
});
