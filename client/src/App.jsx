import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { user } from "./constants/userData";
import { Outlet } from "react-router";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <Header user={user} setSidebar={setSidebar} />
      <main>
        {sidebar && <Sidebar user={user} setSidebar={setSidebar} />}

        <section>
          <Outlet context={{ user }} />
        </section>
      </main>
    </div>
  );
}

export default App;
