

function NewSkillForm() {
    return (
    <div className="NewSkillForm">
        <form>
          <label>Skill</label><input className="NewSkillForm"></input><label>Level</label>
          <select className="NewSkillForm">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button className="NewSkillForm">Add SKill</button>
        </form>
    </div>

)}

export default NewSkillForm