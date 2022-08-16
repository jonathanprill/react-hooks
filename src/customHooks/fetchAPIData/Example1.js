import axios from "axios"
import useQuery from "./useQuery"
// https://foodish-api.herokuapp.com/api

export default function Example1() {

    const { response } = useQuery(axios.get('https://foodish-api.herokuapp.com/api'));




    return (
        <div>
            <img src={response.image} alt='foodimage' style={{width: "400px"}}/>
        </div>
    )

}