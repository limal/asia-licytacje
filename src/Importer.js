import React from "react";
import useForm from "react-hook-form";

const Importer = ({ setData, setShowWinners }) => {
  const { handleSubmit, register, errors } = useForm({
    mode: "onChange"
  });
  const onSubmit = values => {
    const ROW_FORMAT = [
      "category",
      "title",
      "author",
      "url",
      "fromDate",
      "toDate",
      "winner",
      "isInTopic",
      "price",
      "isPaid"
    ];

    const rows = values.data.split("\n");
    const data = rows.map(row => {
      const cells = row.split("\t").reduce((acc, cur, index) => {
        return (acc = { ...acc, ...{ [ROW_FORMAT[index]]: cur } });
      }, {});

      return cells;
    });

    setData(data);
    setShowWinners(values.showWinners);

    console.log(values.showWinners);
  };

  return (
    <div className="importer">
      <h3 className="importer__header">Wklej dane z arkusza poniżej:</h3>
      <form className="importer__form" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="importer__textarea"
          name="data"
          ref={register({
            required: false
          })}
        ></textarea>
        {errors.email && errors.email.message}

        <label className="importer__checkbox" htmlFor="showWinners">
          <input
            id="showWinners"
            type="checkbox"
            name="showWinners"
            ref={register({ required: false })}
          />
          Wygrane aukcje
        </label>

        <button type="submit" className="importer__button">
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default Importer;
