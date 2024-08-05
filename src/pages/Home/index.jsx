import { useContext } from "react";
import Context from "../../context/Context";
import ListItems from "../../components/ListItems";
import Header from "../../components/Header";

function Home() {
  const { computers, setComputers } = useContext(Context);
  
  return (
    <>
      <h2>Olá mundo</h2>
      <Header />
      {computers ? <ListItems items={computers} /> : null}
    </>
  );
}

export default Home;
