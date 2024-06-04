import { useContext, useState } from 'react';
import APIInfoContext from '../context/APIInfoContext';

function Header() {
  const [formInfo, setFormInfo] = useState();
  const [planetName, setPlanetName] = useState('');
  const { handleFilterByName } = useContext(APIInfoContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanetName(e.target.value);
    handleFilterByName(e.target.value);
  };

  return (
    <header>
      <form action="">
        <label htmlFor="planet-name">
          <input
            id="planet-name"
            type="text"
            name="Planet Name"
            placeholder="Planet"
            data-testid="name-filter"
            onChange={ handleChange }
            value={ planetName }
          />
        </label>
      </form>
    </header>
  );
}

export default Header;
