import axios from "axios";
import { useEffect, useState } from "react";


export function MarvelApi(RequestParam) {
    var URL = "http://gateway.marvel.com/"
    var ts = "1"
    var publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY
    var md5Value = process.env.REACT_APP_MARVEL_MD5
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [hasLoaded, setHasLoaded] = useState(false)
    const [hasLoadedRequest, setHasLoadedRequest] = useState(false)
    var URL_RESQUEST = `${URL}${RequestParam}ts=${ts}&apikey=${publicKey}&hash=${md5Value}`
    useEffect(() => {
        setHasLoadedRequest(false)
        axios.get(URL_RESQUEST)
            .then((ResponseData) => {
                setData(ResponseData.data.data.results)
            }).catch((err) => {
                setError(err)
            }).finally(() => {
                setHasLoaded(true)                
                setHasLoadedRequest(true)
            })
    }, [URL_RESQUEST])
    return { data, error, hasLoaded, hasLoadedRequest }
}
