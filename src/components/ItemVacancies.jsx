import style from "./ItemVacancies.module.scss";

function ItemVacancies({ item }) {
  return (
    <a href={`/vacancy/${item.id}`} style={{ textDecoration: "none" }}>
      <div className={style.itemVacancies}>
        <h4>{item.title}</h4>
        <p>
          {item.salary} <span>{item.schedule}</span>
        </p>
        <h5>{item.location}</h5>
      </div>
    </a>
  );
}
export default ItemVacancies;
