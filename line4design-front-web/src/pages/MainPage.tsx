import React, {useState} from 'react';

// interface Props {}

const MainPage: React.FC = () => {
  const [a, setA] = useState('a');

  return (
    <div className="pg-main">
      {a}
      <span>dddoqwepq</span>
    </div>
  );
};

export default MainPage;
