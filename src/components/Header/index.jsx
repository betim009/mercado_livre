import { useContext, useState } from "react";
import Context from "../../context/Context";

function Header() {
  const { computers, setComputers } = useContext(Context);
  const [querySearch, setQuerySearch] = useState("");

  const handleClick = () => {
    const newFilter = computers.filter(e => e.title === querySearch);

    console.log(newFilter);
  };

  return (
    <header>
      <h1>My App</h1>
      <input
        type="text"
        placeholder="Nome de computador"
        value={querySearch}
        onChange={({ target }) => setQuerySearch(target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </header>
  );
}

export default Header;
