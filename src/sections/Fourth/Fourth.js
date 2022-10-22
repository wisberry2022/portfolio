import './Fourth.scss';

const ToyTemplate = ({ data }) => {
  return (
    <div className="toy">
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <figure className={`bg_set itm0${data.id}`}></figure>
      </a>
      <div className="desc_box">
        <h4>
          <a href={data.link}>{data.title}</a>
        </h4>
      </div>
    </div>
  )
}

const Fourth = () => {
  const dataList = [
    // { id: 1, title: '배포', icon: false, contents: 'github pages' },
    { id: 1, title: '사용기술', icon: true, contents: ['HTML5', 'CSS', 'SCSS', 'Vanilla JS', 'JQUERY'] },
  ];

  const siteList = [
    { id: 1, title: 'SHISEIDO', link: 'https://wisberry2022.github.io/web_practice/shiseido/' },
    { id: 2, title: 'SONY STORE(Responsive Web)', link: 'https://wisberry2022.github.io/web_practice/sony/' },
    { id: 3, title: '정관장(Responsive Web)', link: 'https://wisberry2022.github.io/web_practice/jgj/' },
    { id: 4, title: '민음사(Responsive Web)', link: 'https://wisberry2022.github.io/web_practice/minumsa/' },
    { id: 5, title: 'MBC(Responsive Web)', link: 'https://wisberry2022.github.io/web_practice/mbc/#!' },
  ]
  return (
    <>
      <div className="section bg_set fourth">
        <div className="container">
          <div className="grid_box">
            <div className="intro">
              <h3 className="div_title">TOY PROJECT</h3>
              <div className="info_desc">
                <strong>프로젝트 소개</strong>
                <p>
                  HTML/CSS/JS/JQUERY를 활용하여 웹 사이트의 메인페이지를 제작하였습니다.<br />
                  탭 메뉴, 슬라이드, 동영상 재생 등 메인 페이지에서<br />
                  사용되는 다양한 기능을 구현하였습니다. <br />
                  TOY PROJECT는 github pages를 이용하여 배포하였습니다.
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
    </>
  )
}

export default Fourth;