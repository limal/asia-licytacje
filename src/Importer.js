import React from "react";
import useForm from "react-hook-form";

const Importer = ({ setData }) => {
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
  };

  return (
    <div className="importer">
      Importer
      <form className="importer__form" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="importer__textarea"
          name="data"
          ref={register({
            required: false
          })}
        ></textarea>
        {errors.email && errors.email.message}

        <button type="submit" className="importer__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Importer;
