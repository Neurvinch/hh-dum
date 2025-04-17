import React from 'react'
import { fetchPuzzle } from '../services/groqClient';

const puzzleButton = () => {
    const [puzzle , setPuzzle] = useState('');

    const handleclick = async () => {
        const text = await fetchPuzzle('A1')
        setPuzzle(text)
    }
  return (
    <div>

        <button onClick={handleclick} > Fetch Puzzle</button>
    </div>
  )
}

export default puzzleButton