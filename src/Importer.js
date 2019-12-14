import React from "react";
import useForm from "react-hook-form";

const Importer = ({ data, setData, setShowWinners }) => {
  const { handleSubmit, register, errors } = useForm({});

  const onSubmit = values => {
    // Format
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
      "isPaid",
      "unused1",
      "unused2",
      "unused3",
      "unused4",
      "unused5",
      "unused6",
      "unused7",
      "unused8",
      "unused9"
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

    console.log('Parsed data:');
    console.log(data);

    console.log(values.showWinners);
  };

  return (
    <div className="importer">
      <h3 className="importer__header">Wklej dane z arkusza poniżej:</h3>
      <form className="importer__form" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="importer__textarea"
          onChange={handleSubmit(onSubmit)}
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
      <h4 className="version">v1.0.4.13</h4>
    </div >
  );
};

export default Importer;
