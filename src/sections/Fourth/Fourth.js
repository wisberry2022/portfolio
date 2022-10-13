import './Fourth.scss';

const ToyTemplate = ({ data }) => {
  return (
    <div className="toy">
      <figure className={`bg_set itm0${data.id}`}></figure>
      <div className="desc_box">
        <h4>{data.title}</h4>
        <strong>{data.link}</strong>
      </div>
    </div>
  )
}

const Fourth = () => {
  const dataList = [
    { id: 1, title: '배포', icon: false, contents: 'github pages' },
    { id: 2, title: '사용기술', icon: true, contents: ['HTML5', 'CSS', 'SCSS', 'Vanilla JS', 'JQUERY'] },
    { id: 3, title: '구현페이지 목록', icon: false, contents: ['site1', 'site2', 'site3', 'site4', 'site5'] },
  ];

  const siteList = [
    { id: 1, title: 'site1', link: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'site2', link: 'Lorem ipsum dolor sit amet' },
    { id: 3, title: 'site3', link: 'Lorem ipsum dolor sit amet' },
    { id: 4, title: 'site4', link: 'Lorem ipsum dolor sit amet' },
    { id: 5, title: 'site5', link: 'Lorem ipsum dolor sit amet' },
  ]
  return (
    <div className="section bg_set fourth">
      <div className="container">
        <div className="grid_box">
          <div className="intro">
            <h3 className="div_title">TOY PROJECT</h3>
            <div className="info_desc">
              <strong>프로젝트 소개</strong>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure similique deleniti nostrum fugit. Nam nobis quidem eum hic iusto veniam aperiam magni, nisi et ut maiores consequuntur! Doloribus, velit quia!
              </p>
            </div>
            <ul className="desc_list">
              {dataList.map(it => {
                return (
                  <li key={it.id}>
                    <strong>{it.title}</strong>
                    {typeof it.contents === 'object' ?
                      <ul className="sub_list">
                        {it.contents.map((its, idx) => {
                          return (
                            <li key={idx}>
                              {it.icon ? <figure className={`bg_set itm0${idx + 1}`}></figure> : null}
                              <strong>{its}</strong>
                            </li>
                          )
                        })}
                      </ul>
                      : <span>{it.contents}</span>}
                  </li>
                )
              })}
            </ul>
          </div>
          {siteList.map(it => {
            return <ToyTemplate key={it.id} data={it} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Fourth;