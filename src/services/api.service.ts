import axios from 'axios';
import { environment } from '../config/api-server.config';

export const api = axios.create({
  baseURL: environment.backendServerUrl,
});
