import React from "react";
import { FaTrash } from "react-icons/fa";
const GorevleriGoster = ({ gorevler, setGorevler }) => {
  //===
  //Veri Silme
  const silmeData = (id) => {
    setGorevler(
      gorevler.filter((i) => {
        return i.id !== id ? i : undefined;
      })
    );
  };

  return (
    <div className="container">
      {gorevler.map((gorev) => {
        const { text, day, id } = gorev;
        return (
          <div
            key={id}
            className={gorev.bittiMi ? "trueStil" : "falseStil"}
            onDoubleClick={() =>
              setGorevler(
                gorevler.map((i) => {
                  return i.id === id ? { ...i, bittiMi: !i.bittiMi } : i;
                })
              )
            }
            //setGorevler([{ ...gorev, bittiMi: !gorev.bittiMi }])
            //Mesela yukarda : dan sonra gelen i yerine {text:"Degisti"} yazsaydim tiklanmayan hepsinin date falan kaybolup sadece icinde degisti yazacakti. Ama {...i, text="Degisti"} yazarsam bu sefer diger veriler kaybolmayacak.Sadece text'in icerigi degismis olacak.

            //gorev objectini actim cünkü diger keyword-value pairleri kaybolmasin diye.Daha sonra bittiMi diye keyword olusturup, oldugu icin kalici olan degisiyor. Ona esk idegerin tersi neyse onu ver dedik
          >
            <h3>
              {text}{" "}
              <FaTrash className="thrash" onClick={() => silmeData(id)} />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
