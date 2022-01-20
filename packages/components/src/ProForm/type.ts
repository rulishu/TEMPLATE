import { ButtonProps } from 'uiw';
import {  commonWidgetsList } from './widgets'

export type Fields = {
  [key: string]: any;
};

export interface BtnProps extends ButtonProps {
  label?: string;
  btnType: 'submit' | 'reset' | 'other';
  show?: boolean;
}

export interface FormItemsOptionsProps {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface FormItemsProps {
  /** 表单元素标题 */
  label?: string;
  /** 表单元素字段名称 */
  key: string;
  /** 表单元素类型 */
  widget: typeof commonWidgetsList;
  /** 表单元素值，可以是默认值 */
  initialValue?: any | any[];
  /** 数据化选项内容, type为 radio、checkbox、select 生效 */
  option?: FormItemsOptionsProps[];
  widgetProps?: any;
  /** 是否显示 */
  hide?: boolean;
  /** 可以通过指定 24 列中每列的宽度来创建基本网格系统 默认8 */
  span?: string;
  /** 是否必填 */
  required?:boolean
}

export interface ProFormProps {
  formDatas?: FormItemsProps[];
  onSubmit?: (initial: Record<string, any>, current: Record<string, any>) => void;
  onChange?: (initial: Record<string, any>, current: Record<string, any>) => void;
  btns?: BtnProps[]
  btnsContainer?:React.CSSProperties;
  title?: any;
  formType?: 'collapse' | 'card';
}