// import React from 'react'; =>   "jsx": "react-jsx", // 这里改成react-jsx，就不需要在tsx文件中手动引入React了
import { render } from 'react-dom';
import './index.scss';

try {
  const rootElement = document.getElementById('root');
  console.log('运行');
  const App = () => <div className="hello">Hello</div>;
  render(<App />, rootElement);
} catch (e) {
  console.log('e', e);
}
