import React,{useState} from 'react';

interface Props {}

const MainPage: React.FC = () => {

  const {a, setA} = useState('a')

  return (
    <div>
      {a}
    </div>
  );
};

export default MainPage;
