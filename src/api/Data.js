import Global from './Global';
import http from '@/util/http';

//请求各医院全年住院统计图  东城社区医院、胡集医院
export function get_patient_num(params){
    const url = Global.baseURL+'/get_patient_num';
    return http.fetchGet(url,params)
}

//本年度各院住院人数统计 东城社区医院、胡集医院
export function get_patient_num_by_hospital(params){
    const url = Global.baseURL+'/get_patient_num_by_hospital';
    return http.fetchGet(url,params)
}
