import React, { useState, useEffect } from "react";
import "./Expo.css";

export default function Expo() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const getPercent = () => {
    let myCounter = [];
    data.forEach((item) => {
      if (item.stateExpo === true) {
        myCounter.push(item.stateExpo);
      }
    });
    let percentValue = (myCounter.length * 100) / data.length;
    return parseFloat(percentValue).toFixed(2);
  };

  return (
    <>
      <main className="main">
        <div className="container">
          <section className="hedear">
            <div className="progress">
              <div className="cont-info">
                <h3>نسبة التقدم في البحوث</h3>
                <div className="percent">{getPercent()}%</div>
              </div>
              <div className="bare">
                <div
                  className="inside"
                  style={{ width: `${getPercent()}%` }}
                ></div>
              </div>
            </div>
            <div className="template-expo m-title">
              <div>يمكنك تحميل قالب موحد وجاهز لإعداد البحث</div>
              <a
                href="/template-univ.docx"
                target="_blank"
                rel="noreferrer"
                download
              >
                التحميل
              </a>
            </div>
          </section>
          <section className="list-expo">
            <h3 className="m-title">قائمة البحوث</h3>
            <div className="cont-expo">
              {data &&
                data.length > 0 &&
                data.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="rank">{item.id}</div>
                    <div className="date">{item.date}</div>
                    <div className={item.stateExpo ? "state active" : "state"}>
                      {item.stateExpo ? "تم التسليم" : "لم يستلم بعد"}
                    </div>
                    <div className="cont-names">
                      <div className="c-name">
                        <p className="f-name">
                          {item.firstName ? item.firstName : "لم يحدد بعد"}
                        </p>
                        <p className="s-name">
                          {item.secondName ? item.secondName : "لم يحدد بعد"}
                        </p>
                        <p className="t-name">{item.titleName}</p>
                      </div>
                      <div className="link">
                        <a
                          href={item.urlPeice}
                          target="_blank"
                          rel="noreferrer"
                        >
                          رابط المشاهدة
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
