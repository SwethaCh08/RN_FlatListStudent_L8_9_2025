 type dataType = {
    id: string; //refer to the unique identifier
    title:string; //text we will show in the list
  }

  //Using alll caps because data array will not change 
  //during its use
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Forth Item"},
  ];

  //when youa re exporting mroe than one item you don't use the word default and 
  //put all items you are exporting in {}
  export {dataType, DATA}