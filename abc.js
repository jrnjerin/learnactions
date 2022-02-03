import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <div style={{textAlign: "center", marginTop: "200px"}}>
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onOdd={() => {
      if(store.getState().count % 2 !== 0){
        store.dispatch({ type: 'ODD' })
      }
    }}
    onAsync={() => 
      setTimeout(()=> store.dispatch({ type: 'ASYNC' }), 1000)
    }
  />
  </div>,
  rootEl
)

render()
store.subscribe(render)








import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  // code here
  render(props) {
    return(
      <div>
        <p>{this.props.value.count}</p>
        <button onClick={() => this.props.onIncrement()}>+</button>
        <button onClick={() => this.props.onDecrement()}>-</button>
        <button onClick={() => this.props.onOdd()}>Increment if odd</button>
        <button onClick={() => this.props.onAsync()}>Increment if async</button>
    </div>
    );
  }
}

export default Counter






// add reducers accordingly
const initialState = {
    count: 0
  };

export default function(state = initialState, action) {
  switch(action.type) {
        case 'INCREMENT':
          return {
            count: state.count + 1
          };
        case 'DECREMENT':
          return {
            count: state.count - 1
          };
        case 'ODD':
          return {
            count: state.count + 1
          };
        case 'ASYNC':
          return {
            count: state.count + 1
          };

        default:
          return state;
      }
}








> counter@0.1.0 pretest /projects/challenge

> npm install

npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none is installed. You must install peer dependencies yourself.

npm WARN file-loader@1.1.5 requires a peer of webpack@^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.

npm WARN sw-precache-webpack-plugin@0.11.4 requires a peer of webpack@^1 || ^2 || ^2.1.0-beta || ^2.2.0-beta || ^3 but none is installed. You must install peer dependencies yourself.

npm WARN uglifyjs-webpack-plugin@0.4.6 requires a peer of webpack@^1.9 || ^2 || ^2.1.0-beta || ^2.2.0-rc || ^3.0.0 but none is installed. You must install peer dependencies yourself.

npm WARN webpack-manifest-plugin@1.3.2 requires a peer of webpack@1 || 2 || 3 but none is installed. You must install peer dependencies yourself.

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/fsevents):

npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

audited 1681 packages in 12.65s

found 223 vulnerabilities (40 low, 68 moderate, 90 high, 25 critical)

  run `npm audit fix` to fix them, or `npm audit` for details

> counter@0.1.0 test /projects/challenge

> rm -rf ./unit.xml && CI=true ./node_modules/.bin/react-scripts test --verbose --env=jsdom --testResultsProcessor ./node_modules/jest-junit-reporter --coverage --collectCoverageFrom=src/index.js --updateSnapshot

 FAIL  src/components/Counter.spec.js

  ● Counter component › should display count

    expect(received).toMatch(expected)

    

    Expected value to match:

      /^Clicked: 0 times/

    Received:

      ""

      

      at Object.it (src/components/Counter.spec.js:29:22)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  ● Counter component › third button should not call onIncrement if the counter is even

    TypeError: this.props.onOdd is not a function

      

      at onClick (src/components/Counter.js:12:77)

      at node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:963:23

      at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:178:16)

      at Object.simulateEvent (node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:959:57)

      at ShallowWrapper.<anonymous> (node_modules/enzyme/build/ShallowWrapper.js:1374:57)

      at ShallowWrapper.single (node_modules/enzyme/build/ShallowWrapper.js:2199:25)

      at ShallowWrapper.simulate (node_modules/enzyme/build/ShallowWrapper.js:1371:21)

      at Object.it (src/components/Counter.spec.js:47:19)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  ● Counter component › third button should call onIncrement if the counter is odd

    TypeError: this.props.onOdd is not a function

      

      at onClick (src/components/Counter.js:12:77)

      at node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:963:23

      at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:178:16)

      at Object.simulateEvent (node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:959:57)

      at ShallowWrapper.<anonymous> (node_modules/enzyme/build/ShallowWrapper.js:1374:57)

      at ShallowWrapper.single (node_modules/enzyme/build/ShallowWrapper.js:2199:25)

      at ShallowWrapper.simulate (node_modules/enzyme/build/ShallowWrapper.js:1371:21)

      at Object.it (src/components/Counter.spec.js:53:19)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  ● Counter component › third button should call onIncrement if the counter is odd and negative

    TypeError: this.props.onOdd is not a function

      

      at onClick (src/components/Counter.js:12:77)

      at node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:963:23

      at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:178:16)

      at Object.simulateEvent (node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:959:57)

      at ShallowWrapper.<anonymous> (node_modules/enzyme/build/ShallowWrapper.js:1374:57)

      at ShallowWrapper.single (node_modules/enzyme/build/ShallowWrapper.js:2199:25)

      at ShallowWrapper.simulate (node_modules/enzyme/build/ShallowWrapper.js:1371:21)

      at Object.it (src/components/Counter.spec.js:59:19)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  ● Counter component › fourth button should call onIncrement in a second

    TypeError: this.props.onAsync is not a function

      

      at onClick (src/components/Counter.js:13:77)

      at node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:963:23

      at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:178:16)

      at Object.simulateEvent (node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:959:57)

      at ShallowWrapper.<anonymous> (node_modules/enzyme/build/ShallowWrapper.js:1374:57)

      at ShallowWrapper.single (node_modules/enzyme/build/ShallowWrapper.js:2199:25)

      at ShallowWrapper.simulate (node_modules/enzyme/build/ShallowWrapper.js:1371:21)

      at Object.done (src/components/Counter.spec.js:65:19)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  Counter component

    ✕ should display count (17ms)

    ✓ first button should call onIncrement (4ms)

    ✓ second button should call onDecrement (2ms)

    ✕ third button should not call onIncrement if the counter is even (3ms)

    ✕ third button should call onIncrement if the counter is odd (1ms)

    ✕ third button should call onIncrement if the counter is odd and negative (2ms)

    ✕ fourth button should call onIncrement in a second (1ms)

 FAIL  src/reducers/index.spec.js

  ● reducers › counter › should provide the initial state

    expect(received).toBe(expected)

    

    Expected value to be (using ===):

      0

    Received:

      {"count": 0}

    

    Difference:

    

      Comparing two different types of values. Expected number but received object.

      

      at Object.it (src/reducers/index.spec.js:10:51)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

  ● reducers › counter › should handle INCREMENT action

    expect(received).toBe(expected)

    

    Expected value to be (using ===):

      2

    Received:

      {"count": NaN}

    

    Difference:

    

      Comparing two different types of values. Expected number but received object.

      

      at Object.it (src/reducers/index.spec.js:14:62)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

  ● reducers › counter › should handle DECREMENT action

    expect(received).toBe(expected)

    

    Expected value to be (using ===):

      0

    Received:

      {"count": NaN}

    

    Difference:

    

      Comparing two different types of values. Expected number but received object.

      

      at Object.it (src/reducers/index.spec.js:18:62)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

  reducers

    counter

      ✕ should provide the initial state (2ms)

      ✕ should handle INCREMENT action

      ✕ should handle DECREMENT action

      ✓ should ignore unknown actions

Test Suites: 2 failed, 2 total

Tests:       8 failed, 3 passed, 11 total

Snapshots:   0 total

Time:        1.682s, estimated 2s

Ran all test suites.

----------|----------|----------|----------|----------|-------------------|

File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |

----------|----------|----------|----------|----------|-------------------|

All files |        0 |        0 |        0 |        0 |                   |

 index.js |        0 |        0 |        0 |        0 |... 17,18,22,29,30 |

----------|----------|----------|----------|----------|-------------------|

Handlebars: Access has been denied to resolve the property "statements" because it is not an "own property" of its parent.

You can add a runtime option to disable the check or this warning:

See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details

Handlebars: Access has been denied to resolve the property "branches" because it is not an "own property" of its parent.

You can add a runtime option to disable the check or this warning:

See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details

Handlebars: Access has been denied to resolve the property "functions" because it is not an "own property" of its parent.

You can add a runtime option to disable the check or this warning:

See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details

Handlebars: Access has been denied to resolve the property "lines" because it is not an "own property" of its parent.

You can add a runtime option to disable the check or this warning:

See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details

npm ERR! Test failed.  See above for more details.




















> counter@0.1.0 pretest /projects/challenge

> npm install

npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none is installed. You must install peer dependencies yourself.

npm WARN file-loader@1.1.5 requires a peer of webpack@^2.0.0 || ^3.0.0 but none is installed. You must install peer dependencies yourself.

npm WARN sw-precache-webpack-plugin@0.11.4 requires a peer of webpack@^1 || ^2 || ^2.1.0-beta || ^2.2.0-beta || ^3 but none is installed. You must install peer dependencies yourself.

npm WARN uglifyjs-webpack-plugin@0.4.6 requires a peer of webpack@^1.9 || ^2 || ^2.1.0-beta || ^2.2.0-rc || ^3.0.0 but none is installed. You must install peer dependencies yourself.

npm WARN webpack-manifest-plugin@1.3.2 requires a peer of webpack@1 || 2 || 3 but none is installed. You must install peer dependencies yourself.

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/fsevents):

npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

audited 1681 packages in 12.65s

found 223 vulnerabilities (40 low, 68 moderate, 90 high, 25 critical)

  run `npm audit fix` to fix them, or `npm audit` for details

> counter@0.1.0 test /projects/challenge

> rm -rf ./unit.xml && CI=true ./node_modules/.bin/react-scripts test --verbose --env=jsdom --testResultsProcessor ./node_modules/jest-junit-reporter --coverage --collectCoverageFrom=src/index.js --updateSnapshot

 FAIL  src/components/Counter.spec.js

  ● Counter component › should display count

    expect(received).toMatch(expected)

    

    Expected value to match:

      /^Clicked: 0 times/

    Received:

      ""

      

      at Object.it (src/components/Counter.spec.js:29:22)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  ● Counter component › third button should not call onIncrement if the counter is even

    TypeError: this.props.onOdd is not a function

      

      at onClick (src/components/Counter.js:12:77)

      at node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:963:23

      at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:178:16)

      at Object.simulateEvent (node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:959:57)

      at ShallowWrapper.<anonymous> (node_modules/enzyme/build/ShallowWrapper.js:1374:57)

      at ShallowWrapper.single (node_modules/enzyme/build/ShallowWrapper.js:2199:25)

      at ShallowWrapper.simulate (node_modules/enzyme/build/ShallowWrapper.js:1371:21)

      at Object.it (src/components/Counter.spec.js:47:19)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  ● Counter component › third button should call onIncrement if the counter is odd

    TypeError: this.props.onOdd is not a function

      

      at onClick (src/components/Counter.js:12:77)

      at node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:963:23

      at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:178:16)

      at Object.simulateEvent (node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:959:57)

      at ShallowWrapper.<anonymous> (node_modules/enzyme/build/ShallowWrapper.js:1374:57)

      at ShallowWrapper.single (node_modules/enzyme/build/ShallowWrapper.js:2199:25)

      at ShallowWrapper.simulate (node_modules/enzyme/build/ShallowWrapper.js:1371:21)

      at Object.it (src/components/Counter.spec.js:53:19)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  ● Counter component › third button should call onIncrement if the counter is odd and negative

    TypeError: this.props.onOdd is not a function

      

      at onClick (src/components/Counter.js:12:77)

      at node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:963:23

      at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:178:16)

      at Object.simulateEvent (node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:959:57)

      at ShallowWrapper.<anonymous> (node_modules/enzyme/build/ShallowWrapper.js:1374:57)

      at ShallowWrapper.single (node_modules/enzyme/build/ShallowWrapper.js:2199:25)

      at ShallowWrapper.simulate (node_modules/enzyme/build/ShallowWrapper.js:1371:21)

      at Object.it (src/components/Counter.spec.js:59:19)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  ● Counter component › fourth button should call onIncrement in a second

    TypeError: this.props.onAsync is not a function

      

      at onClick (src/components/Counter.js:13:77)

      at node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:963:23

      at withSetStateAllowed (node_modules/enzyme-adapter-utils/build/Utils.js:178:16)

      at Object.simulateEvent (node_modules/enzyme-adapter-react-16/build/ReactSixteenAdapter.js:959:57)

      at ShallowWrapper.<anonymous> (node_modules/enzyme/build/ShallowWrapper.js:1374:57)

      at ShallowWrapper.single (node_modules/enzyme/build/ShallowWrapper.js:2199:25)

      at ShallowWrapper.simulate (node_modules/enzyme/build/ShallowWrapper.js:1371:21)

      at Object.done (src/components/Counter.spec.js:65:19)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

      at process._tickCallback (internal/process/next_tick.js:189:7)

  Counter component

    ✕ should display count (17ms)

    ✓ first button should call onIncrement (4ms)

    ✓ second button should call onDecrement (2ms)

    ✕ third button should not call onIncrement if the counter is even (3ms)

    ✕ third button should call onIncrement if the counter is odd (1ms)

    ✕ third button should call onIncrement if the counter is odd and negative (2ms)

    ✕ fourth button should call onIncrement in a second (1ms)

 FAIL  src/reducers/index.spec.js

  ● reducers › counter › should provide the initial state

    expect(received).toBe(expected)

    

    Expected value to be (using ===):

      0

    Received:

      {"count": 0}

    

    Difference:

    

      Comparing two different types of values. Expected number but received object.

      

      at Object.it (src/reducers/index.spec.js:10:51)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

  ● reducers › counter › should handle INCREMENT action

    expect(received).toBe(expected)

    

    Expected value to be (using ===):

      2

    Received:

      {"count": NaN}

    

    Difference:

    

      Comparing two different types of values. Expected number but received object.

      

      at Object.it (src/reducers/index.spec.js:14:62)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

  ● reducers › counter › should handle DECREMENT action

    expect(received).toBe(expected)

    

    Expected value to be (using ===):

      0

    Received:

      {"count": NaN}

    

    Difference:

    

      Comparing two different types of values. Expected number but received object.

      

      at Object.it (src/reducers/index.spec.js:18:62)

          at new Promise (<anonymous>)

      at Promise.resolve.then.el (node_modules/p-map/index.js:46:16)

          at <anonymous>

  reducers

    counter

      ✕ should provide the initial state (2ms)

      ✕ should handle INCREMENT action

      ✕ should handle DECREMENT action

      ✓ should ignore unknown actions

Test Suites: 2 failed, 2 total

Tests:       8 failed, 3 passed, 11 total

Snapshots:   0 total

Time:        1.682s, estimated 2s

Ran all test suites.

----------|----------|----------|----------|----------|-------------------|

File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |

----------|----------|----------|----------|----------|-------------------|

All files |        0 |        0 |        0 |        0 |                   |

 index.js |        0 |        0 |        0 |        0 |... 17,18,22,29,30 |

----------|----------|----------|----------|----------|-------------------|

Handlebars: Access has been denied to resolve the property "statements" because it is not an "own property" of its parent.

You can add a runtime option to disable the check or this warning:

See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details

Handlebars: Access has been denied to resolve the property "branches" because it is not an "own property" of its parent.

You can add a runtime option to disable the check or this warning:

See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details

Handlebars: Access has been denied to resolve the property "functions" because it is not an "own property" of its parent.

You can add a runtime option to disable the check or this warning:

See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details

Handlebars: Access has been denied to resolve the property "lines" because it is not an "own property" of its parent.

You can add a runtime option to disable the check or this warning:

See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details

npm ERR! Test failed.  See above for more details.







import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

function setup(value = 0) {
  const actions = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  }
  const component = shallow(
    <Counter value={value} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('p')
  }
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^Clicked: 0 times/)
  })

  it('first button should call onIncrement', () => {
    const { buttons, actions } = setup()
    buttons.at(0).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })

  it('second button should call onDecrement', () => {
    const { buttons, actions } = setup()
    buttons.at(1).simulate('click')
    expect(actions.onDecrement).toBeCalled()
  })

  it('third button should not call onIncrement if the counter is even', () => {
    const { buttons, actions } = setup(42)
    actions.onIncrement.mockClear()
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).toHaveBeenCalledTimes(0)
  })

  it('third button should call onIncrement if the counter is odd', () => {
    const { buttons, actions } = setup(43)
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })

  it('third button should call onIncrement if the counter is odd and negative', () => {
    const { buttons, actions } = setup(-43)
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).toBeCalled()
  })

  it('fourth button should call onIncrement in a second', (done) => {
    const { buttons, actions } = setup()
    buttons.at(3).simulate('click')
    setTimeout(() => {
      expect(actions.onIncrement).toBeCalled()
      done()
    }, 1000)
  })
})




import counter from './index'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toBe(0)
    })

    it('should handle INCREMENT action', () => {
      expect(counter(1, { type: 'INCREMENT' })).toBe(2)
    })

    it('should handle DECREMENT action', () => {
      expect(counter(1, { type: 'DECREMENT' })).toBe(0)
    })

    it('should ignore unknown actions', () => {
      expect(counter(1, { type: 'unknown' })).toBe(1)
    })
  })
})