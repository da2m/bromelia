import {Component, h, Prop} from '@stencil/core';


class ListenerFactory {
  static eventsMap = new Map([
    ['click', 'onClick'],
    ['input', 'onInput'],
  ]);

  static getEventListener<T>(type: string, callback: T, capture: boolean = false): {[key: string]: T} {
    if (!ListenerFactory.eventsMap.has(type)) {
      throw new TypeError("Invalid event type");
    }
    const eventType: string = ListenerFactory.eventsMap.get(type);

    return {
      [capture ? `${eventType}Capture}` : eventType]: callback
    };
  }
};

@Component({
  tag: 'b-button',
  styleUrl: 'b-button.css',
  shadow: true
})
export class BButton {
  /**
   * The primary button
   */
  @Prop() primary: boolean;

  /**
   * The button title
   */
  @Prop() titleBtn: string;

  /**
   * The listener for button
   */
  @Prop() callback?: {
    type: string,
    listener: (eventRaised?: UIEvent) => void,
    capture?: boolean
  };

  render() {
    const {type, listener, capture = false} = {
      type: 'click', 
      listener: event => console.log(event), 
    }/*this.callback*/;
    try {
      return (
        <div>
          <button 
              class={this.primary ? 'b-primary' : 'b-default'}
              {...ListenerFactory.getEventListener(type, listener, capture)}
          >{this.titleBtn}</button>
        </div>
      );
    } catch(err) {
      console.error(err);
      return (
        <div>
          <button 
              class={this.primary ? 'b-primary' : 'b-default'}
          >{this.titleBtn}</button>
        </div>
      );
    }
  }
}
