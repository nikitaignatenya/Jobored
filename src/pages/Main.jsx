import style from "../styles/Main.module.scss";
import Header from "../components/Header.jsx";
import ItemVacancies from "../components/ItemVacancies.jsx";

import geo from "../assets/geo.svg";
import star from "../assets/star.svg";
import Down from "../assets/Down.svg";

function Main() {
  const vacancies = [
    {
      id: 1,
      title: "Менеджер-дизайнер",
      salary: "от 70000 руб",
      schedule: "Полный рабочий день",
      location: "Новый Уренгой",
      responsibilities: [
        "Разработка макетов наружной рекламы",
        "Создание брендбуков",
        "Обучение младших дизайнеров",
      ],
      requirements: [
        "Опыт от 2 лет",
        "Умение работать в CorelDraw и Photoshop",
        "Портфолио обязательно",
      ],
      conditions: [
        "Оформление по контракту",
        "Премии за результат",
        "Полный соцпакет",
      ],
    },
    {
      id: 2,
      title: "Графический дизайнер",
      salary: "от 60000 руб",
      schedule: "Удалёнка",
      location: "Пермь",
      responsibilities: [
        "Создание упаковки",
        "Работа с векторной графикой",
        "Разработка рекламных баннеров",
      ],
      requirements: [
        "Опыт от 1 года",
        "Adobe Illustrator, Figma",
        "Чувство композиции",
      ],
      conditions: ["Свободный график", "Оплата по проектам", "Доступ к курсам"],
    },
    {
      id: 3,
      title: "Веб-дизайнер",
      salary: "от 80000 руб",
      schedule: "Гибкий график",
      location: "Москва",
      responsibilities: [
        "Дизайн лендингов",
        "Прототипирование в Figma",
        "Адаптация под мобильные устройства",
      ],
      requirements: ["Знание UX/UI", "Креативность", "Работа в команде"],
      conditions: [
        "Оформление по ТК",
        "Корпоративная культура",
        "Удалённая работа",
      ],
    },
    {
      id: 4,
      title: "3D-дизайнер",
      salary: "от 100000 руб",
      schedule: "Полный день",
      location: "Санкт-Петербург",
      responsibilities: [
        "Моделирование объектов",
        "Работа в Blender, 3ds Max",
        "Визуализация интерьеров",
      ],
      requirements: [
        "Опыт с 3D-графикой от 2 лет",
        "Понимание композиции",
        "Знание текстурирования",
      ],
      conditions: [
        "Современный офис",
        "Премии за проекты",
        "Гибкое начало рабочего дня",
      ],
    },
    {
      id: 5,
      title: "Дизайнер презентаций",
      salary: "от 55000 руб",
      schedule: "Частичная занятость",
      location: "Екатеринбург",
      responsibilities: [
        "Создание деловых презентаций",
        "Работа в PowerPoint, Keynote",
        "Подготовка визуальных схем",
      ],
      requirements: [
        "Опыт от 1 года",
        "Внимание к деталям",
        "Умение работать с текстами",
      ],
      conditions: ["Удалёнка", "Гибкий график", "Оплата по часам"],
    },
    {
      id: 6,
      title: "UI/UX дизайнер",
      salary: "от 95000 руб",
      schedule: "Полный день",
      location: "Казань",
      responsibilities: [
        "Проектирование интерфейсов",
        "Создание прототипов",
        "Тестирование дизайна",
      ],
      requirements: [
        "Знание Figma и Adobe XD",
        "Опыт в продуктовой разработке",
        "Гибкость мышления",
      ],
      conditions: [
        "Оформление по ТК",
        "Бонусы за релизы",
        "Обучение за счёт компании",
      ],
    },
    {
      id: 7,
      title: "Дизайнер упаковки",
      salary: "от 70000 руб",
      schedule: "Гибкий график",
      location: "Сочи",
      responsibilities: [
        "Разработка визуала упаковки",
        "Создание мокапов",
        "Подготовка к печати",
      ],
      requirements: [
        "Опыт с печатной продукцией",
        "Photoshop, Illustrator",
        "Знание допечатной подготовки",
      ],
      conditions: ["Удалёнка", "Проектная оплата", "Возможность фриланса"],
    },
    {
      id: 8,
      title: "Дизайнер мобильных приложений",
      salary: "от 120000 руб",
      schedule: "Полный день",
      location: "Новосибирск",
      responsibilities: [
        "Создание UI для Android/iOS",
        "Работа с гайдлайнами",
        "Дизайн взаимодействий",
      ],
      requirements: ["Опыт от 3 лет", "Figma, Zeplin", "Навыки анимации"],
      conditions: ["Командировки за счёт компании", "Премии", "Медстраховка"],
    },
    {
      id: 9,
      title: "Инфографист",
      salary: "от 60000 руб",
      schedule: "Удалёнка",
      location: "Омск",
      responsibilities: [
        "Создание инфографики для отчётов",
        "Работа с диаграммами",
        "Дизайн схем",
      ],
      requirements: [
        "Владение Illustrator и Excel",
        "Опыт в визуализации данных",
        "Чёткая типографика",
      ],
      conditions: [
        "Оплата за проект",
        "Дистанционная занятость",
        "Свободное расписание",
      ],
    },
    {
      id: 10,
      title: "Моушн-дизайнер",
      salary: "от 110000 руб",
      schedule: "Гибкий график",
      location: "Краснодар",
      responsibilities: [
        "Анимация логотипов",
        "Создание рекламных роликов",
        "Работа в After Effects",
      ],
      requirements: [
        "Опыт от 2 лет",
        "Знание композиции и ритма",
        "Портфолио анимации",
      ],
      conditions: [
        "Официальное трудоустройство",
        "Гибкое расписание",
        "Премии",
      ],
    },
    {
      id: 11,
      title: "Бренд-дизайнер",
      salary: "от 85000 руб",
      schedule: "Полный день",
      location: "Владивосток",
      responsibilities: [
        "Разработка фирменного стиля",
        "Создание гайдлайнов",
        "Адаптация дизайна под",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className={style.mainContainerBack}>
        <section className={style.mainContainer}>
          <aside className={style.filterContainer}>
            <h2 className={style.filter}>
              <span className={style.firstSpan}>Фильтры</span>
              <span className={style.secondSpan}>Сбросить все</span>
            </h2>
            <h2 className={style.industry}>Отрасль</h2>
            <div className={style.chooseContainer}>
              <p>Выбетерете отрасль</p>
              <img src={Down}></img>
            </div>
            <h2 className={style.salary}>Оклад</h2>
            <div className={style.inputContainer}>
              <input placeholder="От"></input>
              <img src={Down}></img>
            </div>
            <div className={style.inputContainer}>
              <input placeholder="До"></input>
              <img src={Down}></img>
            </div>
            <button className={style.buttonUse}>Применить</button>
          </aside>
          <div className={style.vacanciesContainer}>
            <div className={style.form}>
              <input placeholder="Введите название вакансии"></input>
              <button>Поиск</button>
            </div>
            <div className={style.vacancies}>
              {vacancies.map((item, index) => (
                <ItemVacancies key={index} item={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Main;
