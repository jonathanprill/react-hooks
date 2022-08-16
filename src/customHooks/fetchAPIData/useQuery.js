import { useState, useEffect } from "react";

export default function useQuery(request) {

    const [response, setResponse] = useState({});

    useEffect(() => {
        request.then((fetchResponse) => {
            setResponse(fetchResponse.data)
        })
    }, [])

    return{ response };
}