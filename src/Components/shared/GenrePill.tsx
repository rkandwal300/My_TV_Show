import { memo } from 'react';
import { Badge } from '../ui/badge';

const GenrePill = ({ name }: { name: string }) => {
  return <Badge className="font-semibold">{name}</Badge>;
};

export default memo(GenrePill);
