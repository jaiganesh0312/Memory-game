export default function GameInstructions() {
  return (
    <view className="mb-6 p-4 bg-white rounded-lg shadow-sm">
      <text className="text-xl font-bold mb-2">How to Play Memory Game</text>
      <text className="mb-4">
        Test your memory by finding matching pairs of cards.
      </text>
      <view>
        <text className="font-semibold">Objective:</text>
        <text>Find all matching pairs of cards in the grid.</text>
      </view>
      <view className="mt-2">
        <text className="font-semibold">Setting Up:</text>
        <text>
          Choose a grid size between 2 and 10 by entering a number in the input
          field.
        </text>
      </view>
      <view className="mt-2">
        <text className="font-semibold">Playing the Game:</text>
        <view className="list-disc list-inside">
          <text>Click on a card to flip it and reveal its value.</text>
          <text>Click on a second card to flip it.</text>
          <text>If the two cards match, they will stay flipped.</text>
          <text>
            If they don’t match, all the flipped cards will flip back after a
            short delay.
          </text>
        </view>
      </view>
      <view className="mt-2">
        <text className="font-semibold">Winning the Game:</text>
        <text>
          Match all pairs correctly to win. A 'Game Over' message will appear
          when you succeed.
        </text>
      </view>
      <view className="mt-2">
        <text className="font-semibold">Resetting the Game:</text>
        <text>
          Click the 'Reset' button to start a new game at any time. After
          winning, it changes to 'Play Again!'.
        </text>
      </view>
      <view className="mt-2">
        <text className="font-semibold">Visual Cues:</text>
        <view className="list-disc list-inside">
          <text>Matched pairs turn green.</text>
          <text>
            Mismatched pairs turn yellow briefly before flipping back.
          </text>
        </view>
      </view>
      <view className="mt-2">
        <text className="font-semibold">Tips:</text>
        <view className="list-disc list-inside">
          <text>
            Try to remember the positions of the cards you’ve flipped.
          </text>
          <text>
            Start with smaller grid sizes to get familiar with the game.
          </text>
        </view>
      </view>
    </view>
  );
}
