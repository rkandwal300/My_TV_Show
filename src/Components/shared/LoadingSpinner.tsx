import { ImSpinner7 } from 'react-icons/im';

const LoadingSpinner = ({ className }: { className?: string }) => {
  return <ImSpinner7 size={20} className={`animate-spin ${className}`} />;
};

export default LoadingSpinner;
