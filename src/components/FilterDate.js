import { useState } from "react";

function FilterDate(props) {
  const [formDate, setFormDate] = useState({
    initialDate: "",
    finalDate: "",
    currency: "USD",
  });

  //Recebe as informações dos inputs e armazena em um Obj
  function handleChange(e) {
    let value = e.target.value;
    let valueOpt = e.target.option;
    setFormDate({ ...formDate, [e.target.name]: value || valueOpt });
  }

  //Recebe a informação de Submit e "seta" o data de Graph com todas as informações recebidas pelos inputs
  function handleSubmit(e) {
    e.preventDefault();
    if (formDate.initialDate !== "" && formDate.finalDate !== "") {
      props.setData(formDate);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="m-3">Filtros</h2>
      <div className="d-flex m-3 mt-3">
        <label className="m-2">
          <strong>De: </strong>
        </label>
        <input
          name="initialDate"
          value={formDate.initialDate}
          className="form-control me-3 "
          type="date"
          onChange={handleChange}
        />
        <label className="m-2">
          <strong>Até: </strong>
        </label>
        <input
          name="finalDate"
          value={formDate.finalDate}
          className="form-control "
          type="date"
          onChange={handleChange}
        />
      </div>
      <div className="input-group w-100 mb-3 d-flex align-items-center justify-content-center">
        <label className="m-2">
          <strong>Moeda: </strong>
        </label>
        <div>
          <select
            className="form-select"
            name="currency"
            onChange={handleChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BRL">BRL</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-primary ms-2 p-1 pe-3 ps-3">
            Filtrar
          </button>
        </div>
      </div>
    </form>
  );
}

export default FilterDate;