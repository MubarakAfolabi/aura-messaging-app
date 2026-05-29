import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet, useNavigate } from "react-router";
import { directMessages } from "./constants/directMessages";
import { groupMessages } from "./constants/groupMessages";
const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [userData, setUserData] = useState(null);
  const [sidebar, setSidebar] = useState(false);
  const [directChats, setDirectChats] = useState(directMessages);
  const [groupChats, setGroupChats] = useState(groupMessages);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 768 ? setSidebar(true) : setSidebar(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    fetch(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.user);
        setUserData(data?.user);
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden md:gap-4 md:pb-4">
      <Header userData={userData} setSidebar={setSidebar} />
      <main className="flex-1 flex md:gap-4 md:mr-4 overflow-hidden">
        {sidebar && <Sidebar userData={userData} setSidebar={setSidebar} />}

        <section className="flex-1 overflow-hidden">
          <Outlet
            context={{
              userData,
              setUserData,
              directChats,
              setDirectChats,
              groupChats,
              setGroupChats,
            }}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
