const Dropdown = ({ value, options, onChange }) => {

  return (
    <>   
        <select value={value} onChange={onChange}>
            {options.map((option) => (
                <option className={option.type} value={option.value}>{option.label}</option>
            ))}
        </select>
    </>
  )
}

export default Dropdown