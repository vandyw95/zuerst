import React, {
  Component, Fragment
} from 'react';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [
  {
    x: 1,
    y: 2,
  },
  {
    x: 3,
    y: 4,
  },
  {
    x: 5,
    y: 6,
  },
  {
    x: 7,
    y: 8,
  },
  {
    x: 9,
    y: 10,
  },
];
const c = {
  q: 1,
  w: 2,
  e: 3,
  4: 5,
  6: z,
  'ss-ss': 1,
};

function coffee() {
  let x = 1;
  let y = 2;
  return x + y;
}

function Ball({
  key, value, a, b, c, d
}) {
  return (
    <span>
      {value + coffee()}
    </span>
  );
}

const Box = ({
  key,
  value,
  a,
  blablablablablabla,
  ccccccccccc,
  dddddsdsadadasda,
  mdioqmidmowqmdiowqm,
}) => {
  return (
    <div>
      <span>
        {'Number'}
      </span>
      {a && (
        <span>
          {value + coffee()}
        </span>
      )}
    </div>
  );
};

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tryCount: 0,
      hasSucceed: false,
    };
  }

  addCount = () => {
    this.setState({ tryCount: this.state.tryCount + 1 });
  };

  render() {
    const { hasSucceed, tryCount } = this.state;
    return (
      <Fragment>
        {tryCount}

        <button onClick={this.addCount}>
          {'Add'}
        </button>

        {!hasSucceed && (
          <span>
            {'Hello World!'}
          </span>
        )}

        {a.map(el => (
          <Box
            a
            b
            c
            d
            key={el}
            value={el}
          />
        ))}
      </Fragment>
    );
  }
}

export default Example;
