import {Component} from 'react'
import './index.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

class WholeGame extends Component {
  state = {
    score: 0,
    clickedImageurl: '',
    randomImageurl: '',
    resultpage: false,
    clickedimageid: '',
    randomimageid: '',
    result: '',
  }

  ClickedImge = id => {
    const {list} = this.props
    const theclickedimageurl = list.filter(each => each.id === id)

    const number = Math.floor(Math.random() * list.length)
    const theid = list[number]
    if (theclickedimageurl[0].id === 'PAPER' && theid.id === 'ROCK') {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    }
    if (theclickedimageurl[0].id === 'SCISSORS' && theid.id === 'ROCK') {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
    if (theclickedimageurl[0].id === 'ROCK' && theid.id === 'PAPER') {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
    if (theclickedimageurl[0].id === 'SCISSORS' && theid.id === 'PAPER') {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    }
    if (theclickedimageurl[0].id === 'ROCK' && theid.id === 'SCISSORS') {
      this.setState(prevState => ({
        result: 'YOU WON',
        score: prevState.score + 1,
      }))
    }
    if (theclickedimageurl[0].id === 'PAPER' && theid.id === 'SCISSORS') {
      this.setState(prevState => ({
        result: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
    if (theclickedimageurl[0].id === theid.id) {
      this.setState({result: 'IT IS DRAW'})
    }

    this.setState({
      clickedImageurl: theclickedimageurl[0].imageUrl,
      randomImageurl: theid.imageUrl,
      resultpage: true,
      clickedimageid: theclickedimageurl[0].id,
      randomimageid: theid.id,
    })
  }

  playagain = () => {
    this.setState({resultpage: false})
  }

  render() {
    const {list} = this.props
    const {
      score,
      resultpage,
      clickedImageurl,
      randomImageurl,
      result,
      clickedimageid,
      randomimageid,
    } = this.state

    return (
      <div className="wholediv">
        <div className="updiv">
          <div>
            <h1 className="itemnames">Rock Paper Scissors</h1>
          </div>
          <div className="scorediv">
            <p className="score">Score</p>
            <p className="zero">{score}</p>
          </div>
        </div>

        {resultpage ? (
          <>
            <div className="resultwhole">
              <div className="resultone">
                <p className="you">YOU</p>
                <img
                  alt="your choice"
                  className="resultimg"
                  src={clickedImageurl}
                />
              </div>
              <div className="resultone">
                <p className="you">OPPONENT</p>
                <img
                  alt="opponent choice"
                  className="resultimg"
                  src={randomImageurl}
                />
              </div>
            </div>
            <div>
              <h1 className="poi">{result}</h1>
              <button
                type="button"
                onClick={this.playagain}
                className="playagain"
              >
                PLAY AGAIN
              </button>
            </div>
          </>
        ) : (
          <div className="downdiv">
            <button data-testid="rockButton" type="button">
              <img
                src={list[0].imageUrl}
                onClick={() => this.ClickedImge(list[0].id)}
                key={list[0].id}
                className="images"
                alt={list[0].id}
              />
            </button>
            <button data-testid="scissorsButton" type="button">
              <img
                src={list[1].imageUrl}
                onClick={() => this.ClickedImge(list[0].id)}
                key={list[1].id}
                className="images"
                alt={list[1].id}
              />
            </button>
            <button data-testid="paperButton" type="button">
              <img
                src={list[2].imageUrl}
                onClick={() => this.ClickedImge(list[0].id)}
                key={list[2].id}
                className="images"
                alt={list[2].id}
              />
            </button>
          </div>
        )}
        <Popup
          trigger={
            <button type="button" className="rulesbutton">
              {' '}
              RULES
            </button>
          }
          modal
          position="center center"
        >
          {close => (
            <div className="popupwindow">
              <div className="close">
                <button onClick={() => close()} type="button">
                  <RiCloseLine />
                </button>
              </div>
              <img
                className="popupimage"
                alt="rules"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default WholeGame
