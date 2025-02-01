import Dropdown, { Option } from './components/Dropdown/index';

function App() {
  const options = [
    { value: '1', label: 'Option 1' },
    { 
      value: '2', 
      label: 'Option with icon',
    },
    { value: '3', label: 'Long Long Option 3' },
    { value: '4', label: 'Long Long Long Option 4' },
    { value: '5', label: 'Long Long Long Long Option 5' },
    { value: '6', label: 'Long Long Long Long Long Option 6' },
  ];

  const handleChange = (selectedOption: Option | Option[]) => {
    console.log('Selected:', selectedOption);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto flex items-center gap-4">
        <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700 min-w-[60px]">
          Label:
        </label>
        <Dropdown 
          options={options} 
          placeholder="Select option" 
          onChange={handleChange} 
          searchable 
          usePortal 
          multiple 
          zIndex={{
            dropdown: 1000,
            portal: 1000
          }}
        />
      </div>
    </div>
  );
}

export default App;