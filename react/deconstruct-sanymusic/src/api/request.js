import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get ('/banner');
}

export const getRecommendListRequest = () => {
  return axiosInstance.get ('/personalized');
}

export const getHotSingerListRequest = (count) => {
  console.log(`/top/artists?offset=${count}`)
  return axiosInstance.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest= (category, alpha, count) => {
  console.log(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`)
  return axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}

export const getRankListRequest = () => {
  return axiosInstance.get (`/toplist/detail`);
};

export const getAlbumDetailRequest = id => {
  return axiosInstance.get (`/playlist/detail?id=${id}`);
};