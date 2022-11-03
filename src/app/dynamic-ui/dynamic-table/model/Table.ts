import { ViewChild } from "@angular/core";
import { ITable } from "./ITable";
import { TableColumn } from "./TableColumn";

export abstract class Table{
    
    constructor(){

    }
    tableColumns: TableColumn[] = []
    
      tableData: any[] = []
      total: number;
      pazinationSizes: number[] = [5, 10, 25, 50, 100]
      defaultPazeSize = 5;

   abstract   getData(page:any): void;

   abstract  handleSort(event): void;
  
   abstract   handleFilter(event): void;
  
      /**handleAction Method will be used for View/Edit/Delete and any other actions with the help of switch case
       * <br>
       * 
       * switch(event.action){
       *  case 'view':
       *      //Todo
       *      break;
       *  case 'edit':
       *      //Todo
       *      break;
       *  case 'delete':
       *      //Todo
       *      break;
       *  
       * }
       * 
       */
    //    abstract  handleAction(event): void;

       handleAction(event: any): void {
        switch (event.action) {
          case 'view':
          console.log("view clicked");
          this.handleView(event);
            break;
          case 'edit':  
            console.log("edit clicked");
            this.handleEdit(event); 
            break;
          case 'delete':
            console.log("delete clicked");
            this.handleDelete(event);
            break;
          case 'paginate':
            console.log("pagination clicked");  
            this.handlePaginate(event); 
            break;
          default:
            break;
        }
        // console.log("action:",event);
      }

      handleView(event:any){}
      handleEdit(event:any){}
      handleDelete(event:any){}
      handlePaginate(event:any){}

}
