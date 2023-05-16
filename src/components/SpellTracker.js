import { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Button from './Button'
import Dropdown from './Dropdown'
import SpellCard from './SpellCard'
import SpellSlotCard from './SpellSlotCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'

const SpellTracker = () => {

    const api_url = "https://www.dnd5eapi.co/";

    const [fetchAll, setFetchAll] = useState(false);
    const [loadingAll, setLoadingAll] = useState(true);
    const [spellList, setSpellList] = useState([{ label: 'Choose Spell...', value: '' }]);
    const [selectedSpells, setSelectedSpells] = useState([]);
    const [spellIndex, setSpellIndex] = useState('');
    const [spell, setSpell] = useState(null);
    const [classSelected, setClassSelected] = useState(false);
    const [classList, setClassList] = useState([{ label: 'Choose Class...', value: '' }]);
    const [playerClass, setPlayerClass] = useState('');
    const [playerLevel, setPlayerLevel] = useState(1);
    const [hideLevelButton, setHideLevelButton] = useState('');

    const handleSpellDropdownChange = (event) => {
        setSpellIndex(event.target.value);
    }

    const handleClassDropdownChange = (event) => {
        setPlayerClass(event.target.value);
    }

    const onClickSetPlayerInfo = () => {
        if (playerClass === ''){
            alert('Select class');
        } else {
            setClassSelected(true);
        }
    }

    const clampLevel = (lvl) => {
        if (lvl >= 20) {
            setPlayerLevel(20);
        } else if (lvl < 1) {
            setPlayerLevel(1);
        } else {
            setPlayerLevel(lvl);
        }
    }

    const levelUp = () => {
        let newLvl = parseInt(playerLevel) + 1;
        clampLevel(newLvl);
    }

    const fetchSpell = async (url, request) => {
        const res = await fetch(url + request);
        const recieved = await res.json();

        setSelectedSpells(selectedSpells => [...selectedSpells, recieved]);
    }

    async function getSpellList(url, request) {
        //setLoadingAll(true);
        const res = await fetch(url + request);
        const recieved = await res.json();

        for (let step = 0; step < recieved['count']; step++) {
            setSpellList(spellList => [...spellList, ({ label: recieved['results'][step]['name'], value: recieved['results'][step]['index'], url: recieved['results'][step]['url'] })]);
        }
        // setFetchAll(true);
        // setLoadingAll(false);
    }

    async function getClassList(url, request) {
        setLoadingAll(true);
        const res = await fetch(url + request);
        const recieved = await res.json();

        for (let step = 0; step < recieved['count']; step++) {
            setClassList(classList => [...classList, ({ label: recieved['results'][step]['name'], value: recieved['results'][step]['index'] })]);
        }
        setFetchAll(true);
        setLoadingAll(false);
    }

    useEffect(() => {
        if (!fetchAll) {
            getSpellList(api_url, 'api/spells/');
            getClassList(api_url, 'api/classes/');
        }
        if (fetchAll && spell) {
            fetchSpell(api_url, 'api/spells/' + spell);
        }
    }, [fetchAll, spell, playerClass])

    useEffect(() => {
        if (playerLevel === 20) {
            setHideLevelButton('hide');
        }
    }, [playerLevel])

  return (
    <>
        {
            !classSelected
            ?
                <div className='add-form'>
                    <div className='class-selector'>
                        <Dropdown options={classList} value={playerClass} onChange={handleClassDropdownChange}/>
                        <input placeholder='Level' type='number' onChange={(e) => clampLevel(e.target.value)}/>
                    </div>
                    <Button text='Submit' onClick={() => onClickSetPlayerInfo()}/>
                </div>
            :
                <>
                    <div id='player-info-container'>
                        <div id='player-info'>
                            <p>{playerClass.charAt(0).toUpperCase() + playerClass.slice(1)}</p>
                            <span>{'Level ' + playerLevel + ' '}</span>
                            <button onClick={() => levelUp()} className={hideLevelButton}><FontAwesomeIcon icon={faUpLong} /></button>
                        </div>
                    </div>
                    <SpellSlotCard characterLevel={playerLevel} classType={playerClass}></SpellSlotCard>
                    <div className='add-form'>
                        <div>
                            {
                                loadingAll
                                ?
                                    <SkeletonTheme baseColor='#484e7b' highlightColor='#515785' height='3em'>
                                        <p>
                                            <Skeleton />
                                        </p>
                                    </SkeletonTheme>
                                :
                                    <Dropdown options={spellList} value={spellIndex} onChange={handleSpellDropdownChange}/>
                            }
                        </div>
                        <Button text='Add' onClick={() => setSpell(spellIndex)} />
                    </div>
                    <div className='spell-grid'>
                        {
                            selectedSpells.map((spell, i) => (
                                <SpellCard spellName={spell['name']} spellRange={spell['range']} spellLevel={spell['level']} spellDescription={spell['desc'][0]} childNum={i}/>
                            ))
                        }
                    </div>
                </>
        }
    </>
  )
}

export default SpellTracker