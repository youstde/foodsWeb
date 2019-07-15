import axios from 'axios'
import { uuid, createSign } from './tools'
import { md5, Alert } from 'vux'

    const devUrl = '//api.fresh.laoniutech.com';
    // const devUrl = '//h5api.yicaipi.com'
    const prodTag = '//h5api.yicaipi.com';
    const codeMessage = {
        200: '服务器成功返回请求的数据。',
        201: '新建或修改数据成功。',
        202: '一个请求已经进入后台排队（异步任务）。',
        204: '删除数据成功。',
        400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
        401: '用户没有权限（令牌、用户名、密码错误）。',
        403: '用户得到授权，但是访问是被禁止的。',
        404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
        406: '请求的格式不可得。',
        410: '请求的资源被永久删除，且不会再得到的。',
        422: '当创建一个对象时，发生一个验证错误。',
        500: '服务器发生错误，请检查服务器。',
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。',
    }

    const showToastTxtOnly = (type, txt) => {
      const toast = this.$createToast({
        txt,
        type
      })
      toast.show()
    }

    const checkStatus = response => {
        if (response.status >= 200 && response.status < 300) {
            return response
        }
        const errortext = codeMessage[response.status] || response.statusText
        // Modal.error({
        //     title: `请求错误 ${response.status}: ${response.url}`,
        //     content: errortext,
        // })
        const error = new Error(errortext)
        error.name = response.status
        error.response = response
        throw error
    }

    const isDevelopment = process.env.NODE_ENV === 'development'

    const devBaseUrl = devUrl

    // const devBaseUrl = '//192.168.1.230:8099/'

    const prodBaseUrl = prodTag

    const baseUrl = isDevelopment ? devBaseUrl : prodBaseUrl

    // 实例化axios
    const instance = axios.create({
        baseURL: baseUrl,
        withCredentials: true,
        // timeout: 20000,
    })

    // const updateInstance = () => {
    //     const isRisk = window.location.pathname.indexOf('risk') > -1
    //     devBaseUrl = isRisk? 'risk.znckj.com' : '//api3.znckj.com/'
    //     prodBaseUrl =  isRisk? '/risk': '/admin'
    //     instance = axios.create({
    //         baseURL: baseUrl,
    //         withCredentials: true,
    //     })
    // }

    // 请求拦截器
    instance.interceptors.request.use(
        config => {
            // loading.show()
            window.sendMessage('toggle:loading', true)
            return config
        },
        error => {
            // loading.hide()
            window.sendMessage('toggle:loading', false)
            Promise.reject(error)
        }
    )

    // 响应拦截器
    instance.interceptors.response.use(
        res => {
            const { data } = res
            // loading.hide()
            window.sendMessage('toggle:loading', false)
            // code 500 处理菜单没有权限
            if (!data.success && data.code === 500) {
                // Modal.error({
                //     title: data.msg || data.message,
                //     okText: '返回主页',
                //     onOk: () => {
                //         window.location = mainSite()
                //     },
                // })
                return data
            }
            if (data.errcode !== 0) {
                // 请求出错
                if(data.errcode === 2000) {
                  console.log('from:', window.location.href)
                  const fromHref = window.location.href
                  const host = window.location.host
                  window.location.href = `//${host}/sign?from=${fromHref}`
                } else {
                  alert(data.message)
                }
            }
            return data
        },
        error => {
            // 如果跨域，则拿不到response
            const res = error.response
            // loading.hide()
            window.sendMessage('toggle:loading', false)

            if (res) {
                checkStatus(res)
            } else {
                // Modal.error({
                //     title: '请求错误',
                //     content: error.toString(),
                // })
            }
            Promise.reject(error)
        }
    )

    export default (url, method, config) => {
        const { params } = config;
        const uuId = localStorage.getItem('uuId')
        if (uuId) {
          params.sk = uuId
        } else {
          // uuid()
            // params.sk = uuid()
            // localStorage.setItem('uuId', params.sk)
        }
        const userInfoStr = localStorage.getItem('user_info')
        let localUk = ''
        if (userInfoStr) {
            const userInfo = JSON.parse(userInfoStr)
            localUk = userInfo.uk
        }
        if(localUk) params.uk = localUk
        params.ver = '1.0.0'
        params.ts = Date.parse(new Date().toUTCString()) / 1000
        const paramsArr = Object.keys(params).map(key => {
            return params[key]
        })
        params.sign = md5(createSign(paramsArr))
        config.params = params

        return instance({
            url,
            method,
            ...config,
        })
    }

