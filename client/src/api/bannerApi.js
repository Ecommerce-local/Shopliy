import axiosClient from './axiosClient'

const bannerApi = {
  getAllBanner: () => axiosClient.get('banners'),
}

export default bannerApi
