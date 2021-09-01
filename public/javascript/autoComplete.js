//$('.basicAutoComplete').autoComplete();

// $('.basicAutoComplete').autoComplete({
//     resolverSettings: {
//         url: "../../baseball-seed-2 (1).json"
//     }
// });
$(document).ready(function(){
 
    $('#demo-auto').autocomplete({
 
      data: {
 
        "jQuery": null,
 
        "JavaScript": 'https://www.jquery-az.com/wp-content/uploads/2017/12/favicon-32x32.png',
 
        "CSS": null,
 
        "HTML": null,
 
        "Bootstrap": 'https://www.jquery-az.com/wp-content/uploads/2017/12/favicon-32x32.png',
 
        "Java": null,
 
        "Python": null,
 
      },
 
    });
 
  });