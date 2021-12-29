import axios from 'axios';
import Papa from 'papaparse';
import {Product} from './types';

const url =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFLIoX4UWxMx2XneqTSrEokPHsoW29Ofw0kpf8nborSrh8YMnfY2WM5vUuBTXSnrlaN6dNzBZQOx6z/pub?output=csv';

const api = {
  list: async (): Promise<Product[]> => {
    return axios.get(url, {responseType: 'blob'}).then(response => {
      return new Promise<Product[]>((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: results => {
            const products = results.data as Product[];

            const res = products.map(product => ({
              ...product,
              price: Number(product.price),
            }));

            return resolve(res);
          },
          error: err => reject(err.message),
        });
      });
    });
  },
};

export default api;
