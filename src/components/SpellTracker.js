import { useState, useEffect } from 'react'
import Button from './Button'
import Dropdown from './Dropdown'
import SpellCard from './SpellCard'

const SpellTracker = () => {

    const api_url = "https://www.dnd5eapi.co/"

    const [spellList, setSpellList] = useState([])
    const [selectedSpells, setSelectedSpells] = useState([])
    const [spellIndex, setSpellIndex] = useState('')
    const [spell, setSpell] = useState('')

    const handleDropdownChange = (event) => {
        setSpellIndex(event.target.value)
        console.log(spellIndex)
    }

    const fetchSpell = async (url, request) => {
        const res = await fetch(url + request)
        const recieved = await res.json()

        setSelectedSpells(selectedSpells => [...selectedSpells, recieved])
    }

    const getSpellList = async (url, request) => {
        const res = await fetch(url + request)
        const recieved = await res.json()

        for (let step = 0; step < recieved['count']; step++) {
            setSpellList(spellList => [...spellList, ({ label: recieved['results'][step]['name'], value: recieved['results'][step]['index'], url: recieved['results'][step]['url'] })])
        }
    }

    useEffect(() => {
        getSpellList(api_url, 'api/spells/')
    }, [])

    useEffect(() => {
        fetchSpell(api_url, 'api/spells/' + spell)
        //alert(spell)
    }, [spell])

  return (
    <div className='test'>
        <div className='center'>
            <Dropdown options={spellList} value={spellIndex} onChange={handleDropdownChange}/>
        </div>
        <div align='center'>
            <Button text='+' onClick={() => setSpell(spellIndex)} />
        </div>
        <div className='spell-grid'>
            {
                selectedSpells.map((spell) => (
                    <SpellCard spellName={spell['name']} spellRange={spell['range']} spellLevel={spell['level']} spellDescription={spell['desc']}/>
                ))
            }
        </div>
        
    </div>
  )
}

export default SpellTracker