
import './App.css';
import Button from './components/bai-1';
import Input from './components/bai-2';
function App() {
  return (
    <div className='btns'>
      <Button text='Cancle' />
      <Button text='Sell' />
      <Button text='Set Auction' />
      <Button text='Delist' />
      <Button text='Approve' />
    </div>,
    <div className='items'>
      <Input text='Username'/>
      <Input text='Password'/>
      <Input text='Address'/>
    </div>
  );
}

export default App;
