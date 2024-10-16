/* REACT DEPENDENCIES */
import { useForm } from "react-hook-form";

/* STYLE SHEET */
import "./SearchForm.css";

const SearchForm = ({ handleSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearchSubmit = ({ keyword }) => {
    handleSearch({ keyword });
  };

  return (
    <form className="searchform" onSubmit={handleSubmit(handleSearchSubmit)}>
      <section className="searchform__container">
        <h1 className="searchform__text-heading">
          What's going on in the world?
        </h1>
        <p className="searchform__text-subheading">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="searchform__searchbar">
          <input
            className="searchform__searchbar-input"
            type="text"
            id="searchform-item"
            name="keyword"
            placeholder="Enter topic"
            {...register("keyword", { required: "Please enter a keyword" })}
          />
          {errors?.keyword && (
            <p className="searchform__invalid">{errors.keyword.message}</p>
          )}
          <button className="searchform__searchbar-button" type="submit">
            Search
          </button>
        </div>
      </section>
    </form>
  );
};

export default SearchForm;
