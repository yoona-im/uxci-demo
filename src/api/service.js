import http from './http';

export const queryListData = (params) => {
  return http.post('api/mpiview.mpiManageRpcService/selectPatientInfoByParamsForPage', params);
}