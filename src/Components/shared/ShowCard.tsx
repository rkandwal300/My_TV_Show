import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Placeholder, Show } from '../../Types/Modals';
import { buttonVariants } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

const ShowCard: FC<Show> = (props) => {
  return (
    <Card className="max-w-xs w-full">
      <CardHeader className="p-0">
        <img
          src={props.image?.medium || props.image?.original || Placeholder}
          alt={props.name}
          className="object-cover object-center w-full rounded-t-md h-72"
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6 p-6">
        <CardTitle>{props.name}</CardTitle>

        <CardDescription>
          <p
            className="line-clamp-6"
            dangerouslySetInnerHTML={{ __html: props.summary || '' }}
          />
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-center">
        <Link
          to={'/show/' + props.id}
          className={buttonVariants({
            variant: 'outline',
          })}
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ShowCard;
