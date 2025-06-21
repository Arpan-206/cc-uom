import { hydrate, prerender as ssr } from "preact-iso";
import { useState, useEffect } from "preact/hooks";
import { Widget } from "@typeform/embed-react";

import "./style.css";
import CodeCraftersLogo from "./assets/cc-logo.png";
import Cross from "./assets/cross.png";
import authService from "./services/authService.js";

export function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for authentication callback first
    const callbackUser = authService.processCallback();
    if (callbackUser) {
      setUser(callbackUser);
    } else {
      // Check if already authenticated
      const existingUser = authService.checkAuth();
      if (existingUser) {
        setUser(existingUser);
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = () => {
    authService.login();
  };

  const handleLogout = () => {
    authService.logout();
  };

  if (!user) {
    return (
      <div>
        <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
          <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
            <div className="max-w-prose text-left">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Free <strong className="text-cyan-600"> CodeCrafters </strong>{" "}
                for <strong className="text-violet-700"> UoM </strong> students!
              </h1>

              <p className="mt-4 text-base text-pretty text-gray-900 sm:text-lg/relaxed">
                Move beyond basic tutorials and classroom exercises. Build
                real-world projects that push your technical boundaries. Develop
                industry-ready skills through hands-on practice with{" "}
                <a
                  href="https://codecrafters.io"
                  target="_blank"
                  className="text-cyan-700"
                >
                  CodeCrafters
                </a>
                !
              </p>

              <div className="mt-4 flex gap-4 sm:mt-6">
                <button
                  onClick={handleLogin}
                  className="inline-block rounded border border-violet-600 bg-violet-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-violet-700"
                >
                  Login with UoM &rarr;
                </button>

                <a
                  className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>

            <img
              src={Cross}
              className="ml-auto w-full h-auto"
              alt="Cross Logo"
            />
          </div>
        </section>
      </div>
    );
  }

  // Show embedded Typeform for authenticated users
  return (
    <div className="min-h-screen">
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">UoM x CodeCrafters</span>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900" href="https://codecrafters.io" target="_blank">CodeCrafters</a>
          </nav>
          <button onClick={handleLogout} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <Widget
        id="bLx6sUQv"
        style={{ width: "100%", height: "92vh" }}
        className="my-form"
        hidden={{
          uom_username: user.username,
          uom_fullname: user.fullname,
          uom_authenticated_at: user.authenticatedAt,
        }}
      />
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
