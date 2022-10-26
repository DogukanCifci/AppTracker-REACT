import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";
import { useState } from "react";
import Data from "../helper/Data";

const Home = () => {
  const [görevler, setGörevler] = useState(Data);
  console.log(görevler);
  //const [görevler, setGörevler] = useState([]);
  //setGörevler(data); //---->Böyle yaparsam sonusz döngüye girer. Girmemesi icin useEffect kullanmak zorunda kalirdim.

  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button className="btn" style={{ backgroundColor: "red" }}>
          CLOSE ADD TASKBAR
        </button>
      </header>
      <GorevEkle görevler={görevler} setGörevler={setGörevler} />

      <GorevleriGoster görevler={görevler} setGörevler={setGörevler} />
    </div>
  );
};

export default Home;
