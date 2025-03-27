import { useEffect, useState } from '@lynx-js/react';
import Button from './Button';
import GameInstructions from './GameInstructions';

const getGrid = (size) => {
  return [...Array(size).fill(null).map((_, idx) => Math.floor(idx / 2 + 1))];
};

const color = ['default', 'success', 'warning'];

function MemoryGame() {
  const [gridSize, setGridSize] = useState(4);
  const total = gridSize * gridSize - (gridSize & 1);
  const notJumbledGrid = getGrid(total);
  const [grid, setGrid] = useState([]);
  const [cardStatus, setCardStatus] = useState([]);
  const [prevCard, setPrevCard] = useState(null);
  const [disableAll, setDisableAll] = useState(false);
  const [errors, setErrors] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    setGrid([...notJumbledGrid].sort((a, b) => Math.random() - 0.5));
    setCardStatus(Array(total).fill(0));
    setGameOver(false);
    setPrevCard(null);
  }, [gridSize]);

  const handleGridSize = (event) => {
    const value = event.detail.value;
    if (isNaN(value) || value < 2 || value > 10) {
      setErrors({ size: true });
      return;
    }
    setGridSize(Math.floor(Number(value)));
    setErrors({});
  };

  const handleCardStatus = (index) => {
    const newCardStatus = [...cardStatus];
    if (prevCard === null) {
      newCardStatus[index] = 1;
      setPrevCard(index);
      setCardStatus(newCardStatus);
    } else {
      newCardStatus[index] = grid[index] === grid[prevCard] ? 1 : 2;
      if (newCardStatus[index] === 2) {
        setDisableAll(true);
        setTimeout(() => {
          setCardStatus(Array(total).fill(0));
          setDisableAll(false);
        }, 1500);
      }

      const sum = newCardStatus.reduce((acc, num) => acc + num, 0);
      setPrevCard(null);
      setCardStatus(newCardStatus);
      if (sum === total) setGameOver(true);
    }
  };

  const handleReset = () => {
    setGameOver(false);
    setPrevCard(null);
    setGrid([...notJumbledGrid].sort((a, b) => Math.random() - 0.5));
    setCardStatus(Array(total).fill(0));
  };

  const getGridStyle = () => {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      placeItems: 'center',
      gap: '0.5rem',
      width: '100%',
      padding: '1px',
      border: '1px solid',
      
    };
  };

  return (
    <view className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <text className="text-2xl font-bold text-center my-4">Memory Game</text>
      <Button
        onPress={() => setShowInstructions(!showInstructions)}
        color="default"
        className="mb-4"
      >
        {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
      </Button>
      {showInstructions && <GameInstructions />}

      <view className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm mb-4">
        <text className="text-lg font-medium">Grid Size</text>
        <input
          type="number"
          value={gridSize}
          bindinput={handleGridSize}
          className="w-full md:w-2/3 h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a positive number"
        />
        {errors.size && (
          <text className="text-red-500 mt-1">Size must be an integer in the range 2 - 10</text>
        )}
      </view>

      <view className={`grid grid-cols-4 gap-2 p-4 border border-gray-300 place-items-center`} style={getGridStyle()}>
        {grid.map((val, idx) => (
          <view key={idx} className="aspect-square w-full">
            <Button
              style={{aspectRatio: 1/1,
                padding: 0
              }}
              onPress={() => handleCardStatus(idx)}
              color={color[cardStatus[idx]]}
              isDisabled={disableAll || cardStatus[idx]}
              disableEffect={false}
              className='w-full'
            >
              {cardStatus[idx] ? val : ''}

            </Button>
          </view>
        ))}
      </view>

      {gameOver && <text className="text-md text-red-400 text-center mt-4">Game Over!!</text>}
      <Button
        color="success"
        onPress={handleReset}
        className={gameOver ? 'w-28 mt-4' : 'w-20 mt-4'}
        isDisabled={false}
      >
        {gameOver ? 'Play Again!' : 'Reset'}
      </Button>
    </view>
  );
}

export default MemoryGame;

