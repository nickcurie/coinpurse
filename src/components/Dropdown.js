const Dropdown = ({ value, options, onChange }) => {

  return (
    <div className='dropdwn'>   
        <select value={value} onChange={onChange}>
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown