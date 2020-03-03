import React, { Component } from 'react';
import { CARD_TYPE } from '../../../common/constants';
import { CardIcon } from '../cardIcon/CardIcon';
import './Card.css';

export interface Props {
  awarded: string;
  cardID?: string;
  eventID: string;
  highlighted: boolean;
  likes: number;
  text: string;
  cardType: CARD_TYPE;
}

export interface State {
  voted: boolean;
}

export default class Card extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      voted: false
    };
  }

  public render(): JSX.Element {
    return (
      <div className="card">
        <div className="card__icon">
          <CardIcon cardType={this.props.cardType} />
        </div>
        <div className={this.props.highlighted ? 'card__text-highlighted ' : 'card__text'}>
          <h3>{this.props.awarded}</h3>
          <p>{this.props.text}</p>
        </div>
        {this.yourChoice(this.props.eventID, this.props.cardID!) ? (
          <div className="card__likes-yourChoice" title="your choice">
            {this.props.likes}
          </div>
        ) : (
          <div
            onClick={this.vote}
            data-eventid={this.props.eventID}
            data-cardid={this.props.cardID!}
            className="card__likes"
            title="vote">
            {this.props.likes}
          </div>
        )}
      </div>
    );
  }

  private vote = (event: any) => {
    const eventID = event.currentTarget.dataset.eventid;
    const cardID = event.currentTarget.dataset.cardid;
    const voteData = {
      cardID,
      eventID
    };

    if (!this.alreadyVoted(eventID)) {
      // API call to increment likes
      /* */

      this.setState({ voted: true });
      localStorage.setItem(`kudosVote-${eventID}`, JSON.stringify(voteData));
    }

    return;
  };

  private alreadyVoted(eventID: string): boolean {
    const savedVote = localStorage.getItem(`kudosVote-${eventID}`);

    if (savedVote) {
      return true;
    }

    return false;
  }

  private yourChoice(eventID: string, cardID: string): boolean {
    const savedVote = localStorage.getItem(`kudosVote-${eventID}`);

    if (savedVote) {
      const data = JSON.parse(savedVote);
      if (data.cardID === cardID) {
        return true;
      }
    }

    return false;
  }
}