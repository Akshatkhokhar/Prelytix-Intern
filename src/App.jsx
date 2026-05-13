import { useState } from 'react'
import Header from './components/Header'
import SkillList from './components/SkillList'

function App() {
  const [stamina, setStamina] = useState(100)
  const [clickCount, setClickCount] = useState(0)

  const skills = [
    { name: "JS", level: 95 },
    { name: "React", level: 80 }
  ]

  const handleWriteCode = () => {
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)

    let reduction = 2
    if (newClickCount % 5 === 0) {
      reduction = 15
    }

    setStamina((prev) => Math.max(0, prev - reduction))
  }

  const isBurnedOut = stamina <= 0

  return (
    <>
      <Header />
      <p className="ak-intern-name">{import.meta.env.VITE_INTERN_NAME}</p>
      
      <div className="ak-stamina-section">
        <div className="ak-stamina-container">
          <div 
            className="ak-stamina-bar" 
            style={{ width: `${stamina}%`, backgroundColor: stamina < 20 ? '#ff4d4d' : '#4CAF50' }}
          ></div>
        </div>
        <p className="ak-stamina-text">Stamina: {stamina}%</p>
        
        <button 
          className="ak-write-code-btn"
          onClick={handleWriteCode}
          disabled={isBurnedOut}
        >
          {isBurnedOut ? "Burnout! Rest Required" : "Write Code"}
        </button>
      </div>

      <SkillList skills={skills} />
    </>
  )
}

export default App
