
import './App.css'
import NewSkillForm from './NewSkillForm';
import SkillList from './SkillListItem';

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];


  

function App() {
  return (
    <div className="App">
      <h1 style={{fontSize: "48px", color: "teal"}}>React Dev Skills</h1>
      {skills.map(function (skill) {
        return <SkillList key={skill.name} name={skill.name} level={skill.level} />

})}
      <NewSkillForm />
    </div>
  )
}

// exporting the function reference
// used to be module.exports
export default App