import React from "react";
import { useMediaQuery } from "react-responsive";

function Advantages() {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  return (
    <div className="advantages">
      <p className="advantages__title">
        Вместе с <span>бесплатной консультацией</span> мы дарим:
      </p>
      {!isMobile ? (
        <>
          <ul className="advantages-list">
            <li className="advantages-list__item">
              <h3>Виджеты</h3>
              <p className="title-3">30 готовых решений</p>
            </li>
            <li className="advantages-list__item">
              <h3>Dashboard</h3>
              <p className="title-3">с показателями вашего бизнеса</p>
            </li>
            <li className="advantages-list__item">
              <h3>Skype Аудит</h3>
              <p className="title-3">отдела продаж и CRM системы</p>
            </li>
            <li className="advantages-list__item">
              <h3>35 дней</h3>
              <p className="title-3">использования CRM</p>
            </li>
          </ul>
          <button className="advantages__btn btn">Получить консультацию</button>
        </>
      ) : (
        <div className="advantages__inner">
          <ul className="advantages-list title-3">
            <li className="advantages-list__item">
              <div>
                <span className="advantages__marker"></span>
              </div>
              Skype аудит
            </li>
            <li className="advantages-list__item">
              <div>
                <span className="advantages__marker"></span>
              </div>
              Dashboard
            </li>
          </ul>
          <ul className="advantages-list title-3">
            <li className="advantages-list__item">
              <div>
                <span className="advantages__marker"></span>
              </div>
              30 виджетов
            </li>
            <li className="advantages-list__item">
              <div>
                <span className="advantages__marker"></span>
              </div>
              Месяц аmoCRM
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Advantages;
