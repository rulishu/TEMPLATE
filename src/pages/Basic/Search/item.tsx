
export const formSearch = () => [
  {
    label: 'input',
    key: 'input',
    widget: 'input',
    initialValue: '',
    widgetProps: {},
  },
  {
    label: 'radio',
    widget: 'radio',
    key: 'radio',
    widgetProps: {
      disabled: false
    },
    option: [
      { label: '男', value: 'man' },
      { label: '女', value: 'girl' }
    ],
  },
]