import React, { useState, useContext } from "react";
import { NotContext } from "../context/NotContext";

const Not = () => {
  const {
    notSistem,
    setNotSistem,
    dersSayisi,
    setDersSayisi,
    isDonem,
    setIsDonem,
  } = useContext(NotContext);

  return (
    <div className="card-not">
      <div className="not-islem">
        <p>İşlem</p>
        <div>
          <div>
            <label>
              <input
                type="radio"
                name="donemgenel"
                value="donem"
                checked={isDonem === true}
                onChange={() => setIsDonem(true)}
              />
              Sadece dönem not ortalamasını öğrenmek istiyorum
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="donemgenel"
                value="genel"
                checked={isDonem === false}
                onChange={() => setIsDonem(false)}
              />
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
                onChange={(e) => setNotSistem(e.target.value)}
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
                onChange={(e) => setNotSistem(e.target.value)}
              />
              A1, A2, A3, B1, B2, B3, C1, C2, C3, D, F
            </label>
          </div>
        </div>
      </div>
      {isDonem === false ? (
        <>
          <div className="ders-sayisi">
            <p>Mevcut Toplam Kredi:</p>
            <input />
          </div>
          <div className="ders-sayisi">
            <p>Mevcut Ortalama:</p>
            <input />
          </div>
        </>
      ) : null}
      <div className="ders-sayisi">
        <p>Dönem Ders Sayısı:</p>
        <select onChange={(e) => setDersSayisi(e.target.value)}>
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
    </div>
  );
};

export default Not;
