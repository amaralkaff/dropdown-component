Technical Test for Makyo

## Todo List

### 1. Setup Project [In Progress]
- [x] Inisialisasi proyek React dengan Vite
- [x] Konfigurasi Tailwind CSS
- [x] Setup Storybook
- [x] Konfigurasi package.json untuk penggunaan sebagai dependency

### 2. Pengembangan Komponen Dropdown [In Progress]
- [x] Implementasi struktur dasar dropdown
- [x] Styling dasar menggunakan Tailwind CSS (basic)
- [x] Peningkatan styling dengan Tailwind CSS
- [x] Implementasi fitur pencarian
- [x] Implementasi Portal support
- [x] Implementasi single/multiple selection
- [x] Implementasi custom option rendering
- [x] Implementasi filter pencarian
- [x] Implementasi toggle fitur
- [x] Penanganan z-index compatibility

### 3. Dokumentasi [In Progress]
- [x] Penulisan dokumentasi penggunaan
- [x] Penambahan contoh kode
- [x] Dokumentasi props dan konfigurasi
- [x] Penulisan panduan instalasi

## Installation Guide

### Prerequisites

- Node.js (version 14 or higher)
- React (version 16.8 or higher)
- Tailwind CSS (version 3.0 or higher)

### Package Installation

```bash
# Using npm
npm install 

# Using yarn
yarn add

# Using pnpm
pnpm add
```

### Tailwind CSS Configuration

1. Make sure you have Tailwind CSS installed in your project:
```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Add the component's classes to your Tailwind CSS configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your other content paths
    "./node_modules/@abu-ammar-makyo/dropdown-component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### TypeScript Configuration

If you're using TypeScript, the package includes built-in type definitions. No additional configuration is needed.

For optimal TypeScript support, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "skipLibCheck": true,
    "jsx": "react-jsx"
  }
}
```

### Usage in Different Frameworks

#### Next.js
```tsx
// pages/_app.tsx or app/layout.tsx
import '@abu-ammar-makyo/dropdown-component/dist/style.css';
```

#### Create React App
```tsx
// src/App.tsx or src/index.tsx
import '@abu-ammar-makyo/dropdown-component/dist/style.css';
```

#### Vite
```tsx
// main.tsx or main.jsx
import '@abu-ammar-makyo/dropdown-component/dist/style.css';
```

### Peer Dependencies

This package has the following peer dependencies:
```json
{
  "react": ">=16.8.0",
  "react-dom": ">=16.8.0",
  "tailwindcss": ">=3.0.0"
}
```

Make sure these are installed in your project.

### Troubleshooting

Common installation issues and solutions:

1. **Styles not loading**
   - Ensure you've imported the CSS file
   - Check your Tailwind configuration
   - Clear your build cache

2. **TypeScript errors**
   - Make sure your TypeScript version is 4.5 or higher
   - Check your tsconfig.json configuration
   - Try clearing your TypeScript cache

3. **React version conflicts**
   - Ensure you're using React 16.8 or higher
   - Check for multiple React versions in your node_modules

For more help, please [open an issue](https://github.com/your-username/your-repo/issues) on GitHub.

## Documentation

### Installation

```bash
npm install
# or
yarn add @abu-ammar-makyo/dropdown-component
```

### Basic Usage

```tsx
import Dropdown from '@abu-ammar-makyo/dropdown-component';

function App() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const handleChange = (selectedOption) => {
    console.log('Selected:', selectedOption);
  };

  return (
    <Dropdown 
      options={options} 
      placeholder="Select option" 
      onChange={handleChange} 
    />
  );
}
```

### Code Examples

#### 1. Complete Example with All Features
```tsx
import Dropdown from '[your-package-name]';
import { useState } from 'react';

function App() {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const options = [
    { 
      value: '1', 
      label: 'Option 1',
      icon: <IconComponent />,
      description: 'This is a description'
    },
    { 
      value: '2', 
      label: 'Option 2',
      icon: <IconComponent />,
      description: 'Another description'
    }
  ];

  const handleChange = (selected) => {
    setSelectedValue(Array.isArray(selected) 
      ? selected.map(opt => opt.value)
      : [selected.value]
    );
  };

  return (
    <Dropdown 
      options={options}
      placeholder="Select options..."
      searchPlaceholder="Type to search..."
      multiple={true}
      searchable={true}
      usePortal={true}
      selectedValues={selectedValue}
      onChange={handleChange}
      features={{
        search: true,
        portal: true,
        multiple: true,
        customRendering: true
      }}
      zIndex={{
        dropdown: 1000,
        portal: 1100
      }}
      renderOption={({ option, isSelected }) => (
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            {option.icon}
            <div className="flex flex-col">
              <span className="font-medium">{option.label}</span>
              {option.description && (
                <span className="text-sm text-gray-500">{option.description}</span>
              )}
            </div>
          </div>
          {isSelected && (
            <CheckIcon className="w-5 h-5 text-blue-500" />
          )}
        </div>
      )}
    />
  );
}
```

#### 2. Single Selection with Search
```tsx
function SingleSelectExample() {
  const [selected, setSelected] = useState<Option | null>(null);

  return (
    <Dropdown
      options={options}
      searchable={true}
      onChange={(option) => setSelected(option as Option)}
      placeholder="Select one option"
      features={{
        search: true,
        portal: false,
        multiple: false,
        customRendering: false
      }}
    />
  );
}
```

#### 3. Multiple Selection with Custom Rendering
```tsx
function MultipleSelectExample() {
  const [selected, setSelected] = useState<Option[]>([]);

  const customOptionRenderer = ({ option, isSelected }) => (
    <div className={`
      flex items-center gap-2 p-2
      ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}
    `}>
      <input
        type="checkbox"
        checked={isSelected}
        readOnly
        className="h-4 w-4 text-blue-600"
      />
      <div className="flex flex-col">
        <span>{option.label}</span>
        {option.description && (
          <span className="text-sm text-gray-500">{option.description}</span>
        )}
      </div>
    </div>
  );

  return (
    <Dropdown
      options={options}
      multiple={true}
      selectedValues={selected.map(opt => opt.value)}
      onChange={(options) => setSelected(options as Option[])}
      renderOption={customOptionRenderer}
      placeholder="Select multiple options"
    />
  );
}
```

#### 4. With Portal and Z-Index Management
```tsx
function PortalExample() {
  return (
    <div className="relative z-10">
      <div className="fixed inset-0 z-20 bg-black/50">
        <div className="relative z-30">
          <Dropdown
            options={options}
            usePortal={true}
            zIndex={{
              dropdown: 1000,
              portal: 1100
            }}
            placeholder="I'll render in a portal"
          />
        </div>
      </div>
    </div>
  );
}
```

#### 5. With Form Integration
```tsx
import { useForm, Controller } from 'react-hook-form';

function FormExample() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      dropdown: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="dropdown"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Dropdown
            options={options}
            onChange={(option) => field.onChange(option.value)}
            value={field.value}
            placeholder="Select an option"
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Features

1. **Searchable Dropdown**
   - Enable search functionality to filter options
   ```tsx
   <Dropdown 
     options={options} 
     searchable={true}
     searchPlaceholder="Search options..." 
   />
   ```

2. **Portal Support**
   - Render dropdown outside parent container to avoid z-index issues
   ```tsx
   <Dropdown 
     options={options} 
     usePortal={true}
     zIndex={{
       dropdown: 1000,
       portal: 1100
     }}
   />
   ```

3. **Multiple Selection**
   - Select multiple options at once
   ```tsx
   <Dropdown 
     options={options} 
     multiple={true}
     selectedValues={['1', '2']} 
   />
   ```

4. **Custom Rendering**
   - Customize option appearance
   ```tsx
   <Dropdown 
     options={options} 
     renderOption={({ option, isSelected, multiple }) => (
       <div className="flex items-center gap-2">
         {option.icon}
         <span>{option.label}</span>
         {option.description && (
           <span className="text-gray-400">{option.description}</span>
         )}
       </div>
     )}
   />
   ```

### Feature Configuration

You can enable/disable specific features using the `features` prop:

```tsx
<Dropdown 
  options={options} 
  features={{
    search: true,      // Enable/disable search functionality
    portal: true,      // Enable/disable portal usage
    multiple: true,    // Enable/disable multiple selection
    customRendering: true  // Enable/disable custom rendering
  }}
/>
```

### Props Interface

```typescript
interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
}

interface DropdownProps {
  // Required Props
  options: Option[];              // Array of options to display
  
  // Optional Props
  placeholder?: string;           // Placeholder text when no option is selected
  onChange?: (option: Option | Option[]) => void;  // Callback when selection changes
  searchable?: boolean;           // Enable search functionality
  searchPlaceholder?: string;     // Placeholder text for search input
  usePortal?: boolean;           // Render dropdown in a portal
  multiple?: boolean;            // Enable multiple selection
  selectedValues?: string[];     // Pre-selected values (for multiple selection)
  
  // Custom Rendering
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
  renderSelectedValue?: (props: RenderSelectedValueProps) => React.ReactNode;
  
  // Feature Toggles
  features?: {
    search?: boolean;            // Toggle search functionality
    portal?: boolean;            // Toggle portal usage
    multiple?: boolean;          // Toggle multiple selection
    customRendering?: boolean;   // Toggle custom rendering
  };
  
  // Styling
  zIndex?: {
    dropdown?: number;           // Z-index for dropdown
    portal?: number;            // Z-index for portal
  };
}
```

### Props and Configuration Documentation

#### Core Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `options` | `Option[]` | Yes | - | Array of options to be displayed in the dropdown. Each option must have `value` and `label` properties. |
| `onChange` | `(option: Option \| Option[]) => void` | No | - | Callback function called when selection changes. Returns single option or array of options based on `multiple` prop. |
| `placeholder` | `string` | No | "Select option" | Text displayed when no option is selected. |
| `selectedValues` | `string[]` | No | [] | Array of pre-selected option values. Used in multiple selection mode. |

#### Search Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `searchable` | `boolean` | No | false | Enables search functionality in the dropdown. |
| `searchPlaceholder` | `string` | No | "Search..." | Placeholder text for the search input field. |

#### Portal Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `usePortal` | `boolean` | No | false | When true, renders the dropdown in a portal outside the DOM hierarchy. |
| `zIndex` | `{ dropdown?: number; portal?: number; }` | No | `{ dropdown: 1001, portal: 1100 }` | Controls z-index values for dropdown and portal elements. |

#### Selection Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `multiple` | `boolean` | No | false | Enables multiple selection mode. |

#### Custom Rendering Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `renderOption` | `(props: RenderOptionProps) => React.ReactNode` | No | - | Custom renderer for dropdown options. |
| `renderSelectedValue` | `(props: RenderSelectedValueProps) => React.ReactNode` | No | - | Custom renderer for selected value(s). |

#### Feature Toggle Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `features` | `FeatureConfig` | No | See below | Object to enable/disable specific features. |

#### Type Definitions

```typescript
interface Option {
  value: string;           // Unique identifier for the option
  label: string;           // Display text for the option
  icon?: React.ReactNode;  // Optional icon element
  description?: string;    // Optional description text
}

interface RenderOptionProps {
  option: Option;          // The option to render
  isSelected: boolean;     // Whether the option is currently selected
  multiple?: boolean;      // Whether multiple selection mode is active
}

interface RenderSelectedValueProps {
  option: Option | null;   // The selected option (null if none selected)
  placeholder?: string;    // Placeholder text to show when no selection
}

interface FeatureConfig {
  search?: boolean;        // Default: true
  portal?: boolean;        // Default: true
  multiple?: boolean;      // Default: true
  customRendering?: boolean; // Default: true
}
```

#### Default Values

```typescript
const defaultFeatures = {
  search: true,
  portal: true,
  multiple: true,
  customRendering: true
};

const defaultZIndex = {
  dropdown: 1001,
  portal: 1100
};
```

#### Event Handlers

The `onChange` handler receives different arguments based on the selection mode:

```typescript
// Single selection mode
onChange: (option: Option) => void;

// Multiple selection mode
onChange: (options: Option[]) => void;
```

#### Styling

The component uses Tailwind CSS classes by default. Key style points:

1. **Dropdown Container**
   - Base classes: `relative w-full`
   - Z-index control via `zIndex` prop

2. **Dropdown Button**
   - Base classes: `w-full px-4 py-2 text-left bg-white border rounded-lg`
   - States: `hover:bg-gray-50`, `focus:ring-2`

3. **Options Container**
   - Base classes: `absolute w-full mt-1 bg-white border rounded-lg shadow-lg`
   - Max height with scroll: `max-h-[250px] overflow-auto`

4. **Option Items**
   - Base classes: `px-4 py-2 cursor-pointer`
   - States: `hover:bg-gray-50`, `selected:bg-blue-50`

#### Portal Usage Notes

When using the portal feature:

1. The dropdown menu is rendered at the root level of the document
2. Position is automatically calculated based on the trigger button
3. Z-index values should be configured if used within modals or other floating elements
4. Window resize and scroll events are handled automatically

### Features

1. **Searchable Dropdown**
   - Enable search functionality to filter options
   ```tsx
   <Dropdown 
     options={options} 
     searchable={true}
     searchPlaceholder="Search options..." 
   />
   ```

2. **Portal Support**
   - Render dropdown outside parent container to avoid z-index issues
   ```tsx
   <Dropdown 
     options={options} 
     usePortal={true}
     zIndex={{
       dropdown: 1000,
       portal: 1100
     }}
   />
   ```

3. **Multiple Selection**
   - Select multiple options at once
   ```tsx
   <Dropdown 
     options={options} 
     multiple={true}
     selectedValues={['1', '2']} 
   />
   ```

4. **Custom Rendering**
   - Customize option appearance
   ```tsx
   <Dropdown 
     options={options} 
     renderOption={({ option, isSelected, multiple }) => (
       <div className="flex items-center gap-2">
         {option.icon}
         <span>{option.label}</span>
         {option.description && (
           <span className="text-gray-400">{option.description}</span>
         )}
       </div>
     )}
   />
   ```

### Feature Configuration

You can enable/disable specific features using the `features` prop:

```tsx
<Dropdown 
  options={options} 
  features={{
    search: true,      // Enable/disable search functionality
    portal: true,      // Enable/disable portal usage
    multiple: true,    // Enable/disable multiple selection
    customRendering: true  // Enable/disable custom rendering
  }}
/>
```

### 4. Testing & Deployment [  ]
- [x] Pembuatan test cases di Storybook
- [ ] Deploy Storybook ke hosting publik
- [ ] Deploy demo aplikasi
- [ ] Pengujian sebagai package dependency

## Instruksi Original:

### 1. Replicate the Component:
Watch the Loom video: https://www.loom.com/share/b3f99f864fbe4dd299b27a3f61a1471?sid=5f74de82-c3c7-4084-9e18-a55f05e66aba
- Recreate the dropdown component shown in the video, exactly as it looks.

### 2. Component Features:
- Searchable Dropdown: Implement a search feature within the dropdown
- Portal Support: Allow the dropdown to be used with or without a portal
- Single or Multiple Selection: Enable the dropdown to support both single and multiple option selections
- Customizable Option Rendering: Allow customization of how options are rendered
- Search Filtering: Ensure the search can filter a long list of options into a shorter list
- Toggle Features: Allow each feature (like search) to be turned on or off
- Z-Index Compatibility: Ensure the floating menu works with elements that have a z-index greater than 1000

### 3. Repository Setup:
- Dependency Setup: Configure the repository so it can be used as a dependency in `package.json` for a Create React App project
- Storybook: Set up Storybook to test the component independently
- Styling: Use Tailwind CSS or `className` for styling

### 4. 3rd Party Libraries:
Use libraries that are small in size and have minimal dependencies.

### 5. Documentation:
Add usage instructions to `README.md`

## Submission:
Please send the test results to CEO, Merav Knafo: merav@makyo.co
If you passed the test, we'll invite you to the next step in our process.

### Deliverables:
- GitHub URL - must be public
- Deployment URL
- Storybook URL - must be public

