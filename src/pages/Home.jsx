import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";
import { useState } from "react";
import Data from "../helper/Data";

const Home = () => {
  const [gorevler, setGorevler] = useState(Data);
  console.log(gorevler);
  //const [gorevler, setGorevler] = useState([]);
  //setGorevler(data); //---->Böyle yaparsam sonusz döngüye girer. Girmemesi icin useEffect kullanmak zorunda kalirdim.

  //Buton özelliklerini burda tanimliyoruz.Böylece icerdeki yaziyi da rengi de onClick ile degistirebiliyorum
  //Burda butona true verip daha sonra background eger truysa su olsun ya da yazi eger buton trueysa icerdeki yazi söyle olsun falan da diyebilirdik.
  const [button, setButton] = useState({
    renk: "red",
    yazi: "CLOSE ADD TASKBAR",
  });

  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          className="btn"
          style={{ backgroundColor: button.renk }}
          onClick={() => {
            setButton(
              button.renk === "red"
                ? { renk: "purple", yazi: "SHOW ADD TASKBAR" }
                : {
                    renk: "red",
                    yazi: "CLOSE ADD TASKBAR",
                  }
            );
          }}
        >
          {button.yazi}
        </button>
      </header>

      {/* Eger gözükmediginde baska yazi eklemyecek olsaydim su sekilde de yazabilirdim ; (&& ile)
button.renk === "red" && <GorevEkle gorevler={gorevler} setGorevler={setGorevler} /> */}

      {button.renk === "red" ? (
        <GorevEkle gorevler={gorevler} setGorevler={setGorevler} />
      ) : (
        <p
          className="text-center"
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          Hidden Add Taskbar
        </p>
      )}

      <GorevleriGoster gorevler={gorevler} setGorevler={setGorevler} />
    </div>
  );
};

export default Home;
