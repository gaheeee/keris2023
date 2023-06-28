import { useState, useEffect } from 'react';
import {apiKEY} from '../../../myApi';

export default function Main() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    let url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const abortController = new AbortController(); // AbortController 생성
    const signal = abortController.signal;

    fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',//json 형식으로 받기
        Authorization: {apiKEY}
      },
      signal: signal // signal 옵션 추가
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setDatas(res.results); // 결과 데이터를 배열 형식으로 설정
      })
      .catch(error => {
        if (error.name !== 'AbortError') { // AbortError 오류를 무시
          console.log('error: ' + error);
        }
      });

    return function cleanup() {
      abortController.abort(); // 컴포넌트가 언마운트되면 요청 취소
    };
  }, []); // 빈 배열을 넣어 최초 한 번만 실행되도록 설정



  return (
    <div className="famous-main">
      <h1>main</h1>
      <div className="datas">
        {datas.map((data) => (
          <p key={data.id}> movie title : {data.title}</p>
        ))}
      </div>
    </div>
  );
}