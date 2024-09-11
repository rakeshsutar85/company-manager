import axios from 'axios';

const api_key = 'HIRE840770DDB2F381CA41BA84AA6A9ABE68B0EE';
const baseUrl = 'https://api.recruitly.io/api/company';
const params = { apiKey: api_key, format: 'json' };


const axiosInstance = axios.create({
  baseURL: baseUrl,
  params: params,
  headers: {
    'Authorization': `Bearer ${api_key}`,
  },
});

export const getCompanies = async () => axiosInstance.get('');
export const getCompanyById = async (id) => axiosInstance.get(`/${id}`);
export const createCompany = async (company) => axiosInstance.post('/', company);
export const updateCompany = async (id, company) => axiosInstance.post(`/${id}`, company);
