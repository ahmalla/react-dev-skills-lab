function SkillList ({name, level}) {
    return (
    <div>
        <ul>
            <li className="SkillListItem">{name}<p className="level">Level {level}</p> </li>
        </ul>
    </div>
)}

export default SkillList