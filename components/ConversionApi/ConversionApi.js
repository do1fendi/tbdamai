import { forwardRef, useImperativeHandle } from "react";

const conversionApi = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        runApi(dt) {
            getIp(dt);
        }
    }));

    const getIp = async (dt) => {
        const rawResponse = await fetch(
            "https://api.ipify.org/?format=json",
            {
                method: "GET",
            }
        );
        const res = await rawResponse.json();
        conversionApi(res.ip, dt);
    };

    function conversionApi(ip, dt) {
        (async () => {
            const data = JSON.stringify({
                data: [
                    {                        
                        action_source: "website",
                        user_data: {
                            client_ip_address: ip,
                            client_user_agent: navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g, '$1'),
                        },
                        ...dt
                    },
                ],
                test_event_code: "TEST8782",
            });
            const rawResponse = await fetch(
                "https://api.tbdamai.net/conversionApi/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: data,
                }
            );
            const res = await rawResponse;
            // console.log(res);
        })();
    }

    return (
        <div>

        </div>
    )
})

export default conversionApi
