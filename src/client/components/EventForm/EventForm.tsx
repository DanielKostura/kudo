import React, { Component } from 'react';
import { insert, select, update } from '../../utils/api';
import * as I from '../../../common/interfaces';
import * as E from '../../../common/constants';
import './EventForm.css';

interface IEventFormState {
  event: I.Event;
  mode: 'hidden' | 'insert' | 'update';
}

export default class EventForm extends Component<any, IEventFormState> {
  private newEvent: I.Event;

  constructor(props: any) {
    super(props);

    const now = new Date().getTime();
    this.newEvent = { dateFrom: now, dateTo: now + 1209600000, name: '', state: E.EVENT_STATE.future };
    this.state = {
      event: this.newEvent,
      mode: 'hidden'
    };
  }

  public onClickHandler() {
    const data: any = {};
    const info = document.getElementById('form-event-info') as HTMLDivElement;
    const form = document.getElementById('form-event-form') as HTMLFormElement;
    const formData = new FormData(form);
    formData.forEach((item, key) => (data[key] = item));

    if (this.state.mode === 'insert') {
      insert<I.Event>('/api/events', data as I.Event)
        .then(() => {
          info.innerText = 'Success: Event added.';
          document.dispatchEvent(new CustomEvent('kudoz::eventListRefresh'));
        })
        .catch((err: Error) => {
          info.innerText = `Error: ${err.message}`;
        });
    } else {
      update<I.Event>('/api/events', this.state.event._id as string, data as I.Event)
        .then(() => {
          info.innerText = 'Success: Event updated.';
          document.dispatchEvent(new CustomEvent('kudoz::eventListRefresh'));
        })
        .catch((err: Error) => {
          info.innerText = `Error: ${err.message}`;
        });
    }
  }

  public componentDidMount() {
    document.addEventListener('kudoz::eventFormRefresh', ((e: CustomEvent) => {
      const info = document.getElementById('form-event-info') as HTMLDivElement;
      info.innerText = '';
      this.getData(e.detail._id);
    }) as EventListener);
  }

  public getData(_id?: string) {
    if (_id) {
      select<I.Event>('/api/events', _id).then((event) => this.setState({ event, mode: 'update' }));
    } else {
      this.setState({ event: this.newEvent, mode: 'insert' });
    }
  }

  public close() {
    this.setState({ mode: 'hidden' });
  }

  public render() {
    const { dateFrom, dateTo, name, state } = this.state.event;
    const button = `${this.state.mode === 'insert' ? 'Create' : 'Update'} event 📅`;
    const classHidden = this.state.mode === 'hidden' ? 'hidden' : '';

    return (
      <div id="form-event" key="eventForm" className={classHidden}>
        <div className="formEvent_header">
          <span className="formEvent_header-text">Event</span>
          <span className="formEvent_header-close" onClick={this.close.bind(this)}>
            x
          </span>
        </div>
        <form id="form-event-form">
          <label htmlFor="dateFrom">Date from: </label>
          <input type="text" id="event-dateFrom" name="dateFrom" defaultValue={dateFrom} /> *
          <br />
          <label htmlFor="dateTo">Date to: </label>
          <input type="text" id="event-dateTo" name="dateTo" defaultValue={dateTo} /> *
          <br />
          <label htmlFor="name">Event name: </label>
          <input type="text" id="event-name" name="name" placeholder="event name" defaultValue={name} /> *
          <br />
          <label htmlFor="state">State: </label>
          <select id="event-state" name="state" defaultValue={state}>
            <option value="past">past</option>
            <option value="active">active</option>
            <option value="future">future</option>
          </select>
          *
          <br />
          <input type="button" className="button-primary" onClick={this.onClickHandler.bind(this)} value={button} />
          <div id="form-event-info" />
        </form>
      </div>
    );
  }
}