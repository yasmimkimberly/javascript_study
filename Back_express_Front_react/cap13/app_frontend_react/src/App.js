import { Routes, Route } from "react-router-dom";
import MenuSuperior from "./componentes/MenuSuperior";
import InclusaoLivros from "./componentes/InclusaoLivros";
import ManutencaoLivros from "./componentes/ManutencaoLivros";
import ResumoLivros from "./componentes/ResumoLivros";
const App = () => {
  return (
    <>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<InclusaoLivros />} />
        <Route path="manut" element={<ManutencaoLivros />} />
        <Route path="resumo" element={<ResumoLivros />} />
      </Routes>
    </>
  );
};
export default App;
