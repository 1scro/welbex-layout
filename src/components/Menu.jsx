import React from "react";
import { useMediaQuery } from "react-responsive";

function Menu() {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });

  return (
    <div className="menu">
      <h3 className="menu__title heading-footer">Меню</h3>
      <div className="menu__wrapper">
        <ul className="menu-list">
          <li className="menu-list__item">
            <a href="#!">Расчёт стоимости</a>
          </li>
          <li className="menu-list__item">
            <a href="#!">Услуги</a>
          </li>
          <li className="menu-list__item">
            <a href="#!">Виджеты</a>
          </li>
          <li className="menu-list__item">
            <a href="#!">Интеграции</a>
          </li>
          <li className="menu-list__item">
            <a href="#!">Наши клиенты</a>
          </li>
        </ul>

        <ul className="menu-list">
          {!isMobile ? (
            <>
              <li className="menu-list__item">
                <a href="#!">Кейсы</a>
              </li>
              <li className="menu-list__item">
                <a href="#!">Благодарственные письма</a>
              </li>
            </>
          ) : (
            <>
              <li className="menu-list__item">
                <a href="#!">Благодарность клиентов</a>
              </li>
              <li className="menu-list__item">
                <a href="#!">Кейсы</a>
              </li>
            </>
          )}
          <li className="menu-list__item">
            <a href="#!">Сертификаты</a>
          </li>
          <li className="menu-list__item">
            <a href="#!">Блог на Youtube</a>
          </li>
          <li className="menu-list__item">
            <a href="#!">Вопрос / Ответ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
