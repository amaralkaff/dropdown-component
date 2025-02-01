import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Portal } from '../Portal';

export interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
}

interface DropdownProps {
  options: Option[];
  placeholder?: string;
  onChange?: (option: Option | Option[]) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
  usePortal?: boolean;
  multiple?: boolean;
  selectedValues?: string[];
  renderOption?: (props: { option: Option; isSelected: boolean; multiple?: boolean }) => React.ReactNode;
  features?: {
    search?: boolean;
    portal?: boolean;
    multiple?: boolean;
    customRendering?: boolean;
  };
  zIndex?: {
    dropdown?: number;
    portal?: number;
  };
}

const defaultOptions: Option[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option with icon' },
  { value: '3', label: 'Long Long Option 3' },
  { value: '4', label: 'Long Long Long Option 4' },
  { value: '5', label: 'Long Long Long Long Option 5' },
  { value: '6', label: 'Long Long Long Long Long Option 6' },
];

export const Dropdown: React.FC<DropdownProps> = ({
  options = defaultOptions,
  placeholder = 'Select option',
  onChange,
  searchable = false,
  searchPlaceholder = 'Search...',
  usePortal = false,
  multiple = false,
  selectedValues = [],
  renderOption,
  features = {
    search: true,
    portal: true,
    multiple: true,
    customRendering: true
  },
  zIndex = {
    dropdown: 1001,
    portal: 1100
  }
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(() => 
    options.filter(opt => selectedValues.includes(opt.value))
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const updateDropdownPosition = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, []);

  useEffect(() => {
    if (isOpen && usePortal) {
      updateDropdownPosition();
      window.addEventListener('scroll', updateDropdownPosition);
      window.addEventListener('resize', updateDropdownPosition);

      return () => {
        window.removeEventListener('scroll', updateDropdownPosition);
        window.removeEventListener('resize', updateDropdownPosition);
      };
    }
  }, [isOpen, usePortal, updateDropdownPosition]);

  const handleSelect = (option: Option) => {
    if (multiple) {
      const isSelected = selectedOptions.some(opt => opt.value === option.value);
      const newSelectedOptions = isSelected 
        ? selectedOptions.filter(opt => opt.value !== option.value)
        : [...selectedOptions, option];
      
      setSelectedOptions(newSelectedOptions);
      onChange?.(newSelectedOptions);
    } else {
      setSelectedOption(option);
      setIsOpen(false);
      onChange?.(option);
    }
    setSearchTerm('');
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (multiple) {
      setSelectedOptions([]);
      onChange?.([]);
    } else {
      setSelectedOption(null);
      onChange?.(null as unknown as Option);
    }
  };

  const getButtonText = () => {
    if (renderOption && selectedOption) {
      return renderOption({
        option: selectedOption,
        isSelected: true,
        multiple: false
      });
    }

    if (multiple) {
      if (selectedOptions.length === 0) return placeholder;
      return (
        <div className="flex flex-wrap gap-1">
          {selectedOptions.map(opt => (
            <div 
              key={opt.value}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(opt);
              }}
              className="inline-flex items-center bg-gray-100 rounded-lg cursor-pointer"
            >
              <span className="px-2 py-0.5">{opt.label}</span>
              <span className="pr-1">X</span>
            </div>
          ))}
        </div>
      );
    }

    if (!selectedOption) return placeholder;
    
    return (
      <div className="flex items-center w-full">
        <div 
          onClick={(e) => {
            e.stopPropagation();
            handleClear(e);
          }}
          className="inline-flex items-center bg-gray-100 rounded-lg cursor-pointer"
        >
          <span className="px-2 py-0.5">{selectedOption.label}</span>
          <span className="pr-1">×</span>
        </div>
      </div>
    );
  };

  const filteredOptions = useCallback(() => {
    if (!searchTerm) return options;
    const term = searchTerm.toLowerCase();
    return options.filter(option => 
      option.label.toLowerCase().includes(term) ||
      option.description?.toLowerCase().includes(term)
    );
  }, [options, searchTerm]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    handleSearch(term);
  };

  const getDropdownClassName = () => {
    return `absolute z-${zIndex.dropdown} w-full bg-white border border-gray-200 rounded-md mt-1 overflow-hidden`;
  };

  const renderDropdownContent = () => (
    <div 
      className={`${getDropdownClassName()} shadow-xl`}
      style={{
        ...(usePortal ? {
          top: dropdownPosition.top + 4,
          left: dropdownPosition.left,
          width: dropdownPosition.width,
        } : {}),
      }}
    >
      {searchable && (
        <div className="p-2 border-b border-gray-100">
          <div className="relative flex items-center h-10">
            <span className="absolute left-3 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
              className="w-full h-10 pl-9 pr-8 text-sm bg-white border border-gray-200 rounded-md
                       focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
              onClick={(e) => e.stopPropagation()}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
      <div className="max-h-[280px] overflow-auto">
        {!searchTerm && filteredOptions().length === 0 && (
          <div className="px-3 py-2 text-sm text-gray-500 text-center">
            Tidak ada hasil yang ditemukan
          </div>
        )}
        {filteredOptions().map((option) => {
          const isSelected = multiple 
            ? selectedOptions.some(opt => opt.value === option.value)
            : selectedOption?.value === option.value;

          return renderOption ? renderOption({ option, isSelected, multiple }) : (
            <div
              key={option.value}
              className={`px-3 py-2.5 text-sm cursor-pointer flex items-center justify-between
                       ${isSelected ? 'bg-cyan-50' : 'hover:bg-gray-50'}
                       ${isSelected ? 'text-cyan-600' : 'text-gray-600'}`}
              onClick={() => handleSelect(option)}
            >
              <span className="block truncate pr-4">{option.label}</span>
              {isSelected && (
                <span className="flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 px-3 text-left bg-white border border-gray-200 rounded-md text-sm
                 hover:border-gray-300 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500
                 flex items-center justify-between group"
      >
        <div className="flex items-center min-w-0 flex-1">
          <span className={`block truncate flex-1 ${!selectedOption && selectedOptions.length === 0 ? 'text-gray-400' : 'text-gray-700'}`}>
            {getButtonText()}
          </span>
          {selectedOption && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClear(e);
              }}
              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-600"
            > 
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          )}
        </div>
        <span className="flex-shrink-0 ml-2 text-gray-400">
          <svg 
            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      {isOpen && (
        features.portal && usePortal ? (
          <Portal containerStyle={{ zIndex: zIndex.portal }}>
            {renderDropdownContent()}
          </Portal>
        ) : renderDropdownContent()
      )}
    </div>
  );
};

export default Dropdown; 