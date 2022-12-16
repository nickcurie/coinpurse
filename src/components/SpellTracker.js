import { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Button from './Button'
import Dropdown from './Dropdown'
import SpellCard from './SpellCard'

const SpellTracker = () => {

    const api_url = "https://www.dnd5eapi.co/"

    const [fetchAll, setFetchAll] = useState(false)
    const [spellList, setSpellList] = useState([])
    const [selectedSpells, setSelectedSpells] = useState([])
    const [spellIndex, setSpellIndex] = useState('')
    const [spell, setSpell] = useState(null)
    const [loadingAll, setLoadingAll] = useState(true)
    // const [loadingSpell, setLoadingSpell] = useState(true)

    const handleDropdownChange = (event) => {
        setSpellIndex(event.target.value)
    }

    const fetchSpell = async (url, request) => {
        const res = await fetch(url + request)
        const recieved = await res.json()

        setSelectedSpells(selectedSpells => [...selectedSpells, recieved])
    }

    async function getSpellList(url, request) {
        setLoadingAll(true)
        const res = await fetch(url + request)
        const recieved = await res.json()

        for (let step = 0; step < recieved['count']; step++) {
            setSpellList(spellList => [...spellList, ({ label: recieved['results'][step]['name'], value: recieved['results'][step]['index'], url: recieved['results'][step]['url'] })])
        }
        setFetchAll(true);
        setLoadingAll(false)
    }

    useEffect(() => {
        if (!fetchAll) {
            getSpellList(api_url, 'api/spells/')
        }
        if (fetchAll && spell) {
            fetchSpell(api_url, 'api/spells/' + spell)
        }
    }, [fetchAll, spell])

  return (
    <>
        <div className='add-form'>
            <div className='spell-dropdown'>
                {
                    loadingAll
                    ?
                        <SkeletonTheme baseColor='#484e7b' highlightColor='#515785' height='3em' className='dropdwn'>
                            <p>
                                <Skeleton />
                            </p>
                        </SkeletonTheme>
                    :
                        <Dropdown options={spellList} value={spellIndex} onChange={handleDropdownChange}/>
                }
            </div>
            <Button text='Add' onClick={() => setSpell(spellIndex)} />
        </div>
        <div className='spell-grid'>
            {
                selectedSpells.map((spell) => (
                    <SpellCard spellName={spell['name']} spellRange={spell['range']} spellLevel={spell['level']} spellDescription={spell['desc'][0]}/>
                ))
            }
        </div>
        
    </>
  )
}

export default SpellTracker