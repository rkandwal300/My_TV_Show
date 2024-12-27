import { memo } from 'react';
import { Card, CardFooter } from '../ui/card';

const CastCard = ({
  avatarLink,
  name,
}: {
  avatarLink: string;
  name: string;
}) => {
  return (
    <Card className="max-w-36">
      <img className="w-full  rounded-sm" src={avatarLink} alt="name" />
      <CardFooter className="p-2 font-semibold w-fit">{name}</CardFooter>
    </Card>
  );
};

export default memo(CastCard);
