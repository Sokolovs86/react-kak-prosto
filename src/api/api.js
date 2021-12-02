import React from 'react';
import * as axios from 'axios';

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    {
      withCredentials: true,
    }
  );
};















// const instance = axios.create({
//   withCredentials: true,
//   baseURL: "https://social-network.samuraijs.com/api/1.0/",
//   headers: {
//     "API-KEY": "513d06ec-0e54-4e4f-add7-d8a92a070409",
//   },
// });

// export const usersAPI = {
//   getUsers(currentPage = 1, pageSize = 10) {
//     return instance
//       .get(`users?page=${currentPage}&count=${pageSize}`)
//       .then((response) => {
//         return response.data;
//       });
//   },
// };
