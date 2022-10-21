import './Second.scss';

const PhaseTemplate = ({ data }) => {
  return (
    <div className="phase">
      <h5>
        {data.title}
      </h5>
      {data.icon ?
        <ul className="icon_list">
          {data.list.map((it, idx) => {
            return (
              <li key={idx}>
                <figure className={`bg_set itm0${idx + 1}`}></figure>
                <span>{it}</span>
              </li>
            )
          })}
        </ul>
        :
        <ul className="desc_list">
          {data.linkFlag ?
            data.list.map((it, idx) => {
              return (
                <li key={idx}>
                  {idx >= 1 ? <a href={it} target="_blank">{data.title.split(' / ')[idx]}</a> : it}
                </li>
              )
            })
            :
            data.list.map((it, idx) => {
              return (
                <li key={idx}>
                  {it}
                </li>
              )
            })}
        </ul>
      }
    </div>
  )
}

const Second = () => {
  const descList = [
    { id: 1, title: '배포 플랫폼 / 링크 / README', icon: false, linkFlag: true, list: ['HEROKU', 'https://jungto-page.herokuapp.com/', 'https://skillful-mandevilla-651.notion.site/README-fee75e1f37a44267a4f44c192b775ce7'] },
    { id: 2, title: '구현중점', icon: false, linkFlag: false, list: ['CRUD 구현', '로그인/로그아웃 상태유지', '행사신청 및 관리', 'SPA 구현'] },
    { id: 3, title: '사용기술', icon: true, linkFlag: false, list: ['scss', 'react', 'react-router-dom', 'ExpressJS', 'redux-toolkit', 'redux-persist', 'mongoDB'] },
  ];
  return (
    <>
      <div className="section bg_set second">
        <div className="container">
          <div className="left">
            <div className="title_box">
              <h4 className="div_title">MAIN PROJECT (REACT)</h4>
            </div>
            <div className="info_desc">
              <div className="main_info">
                <h5>정토회 홈페이지 제작</h5>
                <strong>프로젝트 소개</strong>
                <p>
                  사용자들이 직접 회원가입하여 로그인하고, 그에 따라 실질적으로 이용할 수 있는 서비스를 구현해보고자 정토회 홈페이지 제작을 기획하게 되었습니다. <br />게시글, 행사신청과 같은 서비스를 구현하기 위해 서버를 본격적으로 활용하였습니다. 또한 실질적으로 정보를 담아두기 위해  MongoDB를 활용하여 데이터베이스까지 연결하였습니다. React와 ExpressJS, MongoDB를 활용하여 사용자들이 회원가입하여, 이를 이용할 수 있는 서비스를 구현하였습니다.
                </p>
              </div>
              <div className="sub_info">
                {descList.map((it, idx) => {
                  return (
                    <PhaseTemplate key={idx} data={it} />
                  )
                })}
              </div>
            </div>
          </div>
          <div className="right">
            <h4 className="div_title">DEMONSTRATION</h4>
            <figure className="movie"></figure>
          </div>
        </div>
      </div>
    </>
  )
}

export default Second;