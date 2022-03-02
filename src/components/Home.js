import React from "react";
import "./Home.css";

const myP = {
  p1: "تحية طيبة إلى طلابي الأعزاء - سنة أولى ماستر مسرح مغاربي، مقياس آليات نقد العرض المسرحي، أضع بين أيديكم هذا الموقع الذي يحاول أن يقرب وييسر علينا وعليكم عملية التواصل.",
  p2: "تجدون في هذا الموقع القالب الذي تعلمون عليه في إنجاز بحثوكم، وكذلك جملة من الكتب التي تساعدكم في هذا المقياس وفي مساركم الدراسي عموما، كما أن هذا الموقع يُمَكِّنكم من متابعة سير عملية إلقاء البحوث واستلامها من خلال قائمة البحوث المعروضة، ويتيح لكم أيضا مشاهدة جميع الإعلانات الخاصة بهذا المقياس. ",
  p3: "",
};

export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="container">
          <h3 className="my-title">البريد الالكتروني للتواصل مع الأستاذ</h3>
          <h3 className="my-title bg">bekhiraelhossien@gmail.com</h3>
          <p className="our-p">{myP.p1}</p>
          <p className="our-p">{myP.p2}</p>
        </div>
      </section>
    </>
  );
}
