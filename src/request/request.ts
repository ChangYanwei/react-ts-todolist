import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default function request(config: AxiosRequestConfig) {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:9105",
    timeout: 5000
  });

  instance.interceptors.response.use((res: AxiosResponse) => {
    return res.data;
  });

  return instance(config);

  // return new Promise((resolve, reject) => {
  //   instance(config).then(res => {
  //     resolve(res);
  //   }).catch(err => {
  //     reject(err)
  //   })
  // })
}
