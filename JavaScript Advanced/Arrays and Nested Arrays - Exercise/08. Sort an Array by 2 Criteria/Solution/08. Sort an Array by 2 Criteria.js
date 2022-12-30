function sortAnArrayBy2Criteria(array) {
    let res=array.sort((a, b) => {
      return  a.length - b.length || a.localeCompare(b);
    });
    console.log(res.join(`\n`));
}

sortAnArrayBy2Criteria(['test', 'Deny','omen', 'Default'])