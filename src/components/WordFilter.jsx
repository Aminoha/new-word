import React from "react";
import WordInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const WordFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <WordInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="search"
        style={{ width: "240px" }}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="sort"
        options={[
          { value: "name", name: "name" },
          { value: "date", name: "added date" },
        ]}
      />
    </div>
  );
};

export default WordFilter;
