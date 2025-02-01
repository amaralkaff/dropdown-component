import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './index';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full p-4 flex justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const WithSearch: Story = {
  args: {
    options,
    onChange: (value) => console.log('Selected:', value),
    searchable: true,
    searchPlaceholder: 'Search...',
  },
};

export const WithPortal: Story = {
  args: {
    options,
    onChange: (value) => console.log('Selected:', value),
    usePortal: true,
    searchable: true,
  },
};

export const Multiple: Story = {
  args: {
    options,
    onChange: (value) => console.log('Selected:', value),
    multiple: true,
    searchable: true,
    placeholder: 'Select multiple options',
  },
};

export const WithToggledFeatures: Story = {
  args: {
    options,
    onChange: (value) => console.log('Selected:', value),
    features: {
      search: true,
      portal: false,
      multiple: false,
      customRendering: true
    },
    searchable: true,
    placeholder: 'Select with limited features',
  },
};

export const WithCustomZIndex: Story = {
  args: {
    options,
    onChange: (value) => console.log('Selected:', value),
    usePortal: true,
    zIndex: {
      dropdown: 1001,
      portal: 1100
    },
    placeholder: 'Dropdown with custom z-index',
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative' }}>
        <div 
          style={{ 
            position: 'absolute',
            zIndex: 1000,
            padding: '20px',
            background: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '20px',
            width: '100%'
          }}
        >
          Element with z-index 1000
        </div>
        <div 
          style={{ 
            position: 'absolute',
            zIndex: 1500,
            padding: '20px',
            background: '#e0e0e0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '20px',
            left: '50%',
            width: '50%'
          }}
        >
          Element with z-index 1500
        </div>
        <div style={{ marginTop: '120px', width: '300px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

