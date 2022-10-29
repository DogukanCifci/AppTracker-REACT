import React, { useState } from "react";

const GorevEkle = ({ gorevler, setGorevler }) => {
  //console.log("asd", gorevler); //6 elemenali dizimiz
  let maxId = 0;
  gorevler.map((e) => (e.id > maxId ? (maxId = e.id) : maxId));
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  /*  console.log(text);
  console.log(date); */

  const yapSubmit = (event) => {
    event.preventDefault();

    //[] nerde olduguna dikkat et.GörevleriGöster.jsxte görevler icinde map ile gezececegimiz icin görevlerin bir dizi icinde olmasi lazim. Yeni eleman eklendikten sonra da olusacak Object [] ile diziye dönüstürülür.

    // ...gorevleri en sona yazdim. Ekledigim elemanin ilk gözüküp eski listenin asagiya eklenmesi icin
    setGorevler([
      {
        id: maxId + 1,
        text: text, //setText ile asagida güncelledigim icin burada da otomatik olarak gözükecektir
        day: date, //setDate ile asagida güncelledigim icin burada da otomatik olarak gözükecektir
        bittiMi: false,
      },
      ...gorevler,
    ]);

    //Olay olduktan sonra ic tarafi tekrar bosaltilsin diye yaptik bunu
    setText("");
    setDate("");
    //yapSubmit function bitisi
  };

  return (
    <div>
      <form onSubmit={yapSubmit}>
        <div className="form-control">
          <label htmlFor="taskInput">Task</label>
          <input
            id="taskInput"
            type="text"
            placeholder="Add Task"
            name="text"
            value={text}
            //her seferinde i.target.value artik text'e atanmis olur
            onChange={(i) => setText(i.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="dateInput">Day & Time</label>
          <input
            id="dateInput"
            type="datetime-local"
            placeholder="Add Day"
            name="date"
            value={date}
            //her seferinde i.target.value artik date'e atanmis olur.Cünkü set..in ici o
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GorevEkle;
