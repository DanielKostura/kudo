import * as React from 'react';
import './Knight.css';

export interface Props {
  mostKudos: string;
}

export const Knight = (props: Props) => (
  <div className="kudoKnight">
    <div>
      <img src="/img/007-crusader.png" />
    </div>
    <div className="kudoKnight__content">
      <h3>Kudo Knight</h3>
      <h2>{props.mostKudos}</h2>
    </div>
  </div>
);

export const KnightForUser = (props: Props) => ( /*zmenaKnight pridanie KnightForUser*/
  <div className="kudoKnight">
    <div>
      <img src="/img/007-crusader.png" />
    </div>
    <div className="kudoKnight__content">
      <h3>Kudo Knight</h3>
      <h2>?</h2>
    </div>
  </div>
);
