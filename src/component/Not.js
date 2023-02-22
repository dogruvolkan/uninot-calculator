import React, { useState } from "react";

const Not = () => {
  const [notSistem, setNotSistem] = useState("");
  const [dersSayisi, setDersSayisi] = useState("");
  const [krediSayisi, setKrediSayisi] = useState("");
  const [not, setNot] = useState("");

  const onNotSistemHandle = (e) => {
    setNotSistem(e.target.value);
  };

  const onDersSayisiHandle = (e) => {
    setDersSayisi(e.target.value);
  };

  const notsistem1 = ["AA", "BA", "BB", "CB", "CC", "DC", "DD", "FD", "FF"];
  const notsistem2 = [
    "A1",
    "A2",
    "A3",
    "B1",
    "B2",
    "B3",
    "C1",
    "C2",
    "C3",
    "D",
    "F",
  ];

  const onKrediSayisiHandle = (e) => {
    setKrediSayisi(e.target.value);
  };

  const notHesapla = () => {
    if (notSistem === "notsistem1") {
      
    }
  };

  return (
    <div className="card-not">
      <div className="not-islem">
        <p>İşlem</p>
        <div>
          <div>
            <label>
              <input type="radio" />
              Sadece dönem not ortalamasını öğrenmek istiyorum
            </label>
          </div>
          <div>
            <label>
              <input type="radio" />
              Sadece dönem not ortalamasını öğrenmek istiyorum
            </label>
          </div>
        </div>
      </div>

      <div className="not-sistem">
        <p>Not Sistemi</p>
        <div>
          <div>
            <label>
              <input
                type="radio"
                name="notsistem"
                value="notsistem1"
                checked={notSistem === "notsistem1"}
                onChange={onNotSistemHandle}
              />
              AA, BA, BB, CB, CC, DC, DD, FD, FF
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="notsistem"
                value="notsistem2"
                checked={notSistem === "notsistem2"}
                onChange={onNotSistemHandle}
              />
              A1, A2, A3, B1, B2, B3, C1, C2, C3, D, F
            </label>
          </div>
        </div>
      </div>

      <div className="ders-sayisi">
        <p>Dönem Ders Sayısı:</p>
        <select onChange={onDersSayisiHandle}>
          {[...Array(20)].map((a, index) => {
            return (
              <option
                key={index}
                value={index + 1}
                defaultValue={dersSayisi === index + 1}
              >
                {index + 1}
              </option>
            );
          })}
        </select>
      </div>

      <div className="ders-olusturma">
        <div className="ders-kolon">
          <p>Ders Adı</p>
          <p>Ders kredi</p>
          <p>Not</p>
        </div>
        <div className="ders-girme">
          {[...Array(+dersSayisi)].map((x, y) => {
            return (
              <div key={y}>
                <input type="text" />
                <select onChange={onKrediSayisiHandle}>
                  {[...Array(31)].map((a, index) => {
                    return (
                      <option
                        key={index}
                        value={index + 1}
                        defaultValue={krediSayisi === index + 1}
                      >{`${index + 1} Kredi`}</option>
                    );
                  })}
                </select>
                <select>
                  {notSistem === "notsistem1"
                    ? notsistem1.map((not1, index) => {
                        return <option>{not1}</option>;
                      })
                    : notsistem2.map((not2, index) => {
                        return <option>{not2}</option>;
                      })}
                </select>
              </div>
            );
          })}
        </div>
        <button onClick={notHesapla}>Hesapla</button>
      </div>
    </div>
  );
};

export default Not;
