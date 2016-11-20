import * as React from 'react';

export default class ChatHistory extends React.Component {
  static propTypes = {
    history: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
      <ul className="collection">
        { props.history.map((messageObj) => {
          const imgURL = `//robohash.org/${messageObj.who}?set=set2&bgset=bg2&size=70x70`;
          const messageDate = new Date(messageObj.when);
          const messageDateTime = `${messageDate.toLocaleDateString()}at${messageDate.toLocaleTimeString()}`;
          return (
            <li className="collection-item avatar" key={messageObj.when}>
              <img src={imgURL} alt={ messageObj.who} className="circle"/>
              <span className="title">Anonymous robot #{messageObj.who}</span>
              <p>
                <i className="prefix mdi-action-alarm"/>
                <span className="message-date">{messageDateTime}</span>
                <br />
                <span>{messageObj.what}</span>
              </p>
            </li>
          ); })
        }
      </ul>
    );
  }
}
