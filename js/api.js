const BASE_URL = "http://localhost:1111";
const RESOURCE_URL = `${BASE_URL}/plane`;

const baseRequest = async ({urlPath = "", method = "GET", body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getAllPlanes = async () => {
    const rawResponse = await baseRequest({method: "GET"});
    return await rawResponse.json();
};

export const addPlane = (body) => baseRequest({method: "POST", body});

export const updatePlane = (body) => baseRequest({method: "PUT", body});

export const deletePlane = (id) =>
    baseRequest({urlPath: `/${id}`, method: "DELETE"});
