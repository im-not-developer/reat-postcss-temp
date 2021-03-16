/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div>
    <p className="title">Ooops!</p>
    <p className="description">요청하신 페이지가 존재하지 않습니다.</p>
    <Link to="/">
      <button type="button">홈으로 돌아가기</button>
    </Link>
  </div>
);

export default NotFoundPage;
