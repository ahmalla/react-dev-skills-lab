
import './App.css'
import SkillList from './SkillListItem';
import { useState } from "react";


function App() {
  const [skills, setSkills] = useState ([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },

  ]);
  const [newSkill, setNewSkills] = useState('')
  const [newLevel, setNewLevel] = useState('')

  const handleAddSkill = (event) => {
    event.preventDefault()
    setSkills([{name:newSkill, level:newLevel}, ...skills])
  }
  const handleSkillChange = (event) => {
    setNewSkills(event.target.value)
  }
  const handleLevelChange = (event) => {
  setNewLevel(event.target.value)
  }
  return (
    <div>
      <h1 style={{fontSize: "48px", color: "teal"}}>React Dev Skills</h1>
      {skills.map(function (skill) {
        return <SkillList key={skill.name} name={skill.name} level={skill.level} />
})}
      <div className="App">
        <form className="NewSkillForm" onSubmit={handleAddSkill}>
          <label>Skill</label>
          <input value={newSkill} onChange={handleSkillChange}></input>
          <label>Level</label>
          <select value={newLevel} onChange={handleLevelChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type="submit">Add SKill</button>
        </form>
    </div>
    </div>
  )
}

// exporting the function reference
// used to be module.exports
export default App