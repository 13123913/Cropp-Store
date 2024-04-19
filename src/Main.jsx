import { useState } from "react";
import { Modal } from "./Modal";

export const Main = ({ setCard }) => {
  const [addItems, setAddItems] = useState(8);
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("C");
  const [modal, setModal] = useState(false);
  const [opisforModal, setopisforModal] = useState(false);
  const [items, setItems] = useState([
    {
      id: "1",
      img: "https://storage.vsemayki.ru/images/0/3/3378/3378127/previews/people_7_manshort_front_black_500.jpg",
      title: "Монолог Идущего к реке",
      cost: "1695",
      opis: "Классическая футболка прямого кроя с коротким рукавом для мужчин из мягкого хлопка плотностью 140-160 г/м2. Базовая универсальная модель на каждый день, для прогулок, спорта, дома. Двойная прострочка швов делает изделие более износостойким.",
      category: "Ф",
      desc: "Код товара: 438322321",
    },
    {
      id: "2",
      img: "https://storage.vsemayki.ru/images/0/3/3466/3466289/previews/people_5_man_tshirt_premium_front_black_500.jpg",
      title: "Сотворение кота абиссинца",
      cost: "1450",
      opis: "Обтягивающая футболка с коротким рукавом из мягкого хлопка с добавлением эластана (аналог лайкры). Ткань немного тянется, дышит, хорошо держит форму и комфортно садится по фигуре. Приталенный силуэт ориентирован на мужчин с широкими плечами и узкими бедрами, подчеркивает достоинства торса.",
      category: "Ф",
      desc: "Код товара: 438322322",
    },
    {
      id: "3",
      img: "https://storage.vsemayki.ru/images/0/2/2992/2992463/previews/people_21_manshortfull_front_white_500.jpg",
      title: "Футболка Takodachi",
      cost: "1330",
      opis: "Классическая футболка прямого кроя с коротким рукавом для мужчин с полной запечаткой ткани с обеих сторон. Выполнена из синтетического гипоаллергенного материала полиэфир, приятного на ощупь, плотностью 140 г/м2. Универсальная удобная модель на каждый день проста в уходе: быстро сохнет, сохраняет форму и не мнется даже после стирки.",
      category: "Ф",
      desc: "Код товара: 438322323",
    },
    {
      id: "4",
      img: "https://storage.vsemayki.ru/images/0/1/1612/1612505/previews/people_1_hoodie_superoversize_front_beige_500.jpg",
      title: "Май инглиш из бед",
      cost: "3290",
      opis: "Унисекс худи с капюшоном и вместительным карманом спереди. Максимальный оверсайз с теплым и мягким начесом внутри.",
      category: "Х",
      desc: "Код товара: 438322321",
    },
    {
      id: "5",
      img: "https://storage.vsemayki.ru/images/0/2/2970/2970563/previews/people_13_hoodie_front_black_500.jpg",
      title: "Гура Акула",
      cost: "3075",
      opis: "Актуальная худи из хлопка с мягким и теплым начесом внутри. Капюшон застегивается на магнитную кнопку. Принт наносится современным инновационным способом переноса на полотно для создания ярких и долговечных изображений.",
      category: "Х",
      desc: "Код товара: 438322322",
    },
    {
      id: "6",
      img: "https://storage.vsemayki.ru/images/0/3/3466/3466289/previews/people_13_hoodie_front_beige_500.jpg",
      title: "Сотворение кота абиссинца",
      cost: "3075",
      opis: "Классическая толстовка из хлопка для мужчин прямого кроя. Модель имеет капюшон, который регулируется шнурком, спереди накладной сквозной карман, эластичные манжеты по рукавам и низу. Дополнительный комфорт изделию придает лёгкий ворс с изнаночной стороны, что делает его отличным вариантом на прохладную погоду.",
      category: "Х",
      desc: "Код товара: 438322323",
    },
    {
      id: "7",
      img: "https://storage.vsemayki.ru/images/0/3/3378/3378127/previews/people_11_manlong_front_black_500.jpg",
      title: "Монолог Идущего к реке",
      cost: "1745",
      opis: "Лонгслив — это футболка с длинным рукавом из дышащего, приятного для тела хлопка. Принт наносится современным инновационным способом переноса непосредственно на полотно для создания ярких и долговечных изображений.",
      category: "Л",
      desc: "Код товара: 438357321",
    },
    {
      id: "8",
      img: "https://storage.vsemayki.ru/images/0/1/1945/1945953/previews/people_1_men_longsleeves_oversize_front_black_500.jpg",
      title: "Инстасамка",
      cost: "1745",
      opis: "Лонгслив — это футболка с длинным рукавом из дышащего, приятного для тела хлопка. Принт наносится современным инновационным способом переноса непосредственно на полотно для создания ярких и долговечных изображений.",
      category: "Л",
      desc: "Код товара: 438357322",
    },
    {
      id: "9",
      img: "https://storage.vsemayki.ru/images/0/3/3013/3013735/previews/people_1_men_longsleeves_oversize_front_white_500.jpg",
      title: "Алый Король",
      cost: "1745",
      opis: "Лонгслив — это футболка с длинным рукавом из дышащего, приятного для тела хлопка. Печать производится современным инновационным способом путем переноса пигмента непосредственно на полотно для создания ярких и долговечных изображений.",
      category: "Л",
      desc: "Код товара: 438357323",
    },
    {
      id: "10",
      img: "https://storage.vsemayki.ru/images/0/3/3433/3433927/previews/people_11_manlong_front_white_500.jpg",
      title: "Кушоц?",
      cost: "1745",
      opis: "Базовая футболка прямого кроя, создана из мягкого хлопка. Можно купить с принтом из каталога, без принта или со своим дизайном.",
      category: "Л",
      desc: "Код товара: 438357324",
    },
    {
      id: "11",
      img: "https://storage.vsemayki.ru/images/0/3/3433/3433953/previews/people_11_manlong_front_black_500.jpg",
      title: "Степастр Японский",
      category: "Л",
      cost: "1745",
      opis: "Лонгслив — это футболка с длинным рукавом из дышащего, приятного для тела хлопка. Печать производится современным инновационным способом переноса на полотно для создания ярких и долговечных изображений.",
      desc: "Код товара: 438357325",
    },
    {
      id: "12",
      img: "https://storage.vsemayki.ru/images/0/2/2585/2585001/previews/people_2_smock_front_white_500.jpg",
      title: "Креативный директор",
      category: "С",
      cost: "2695",
      opis: "Свитшот — удобная трендовая одежда на каждый день из комфортного хлопка с мягким утепленным слоем. Можно заказать из каталога или создать свой уникальный дизайн в конструкторе товаров. Для создания ярких изображений используется современная инновационная технология переноса на полотно.",
      desc: "Код товара: 38312321",
    },
    {
      id: "13",
      img: "https://storage.vsemayki.ru/images/0/3/3378/3378127/previews/people_2_smock_front_terracotta_500.jpg",
      title: "Монолог Идущего к реке",
      cost: "2695",
      opis: "Свитшот — удобная трендовая одежда на каждый день из комфортного хлопка с мягким утепленным слоем. Можно заказать из каталога или создать свой уникальный дизайн в конструкторе товаров. Для создания ярких изображений используется современная инновационная технология переноса на полотно.",
      category: "С",
      desc: "Код товара: 38312322",
    },
    {
      id: "14",
      img: "https://storage.vsemayki.ru/images/0/2/2144/2144797/previews/people_2_smock_front_black_500.jpg",
      title: "Пэйтон",
      cost: "2695",
      opis: "Свитшот — удобная трендовая одежда на каждый день из комфортного хлопка с мягким утепленным слоем. Можно заказать из каталога или создать свой уникальный дизайн в конструкторе товаров. Для создания ярких изображений используется современная инновационная технология переноса на полотно.",
      category: "С",
      desc: "Код товара: 38312323",
    },
    {
      id: "15",
      img: "https://storage.vsemayki.ru/images/0/3/3013/3013735/previews/people_2_smock_front_red_500.jpg",
      title: "Алый Король",
      cost: "2695",
      opis: "Свитшот — удобная трендовая одежда на каждый день из комфортного хлопка с мягким утепленным слоем. Можно заказать из каталога или создать свой уникальный дизайн в конструкторе товаров. Для создания ярких изображений используется современная инновационная технология переноса на полотно.",
      category: "С",
      desc: "Код товара: 38312324",
    },
    {
      id: "16",
      img: "https://storage.vsemayki.ru/images/0/3/3444/3444183/previews/people_1_mansmockfull_front_red_500.jpg",
      title: "Худи Рисса",
      cost: "2290",
      opis: "Свитшот 3D — разновидность толстовки, только без капюшона и карманов. Сшит из гладкой синтетической ткани, благодаря свойствам которой принт наносится по всей поверхности изделия и имеет яркие цвета. Внутренний слой — мягкий и приятный на ощупь. Свитшот можно надевать как прямо на тело, так и поверх первого слоя одежды. Можно заказать со своим дизайном.",
      category: "С",
      desc: "Код товара: 38312325",
    },
  ]);
  return (
    <div className="w-full h-full flex flex-row">
      {
        modal ? <Modal modal={modal} setModal={setModal} opisforModal={opisforModal} /> : null
      }
      <div className="w-full h-full flex flex-row">
        <div className="w-min h-full opacity-50 hover:opacity-100 duration-300 bg-neutral-100  rounded-b-lg ">
          <div className="flex flex-col gap-4 items-start p-8">
            <button
              className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-blue-400"
              onClick={() => setCategory("All")}>
              Всё
            </button>
            <button
              className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-blue-400"
              onClick={() => setCategory("Ф")}>
              Футболки
            </button>
            <button
              className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-blue-400"
              onClick={() => setCategory("Х")}>
              Худи
            </button>
            <button
              className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-blue-400"
              onClick={() => setCategory("Л")}>
              Лонгсливы
            </button>
            <button
              className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-blue-400"
              onClick={() => setCategory("С")}>
              Свитшоты
            </button>
            <hr className="w-full" />
            <button
              className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-blue-400"
              onClick={() => setFilter("Ex")}>
              Самые дорогие
            </button>
            <button
              className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-blue-400"
              onClick={() => setFilter("Cheap")}>
              Самые дешевые
            </button>
            <button
              className="font-light text-2xl bg-neutral-200 hover:bg-neutral-300 w-[270px] py-2 rounded-xl duration-500  hover:text-blue-400"
              onClick={() => setFilter("C")}>
              По названию
            </button>
          </div>
        </div>
        <div>
          <div className="p-8 w-full h-full flex gap-8 justify-evenly flex-wrap">
            {items
              .sort((a, b) => {
                switch (filter) {
                  case "Cheap":
                    return a.cost - b.cost;
                  case "Ex":
                    return b.cost - a.cost;
                  case "C":
                    return a.title < b.title ? -1 : 1;
                }
              })
              .filter((item) => {
                return category != "All" ? item.category === category : true;
              })
              .slice(0, addItems)
              .map((item) => (
                <div className="w-[350px] min-h-[400px] h-max pb-2 bg-neutral-50 rounded-lg border flex flex-col items-center hover:scale-105 duration-200">
                  <div className="w-full h-72">
                    <img
                      src={item.img}
                      className="h-full w-full rounded-t-lg border bg-center object-cover"
                    />
                  </div>
                  <div className="p-2 w-full">
                    <div className="w-full font-semibold text-2xl">
                      {item.title}
                    </div>
                    <div className="w-full font-semibold text-lg opacity-55">
                      {item.desc}
                    </div>
                    <div className="w-full font-light text-2xl">
                      {item.cost},00р
                    </div>
                  </div>
                  <button
                    className="w-[90%] p-2 bg-neutral-100 hover:bg-neutral-200 opacity-80 hover:opacity-100 duration-500 rounded-lg"
                    onClick={() =>
                      setCard((prev) => {
                        return prev
                          ? [
                            ...prev,
                            {
                              title: item.title,
                              img: item.img,
                              cost: item.cost,
                              id: item.id,
                            },
                          ]
                          : [
                            {
                              title: item.title,
                              img: item.img,
                              cost: item.cost,
                              id: item.id,
                            },
                          ];
                      })
                    }>
                    Купить
                  </button>
                  <button
                    onClick={(e) => {
                      setModal(true)
                      const el = document.getElementById(`${item.id}`)
                      setopisforModal(el.innerHTML)
                    }

                    }
                    className="w-[90%] p-2 bg-neutral-100 hover:bg-neutral-200 opacity-80 hover:opacity-100 duration-500 rounded-lg"
                  >

                    Подробнее
                    <span id={`${item.id}`} className="absolute opacity-0">{
                      item.opis
                    }</span>

                  </button>
                </div>
              ))}
          </div>
          <div className="w-full flex justify-center mt-2">
            {addItems == items.length || category != "All" ? (
              ""
            ) : (
              <button
                className="bg-neutral-100 py-4 px-16 hover:bg-neutral-200 duration-500  hover:text-blue-400 text-xl font-light rounded-t-lg justify-center"
                onClick={() => setAddItems((prev) => prev + 8)}>
                Загрузить ещё
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
