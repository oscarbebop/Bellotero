import { useDispatch } from 'react-redux';
import { sampleAction } from 'actions/generalActions';

export default function Sample() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(sampleAction('it works!'))}>click</button>
    </div>
  );
}
