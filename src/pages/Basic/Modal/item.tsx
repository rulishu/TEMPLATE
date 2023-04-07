
export const editFormData = () => {

  return [
    {
      label: "实际申请人",
      key: "user",
      widget: "select",
      required: true,
      initialValue: '',
      span: "24",
      option: [
        { value: 1, label: '苹果' },
        { value: 2, label: '西瓜' },
        { value: 3, label: '香蕉' },
        { value: 4, label: '东北大冻梨' }
      ],
    },
    {
      label: "入职日期",
      key: "date",
      widget: "dateInput",
      initialValue: '',
      span: "24",
      rules: [
        { required: true, message: '请输入' },
      ],
      widgetProps: {
        format: 'YYYY-MM-DD'
      },
    },
    {
      label: "职位",
      key: "position",
      widget: "input",
      initialValue: '',
      span: "24",
      rules: [
        { required: true, message: '请输入职位' },
      ],
    },
    {
      label: "试用期内对工作的总结",
      key: "summary",
      widget: "textarea",
      initialValue: '',
      span: "24",
      required: true,
      rules: [
        { required: true, message: '请输入' },
      ],
    },
  ]
} 