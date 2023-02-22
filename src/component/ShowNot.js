import React, { useContext } from "react";
import { NotContext } from "../context/NotContext";
import { notsistem1 } from "./NotSistem1";
import { notsistem2 } from "./NotSistem2";

const ShowNot = () => {
  const {
    notSistem,
    setNotSistem,
    dersSayisi,
    setDersSayisi,
    krediSayisi,
    setKrediSayisi,
  } = useContext(NotContext);

  return (
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
              <input type="text" value={`ders-${y + 1}`} />
              <select onChange={(e) => setKrediSayisi(e.target.value)}>
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
                  ? notsistem1.map((notsis1, index) => {
                      return (
                        <option
                          key={index}
                          value={notsis1.katsayisi}
                          defaultValue={not1 === notsis1.katsayisi}
                        >
                          {notsis1.isim}
                        </option>
                      );
                    })
                  : notsistem2.map((not2, index) => {
                      return <option>{not2}</option>;
                    })}
              </select>
            </div>
          );
        })}
      </div>
      <button>{not}</button>
    </div>
  );
};

export default ShowNot;
