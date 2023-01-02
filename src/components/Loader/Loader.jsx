import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};