export interface ITable {
  

    getData(): void;

    handleSort(event): void;

    handleFilter(event): void;

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
    handleAction(event): void;

}