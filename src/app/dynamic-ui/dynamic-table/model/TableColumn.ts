export interface TableColumn {
  label: string;
  icon?:string,
  action?:string
  color?:string,
  key?: string;
  position?: 'right' | 'left';
  isImage?:boolean;
  isSortable?: boolean;
  isActionable?:boolean;

  
}
