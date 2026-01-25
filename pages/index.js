import { useState } from "react"

export default function Home() {
    const [state, setState] = useState("")
    return (
        <div>
            <h1>Meu amor. Como estou hj?</h1>

            <ul>
                <li>Um chato</li>
                <li>Romântico, como sempre.</li>
                <li>Pensativo</li>
            </ul>

            <h2>Aguado sua resposta, te amo!!</h2>
        </div>
    )
}