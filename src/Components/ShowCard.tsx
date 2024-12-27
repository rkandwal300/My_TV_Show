import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Placeholder, Show } from '../Types/Modals';

const ShowCard: FC<Show> = (props) => {
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 bg-contain m-1">
      <img
        src={props.image?.medium || props.image?.original || Placeholder}
        alt={props.name}
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold tracking-wide">{props.name}</h2>
          <div className="flex-1">
            <p
              className="truncate"
              dangerouslySetInnerHTML={{ __html: props.summary || '' }}
            ></p>
          </div>
        </div>
        <Link
          to={'/show/' + props.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
