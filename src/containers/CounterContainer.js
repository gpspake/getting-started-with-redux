import Counter from '../components/Counter';
import {connect} from 'react-redux';
import store from '../redux/store';

const mapStateToProps = () => {
  return {
    value: store.getState()
  };
};

const mapDispatchToProps = () => {
  return {
    dispatchIncrement () {
      store.dispatch({
        type: 'INCREMENT'
      })
    },
    dispatchDecrement () {
      store.dispatch({
        type: 'DECREMENT'
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
