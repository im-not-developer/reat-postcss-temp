import React from 'react'

interface Props {
  
}

const MainPage: React.FC = () => {
  const dd = 1;
  const aa = null;
  return (
    <div>
      {dd}
      {aa ?? 2}
    </div>
  );
};

export default MainPage;
