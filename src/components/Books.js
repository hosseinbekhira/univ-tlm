import React from "react";
import TopScroll from "./TopScroll";
import "./Books.css";

const myList = {
  book1: {
    myurl:
      "https://drive.google.com/file/d/1XnVd269Frm6VfqLFzS7ckY41wA2YyUCU/view?usp=sharing",
    mytitle: "المخرج المسرحي والقراءة المتعددة للنص",
  },
  book2: {
    myurl:
      "https://drive.google.com/file/d/1bpcpcxUhCXofrBdfDnIxHDEqChJI4QQE/view?usp=sharing",
    mytitle: "المكان المسرحي",
  },
  book3: {
    myurl:
      "https://drive.google.com/file/d/1X0LEQiypHwV2a22-T4QeaOfV2MX-prZv/view?usp=sharing",
    mytitle: "فضاءات العرض المسرحي",
  },
  book4: {
    myurl:
      "https://drive.google.com/file/d/1biNLftShjcUx5GFktH9_EfsGByK6aVpg/view?usp=sharing",
    mytitle: "مفردات العرض المسرحي",
  },
  book5: {
    myurl:
      "https://drive.google.com/file/d/1UiZz2xUwk49U0y5qCpY2u8rbXnkts0IU/view?usp=sharing",
    mytitle: "مفهوم الضوء والظلام فى العرض المسرحي",
  },
  book6: {
    myurl:
      "https://drive.google.com/file/d/1AqENVmpetTOhNtEnTMPiCUjp5rAqAY-k/view?usp=sharing",
    mytitle: "نظرية العرض المسرحى",
  },
};

export default function Books() {
  return (
    <>
      <section className="section-books">
        <div className="container">
          <h3 className="m-title">
            بعض المراجع والكتب المساعدة في إنجاز البحث
          </h3>
          <ul className="list-books">
            <li className="book">
              <a href={myList.book1.myurl} target="_blank" rel="noreferrer">
                <img src="/book.png" className="img" alt="myimage" />
                {myList.book1.mytitle}
              </a>
            </li>
            <li className="book">
              <a href={myList.book2.myurl} target="_blank" rel="noreferrer">
                <img src="/book.png" className="img" alt="myimage" />
                {myList.book2.mytitle}
              </a>
            </li>
            <li className="book">
              <a href={myList.book3.myurl} target="_blank" rel="noreferrer">
                <img src="/book.png" className="img" alt="myimage" />
                {myList.book3.mytitle}
              </a>
            </li>
            <li className="book">
              <a href={myList.book4.myurl} target="_blank" rel="noreferrer">
                <img src="/book.png" className="img" alt="myimage" />
                {myList.book4.mytitle}
              </a>
            </li>
            <li className="book">
              <a href={myList.book5.myurl} target="_blank" rel="noreferrer">
                <img src="/book.png" className="img" alt="myimage" />
                {myList.book5.mytitle}
              </a>
            </li>
            <li className="book">
              <a href={myList.book6.myurl} target="_blank" rel="noreferrer">
                <img src="/book.png" className="img" alt="myimage" />
                {myList.book6.mytitle}
              </a>
            </li>
          </ul>
        </div>
      </section>
      <TopScroll />
    </>
  );
}
