import Advantages from "./Advantages";

function Heading() {
  return (
    <section className="heading">
      <div className="container">
        <div className="heading__wrapper">
          <div className="heading__title">
            <h2 className="title-1">
              Зарабатывайте больше <span>с WELBEX</span>
            </h2>
            <p className="title-3">Развиваем и контролируем продажи за вас</p>
          </div>
          <div className="heading__advantages">
            <Advantages />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Heading;
