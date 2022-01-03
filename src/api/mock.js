import Mock from 'mockjs';
import homeApi from './mockServerData/home';

Mock.mock('/api/home/getDate', homeApi.getStatisticalData);
