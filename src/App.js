import React, { Component } from 'react';
import './App.css';
import { teamAlpha, teamBlabo, getImage, result, stream } from './data';

class App extends Component {
  render() {
    return (
      <div className="contents">
        <p className="title">闇のドラフト大会</p>
        <p className="p_team">チーム</p>
        <div className="team">
          <ul>
            {teamAlpha.map((player, i) => (
              <li key={i}>
                <ul>
                  {player.map((player, i) => (
                    <li className={i === 0 ? "player" : "weapon"}>{player}</li>
                  ))}
                </ul>
              </li>))}
          </ul>
          <ul>
            {teamBlabo.map((player, i) => (
              <li key={i}>
                <ul>
                  {player.map((player, i) => (
                    <li className={i === 0 ? "player" : "weapon"}>{player}</li>
                  ))}
                </ul>
              </li>))}
          </ul>
        </div>
        <div className="allResult">
          {result.map((match, i) => (
            <div className="result" key={i}
              style={{
                backgroundImage: `url(${getImage(match.stage)})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "rgba(240,255,255,0.5)",
                backgroundBlendMode: "lighten",
                backgroundSize: "cover"
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-evenly"
              }}>
                <div style={{ display: "flex" }}>
                  <p className="p_matchCount">第{i + 1}試合</p>
                  <img src={getImage(match.rule)} alt="rule" style={{ width: "4rem" }} />
                </div>
              </div>
              <div className="gameRatio">
                <p>アルファ:{match.ratioA}</p>
                <p>ブラボー:{match.ratioB}</p>
              </div>
              <div className="gameMeter">
                <div style={{ display: "flex", justifyContent: "strech" }}>
                  <div className="alpha"
                    style={{
                      width: `${match.ratioA / (match.ratioA + match.ratioB) * 10}rem`,
                      height: "25px",
                      backgroundColor: `rgb(53, 255, 70)`
                    }} />
                  <div className="blabo"
                    style={{
                      width: `${match.ratioB / (match.ratioA + match.ratioB) * 10}rem`,
                      height: "25px",
                      backgroundColor: `rgb(255, 75, 129)`
                    }}
                  />
                </div>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "space-evenly"
              }}>
                <div style={{
                  display: "flex",
                  fontWeight: "700"
                }}>
                  <p style={{
                    color: "orange",
                    WebkitTextStroke: "0.5px #FFF"
                  }}>WIN：</p>
                  <p>{match.WIN}チーム</p>
                </div>
              </div>
              <a href={match.link}>試合リンク</a>
            </div>
          ))}
          <div className="overAllResult">
            <div style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}>
              <ul>
                <li>アルファ</li>
                <li>5勝</li>
              </ul>
              <ul>
                <li>ブラボー</li>
                <li>0勝</li>
              </ul>
            </div>
            <p>優勝 アルファチーム</p>
            <p className="winner">Congratulations!</p>
            <img src={getImage("アルファ")} alt="win team"
              style={{
                width: "96%"
              }} />
          </div>

          <div>
            <p>more streams</p>
            <ul>
              {stream.map((stream, i) => (
                <li key={i}>
                    <div style={{
                      display: "flex",
                      justifyContent:"start",
                      position:"relative",
                      left:"10rem",
                    }}>

                      <a href={stream.link}>
                        <img src={getImage(stream.stream)} alt="stramsite"
                          style={{
                            borderRadius: "5px",
                            width: "80px"
                          }} />
                      </a>
                      <p style={{
                        position:"absolute",
                        fontSize: "1.5rem",
                        left:"85px",
                        bottom:"30px"
                      }}>{stream.name}</p>
                    </div>
                </li>
              ))}
            </ul>

            <p>制作 よつぎ</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
