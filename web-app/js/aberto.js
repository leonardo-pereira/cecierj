/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $('#tabela').DataTable({        
        
        order: [[ 3, "desc" ]], // ordena a quarta coluna descrescente,
        pagingType: "full_numbers",
        "language": {
            lengthMenu: "_MENU_",
            zeroRecords: "Nada encontrado",
            info: "Visualizando página _PAGE_ de _PAGES_",
            infoEmpty: "Nenhum resultado disponível",
            infoFiltered: "(filtered from _MAX_ total records)",
            search: "Pesquisar",
            processing: "Processando ...",
            paginate: {
                first:      "Primeiro",
                previous:   "Anterior",
                next:       "Próximo",
                last:       "Último"
            }
        }
          
         
    });
});      