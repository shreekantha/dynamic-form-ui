export interface TableColumn {
  name: string;
  dataKey?: string;
  position?: 'right' | 'left';
  isSortable?: boolean;
  isActionable?:boolean;
  icon?:string,
  action?:string
  
}
