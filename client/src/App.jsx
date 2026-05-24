import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { user } from "./constants/userData";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Header user={user} setSidebar={setSidebar} />
      <main>{sidebar && <Sidebar user={user} setSidebar={setSidebar} />}</main>
    </>
  );
}

export default App;
