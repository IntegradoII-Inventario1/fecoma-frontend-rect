import { useEffect } from "react";
import React from "react";
import AppRoute from "./routes/AppRoute";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  const html = document.querySelector("html");
  const local = JSON.parse(localStorage.getItem("isDarkMode"));

  useEffect(() => {
    if (local) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [local, html.classList]);

  return (
    <Provider store={store}>
      <div className="overflow-hidden">
        <AppRoute />
      </div>
    </Provider>
  );
}

export default App;
