import { useState, useEffect } from 'react'
import Button from './Button'
import Dropdown from './Dropdown'

const SpellTracker = () => {

    const api_url = "https://www.dnd5eapi.co/api/"

    const [spellList, setSpellList] = useState([])

    const [spellId, setSpellId] = useState(0)

    

    const handleChange = (event) => {
        setSpellId(event.target.value)
    }

    useEffect(() => {
        const getapi = (url, whatuwant) => {
            return fetch(url + whatuwant)
            .then(res => {
                return res.json()
            })
            .then(recieved => {
                for (let step = 0; step < recieved['count']; step++){
                    setSpellList(spellList => [...spellList, ({label: recieved['results'][step]['name'], value: step})])
                }

            })
            // let test = [
            //     { label: 'PP', value: 100**3},
            //     { label: 'GP', value: 100**2},
            //     { label: 'SP', value: 100},
            //     { label: 'CP', value: 1}
            // ]

        }
        getapi(api_url, 'spells/')
    }, [])

  return (
    <div className='test'>
        <div className='center'>
            <Dropdown options={spellList} value={spellId} onChange={handleChange} size='big'/>
        </div>
        <div>
            <Button text='Submit' onClick={() => alert(spellId)}/>
        </div>
        
    </div>
  )
}

export default SpellTracker