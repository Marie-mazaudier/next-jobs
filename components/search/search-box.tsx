import { useState } from "react";

import css from "./search.module.css";
import { WorkIcon } from "../common/icon";

export interface SearchBoxProps { // 2.on récupère la props fonction onSearch et on lui passe les valeurs lors de la recherche
  onSearch(Title: string): void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  
  return (
    <form
      className={css["search-box"]}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value);
      }}
    >
      <div className={css["search-box-input"]}>
        <WorkIcon />
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">search</button>
      </div>
    </form>
    
  );
 
};
