import React from "react";
import useForm from "react-hook-form";

const Importer = ({ setData }) => {
  const { handleSubmit, register, errors } = useForm({
    mode: "onChange"
  });
  const onSubmit = values => {
    console.log(values);

    const rows = values.data.split("\n");

    const data = rows.map(row => row.split("\t"));

    setData(data);
  };

  return (
    <div className="importer">
      Importer
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="importer__textarea"
          name="data"
          ref={register({
            required: false
          })}
        ></textarea>
        {errors.email && errors.email.message}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Importer;
