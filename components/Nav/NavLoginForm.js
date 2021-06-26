import { useState, useContext, useRef } from "react";
import { StoreContext } from "../../store/store";
import FacebookLogin from "react-facebook-login";

export default function NavLoginForm(props) {
  const ctx = useContext(StoreContext);
  const userN = useRef(null);
  const pass = useRef(null);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const facebookLogin = (response) => {
    // console.log(response)
    let fbData = {
      fbId: response.id,
      fbName: response.name,
      fbEmail: response.email,
      fbToken: response.accessToken,
      fbTokenExpiration: response.data_access_expiration_time,
      fbPicUrl: response.picture.data.url,
    }
    if (response) {
      (async () => {
        const rawResponse = await fetch(`${process.env.BASEURL}/fbLogin`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fbData),
        });
        const res = await rawResponse.json();
        if (res.status == 'Success') {
          localStorage.setItem('token', res.token)
          ctx.setLogged(true)
          props.closeModal()
        }
      })();
    }

  };

  const webLogin = () => {
    if (!form.username) {
      userN.current.focus();
    } else if (!form.password) {
      pass.current.focus();
    } else {
      (async () => {
        const rawResponse = await fetch(`${process.env.BASEURL}/login`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        const res = await rawResponse.json();
        console.log(res);
        // if login success
        if (res.token) {
          localStorage.setItem('token', res.token)
          ctx.setLogged(true);
          props.closeModal()
        }
      })();
    }
  };

  return (
    <div>
      <input
        ref={userN}
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        type="text"
        className="w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500"
        placeholder="Username or Email"
      />
      <input
        ref={pass}
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        type="password"
        className="w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500"
        placeholder="Password"
      />
      <button
        onClick={() => webLogin()}
        className="mb-2 bg-sinbad-700 hover:bg-sinbad-900 text-white font-bold py-1 px-4 rounded-lg mt-2 w-full focus:outline-none"
      >
        Login
      </button>
      <FacebookLogin
        appId={process.env.FACEBOOK_APP_ID}
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile"
        callback={facebookLogin}
        icon="fa-facebook"
        size="small"
      />
    </div>
  );
}
