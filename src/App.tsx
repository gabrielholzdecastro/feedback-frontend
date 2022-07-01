import PessoaTable from "./pages/mainPage/pessoa-table"
import SetorTable from "./pages/mainPage/setores-table"
import FeedbackTable from "./pages/mainPage/feedback-table"

function App() {
  return (
    <>
    <h2>Pessoas</h2>
    <PessoaTable></PessoaTable>
    <h2>Setores</h2>
    <SetorTable></SetorTable>
    <h2>Feedbacks</h2>
    <FeedbackTable></FeedbackTable>
    </>
  )
}

export default App
