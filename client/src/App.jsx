import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { user } from "./constants/userData";
import { Outlet } from "react-router";

function App() {
  const [userData, setUserData] = useState(user);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768 ? setSidebar(true) : setSidebar(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header userData={userData} setSidebar={setSidebar} />
      <main className="flex-1 flex">
        {sidebar && <Sidebar userData={userData} setSidebar={setSidebar} />}

        <section className="flex-1">
          <Outlet context={{ userData, setUserData }} />
        </section>
      </main>
    </div>
  );
}

export default App;
