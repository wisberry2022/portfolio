import './Third.scss';

const SubTemplate = ({ subData }) => {
  return (
    <div>
      <ul className="sub_desc">
        {subData.map(it => {
          return (
            <li key={it.id}>
              <strong>{it.title}</strong>
              {it.linkFlag ?
                <ul className="link_list">
                  {it.contents.map((its, num) => {
                    return (
                      <li key={num}>
                        {num >= 1 ? <a href={its} target="_blank">{it.title.split(' / ')[num]}</a> : its}
                      </li>
                    )
                  })}
                </ul>
                :
                typeof it.contents === 'object' ?
                  <ul className="tech_list">
                    {it.contents.map((el, idx) => {
                      return (
                        <li key={idx}>
                          <figure className={`bg_set itm0${idx + 1}`}></figure>
                          <span>{el}</span>
                        </li>
                      )
                    })}
                  </ul>
                  :
                  <span>{it.contents}</span>
              }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const InfoTemplate = ({ data }) => {
  return (
    <div className="desc">
      <h5>{data.title}</h5>
      <div className="sub_info">
        <strong>프로젝트 소개</strong>
        <p>
          {data.intro}
        </p>
      </div>
      <SubTemplate subData={data.subData} />
    </div>
  )
}

const Third = () => {
  const dataList = [
    {
      id: 1, title: '부산교통공사 홈페이지 제작', intro: '지하철은 배차간격이 정확하여 정시출발, 도착을 보장하지만 열차가 도착하는 시간을 항상 숙지할 수는 없습니다. 따라서 지하철 이용 전 탑승예정역의 열차 도착 시간을 알 수 있으면 좋겠다라고 생각하였습니다. 이를 위해 API를 활용하여 사용자들이 실시간으로 조회할 수 있는 열차 시간표를 제공하는 기능을 구현하였습니다', subData: [
        { id: 1, title: '배포플랫폼 / 링크 / README', linkFlag: true, contents: ['HEROKU', 'https://practice04.herokuapp.com/', 'https://skillful-mandevilla-651.notion.site/README-fd129273118447e1b38a9b4e839c279d'] },
        { id: 2, title: '사용API', linkFlag: false, contents: '부산교통공사 API' },
        { id: 3, title: '사용기술', linkFlag: false, contents: ['scss', 'react', 'react-router-dom', 'ExpressJS'] },
      ]
    },
    {
      id: 2, title: 'CGV 홈페이지 제작', intro: '한 주의 박스오피스 정보를 출력하고, 사용자가 검색하고 싶은 영화를 검색하여 그 결과를 받아보는 시스템을 구현하고자 하였습니다. 박스오피스 데이터 활용을 위해 영화진흥위원회 API를 사용하였으며, 영화 검색 기능 구현을 위해 네이버 오픈API를 활용하였습니다.', subData: [
        { id: 1, title: '배포플랫폼 / 링크 / README', linkFlag: true, contents: ['HEROKU', 'https://movie-page.herokuapp.com/', 'https://skillful-mandevilla-651.notion.site/CGV-README-db843fd2030a4082b443a6713d308f61'] },
        { id: 2, title: '사용API', linkFlag: false, contents: 'KOBIS / 네이버 검색 API(영화)' },
        { id: 3, title: '사용기술', linkFlag: false, contents: ['scss', 'react', 'react-router-dom', 'ExpressJS', 'redux-toolkit'] },
      ]
    },
  ];
  return (
    <>
      <div className="section bg_set third">
        <div className="container">
          <div className="top">
            <div className="title_box">
              <h4 className="div_title">SIDE PROJECT (REACT)</h4>
            </div>
            <div className="info_desc">
              <div className="left">
                <InfoTemplate data={dataList[0]} />
              </div>
              <div className="right">
                <InfoTemplate data={dataList[1]} />
              </div>
            </div>
          </div>
          <div className="bottom">
            <a href="#">
              <figure className="left bg_set">

              </figure>
            </a>
            <a href="#">
              <figure className="right bg_set">

              </figure>
            </a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Third;