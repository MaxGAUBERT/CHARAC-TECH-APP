import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faKissWinkHeart, faListNumeric, faMinus, faPlus, faTabletAndroid, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect} from 'react'

function App () {
  // Implémentation des useState
  const [txt, setTxt] = useState('');
  const [show, setShow] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [filteredText, setFilteredText] = useState('');
  document.title = "CHARAC'TECH";

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);


    // Appeler la fonction en fonction de l'option sélectionnée
    switch (selectedValue) {
      case 'vowels':
        filterVowels(txt);
        break;
      case 'consonants':
        filterConsonants(txt);
        break;
      case 'numbers':
        filterNumbers(txt);
        break;

      default:

        
    }
  };

  // Implémentation des fonctions
  const handleClick = () => {
    const txt = document.querySelector('input').value;
    setTxt(txt);
  }

  const handleAddInput = () => {
    setShow(!show);
  }

  const handleErase = () => {
    const txt = document.querySelector('input').value = '';
    setTxt(txt);
    setFilteredText('');

  }
  
  const filterVowels = (text) => {
    const vowels = 'aeiouAEIOU';
    const filterTxtVowels = text.split('').filter(char => vowels.includes(char)).join('');
    setFilteredText(filterTxtVowels);
  };

  const filterConsonants = (text) => {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    const filterTxtCons = text.split('').filter(char => consonants.includes(char)).join('');
    setFilteredText(filterTxtCons);
  };
  
  const filterNumbers = (text) => {
    const numbers = '0123456789';
    const filterTxtNum = text.split('').filter(char => numbers.includes(char)).join('');
    setFilteredText(filterTxtNum);
  };

  
  useEffect(() => {
    if (show) {
      setCharCount(txt.length);
    } else {
      setCharCount('No input');
    }
  }, [txt, show]);

 


  

  
  
    

  // Rendu par un return 

  return (

  <div> 
    
    <h1 className='title'> <FontAwesomeIcon icon={faTabletScreenButton} color='red' /> CHARAC'TECH </h1>
      <h1> Output: {txt}</h1>
      

      <button onClick={handleAddInput}> {show ? "Hide": "Show"} inputbox <FontAwesomeIcon icon={faPlus} /> </button>
      {show && (
        <>
        <button className='erase' onClick={handleErase}> Erase <FontAwesomeIcon icon={faEraser} /> </button>
         <input type="text" className="input" placeholder="Type here" value={txt} onChange={handleClick} />
         
          
        </>
      )}  
      
      <h2> <FontAwesomeIcon icon={faListNumeric} /> Number of characters: {charCount} 
      </h2>

      <div>
      <h2 className='titleChoice'> Selected option: {selectedOption} </h2>
      <select value={selectedOption} onChange={handleChange}>
        <option value="No option"> Select a filter option </option>
        <option value="vowels"> Show only voyels </option>
        <option value="consonants"> Show only consonants </option>
        <option value="numbers"> Show only numeric values </option>
      </select>

      <h2 id='filterResult'> After filtering: {filteredText} </h2>
    </div>
    </div>

    

  )
}


export default App; 

