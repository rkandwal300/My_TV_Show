import { FC, InputHTMLAttributes } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type SearchType = InputHTMLAttributes<HTMLInputElement> & {
  onChange: (value: string) => void;
};
const SearchBar: FC<SearchType> = ({ value, onChange, ...props }) => (
  <div className="relative">
    <Input
      className="rounded-3xl"
      type="text"
      placeholder="Search"
      {...props}
      onChange={(e) => onChange(e.target.value)}
    />
    <Button
      variant={'ghost'}
      className="absolute rounded-r-3xl right-0 top-1/2 -translate-y-1/2"
    >
      <BsSearch />
    </Button>
  </div>
);

export default SearchBar;
