import './App.css';
import MemoryGame from './components/MemoryGame';

export function App() {
  return (
    <scroll-view scroll-orientation="vertical" className="h-screen p-2">
      <view>
        <MemoryGame />
      </view>
    </scroll-view>
  );
}
