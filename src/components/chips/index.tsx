import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function ChipInput() {
  const [chips, setChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Properly typed change handler
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Correct keyboard event typing
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addChip();
    }
  };
  
    const addChip = () => {
      if (inputValue.trim() && !chips.includes(inputValue)) {
        setChips([...chips, inputValue.trim()]);
        setInputValue("");
      }
    };
  
    const removeChip = (chipToRemove: string) => {
      setChips(chips.filter((chip) => chip !== chipToRemove));
    };
  
    return (
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <div
              key={chip}
              className="flex items-center gap-1 rounded-full border px-3 py-1 text-sm"
            >
              {chip}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => removeChip(chip)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {chip}</span>
              </Button>
            </div>
          ))}
        </div>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a tag..."
        />
      </div>
    );
  }