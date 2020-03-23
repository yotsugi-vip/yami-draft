import React, { Component } from 'react';
import './App.css';
import { teamAlpha, teamBlabo, getImage, result, stream } from './data';

class App extends Component {
  render() {
    return (
      <div className="contents">
        <p className="title">闇のドラフト大会</p>
        <div className="team">
          <div style={{
            border: "1px solid",
            borderRadius: "8px",
            backgroundColor: "rgba(240, 255, 255, 0.3)",
            backgroundBlendMode: "lighten"
          }}>
            <p className="gameRatioAlpha" style={{ fontSize: "1.25rem" }}>アルファチーム</p>
            <ul>
              {teamAlpha.map((player, i) => (
                <li key={i}>
                  <ul>
                    {player.map((player, i) => (
                      <li key={i} className={i === 0 ? "player" : "weapon"}>{player}</li>
                    ))}
                  </ul>
                </li>))}
            </ul>
          </div>
          <div style={{
            border: "1px solid",
            borderRadius: "8px",
            backgroundColor: "rgba(240, 255, 255, 0.3)",
            backgroundBlendMode: "lighten"
          }}>
            <p className="gameRarioBlabo" style={{ fontSize: "1.25rem" }}>ブラボーチーム</p>
            <ul>
              {teamBlabo.map((player, i) => (
                <li key={i}>
                  <ul>
                    {player.map((player, i) => (
                      <li key={i} className={i === 0 ? "player" : "weapon"}>{player}</li>
                    ))}
                  </ul>
                </li>))}
            </ul>
          </div>
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
                  <img src={getImage(match.rule)} alt="rule" style={{ width: "4.5rem" }} />
                </div>
              </div>
              <div className="gameRatio">
                <p className="gameRatioAlpha">アルファ:{match.ratioA}</p>
                <p className="gameRarioBlabo">ブラボー:{match.ratioB}</p>
              </div>
              <div className="gameMeter">
                <div style={{ display: "flex", justifyContent: "strech" }}>
                  <div className="alpha"
                    style={{
                      width: `${match.ratioA / (match.ratioA + match.ratioB) * 20}rem`,
                      height: "25px",
                      backgroundColor: `rgb(53, 255, 70)`
                    }} />
                  <div className="blabo"
                    style={{
                      width: `${match.ratioB / (match.ratioA + match.ratioB) * 20}rem`,
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
                  fontWeight: "700",
                  WebkitTextStroke: "0.5px #FFF",
                  fontSize: "1.5rem"
                }}>
                  <p style={{
                    color: "orange"
                  }}>WIN：</p>
                  <p className="gameRatioAlpha">{match.WIN}チーム</p>
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
                <li className="gameRatioAlpha" style={{fontSize:"1.5rem",fontWeight:"600"}}>アルファ</li>
                <li style={{fontSize:"1.5rem"}}>5勝</li>
              </ul>
              <ul>
                <li className="gameRarioBlabo" style={{fontSize:"1.5rem",fontWeight:"600"}}>ブラボー</li>
                <li style={{fontSize:"1.5rem"}}>0勝</li>
              </ul>
            </div>
            <p style={{fontSize:"1.5rem"}}>優勝 アルファチーム</p>
            <p className="winner">Congratulations!</p>
            <img src={getImage("アルファ")} alt="win team"
              style={{
                width: "96%"
              }} />
          </div>

          <div style={{
            border: "1px solid",
            borderRadius: "8px",
            backgroundColor: "rgba(240, 255, 255, 0.3)",
            backgroundBlendMode: "lighten"
          }}>
            <p style={{
              fontSize:"1.5rem",
              fontStyle:"oblique"
            }}>more streams</p>
            <ul>
              {stream.map((stream, i) => (
                <li key={i}>
                  <div style={{
                    display: "flex",
                    justifyContent: "start",
                    position: "relative",
                    left: "10rem",
                  }}>

                    <a href={stream.link}>
                      <img src={getImage(stream.stream)} alt="stramsite"
                        style={{
                          backgroundColor:"white",
                          borderRadius: "8px",
                          width: "80px"
                        }} />
                    </a>
                    <p style={{
                      position: "absolute",
                      fontSize: "1.5rem",
                      left: "85px",
                      bottom: "30px"
                    }}>{stream.name}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p>制作 よつぎ</p>
            <a href="https://github.com/yotsugi-vip/yami-draft">ソースコード</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
