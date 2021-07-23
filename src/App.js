import Login from "./pages/Login";
import Register from "./pages/Register";

import "./assets/css/App.css";
import React, { useState, useEffect } from "react";
import Main from "./pages/Main";

function App() {
  const urlBase = "https://api-sandbox.elcomercio.pe";

  const urlSDK =
    "https://arc-subs-sdk.s3.amazonaws.com/prod/sdk-identity.min.js";

  const [isLogged, setIsLogged] = useState(false);
  const [isShowRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const sdkIdentity = document.createElement("script");
    sdkIdentity.src = urlSDK;

    sdkIdentity.onload = function () {
      window.Identity.apiOrigin = urlBase;

      window.Identity.isLoggedIn()
        .then((res) => {
          console.log("está logueado?:", res);
          if (res === true) {
            setIsLogged(true);
          } else {
            setIsLogged(false);
          }
        })
        .catch((err) => {
          console.log("Ocurrió un error al ejecutar", err);
          setIsLogged(false);
        });
    };

    document.body.appendChild(sdkIdentity);
  }, []);

  // en caso el usuario se registre o logue
  const handleLogged = () => {
    console.log("check login");

    window.Identity.isLoggedIn()
      .then((res) => {
        console.log(res);

        if (res === true) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      })
      .catch((err) => {
        console.log("Ocurrió un error al ejecutar", err);
        setIsLogged(false);
      });
  };

  const clickLogin = () => {
    setShowRegister(false);
  };

  const clickRegister = () => {
    setShowRegister(true);
  };

  return (
    <div className="App">
      {isLogged ? (
        <>
          <div className="bck-gray">
            <Main handleLogged={handleLogged} />
          </div>
        </>
      ) : (
        <div className="form-responsive">
          <div className="border-form">
            {isShowRegister ? (
              <>
                <Register handleLogged={handleLogged} />
                <div className="form-group">
                  <p>
                    Si ya tiene una cuenta haga click{" "}
                    <a id="showRegister" href="/#" onClick={clickLogin}>
                      aquí!
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <Login handleLogged={handleLogged} />
                <div className="form-group">
                  <p>
                    Aún no registrado?{" "}
                    <a id="showRegister" href="/#" onClick={clickRegister}>
                      Registrate!
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
