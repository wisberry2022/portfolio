import { useEffect, useState } from 'react';
import './Fifth.scss';

const Fifth = () => {
  const letter = 'Thanks!';
  const [text, setText] = useState("");
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    const intervalText = setInterval(() => {
      setText(text + letter[cnt]);
      setCnt(cnt + 1);
    }, 500)
    if (cnt === letter.length) {
      clearInterval(intervalText);
      setTimeout(() => {
        setText('');
        setCnt(0);
      }, 3000)
    }
    return () => {
      clearInterval(intervalText);
    }
  }, [cnt, text])

  const infoList = [
    { id: 1, info: 'name', data: 'WANG INSEO' },
    { id: 2, info: 'H.P', data: '010-8558-8341' },
    { id: 3, info: 'email', data: 'wisberry2022@gmail.com' },
  ];
  return (
    <>
      <div className="section bg_set fifth">
        <div className="inner">
          <h4>{text}</h4>
          <div className="box">
            <table>
              <thead>
                <tr>
                  <th>info</th>
                  <th>data</th>
                </tr>
              </thead>
              <tbody>
                {infoList.map(it => {
                  return (
                    <tr key={it.id}>
                      <td className="info">{it.info}</td>
                      <td className="data">{it.data}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fifth;