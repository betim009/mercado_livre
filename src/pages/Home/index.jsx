import { useContext } from "react"
import Context from "../../context/Context"

function Home() {
    const {computers, setComputers} = useContext(Context)
    console.log(computers)
    return (
        <>
            <h2>Olá mundo</h2>

        </>
    )
}

export default Home